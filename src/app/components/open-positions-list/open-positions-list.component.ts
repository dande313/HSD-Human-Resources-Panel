import { Component, OnInit } from '@angular/core';
import { PositionService } from '../../services/position.service';
import { Position } from '../../models/position';
import {MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-open-positions-list',
  templateUrl: './open-positions-list.component.html',
  styleUrls: ['./open-positions-list.component.css']
})
export class OpenPositionsListComponent implements OnInit {
  dataSource: any;
  displayedColumns = ['title', 'department', 'location', 'details'];

  constructor(private positionService: PositionService) { }

  ngOnInit() {
    this.positionService.getPositions().subscribe(positions => {
      console.log(positions);
      this.dataSource = new MatTableDataSource<Position>(positions);
    });
  }

}
