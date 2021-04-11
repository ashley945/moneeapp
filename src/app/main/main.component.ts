import { Component, OnInit } from '@angular/core';
import { formatDistance } from 'date-fns';
class cardModel {
  id: number;
  title: string;
  writer: string;
  commentList: commentModel[];
}
class commentModel {
  commentText: string;
  commentAuthor: string;
  commentDateTime: Date;
  commentDisplayTime: string;
}

var cardList: cardModel[] = [

];

var commentList: commentModel[] = [

];
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  name : string;
  cardlist = cardList;
  cardForm = new cardModel();
  commentlist = commentList;
  commentForm = new commentModel();

  inputValue?: string;
  isShowCommentBox: Boolean = false;
  likeCount: number = 0;
  submitting = false;

  ngOnInit(): void {
  }

  likeCard(id: number): void{
    if(this.likeCount > 0){

    }
    this.likeCount++;
  }

  removeCard(id: number):void {
        if (!id) return;
        var idx = this.cardlist.findIndex(function (item) {
            return item.id === id;
        });
        if (idx === -1) return;
        this.cardlist.splice(idx, 1);
    }

  addCard(): void {
        var newId = ! this.cardlist.length ? 1 : this.cardlist[this.cardlist.length - 1].id + 1;

        var newItem = {
            id: newId,
            title: this.cardForm.title,
            writer: this.cardForm.writer,
            commentList: []
        };
        this.cardlist.push(newItem);
    }

  openComment(): void{
    this.isShowCommentBox = !this.isShowCommentBox;
  }

  handleSubmit(i): void {
    this.submitting = true;
    setTimeout(() => {
      this.submitting = false;

      let newComment = {
        commentText: this.commentForm.commentText,
        commentAuthor: this.commentForm.commentAuthor,
        commentDateTime: new Date(),
        commentDisplayTime: formatDistance(new Date(), new Date())
      }

      this.cardlist[i].commentList.push(newComment);
    }, 100);
  }
}
