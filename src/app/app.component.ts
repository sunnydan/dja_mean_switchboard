import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  state = [true,true,true,true,true,true,true,true];

  toggle(index: number) {
    this.state[index] = !this.state[index];
  }
}
