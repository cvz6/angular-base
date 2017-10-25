import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-zorro',
  templateUrl: './ng-zorro.component.html',
  styleUrls: ['./ng-zorro.component.scss']
})
export class NgZorroComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    $('page-wrapper').css('background-color', '#FCF8E3');  // 设置iframe 集成页面的背景色
  }
}
