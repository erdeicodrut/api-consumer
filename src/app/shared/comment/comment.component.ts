import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../objects'
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

	constructor(public req: PostService) { }

	list: Observable<Comment[]>

	@Input() toShow: boolean
	@Input() postId: number

	ngOnInit() {
		this.list = this.req.getComments$(this.postId)
	}

}
