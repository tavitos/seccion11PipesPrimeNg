import { Component, OnInit } from '@angular/core';
// import { MenuItem } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  // public menuItems: MenuItem[] = [];
  public items: MenuItem[] = [];

    ngOnInit() {
        // this.menuItems = [
        //   {
        //     label: 'Pipes de Angular',
        //     icon: 'pi pi-desktop',
        //     items: [
        //       {
        //         label: 'Textos y Fechas',
        //         icon: 'pi pi-align-left'
        //       },
        //       {
        //         label: 'Números ',
        //         icon: 'pi pi-dollar'
        //       },
        //       {
        //         label: 'No comunes ',
        //         icon: 'pi pi-globe'
        //       },
        //     ]
        //   },
        //   {
        //     label: 'Pipes personalizados',
        //     icon: 'pi pi-cog',
        //     items: [
        //       {
        //         label: 'Otro elemento',
        //         icon: 'pi pi-cog'
        //       }
        //     ]
        //   }
        // ];

        this.items = [
          {
            label: 'Pipes de Angular',
            icon: 'pi pi-fw pi-file',
            items: [
              {
                label: 'Textos y Fechas',
                icon: 'pi pi-align-left',
                routerLink: '/'
              },
              {
                label: 'Números ',
                icon: 'pi pi-dollar',
                routerLink: 'numbers'
              },
              {
                label: 'No comunes ',
                icon: 'pi pi-globe',
                routerLink: 'uncommon'
              },
            ]
          },
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Otro elemento',
                icon: 'pi pi-cog'
              }
            ]
          }
        ];
    }

}
