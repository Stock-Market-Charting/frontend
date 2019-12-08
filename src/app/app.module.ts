import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
/** ng-bootstrap */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainRoutingModule } from './components/main/main-routing.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AlertComponent } from './components/alert/alert.component';
import { LandingComponent } from './components/landing/landing.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { HeaderModule } from './components/header/header.module';
import { AccountVerificationComponent } from './components/account-verification/account-verification.component';
import { StockExchangeComponent } from './components/stock-exchange/stock-exchange.component';
import { StockExchangeDetailsComponent } from './components/stock-exchange/stock-exchange-details/stock-exchange-details.component';
import { StockExchangeModule } from './components//stock-exchange/stock-exchange.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    AlertComponent,
    UserProfileComponent,
    PasswordChangeComponent,
    AccountVerificationComponent,
    StockExchangeComponent,
    StockExchangeDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    MainRoutingModule,
    HeaderModule,
    StockExchangeModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [ AppComponent ],
  entryComponents: [AlertComponent]
})
export class AppModule { }
