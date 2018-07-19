import { ErrorHandler, Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

constructor() {  }


    handleError(error: any): any {
        // const apiService = this.injector.get(ApiService);
        const message = error.message ? error.message : error.toString();

        // Call your method from your api service here, to log the detail of the error
		console.log('Path: ', window.location.pathname, '\n Message: ',  message,'\n TraceBack: ', error.stack,
		 '\n Agent: ', window.navigator.userAgent);

        if (isDevMode()) {
            console.error(error);
        }
  }
}
