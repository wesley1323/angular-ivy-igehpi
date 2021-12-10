import { Injectable } from '@angular/core';

@Injectable()
export class WesleyTimerService {
  private timer: any;
  private counter = 0;


  constructor() { }

  iniciarContagem(){
    this.timer=setInterval(() => { 
      this.counter++;
    },1000)
  }

  pararContagem() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  zerarContagem() {
    this.pararContagem();
    this.counter = 0;
  }

  getContagem() {
    return this.counter;
  }
}