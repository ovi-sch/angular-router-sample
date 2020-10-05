import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { MyInterestsRoutingModule } from './my-interests-routing.module';
import { MyInterestsComponent } from './my-interests.component';
import { MatCardModule } from '@angular/material/card';
import {HackerNewsService} from '../hackernews.service';


@NgModule({
  declarations: [MyInterestsComponent],
  imports: [
    CommonModule,
    MyInterestsRoutingModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [HackerNewsService]
})
export class MyInterestsModule { }
