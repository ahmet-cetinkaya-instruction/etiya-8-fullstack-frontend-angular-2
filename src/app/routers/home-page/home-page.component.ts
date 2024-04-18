import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, MainLayoutComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  private _counter: number = 0;
  get counter() : number {
    console.log('Counter get edildi');
    return this._counter;
  }
  set counter(value: number) {
    console.log('Counter set edildi', value);
    this._counter = value;
  }
  // getCounter() { // Metot
  //   return this.counter;
  // }
  // setCounter(value: number) { // Metot
  //   this.counter = value;
  // }

  sumCounter(sum: number) { // Metot
    this.counter = this.counter + sum;
  }

  // Getter
  get isCounterZero() : boolean {
    return this.counter === 0;
  }
  getIsCounterPositive() : boolean { // Metot
    return this.counter > 0;
  }
  // get isCounterPositive() : boolean {
  //   return this.counter > 0;
  // }
  get isCounterNegative() : boolean {
    return this.counter < 0;
  }
}
