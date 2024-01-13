import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingService } from 'src/app/core/services/loading.service';
import { HttpLoadingInterceptor } from 'src/app/core/interceptors/http-loading.interceptor';


@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true
    }
  ],
})
export class PrivateModule { }
