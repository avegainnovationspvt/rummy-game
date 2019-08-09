import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GamemidComponent } from './gamemid/gamemid.component';
import { HomeComponent } from './home/home.component';
import { ForpasComponent } from './forpas/forpas.component';
import { LoginComponent } from './login/login.component';
import { MiddlepartComponent } from './middlepart/middlepart.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'middlepart', component: MiddlepartComponent},
  {path:'otp', component:OtpComponent},
  { path: 'login', component: LoginComponent},
  { path: 'game', component: GamemidComponent},
  { path: 'forgot-password', component: ForpasComponent},
  { path: 'lobby', component: MiddlepartComponent, canActivate: [AuthGuard]}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
  