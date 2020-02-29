import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-basic',
  template: `
      <nz-code-editor #basic
              class="editor" [ngModel]="code" [nzEditorOption]="{ language: 'typescript' }"></nz-code-editor>
  `,
  styles: [
    `
      .editor {
        height: 200px;
      }
    `
  ]
})
export class BasicComponent implements AfterViewInit {
  code = `import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor'

@Component({})
export class SomeComponent {}`;
  @ViewChild('basic', {static: false}) basicEditor: any;

  ngAfterViewInit(): void {
    this.basicEditor.setup({ language: 'typescript' });
  }
}
