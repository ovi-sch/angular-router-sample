import {Component, OnInit} from '@angular/core';
import {StoreService} from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  totalClicks: number;
  constructor(public storeService: StoreService) {}
  title = 'angular-router-sample';

  ngOnInit(): void {
    this.storeService.totalClicks$.subscribe(clicks => this.totalClicks = clicks);
  }
}
