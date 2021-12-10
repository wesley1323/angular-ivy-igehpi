import { Component, OnInit } from '@angular/core';
import { WesleyTimerService } from '../wesley-timer.service';

@Component({
  selector: 'app-wesley-home',
  templateUrl: './wesley-home.component.html',
  styleUrls: ['./wesley-home.component.css']
})
export class WesleyHomeComponent implements OnInit {

  constructor(public timer:WesleyTimerService) { }

  ngOnInit() {
  }

}