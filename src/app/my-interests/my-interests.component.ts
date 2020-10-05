import { Component, OnInit } from '@angular/core';
import {HackerNewsService} from '../hackernews.service';
import {NewsItem} from '../news-item';


@Component({
  selector: 'app-my-interests',
  templateUrl: './my-interests.component.html',
  styleUrls: ['./my-interests.component.css']
})
export class MyInterestsComponent implements OnInit {
  newsItems: NewsItem[] = [];
  constructor(private hackerNewsService: HackerNewsService) {}

  fetchNewsItem(ids: String[]): void {
    for (let i = 0; i <= 10; i++) {
      this.hackerNewsService.fetchNewsItem(ids[i]).subscribe(item => this.newsItems.push(item));
    }
  }

  fetchNews(): void {
    this.hackerNewsService.fetchNews().subscribe(id => this.fetchNewsItem(id));
  }

  ngOnInit(): void {
    this.fetchNews();
  }

}
