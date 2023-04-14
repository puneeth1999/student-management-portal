import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private http: HttpClient) { }
  data: any;
  async getMenuData() {
    const url = "http://localhost:9191/menu/menuItems";
    this.data = await this.http.get(url).toPromise();
    return this.data;
  }
}