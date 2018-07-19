export interface Comment {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

export class Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}


export class PostToShow extends Post {
	constructor(post: Post,
		public comments: Comment[]) {
		super();
		this.userId = post.userId;
		this.body = post.body;
		this.title = post.title;
		this.title = post.title;
	}
}

export interface Geo {
	lat: string;
	lng: string;
}

export interface Addres {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}

export interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Addres;
	phone: string;
	website: string;
	company: Company;
}


export interface Photo {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}
