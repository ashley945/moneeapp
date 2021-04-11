import { Component, OnInit } from '@angular/core';


class BoardVO {
  id: number;
  title: string;
  writer: string;
}

var BoardList: BoardVO[] = [
  { id: 1, title: 'Title 1', writer: 'Mr. Nice' },
  { id: 2, title: 'Title 2', writer: 'Narco' }
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name : string;
  boardlist = BoardList;
	boardForm = new BoardVO();
  inputValue?: string;

	removeBoard(id: number):void {
        if (!id) return;
        var idx = this.boardlist.findIndex(function (item) {
            return item.id === id;
        });
        if (idx === -1) return;
        this.boardlist.splice(idx, 1);
    }

	addBoard(): void {
        var newId = ! this.boardlist.length ? 1 : this.boardlist[this.boardlist.length - 1].id + 1;

        var newItem = {
            id: newId,
            title: this.boardForm.title,
            writer: this.boardForm.writer
        };
        this.boardlist.push(newItem);
    }

}
