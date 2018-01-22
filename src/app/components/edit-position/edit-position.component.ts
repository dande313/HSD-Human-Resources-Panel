import { Component, OnInit } from '@angular/core';
import { PositionService } from '../../services/position.service';
import { Position } from '../../models/position';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.css']
})
export class EditPositionComponent implements OnInit {
  id: string;
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
    private positionService: PositionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // get position
    this.positionService.getPosition(this.id).subscribe(position => {
      this.position = position;
    });
  }

  onSubmit({value, valid}: {value: Position, valid: boolean}) {
    if (!valid) {
      this.router.navigate(['/positions/' + this.id + '/edit']);
    } else {
      // Add new position
      this.positionService.updatePosition(this.id, value);
      this.router.navigate(['/positions/' + this.id]);
    }
  }

}
