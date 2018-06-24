import { Component, Input, OnInit } from '@angular/core';
import { Shift } from '@reaction/common/models';

@Component({
  selector: 'reaction-shifts-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ShiftListItemComponent implements OnInit {
  @Input() public shift: Shift;

  constructor() {}

  ngOnInit() {}
}
