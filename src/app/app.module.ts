import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './HeaderComponent/header.component';
import { FooterComponent } from './FooterComponent/footer.component';
import { LeftComponent } from './LeftComponent/left.component';
import { RightComponent } from './RightComponent/right.component';
import { CenterComponent } from './centerComponent/center.component';

@NgModule({
  declarations: [
    HeaderComponent,FooterComponent,LeftComponent,RightComponent,CenterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HeaderComponent,FooterComponent,LeftComponent,RightComponent,CenterComponent]
})
export class AppModule { }
