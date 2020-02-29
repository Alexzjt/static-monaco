import { Component } from '@angular/core';
import {NzConfigService} from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'static-monaco';
  constructor(private nzConfigService: NzConfigService) {
    this.nzConfigService.set('codeEditor', {useStaticLoading: true});
  }
}
