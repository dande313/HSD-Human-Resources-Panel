import { Component, OnInit } from '@angular/core';
import { PositionService } from '../../services/position.service';
import { Position } from '../../models/position';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  id: string;
  position: Position;

  constructor(
    private positionService: PositionService,
    private router: Router,
    private route: ActivatedRoute
  ) { }



  ngOnInit() {
    // get id from url
    this.id = this.route.snapshot.params['id'];
    // get applicant
    this.positionService.getPosition(this.id).subscribe(position => {
      this.position = position;
    });
  }

  onDeleteClick(id) {
    if (confirm('Are you sure?')) {
      console.log(id + ' will be deleted');
      this.positionService.deletePosition(id);
      this.router.navigate(['/positions']);
    }
  }

}
