import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzSelectModule } from 'ng-zorro-antd/select';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { NzModalModule } from 'ng-zorro-antd/modal';



const antDesignIcons = AllIcons as {
    [key: string]: IconDefinition;
  };
  const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
@NgModule({
    declarations: [],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzIconModule,
        NzModalModule,
        NzSelectModule
        ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzIconModule,
        NzModalModule,
        NzSelectModule
    ],
    providers:[{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ]

}) export class SharedModule { }