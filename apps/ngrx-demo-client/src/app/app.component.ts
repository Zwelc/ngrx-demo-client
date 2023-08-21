import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@ngrx-demo-client/api-interfaces';

@Component({
  selector: 'ngrx-demo-client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
