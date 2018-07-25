import { element } from 'protractor';
import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [NgbTypeaheadConfig]
})
export class AppComponent implements OnInit{
    constructor(private http: Http, private config: NgbTypeaheadConfig) {
      config.showHint = true;
    }

    keyword: string = "";
    keywordArrays: string[] = new Array();

   ngOnInit(): void {
      this.http.get('http://fbruwebadmin20180726030210.azurewebsites.net/api/keywords/')
      .toPromise()
      .then(response => response.json())
      .then(response => {
         response.forEach(element => {
            this.keywordArrays.push(element.name);
         });
         console.log(this.keywordArrays);
      })
      .catch(error => console.log(error));
   }


    search = (text$: Observable<string>) => 
      text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? [] 
      : this.keywordArrays.filter(k => k.toLowerCase().startsWith(term.toLowerCase())).splice(0, 10));
}
