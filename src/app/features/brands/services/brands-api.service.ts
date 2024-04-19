import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrandListItemDto } from '../models/brand-list-item-dto';
import { Observable } from 'rxjs';
import { PostBrandRequest } from '../models/post-brand-request';
import { PostBrandResponse } from '../models/post-brand-response';

@Injectable({
  providedIn: 'root',
})
export class BrandsApiService {
  constructor(private http: HttpClient) {}

  getList(): Observable<BrandListItemDto[]> {
    return this.http.get<BrandListItemDto[]>('http://localhost:3000/brands');
  }

  postBrand(brand: PostBrandRequest): Observable<PostBrandResponse> {
    return this.http.post<PostBrandResponse>(
      'http://localhost:3000/brands',
      brand
    );
  }
}
