import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingService } from './core/services/loading.service';
import { HttpLoadingInterceptor } from './core/interceptors/http-loading.interceptor';
import { SharedModule } from './shared/shared.module';
import { ErrorMessagesService as ErrorMessagesService } from './shared/services/error-messages-service.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true
    },
    ErrorMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
