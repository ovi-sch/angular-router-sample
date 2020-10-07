import { Component, OnInit } from '@angular/core';
import {HackerNewsService} from '../hackernews.service';
import {ActivatedRoute} from '@angular/router';
import {NewsItem} from '../news-item';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  newsItemDetails: NewsItem;

  constructor(
    private route: ActivatedRoute,
    private hackerNewsService: HackerNewsService
  ) { }

  getNewsItemDetails(): void {
    const newsId = this.route.snapshot.paramMap.get('id');
    this.hackerNewsService.fetchNewsItem(newsId).subscribe(item => this.newsItemDetails = item);
  }

  ngOnInit(): void {
    this.getNewsItemDetails();
  }

}
