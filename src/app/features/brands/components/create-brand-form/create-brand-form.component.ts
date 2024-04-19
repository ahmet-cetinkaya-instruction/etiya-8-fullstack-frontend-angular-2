import { BrandsApiService } from './../../services/brands-api.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostBrandRequest } from '../../models/post-brand-request';

@Component({
  selector: 'app-create-brand-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-brand-form.component.html',
  styleUrl: './create-brand-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBrandFormComponent {
  form: FormGroup = this.fb.group({
    // Form Controls
    name: [
      '', // [0] : Başlangıç değeri
      [Validators.required], // [1] : Validasyonlar
    ],
  });

  constructor(
    private fb: FormBuilder,
    private brandsApiService: BrandsApiService
  ) {}

  createBrand() {
    const request: PostBrandRequest = {
      name: this.form.value.name,
    };
    this.brandsApiService.postBrand(request).subscribe({
      next: (response) => {
        console.info('Response:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.info('Brand created successfully');
        this.form.reset();
      },
    });
  }

  onFormSubmit() {
    console.log(this.form);

    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }

    this.createBrand();
  }
}
