import { Component, OnInit } from '@angular/core';
import { Roles } from 'app/model/users';
import { UsersService } from 'app/services/users.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    admin: boolean;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', admin: false },
    { path: '/wizard', title: 'Report Incident',  icon: 'message', class: '', admin: false },
    { path: '/table-list', title: 'Incident Discussion',  icon: 'dynamic_feed', class: '', admin: true },
    { path: '/admin', title: 'Admin',  icon: 'fact_check', class: '', admin: true }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  Roles = Roles;
  menuItems: any[];

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  }
}
