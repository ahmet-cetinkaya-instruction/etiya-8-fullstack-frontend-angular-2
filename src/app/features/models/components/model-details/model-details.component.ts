import { ModelsApiService } from './../../services/modelsApi.service';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ModelDetailsDto } from '../../models/model-details-dto';

@Component({
  selector: 'app-model-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './model-details.component.html',
  styleUrl: './model-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelDetailsComponent implements OnInit {
  @Input() id!: number;

  modelDetails!: ModelDetailsDto;

  constructor(
    private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getModelDetails();
  }

  getModelDetails() {
    this.modelsApiService.getById(this.id).subscribe({
      next: (modelDetails) => {
        this.modelDetails = modelDetails;
      },
      complete: () => {
        this.change.markForCheck();
      },
    });
  }
}
