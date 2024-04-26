import type { CanActivateFn } from '@angular/router';

export const logableRouteGuard: CanActivateFn = (route, state) => {
  console.log("LOG: ", route, state);

  return true;
};
