import { Injectable, EventEmitter } from '@angular/core';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
    listFromFirebase: EventEmitter<Post[]> = new EventEmitter();
    listOfPosts: Post[] = [];

      getPosts(){
        return this.listOfPosts;
      }

      deletePost(index: number) {
        this.listOfPosts.splice(index, 1);
      }

      addPost(post: Post){
        this.listOfPosts.push(post);
      }

      updatePost(index: number, post: Post){
        this.listOfPosts[index] = post;
      }

      getPost(index: number) {
          return this.listOfPosts[index];
      }

      likePost(index: number) {
        this.listOfPosts[index].numberOfLikes += 1;
      }

      setPosts(listOfPosts: Post[]) {
        this.listOfPosts = listOfPosts;
        this.listFromFirebase.emit(listOfPosts);
      }
}