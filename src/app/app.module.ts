import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IonicModule } from '@ionic/angular';
import { TitlesComponent } from './titles/titles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    NavBarComponent,
    TitlesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
