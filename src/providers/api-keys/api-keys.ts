import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiKeysProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiKeysProvider {

  public baseURL = 'https://api.themoviedb.org/3/';
  public apikey  = 'api_key=97277ffbe1766241c54b16cb03f58f62';
  
  constructor(public http: HttpClient) {
    console.log('Hello ApiKeysProvider Provider');
  }

  getMoiveNowplaying(){
    const URL = this.baseURL + 'movie/now_playing?' + this.apikey;
    return this.http.get(URL);
  }

  getMoivePopular(){
    const URL = this.baseURL + 'movie/popular?' + this.apikey;
    return this.http.get(URL);
  }
  getMoiveToprated(){
    const URL = this.baseURL + 'movie/top_rated?' + this.apikey;
    return this.http.get(URL);
  }
  getMoiveUpcoming(){
    const URL = this.baseURL + 'movie/upcoming?' + this.apikey;
    return this.http.get(URL);
  }

  searchMovie(query){
    const url = this.baseURL + 'search/movie?query=' + query +'&' + this.apikey;
    return this.http.get(url);
  }

  getMovieDetails(movieID){
    const url = this.baseURL + 'movie/' + movieID + '?' + this.apikey + '&language=en-US';
    return this.http.get(url);
  }
  getVideos(movieID){
    const url = this.baseURL + 'movie/' + movieID + '/videos?' + this.apikey + '&language=en-US';
    return this.http.get(url);
  }
}
