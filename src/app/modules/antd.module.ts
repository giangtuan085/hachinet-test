
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzPipesModule } from 'ng-zorro-antd/pipes';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  exports: [
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzLayoutModule,
    NzMenuModule,
    NzTabsModule,
    NzToolTipModule,
    NzResizableModule,
    NzPipesModule,
    NzSpinModule
  ]
})
export class AntdModule {

}
