import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { PostService } from "./post.service";
import { tap } from 'rxjs/operators';

/*
  https://live-posts-c2790-default-rtdb.firebaseio.com/
*/

@Injectable({ providedIn: 'root' })
export class BackEndService {
    constructor (private posstService: PostService, private http: HttpClient){}

    //Fun 1 - Save
    saveData() {
        // Step 1 - get list of posts from post.service
        const listOfPosts: Post[] = this.posstService.getPosts();
        // Step 2 send list of post to backend
        this.http.put('https://live-posts-c2790-default-rtdb.firebaseio.com/posts.json', listOfPosts)
        .subscribe((res) => {
            console.log(res);
        });
    }
    //Fun 2 - Fetch
    fetchData() {
        this.http.get<Post[]>('https://live-posts-c2790-default-rtdb.firebaseio.com/posts.json')
        .pipe(tap((listOfPosts: Post[]) => {
            console.log(listOfPosts);
            this.posstService.setPosts(listOfPosts);
        })).subscribe();
    }
}