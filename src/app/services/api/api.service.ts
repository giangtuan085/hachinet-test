import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { ApiResponseModel, ResponseCode } from 'src/app/models/api-model';
import { MenuItem } from 'src/app/models/menu-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  mockMenu: MenuItem[] = [
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
  ]
  constructor() { }

  public getMenuList(): Observable<ApiResponseModel<MenuItem[]>> {
    return of({
      code: ResponseCode.SUCCESS,
      data: this.mockMenu
    }).pipe(delay(2000));
  }
}
