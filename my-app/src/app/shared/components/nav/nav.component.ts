import { Component, OnChanges } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnChanges {
  public title = 'My supper app';
  public isCollapsed = true;
  public connect$: BehaviorSubject<boolean>;
  public user: User;
  
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnChanges() {
    this.connect$ = this.authService.connect$;
    this.user = this.authService.user;
  }

  public logout(): void {
    this.authService.connect$.next(false);
    this.router.navigate(['login']);
  }

}
