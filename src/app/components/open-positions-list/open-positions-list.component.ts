import { Component, OnInit } from '@angular/core';
import { PositionService } from '../../services/position.service';
import { Position } from '../../models/position';

@Component({
  selector: 'app-open-positions-list',
  templateUrl: './open-positions-list.component.html',
  styleUrls: ['./open-positions-list.component.css']
})
export class OpenPositionsListComponent implements OnInit {
  positions: any[];

  constructor(private positionService: PositionService) { }

  ngOnInit() {
    this.positionService.getPositions().subscribe(positions => {
      console.log(positions);
      this.positions = positions;
    });
  }

}
