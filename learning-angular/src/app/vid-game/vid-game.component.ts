import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vid-game',
  templateUrl: './vid-game.component.html',
  styleUrls: ['./vid-game.component.css'],
})
export class VidGameComponent implements OnInit {
  public title: string;
  public list: string[];

  constructor() {
    this.title = 'Video Game List';
    this.list = [
      'Tekken',
      'GTA V',
      'Burnout',
      'Call of Duty',
      'Battlefield',
      'FIFA 20',
    ];
  }

  ngOnInit(): void {}
}
