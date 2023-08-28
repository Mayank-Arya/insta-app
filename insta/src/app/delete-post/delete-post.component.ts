import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent {
  
deletePost(delete_post:any) {
  const index = this.posts.indexOf(delete_post);
  if(index !== -1){
    this.posts.splice(index,1)
  }
}
}
