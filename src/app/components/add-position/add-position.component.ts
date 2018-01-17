import { Component, OnInit } from '@angular/core';
import { PositionService } from '../../services/position.service';
import { Position } from '../../models/position';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.css']
})
export class AddPositionComponent implements OnInit {

  position: Position = {
    title: '',
    department: '',
    city: '',
    state: '',
    budget: null,
    notes: '',
    postDate: '',
    open: true
  };
  constructor(
    private router: Router,
    private positionService: PositionService
  ) { }

  ngOnInit() {
  }
  onSubmit({value, valid}: {value: Position, valid: boolean}) {

    if (!valid) {
      this.router.navigate(['/positions/new']);
    } else {
      // Add new client
      this.positionService.newPosition(value);
      this.router.navigate(['/positions']);
    }
  }
}
