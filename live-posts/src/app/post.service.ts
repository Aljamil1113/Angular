import { Injectable } from '@angular/core';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
    listOfPosts: Post[] = [
        new Post(
          ' Nature',
       'Ural mountains is a long and wide range mountains on Russsia.',
       'https://peakvisor.com/img/news/Ural-mountains-South-Ural-Ridge.jpg',
        'test@test.com',
        new Date(),
        2
        ),
        new Post(
          'Nature',
       'Yakutsk: The Coldest City in the World',
       'https://lh3.googleusercontent.com/-i5yQ0exbR4U/WwA2Eqo4_QI/AAAAAAABW-c/RU6ApAdHRMYYhPpRQAZS9VzfV_-9pgL5wCHMYCw/yakutsk-16?imgmax=1600',
        'test@test.com',
        new Date(),
        3
        )
    
      ];

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
      }
}