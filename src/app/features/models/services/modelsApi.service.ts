import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelListItemDto } from '../models/model-list-item-dto';

@Injectable({
  providedIn: 'root',
})
export class ModelsApiService {
  constructor(private http: HttpClient) {}

  getList(
    brandId: number | null = null,
    searchBrandName: string | null = null
  ): Observable<ModelListItemDto[]> {
    const requestQueryParams: any = {
      // brandId: brandId
    };
    if (brandId !== null) requestQueryParams.brandId = brandId;
    if (searchBrandName) requestQueryParams.name_like = searchBrandName;

    return this.http.get<ModelListItemDto[]>('http://localhost:3000/models', {
      params: requestQueryParams, // ?brandId=1&name_like=land
    });
    // .subscribe(
    //   (httpResponse) => {
    //               return httpResponse;
    //             }
    //   );
  }
  // subscribe(next: (value: Object) => void) {
  //   // wait for the response
  //   // when the response is ready, call next
  //   const response = {}
  //   next(response);
  // }
}
