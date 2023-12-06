import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnDestroy {
  @Input('toPost') myPost!: Post
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>()

  removePost() {
    this.onRemove.emit(this.myPost.id)
  }

  ngOnDestroy() {
    console.log(`Post ${this.myPost.id} has been destroyed`)
  }
}
