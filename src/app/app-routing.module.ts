import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreathingComponent } from './bottomheader/relax/breathing/breathing.component';
import { RelaxComponent } from './bottomheader/relax/relax/relax.component';
import { SettingsComponent } from './bottomheader/settings/settings/settings.component';
import { FooterComponent } from './footer/footer.component';
import { FormsignupComponent } from './formsignup/formsignup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SongsComponent } from './songs/songs.component';
import { StartpageComponent } from './startpage/startpage.component';

const routes: Routes = [
  {path:'signup', component:SignupComponent},
  {path:'',redirectTo:'signup',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'formsignup',component:FormsignupComponent},
  {path:'start',component:StartpageComponent},
  {path:'home',component:HomeComponent},
  {path:'footer',component:FooterComponent},
  {path:'song',component:SongsComponent},
  {path:'relax',component:RelaxComponent},
  {path:'settings',component:SettingsComponent},
  {path:'breathing',component:BreathingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
