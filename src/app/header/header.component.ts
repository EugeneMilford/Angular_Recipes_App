import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;

  private userSub: Subscription;

  constructor(private dsService: DataStorageService, private authservice: AuthService) { }

  ngOnInit() {
    this.userSub = this.authservice.user.subscribe(user => {
      this.isAuthenticated = !!user; /*!user ? false : true;*/
    });
  }

  onSaveData() {
    this.dsService.storeRecipes();
  }

  onFetchData() {
    this.dsService.fetchRecipes().subscribe();;
  }

  onLogout()
  {
    this.authservice.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
