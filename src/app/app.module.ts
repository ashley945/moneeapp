import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ko_KR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ko from '@angular/common/locales/ko';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AppRouterModule } from './app.router.module';
import { NgZorroAntdModule } from './ng-zorro-antd.module';

registerLocaleData(ko);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRouterModule,
    NgZorroAntdModule,
    HttpClientJsonpModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: ko_KR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
