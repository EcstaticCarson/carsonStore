import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { ApparelComponent } from './pages/apparel/apparel.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { HomeComponent } from './pages/home/home.component';
import { ObjectComponent } from './pages/object/object.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignOutComponent } from './pages/sign-out/sign-out.component';
import { ToolsComponent } from './pages/tools/tools.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'apparel', component: ApparelComponent},
  {path: 'object', component: ObjectComponent},
  {path: 'tools', component: ToolsComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'accountSettings', component: AccountSettingsComponent},
  {path: 'checkOut', component: CheckOutComponent},
  {path: 'createAccount', component: CreateAccountComponent},
  {path: 'editProfile', component: EditProfileComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'signOut', component: SignOutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// This set is to go UNDER the "import" stuff already listed:
//
// import { HomeComponent } from './pages/home/home.component';
// import { AboutUsComponent } from './pages/about-us/about-us.component';
// import { FaqsComponent } from './pages/faqs/faqs.component';
//
// below is how to route to new pages. Must go into "const routes: Routes = [];"
// {path: 'home', component: HomeComponent},
//   {path: 'about-us', component: AboutUsComponent},
//   {path: 'faqs', component: FaqsComponent},
//   {path: '', redirectTo: '/home',
//     pathMatch: 'full'},
//     {path: '**', component: HomeComponent}
