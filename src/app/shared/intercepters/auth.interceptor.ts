import type { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Http isteği gönderilmeden önce araya giriyoruz.

  const token = localStorage.getItem('token') ?? '';
  // Request nesneleri immutable olduğu için klonlamak gerekiyor
  const newReq = req.clone({
    headers: req.headers.set('Authorization', token), // Header'a token'ı ekliyoruz
  }); // Klonlayarak yeni bir referans oluşturuyoruz

  return next(newReq); // Http isteğine newReq ile devam ediyoruz
  // .pipe(   // rxjs pipe: Observable'ı manipüle etmek / araya girmek için kullanılır
  //   catchError((error: any) => {
  //     return throwError(() => new Error('Bir hata oluştu'));
  //   })
  // )
};
