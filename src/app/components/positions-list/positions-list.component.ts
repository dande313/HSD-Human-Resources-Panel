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
  temp = [];
  filterType: any;
  columns = [
    { name: 'Title', prop: 'title' },
    { name: 'Department', prop: 'department' },
    { name: 'Date Posted', prop: 'postDate' }
  ];

  constructor(private positionService: PositionService) { }

  ngOnInit() {
    this.positionService.getPositions().subscribe(positions => {
      this.rows = positions;
      this.temp = [...positions];
      this.filterType = 'name';
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const filterType = this.filterType;
    // filter our data
    const temp = this.temp.filter(function(position) {
      switch (filterType) {
        case 'title':
          return (position.title).toLowerCase().indexOf(val) !== -1 || !val;
        case 'department':
          return (position.department).toLowerCase().indexOf(val) !== -1 || !val;
        case 'location':
          return (position.city + position.state).toLowerCase().indexOf(val) !== -1 || !val;
        default :
        return (position.title).toLowerCase().indexOf(val) !== -1 || !val;
      }
    });
    // update the rows
    this.rows = temp;
  }

  updateFilterType(event) {
    this.filterType = event.target.value;
  }
}
