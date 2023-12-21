import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from "../../app.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent implements OnInit{
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  date$: Observable<Date> = new Observable<Date>(obs => {
    obs.next(new Date())
    setInterval(() => {
      obs.next(new Date())
    }, 1000)
  })
  currentDate!: Date
  title: string = ''
  text: string = ''

  ngOnInit(): void {
    this.date$.subscribe(date => {
      this.currentDate = date
    })
  }

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        date: this.currentDate
      }
      this.onAdd.emit(post)
      this.title = this.text = ''
    }
  }

}
