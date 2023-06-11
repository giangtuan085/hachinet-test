import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api/api.service';
import { MenuItem } from './models/menu-model';
import { ResponseCode } from './models/api-model';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hachinet-ant-design';
  menuList: MenuItem[] = [];
  isloading: boolean = false;

  constructor(private router: Router, private apiServoce: ApiService) {
  }

  ngOnInit(): void {
    this.isloading = true;
    this.apiServoce.getMenuList().pipe(finalize(() => this.isloading = false)).subscribe(res => {
      if (res.code === ResponseCode.SUCCESS) {
        this.menuList = res.data;
      }
    })
  }

  public onClickMenu(item: MenuItem) {
    if (item.path) {
      this.router.navigateByUrl(item.path);
    } else if (item.isHome) {
      this.router.navigateByUrl('');
    }
  }

}
