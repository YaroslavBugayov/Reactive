import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number,
  date: Date
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'I study the components',
      text: 'I am creating a "Blog" project',
      id: 2,
      date: new Date(2017, 4, 12, 15, 32, 55)
    },
    {
      title: 'I study the directives',
      text: 'Still creating the "Blog" project',
      id: 1,
      date: new Date(2015, 11, 29, 21, 21, 12)
    }
  ]
  search: string = ''

  updatePost(post: Post) {
    let ids = this.posts.map(post => post.id)
    let id = 1
    if (ids.length > 0) {
      id = Math.max(...ids as number[]) + 1
    }
    post.id = id
    this.posts.unshift(post)
    console.log('Post', post)
  }

  deletePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id)
  }
}
