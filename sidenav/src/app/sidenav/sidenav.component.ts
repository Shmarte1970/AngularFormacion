import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidht: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})


export class SidenavComponent {

  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  screenWidht = 0;
  navData = navbarData;


  toggleCollapse(): void {

    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidht: this.screenWidht});
  }

  closeSidenav(): void {

    this.collapsed = false;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidht: this.screenWidht});
  }

}
