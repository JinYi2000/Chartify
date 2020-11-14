import { GraphService } from './../graph.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-graphcontrols',
  templateUrl: './graphcontrols.component.html',
  styleUrls: ['./graphcontrols.component.css'],
})
export class GraphcontrolsComponent implements OnInit {
  constructor(private graphService: GraphService) {}

  setGraphType(type: string) {
    this.graphService.drawGraphEvent.next(type);
  }

  ngOnInit(): void {}
}
