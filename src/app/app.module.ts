import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
