import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import { OriginMonacoComponent } from './origin-monaco/origin-monaco.component';
registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    OriginMonacoComponent
  ],
  imports: [
    BrowserModule,
    NzCodeEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
