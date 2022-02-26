import { Component, OnInit } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  listOfPosts: Post[] = [
    new Post(
      ' Nature',
   'Ural mountains is a long and wide range mountains on Russsia.',
   'https://peakvisor.com/img/news/Ural-mountains-South-Ural-Ridge.jpg',
    'test@test.com',
    new Date()
    ),
    new Post(
      'Nature',
   'Yakutsk: The Coldest City in the World',
   'https://lh3.googleusercontent.com/-i5yQ0exbR4U/WwA2Eqo4_QI/AAAAAAABW-c/RU6ApAdHRMYYhPpRQAZS9VzfV_-9pgL5wCHMYCw/yakutsk-16?imgmax=1600',
    'test@test.com',
    new Date()
    )

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
