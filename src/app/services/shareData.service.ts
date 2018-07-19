import { User } from './../shared/objects';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ShareDataService {

	constructor() { }

	users: User[] = []

	setUser(user: User) {
		this.users[user.id] = user
	}

	getUser(id: number): User {
		return this.users[id]
	}

}
