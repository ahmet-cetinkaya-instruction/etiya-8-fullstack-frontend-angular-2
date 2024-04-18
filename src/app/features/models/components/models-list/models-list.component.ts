import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent {
  public list = [
    {
      id: 1,
      name: 'A3',
      description: 'Model 1 Description',
    },
    {
      id: 1,
      name: 'M3',
      description: 'Model 2 Description',
    },
    {
      id: 1,
      name: 'Model 3',
      description: 'Model 3 Description',
    }
  ]

  // constructor() {
  //   let a : number = 1;
  //   a = 2;
  //   const b : number = 2;
  //   // b = 3;

  //   for(let item of this.list){
  //     console.log(item);
  //   }
  // }
}

