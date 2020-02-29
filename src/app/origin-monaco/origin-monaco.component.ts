import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as monaco from 'monaco-editor';
@Component({
  selector: 'app-origin-monaco',
  template: `
      <div id="origin-monaco"></div>
  `,
  styles: [
    `
      #origin-monaco{
          height: 200px;
      }
    `
  ]
})
export class OriginMonacoComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    monaco.editor.create(document.getElementById('origin-monaco'), {
      value: `console.log("hello,world")`,
      language: 'javascript'
    });
  }

}
