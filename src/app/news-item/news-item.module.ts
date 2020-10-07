import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsItemRoutingModule } from './news-item-routing.module';
import { NewsItemComponent } from './news-item.component';
import { MatCardModule } from '@angular/material/card';
import {HackerNewsService} from '../hackernews.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [NewsItemComponent],
  imports: [
    CommonModule,
    NewsItemRoutingModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [HackerNewsService]
})
export class NewsItemModule { }
