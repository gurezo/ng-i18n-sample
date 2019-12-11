import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigatorComponent  } from './navigator/navigator.component';

const routes: Routes = [
  { path: '', redirectTo: 'en', pathMatch: 'full' },
  {
    path: ':lang', component: NavigatorComponent,
    // resolve: { content: ContentResolver },
    // data: { source: "navigator.json" },
    // children: [
    //   { path: '', redirectTo: 'home', pathMatch: 'full' },

    //   {
    //     path: 'home',
    //     component: HomeComponent,
    //     resolve: { content: ContentResolver },
    //     data: { source: "home.json" }
    //   },

    //   {
    //     path: 'about',
    //     component: AboutComponent,
    //     resolve: { content: ContentResolver },
    //     data: { source: "about.json" }
    //   },

    //   {
    //     path: 'not-found',
    //     component: NotFoundComponent,
    //     resolve: { content: ContentResolver },
    //     data: { source: "not-found.json" }
    //   },
    //   { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
    // ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
