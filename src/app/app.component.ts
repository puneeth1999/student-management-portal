import { Component } from '@angular/core';
import { MenuService } from './menu/menu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-mgt-portal';
  constructor(private menuService: MenuService) {
  }
}
