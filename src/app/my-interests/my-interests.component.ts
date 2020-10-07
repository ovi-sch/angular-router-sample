import {Component, OnDestroy, OnInit} from '@angular/core';
import {HackerNewsService} from '../hackernews.service';
import {NewsItem} from '../news-item';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-my-interests',
  templateUrl: './my-interests.component.html',
  styleUrls: ['./my-interests.component.css']
})
export class MyInterestsComponent implements OnInit, OnDestroy{
  newsItems: NewsItem[] = [];

  constructor(
    private hackerNewsService: HackerNewsService,
    private storeService: StoreService,
  ) {}

  storeServiceAdd() {
    this.storeService.add();
  }

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

  ngOnDestroy(): void {
  }
}
