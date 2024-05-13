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
export class AuthorizationGuard{
  constructor(private authService:AuthService,
              private router:Router
  ){}
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.authService.isAuthenfiticated){
      let requiredRoles=route.data['roles'];
      let userRoles=this.authService.roles;
      for(let role of userRoles){
        if(requiredRoles.includes(role)){
          return true;
        }
      }
      return false;
    }
    else {
      this.router.navigateByUrl('/login')
      return false;
    }
  }
}
