import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidht: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'sidenav';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSidenav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidht;
    this.isSideNavCollapsed = data.collapsed;

  }
}
