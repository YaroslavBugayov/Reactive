import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  posts: Post[] = [
    { title: 'I study the components', text: 'I am creating a "Blog" project', id: 2 },
    { title: 'I study the directives', text: 'Still creating the "Blog" project', id: 1 }
  ]

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
