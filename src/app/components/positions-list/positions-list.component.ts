import { Component, OnInit } from '@angular/core';
import { PositionService } from '../../services/position.service';
import { Position } from '../../models/position';
import {MatTableDataSource, MatSort} from '@angular/material';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-positions-list',
  templateUrl: './positions-list.component.html',
  styleUrls: ['./positions-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PositionsListComponent implements OnInit {
  dataSource: any;
  rows = [];
  columns = [
    { name: 'Title', prop: 'title' },
    { name: 'Department', prop: 'department' },
    { name: 'Date Posted', prop: 'postDate' }
  ];

  constructor(private positionService: PositionService) { }

  ngOnInit() {
    this.positionService.getPositions().subscribe(positions => {
      console.log(positions);
      this.rows = positions;
    });
  }
}
