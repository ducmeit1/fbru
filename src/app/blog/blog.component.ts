import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs = null;

  constructor(private http:Http) { }

  ngOnInit() {
      this.http.get("http://fbruwebadmin20180726030210.azurewebsites.net/api/blogs/")
      .toPromise()
      .then(response => response.json())
      .then(response => {
         this.blogs = response;
      })
      .catch(error => console.log(error));
  }
}
