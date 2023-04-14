import { Component } from '@angular/core';
import { MenuService } from './menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  roles: any;
  constructor(private menuService: MenuService) { }
  async getMenuData() {
    this.roles = await this.menuService.getMenuData();
    console.log('roles',this.roles);
    return this.roles;
  }
  
}
