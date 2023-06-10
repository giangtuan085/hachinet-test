import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface MenuItem {
  title: string;
  icon: string;
  path: string;
  children?: MenuItem[];
  isHome?: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hachinet-ant-design';
  menuList: MenuItem[] = [
    {
      title: 'Home',
      icon: 'desktop',
      path: '',
      isHome: true,
    },
    {
      title: 'User',
      icon: 'user',
      path: '',
      children: [
        {
          title: 'Tom',
          icon: '',
          path: '/user/tom',
        },
        {
          title: 'Bill',
          icon: '',
          path: '/user/bill',
        }
      ],
    },
    {
      title: 'Team',
      icon: 'team',
      path: '',
      children: [
        {
          title: 'Team 1',
          icon: '',
          path: '/team/team-1',
        },
        {
          title: 'Team 2',
          icon: '',
          path: '/team/team-2',
        }
      ],
    },
    {
      title: 'File',
      icon: 'file',
      path: '/file',
    },
  ];

  constructor(private router: Router) {
  }

  public onClickMenu(item: MenuItem) {
    if (item.path) {
      this.router.navigateByUrl(item.path);
    } else if (item.isHome) {
      this.router.navigateByUrl('');
    }
  }

}
