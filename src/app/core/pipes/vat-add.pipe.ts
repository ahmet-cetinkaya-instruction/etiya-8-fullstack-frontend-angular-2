import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdd',
  standalone: true,
})
export class VatAddPipe implements PipeTransform {

  constructor() {}

  transform(value: number, rate: number = 18): number {
    return value + (value * rate) / 100;
  }
}
