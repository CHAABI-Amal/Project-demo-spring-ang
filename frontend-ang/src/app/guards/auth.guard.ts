import {
  ActivatedRouteSnapshot, CanActivate,
  CanActivateFn, GuardResult,
  MaybeAsync,
  Router,
  RouterState,
  RouterStateSnapshot
} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";
@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService,
              private router:Router
  ){}
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.authService.isAuthenfiticated)
      return true;
    else {
      this.router.navigateByUrl('/login')
      return false;
    }
  }
}
