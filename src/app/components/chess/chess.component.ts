import { Component, OnInit } from '@angular/core';
import * as Chess from 'chess.js';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {
  playerMove: string;
  stockfishMove: string;
  board: string;
  newBoard= 'rnbqkbnrpppppppp                                PPPPPPPPRNBQKBNR';
  A8= this.newBoard.charAt(0);
  B8= this.newBoard.charAt(1);
  C8= this.newBoard.charAt(2);
  D8= this.newBoard.charAt(3);
  E8= this.newBoard.charAt(4);
  F8= this.newBoard.charAt(5);
  G8= this.newBoard.charAt(6);
  H8= this.newBoard.charAt(7);
  A7= this.newBoard.charAt(8);
  B7= this.newBoard.charAt(9);
  C7= this.newBoard.charAt(10);
  D7= this.newBoard.charAt(11);
  E7= this.newBoard.charAt(12);
  F7= this.newBoard.charAt(13);
  G7= this.newBoard.charAt(14);
  H7= this.newBoard.charAt(15);
  A6= this.newBoard.charAt(16);
  B6= this.newBoard.charAt(17);
  C6= this.newBoard.charAt(18);
  D6= this.newBoard.charAt(19);
  E6= this.newBoard.charAt(20);
  F6= this.newBoard.charAt(21);
  G6= this.newBoard.charAt(22);
  H6= this.newBoard.charAt(23);
  A5= this.newBoard.charAt(24);
  B5= this.newBoard.charAt(25);
  C5= this.newBoard.charAt(26);
  D5= this.newBoard.charAt(27);
  E5= this.newBoard.charAt(28);
  F5= this.newBoard.charAt(29);
  G5= this.newBoard.charAt(30);
  H5= this.newBoard.charAt(31);
  A4= this.newBoard.charAt(32);
  B4= this.newBoard.charAt(33);
  C4= this.newBoard.charAt(34);
  D4= this.newBoard.charAt(35);
  E4= this.newBoard.charAt(36);
  F4= this.newBoard.charAt(37);
  G4= this.newBoard.charAt(38);
  H4= this.newBoard.charAt(39);
  A3= this.newBoard.charAt(40);
  B3= this.newBoard.charAt(41);
  C3= this.newBoard.charAt(42);
  D3= this.newBoard.charAt(43);
  E3= this.newBoard.charAt(44);
  F3= this.newBoard.charAt(45);
  G3= this.newBoard.charAt(46);
  H3= this.newBoard.charAt(47);
  A2= this.newBoard.charAt(48);
  B2= this.newBoard.charAt(49);
  C2= this.newBoard.charAt(50);
  D2= this.newBoard.charAt(51);
  E2= this.newBoard.charAt(52);
  F2= this.newBoard.charAt(53);
  G2= this.newBoard.charAt(54);
  H2= this.newBoard.charAt(55);
  A1= this.newBoard.charAt(56);
  B1= this.newBoard.charAt(57);
  C1= this.newBoard.charAt(58);
  D1= this.newBoard.charAt(59);
  E1= this.newBoard.charAt(60);
  F1= this.newBoard.charAt(61);
  G1= this.newBoard.charAt(62);
  H1= this.newBoard.charAt(63);

  constructor(
  ) { }

  ngOnInit() {
  }

  submitMove() {
    let chess = new Chess();
    while (!chess.game_over()) {
      let moves = chess.moves();
      let move = moves[Math.floor(Math.random() * moves.length)];
      chess.move(move);
    }
    console.log(chess.fen());
  }

  click(unit, cell, event) {
    console.log(unit + ' at ' + cell);
    console.log(event);
  }

}
