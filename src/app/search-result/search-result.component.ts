import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.css"]
})
export class SearchResultComponent implements OnInit {
  keyword: string;
  dishes = null;

  constructor(private route: ActivatedRoute, private http: Http) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.keyword = params.get("keyword");
        this.http.get("http://fbruwebadmin20180726030210.azurewebsites.net/api/keyword/search/" + this.keyword)
        .toPromise()
        .then(response => response.json())
        .then(response => {
            this.dishes = response;
        })
        .catch(error => console.log(error));
    });
  }
}
