import {
	UserListComponent
} from './shared/user-list/user-list.component';
import {
	PostComponent
} from './shared/post/post.component';
import {
	HeaderComponent
} from './core/header/header.component';
import {
	CoreModule
} from './core/core.module';
import {
	BrowserModule
} from '@angular/platform-browser';
import {
	NgModule, ErrorHandler
} from '@angular/core';
import {
	HttpClientModule
} from '@angular/common/http';

import {
	AppComponent
} from './app.component';
import {
	RouterModule
} from '@angular/router';
import {
	UserComponent
} from './shared/user/user.component';
import {
	CommentComponent
} from './shared/comment/comment.component';
import { ErrorHandlerService } from './services/errorHandler.service';



@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		UserComponent,
		UserListComponent,
		PostComponent,
		CommentComponent
	],
	imports: [
		BrowserModule,
		CoreModule,
		HttpClientModule,
		RouterModule.forRoot([{
				path: 'user/:id',
				component: UserComponent
			},
			{
				path: 'users',
				component: UserListComponent
			},
			{
				path: '',
				component: PostComponent
			}
		])
	],
	providers: [{
		provide: ErrorHandler,
		useClass: ErrorHandlerService
	}],
	bootstrap: [AppComponent]
})

export class AppModule {}
