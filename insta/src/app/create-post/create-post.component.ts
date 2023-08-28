import { AppComponent } from './../app.component';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
newPost = {username: '', desc:''};

constructor(private appComponent: AppComponent){}

createPost(){
  this.posts.push({...this.newPost})
  this.newPost = {username:'', desc:''}
}
}
