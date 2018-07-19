import { Router } from '@angular/router';
import { User } from './../objects';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ShareDataService } from '../../services/shareData.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
	constructor(public req: PostService, private share: ShareDataService) { }

	users$: Observable<User[]>


	ngOnInit() {
		this.users$ = this.req.getUsers()
	}



}
