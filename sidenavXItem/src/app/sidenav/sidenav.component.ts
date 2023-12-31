import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { INavbarData, fadeInOut} from './helper';

interface SideNavToggle {
  screenWidht: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [  
    fadeInOut,
 
    trigger ('rotate', [
      transition(':enter',[
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset : '0' }),
            style({transform: 'rotate(2turn)', offset : '1' }),
          ])
        )
      ])
    ])
  ] 
})  
  

export class SidenavComponent  implements OnInit {

 
  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  screenWidht = 0;
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onresize(event:any) {
    this.screenWidht = window.innerWidth;
    if(this.screenWidht <=768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidht: this.screenWidht});

    }
  }

 

  ngOnInit(): void {
    this.screenWidht = window.innerWidth
  }


  toggleCollapse(): void {

    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidht: this.screenWidht});
  }

  closeSidenav(): void {

    this.collapsed = false;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidht: this.screenWidht});
  }

  handleClick(item: INavbarData): void {
    if (!this.multiple){
      for (let modelItem of this.navData){
        if (item !== modelItem && modelItem.expanded) {
           modelItem.expanded = false; 
        }
      }
    }
    item.expanded = !item.expanded

  }



}
