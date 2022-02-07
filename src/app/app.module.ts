import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { AboutComponent } from './about/about.component';
import { ContactsUsComponent } from './contacts-us/contacts-us.component';
=======
import { AcountComponent } from './acount/acount.component';
>>>>>>> a7dfe84 (signin&up)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
<<<<<<< HEAD
    WomenComponent,
    KidsComponent,
    AboutComponent,
    ContactsUsComponent
=======
    AcountComponent
>>>>>>> a7dfe84 (signin&up)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
