import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css',]
})
export class DishComponent implements OnInit {
  dish = null;

  constructor(private route: ActivatedRoute, private http: Http) {
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get("id");
      this.http.get("http://fbruwebadmin20180726030210.azurewebsites.net/api/dishes/" + id)
      .toPromise()
      .then(response => response.json())
      .then(response => {
          this.dish = response;
      })
      .catch(error => console.log(error));
  });
  }

}
