import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // providers: [RandomOrg],
})
export class HomeComponent implements OnInit {
  // random = new RandomOrg({ apiKey: 'be25a646-467a-44ed-877f-dcf67fc5a004' });

  constructor(private randomService: RandomService) {}

  enterPress() {
    console.log('oi');
    this.randomService.sendPostRequest().subscribe((res) => {
      // console.log(res['result']['random']['data'][0]);
      console.log(res['result']['random']['data'][0]);
    });
  }

  ngOnInit(): void {}
}
