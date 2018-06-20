import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Shift } from '@reaction/common/models';

@Component({
  selector: 'reaction-shifts-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ShiftListComponent implements OnInit {
  @Input() public shifts: Array<Shift> = [];

  constructor() {}

  ngOnInit() {}
}
