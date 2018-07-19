import { ShareDataService } from './../../services/shareData.service';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post, User, Comment, PostToShow } from '../../shared/objects';
import { map, catchError, filter, take } from 'rxjs/operators';
import { ObservableLike, Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

	constructor(public req: PostService, private share: ShareDataService) { }

	showComments: boolean[] = []

	nOfPostsToShow = 10
	nOfPostsMax = 101

	posts: Observable<Post[]>;
	users: User[] = [];
	// comments: Comment[] = [];

	comments$: Observable<Comment[]>

	_getUser(id: number): string {
		return this.users[id - 1] !== undefined ? this.users[id - 1]['name'] : `${id - 1}` ;
	}

	// getComments(id: number): Comment[] {

	// 	return this.comments.filter( comment => {
	// 		console.log(+comment.postId === id, 'da')

	// 		return +comment.postId === id
	// 	})
	// }



	ngOnInit() {

		this.posts = this.req.getPosts()

		console.log(this.posts)
		for (let i = 0; i < this.nOfPostsMax; i++) {
			this.showComments.push(false)
		}

		// this.comments$ = this.req.getComments()
		// const sub = this.comments$.pipe(
		// 	map( comms => this.comments = comms)
		// ).subscribe(
		// 	_ => {},
		// 	error => {
		// 		sub.unsubscribe();
		// 		throw Error('Failed to ? : ' + error);
		// 	},
		// 	() => sub.unsubscribe()
		// )


		this.req.getUsers().subscribe(
			user => this.users = user
		);

		this.share.users = this.users


	}

	public expand(i: number) {
		this.showComments[i] = !this.showComments[i]
	}

	loadMore() {
		this.nOfPostsToShow += 10
	}


}
