import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes.component'
import { HeroDetail } from './components/hero-detail.component'
import { Message } from './components/message.component'
import { Dashboard } from './components/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetail,
    Message,
    Dashboard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
