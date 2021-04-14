import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-create',
  templateUrl: './data-create.component.html',
  styleUrls: ['./data-create.component.css']
})
export class DataCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredName ='';
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter();
  onAddPost() {
    const post = { name: this.enteredName,title: this.enteredTitle, content: this.enteredContent };
    this.postCreated.emit(post);
  }


}
