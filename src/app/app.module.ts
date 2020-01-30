import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModaldescComponent } from './shared/modaldesc/modaldesc.component';
import { ProductdescComponent } from './views/productdesc/productdesc.component';
import { ProductlistComponent } from './views/productlist/productlist.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    AccountSettingsComponent,
    ApparelComponent,
    CheckOutComponent,
    CreateAccountComponent,
    EditProfileComponent,
    HomeComponent,
    ObjectComponent,
    ProfileComponent,
    SignInComponent,
    SignOutComponent,
    ToolsComponent,
    ModaldescComponent,
    ProductdescComponent,
    ProductlistComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
