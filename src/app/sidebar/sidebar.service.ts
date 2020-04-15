import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;

  menus = [
    {
      title: 'Main Menu',
      type: 'header'
    },
    {
      title: 'Home',
      icon: 'fa fa-home',
      link: '/home',
      type: 'menuitem',
      active: false,
    },
    {
      title: 'Employee',
      icon: 'fa fa-user',
      link: '/employee',
      active: false,
      type: 'menuitem',
      badge: {
        text: 'New',
        class: 'badge-danger'
      },
    },
    {
      title: 'Product',
      icon: 'fa fa-list-alt',
      link: '/product',
      active: false,
      type: 'menuitem'
    },
    {
      title: 'About',
      icon: 'fa fa-lightbulb',
      link: '/about',
      active: false,
      type: 'menuitem'
    },
    {
      title: 'Dropdown Menu',
      type: 'header'
    },
    {
      title: 'Dashboard',
      icon: 'fa fa-newspaper',
      active: false,
      type: 'dropdown',
      badge: {
        text: '3',
        class: 'badge-warning'
      },
      submenus: [
        {
          title: 'Dashboard',
          link: '/dashboard',
          badge: {
            text: 'Pro ',
            class: 'badge-success'
          }
        },
        {
          title: 'Menu Item 1'
        },
        {
          title: 'Menu Item 2'
        }
      ]
    },

  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

}
