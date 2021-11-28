import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {

  constructor(private _router: Router, private _toastr: ToastrService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const clientInfoObj = localStorage.getItem('clientInfo') ? JSON.parse(localStorage.getItem('clientInfo')) : null;
    const clientAddressObj = localStorage.getItem('clientAddress') ? JSON.parse(localStorage.getItem('clientAddress')) : null;
    const clientIdentityObj = localStorage.getItem('clientIdentity') ? JSON.parse(localStorage.getItem('clientIdentity')) : null;

    const routePath = route.url[0].path;

    if (routePath === 'client' && (!clientInfoObj && !clientAddressObj && !clientIdentityObj)) {
      return true;
    }

    if (routePath === 'address' && clientInfoObj) {
      return true;
    } else if (routePath === 'address' && !clientInfoObj) {
      this._toastr.error('Необходимо сначала заполнить данные пользователя');
      this._router.navigate(['./client']);
    }

    if (routePath === 'identity' && clientAddressObj) {
      return true;
    } else if (routePath === 'identity' && !clientAddressObj) {
      this._toastr.error('Необходимо сначала заполнить адрес пользователя');
      this._router.navigate(['./address']);
    }

    if (routePath === 'client-created' && clientIdentityObj) {
      return true;
    } else if (routePath === 'client-created' && !clientIdentityObj) {
      this._toastr.error('Необходимо сначала заполнить паспортные данные пользователя');
      this._router.navigate(['./identity']);
    }

    if (routePath !== 'client-created' && (clientInfoObj && clientAddressObj && clientIdentityObj)) {
      this._router.navigate(['/client-created']);
      return false;
    }

    return true;
  }

}
