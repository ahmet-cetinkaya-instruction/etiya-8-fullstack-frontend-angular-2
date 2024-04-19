import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { BrandsApiService } from '../../services/brands-api.service';
import { BrandListItemDto } from '../../models/brand-list-item-dto';

@Component({
  selector: 'app-brands-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListComponent implements OnInit {
  // JS Doc
  /**
   * @returns brand id or null
   */
  @Output() selectBrand = new EventEmitter<number | null>();
  // Event oluşturabilmek için EventEmitter sınıfını kullanıyoruz.
  // Angular'ın bu eventi tanıyabilmesi için @Output() dekoratörünü kullanıyoruz.

  list: Array<BrandListItemDto> = [];

  constructor(
    private brandsService: BrandsApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.brandsService.getList().subscribe((brands) => {
      this.list = brands;
      this.change.markForCheck();
    });
  }

  onBrandClick(id: number | null) {
    this.selectBrand.emit(id);
  }
}
