import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {NewsItem} from './news-item';


@Injectable()
export class HackerNewsService {
  constructor(private http: HttpClient) {}

  private rootUrl = 'https://hacker-news.firebaseio.com/v0';
  private newStoriesUrl = '/newstories';
  private itemInfoUrl = '/item/';

  fetchNews(): Observable<String[]> {
    return this.http.get<String[]>(this.rootUrl + this.newStoriesUrl + '.json');
  }

  fetchNewsItem(id: String): Observable<NewsItem> {
    return this.http.get<NewsItem>(this.rootUrl + this.itemInfoUrl + id + '.json');
  }
}
