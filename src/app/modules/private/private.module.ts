import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingService } from 'src/app/core/services/loading.service';
import { HttpLoadingInterceptor } from 'src/app/core/interceptors/http-loading.interceptor';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    HttpClientModule,
    SharedModule
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
