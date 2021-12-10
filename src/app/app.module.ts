import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WesleyHomeComponent } from './wesley-home/wesley-home.component';
import { WesleyHistoryComponent } from './wesley-history/wesley-history.component';
import { WesleyTimerService } from './wesley-timer.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:WesleyHomeComponent},
      {path:'temporizador', component:WesleyHistoryComponent},
    ])
  ],
  declarations: [
    AppComponent, 
    HelloComponent,
    WesleyHomeComponent,
    WesleyHistoryComponent,
   ],
  bootstrap:    [ AppComponent ],
   providers: [WesleyTimerService]

})
export class AppModule { }
