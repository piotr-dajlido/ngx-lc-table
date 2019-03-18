import {Component} from '@angular/core';

@Component({
  selector: 'app-minimal',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.scss']
})
export class MinimalComponent {

  data = [
    {'id': '5001', 'type': 'None'},
    {'id': '5002', 'type': 'Glazed'},
    {'id': '5005', 'type': 'Sugar'},
    {'id': '5007', 'type': 'Powdered Sugar'},
    {'id': '5006', 'type': 'Chocolate with Sprinkles'},
    {'id': '5003', 'type': 'Chocolate'},
    {'id': '5004', 'type': 'Maple'}
  ];

}


