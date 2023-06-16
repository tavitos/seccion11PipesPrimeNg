import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent implements OnInit {

  public nameLower: string = 'tavo';
  public nameUpper: string = 'TAVO';
  public fullName: string = 'taViTo leZaMa';

  public customDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
