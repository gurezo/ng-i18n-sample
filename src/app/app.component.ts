import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, delay, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng-i18n-sample';

  private destroy = new Subject<void>();
  private sub: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.sub = timer(2000).pipe(
        switchMap(() => this.http.get('/assets/test1.txt')),
        tap(() => console.log()),
        delay(3000),
        takeUntil(this.destroy)
      )
      .subscribe(res => {
        console.log(res);
      });
  }

  ngOnDestroy() {
    console.log(`before ${this.sub.closed}`);
    this.destroy.complete();
    console.log(`after ${this.sub.closed}`);
  }
}
