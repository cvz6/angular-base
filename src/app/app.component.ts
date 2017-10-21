import {Component} from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import {appApis} from './apis';
import {UUID} from 'angular2-uuid';
import {AppSettings} from './app-settings';
import {ROOT_URL} from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }

  ngOnInit() {

  }

}
