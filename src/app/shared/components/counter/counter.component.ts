import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
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
