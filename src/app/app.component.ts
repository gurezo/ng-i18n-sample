import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-i18n-sample';

  private destroy = new Subject<void>();
  private sub: Subscription;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
  }
}
