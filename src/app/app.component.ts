import { Component, OnInit, ViewContainerRef } from "@angular/core";
import "rxjs";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { Http } from "@angular/http";

import { GlobalState } from "./global.state";
import { SidebarService } from './sidebar/sidebar.service';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "An Angular 9 Quick Start";
  viewContainerRef: ViewContainerRef;

  public constructor(
    viewContainerRef: ViewContainerRef,
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
    private globalState: GlobalState,
    public sidebarservice: SidebarService
  ) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;

    this.globalState.subscribe("Header.title", (title) => {
      this.title = title;
    });
  }

  toggleSidebar() {
    // this.sidebarservice.toggle();
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }



  ngOnInit() {}
}
