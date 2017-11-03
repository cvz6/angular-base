import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asy-load-js',
  templateUrl: './asy-load-js.component.html',
  styleUrls: ['./asy-load-js.component.scss']
})
export class AsyLoadJsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    scroll(0, 0);
    this.test1(); // dom追究法
    this.test2(); // 异步加载方式
  }

  private test1() {
    const str = `
    <script src="assets/js/load-js-test.js"></script>
    `;
    $('#test').html(str);
  }

  private test2() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'assets/js/load-js-test.js';
    const x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  }
}
