import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = "http://localhost:8080";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

getFilmes() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/filmes').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

getFilme(id) {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/filmes/'+ id).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

deleteFilme(id) {
  return new Promise(resolve => {
    this.http.delete(this.apiUrl+'/filmes/'+ id).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

}
