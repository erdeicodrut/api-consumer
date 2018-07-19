import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, User, Comment } from '../shared/objects';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class PostService {
	constructor(private http: HttpClient) {}

	getPosts(): Observable<Post[]> {
		return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
	}

	getUsers(): Observable<User[]> {
		return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
	}

	getComments$(i: number): Observable<Comment[]> {
		return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${i}/comments`);
	}

	getPostsFrom(id: number): Observable<Post[]> {
		return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?userId=' + id);
	}
}
