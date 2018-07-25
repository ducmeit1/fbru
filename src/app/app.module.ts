import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { BlogComponent } from './blog/blog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DishComponent } from './dish/dish.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    BlogComponent,
    NotFoundComponent,
    HomeComponent,
    NavbarComponent,
    AboutusComponent,
    DishComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'search/:keyword', component: SearchResultComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'dish/:id/:name', component: DishComponent},
      {path: 'aboutus', component: AboutusComponent},
      {path: '**', component: NotFoundComponent}
    ]),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
