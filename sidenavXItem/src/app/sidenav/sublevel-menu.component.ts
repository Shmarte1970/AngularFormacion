import { Component, Input, OnInit } from '@angular/core';
import { INavbarData, fadeInOut} from './helper';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <ul *ngIf="collapsed && data.item && data.item.length > 0"
    [@submenu]="expanded
      ? {value: 'visible', 
      params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '*'}}
      : {value: 'hidden', 
      params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '0'}}"
      class="sublevel-nav" 
    >
    <li *ngFor="let item of data.item" class="sublevel-nav-item">
        <a class="sublevel-nav-link"
          (click)="handleClick(item)"
          *ngIf="item.item && item.item.length > 0"
        >
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span class="sublevel-link-text" @fadeInOut
          *ngIf="collapsed">{{item.label}}</span>
          <i *ngIf="item.item && collapsed" class="menu-collapse-icon"
            [ngClass]="!item.expanded ? 'fa fa-angle-right' : 'fa fa-angle-down'"
          ></i>
        </a>
        <a class="sublevel-nav-link"
        *ngIf="!item.item || (item.item && item.item.length ===0)"
        [routerLink]="[item.routeLink]"
        routerLinkActive="active-sublevel"
        [routerLinkActiveOptions]="{exact: true}"
        >
        <i class="sublevel-link-icon fa fa-circle"></i>
        <span class="sublevel-link-text" @fadeInOut
         *ngIf="collapsed">{{item.label}}</span>
        </a>
        <div *ngIf="item.item && item.item.length > 0">
          <app-sublevel-menu
            [data]="item"
            [collapsed]="collapsed"
            [multiple]="multiple"
            [expanded]="item.expanded"
          >
          </app-sublevel-menu>
        </div>
    </li>
    </ul>
  `,
  styleUrls: ['./sidenav.component.css'],
  animations: [
    fadeInOut,
    trigger('submenu', [
        state('hidden', style ({
          height: '0',
          overflow: 'hidden'
        })),
        state('visible', style ({
          height: '*'         
        })),
        transition ('visible <=> hidden', [style({overflow: 'hidden'}), 
          animate('{{transitionParams}}')]),
        transition ('void => *', animate(0))
    ])
  ]
})
export class SublevelMenuComponent implements OnInit {

  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    label: '',
    item: []
  }

  @Input() collapsed = false;

  @Input() animating: boolean | undefined;

  @Input() expanded: boolean | undefined;

  @Input() multiple: boolean = false;



  constructor() { }

  ngOnInit(): void {
    
  }

  handleClick(item: any): void {
    if (!this.multiple){
      if (this.data.item && this.data.item.length >0) {
          for (let modelItem of this.data.item) {
            if (item !== modelItem && modelItem.expanded){
              modelItem.expanded = false;
            }
          }
      }
    }
    item.expanded = !item.expanded;
  }

}
