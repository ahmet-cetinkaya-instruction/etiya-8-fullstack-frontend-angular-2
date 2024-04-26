import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

export const securedRouteGuard: CanActivateFn = (route, state) => {
  const redirectNotAuthorized = () => {
    const router = inject(Router);
    router.navigate(['/not-found']);
    return false;
  };

  if (!localStorage.getItem('token')) return redirectNotAuthorized();

  if (!localStorage.getItem('user_roles')) return redirectNotAuthorized();

  const userRoles = JSON.parse(localStorage.getItem('user_roles')!);
  const requiredUserRole = route.data['requiredUserRole'];
  if (!userRoles.includes(requiredUserRole)) return redirectNotAuthorized();

  return true;
};

// localstorage:
// token = QKo%M7KdBZZrnhKWG8iCAbx&Wu!W$kyFW$Utn^vb!3dLe7bzKkdN%XEv#oFQRwFSs4txXK&ASdrj^&$SdoGia8qBu!jmR!bE4QZ&C8kEZS8f9Kr8V6B2qrycCTq^nJ7z
// user_roles = ["admin"]
