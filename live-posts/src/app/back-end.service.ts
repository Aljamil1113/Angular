import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { PostService } from "./post.service";

@Injectable({ providedIn: 'root' })
export class BackEndService {
    constructor (private posstService: PostService){}

    //Fun 1 - Save
    saveData() {
        // Step 1 - get list of posts from post.service
        const listOfPosts: Post[] = this.posstService.getPosts();
        // Step 2 send list of post to backend
    }
    //Fun 2 - Fetch
}