import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from './material/material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsignupComponent } from './formsignup/formsignup.component';
import { StartpageComponent } from './startpage/startpage.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider,FacebookLoginProvider} from '@abacritt/angularx-social-login';
import { FooterComponent } from './footer/footer.component';
import { BottomheaderComponent } from './bottomheader/bottomheader.component';
import { SongsComponent } from './songs/songs.component';
import { RelaxComponent } from './bottomheader/relax/relax/relax.component';
import { SettingsComponent } from './bottomheader/settings/settings/settings.component';

import { BreathingComponent } from './bottomheader/relax/breathing/breathing.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    FormsignupComponent,
    StartpageComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BottomheaderComponent,
    SongsComponent,
    RelaxComponent,
    SettingsComponent,
    BreathingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '499315673962-tm0vmm7ce2u51pt3vb0a0o88ab9v4c1n.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('clientId')
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
