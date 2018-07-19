import { PostService } from './../../services/post.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareDataService } from '../../services/shareData.service';
import { User } from '../objects';
import { empty, of, Observable } from 'rxjs';
import { map, switchMap, filter } from 'rxjs/operators';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

	constructor(private route: ActivatedRoute, private req: PostService) {}

	userId: number

	user$: Observable<User[]>
	// user: User

	ngOnInit() {
		this.user$ = this.route.params.pipe(
			switchMap(
				param => {
					if (+param['id'] > 10) {
						return empty()
					} else {
						return of(+param['id'])
					}
				}
			),
			switchMap(
				id => {
					return this.req.getUsers().pipe(
						map(
							users => users.filter( (user: User) => user.id === id)
						)
					)
				}
			)
		)

		// this.user$.subscribe(
		// 	user => this.user = user[0]
		// )

	}


}
