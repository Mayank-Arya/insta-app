import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { DisplayPostComponent } from './display-post/display-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    DisplayPostComponent,
    DeletePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
