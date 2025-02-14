import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  standalone: true,
  selector: 'side-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styles: `
  ul{
    position:fixed;
    top: 20px;
    left: 20px;
    z-index: 999;
  }

  li{
    cursor: pointer;
    transition: 0.3s all;
  }`
})
export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    { name: 'Fullscreen', route: '/maps/fullscreen' },
    { name: 'Zoom Range', route: '/maps/zoom-range' },
    { name: 'Markers', route: '/maps/markers' },
    { name: 'Houses', route: '/maps/properties' },
    { name: 'Alone Page', route: '/alone' },
  ]
}
