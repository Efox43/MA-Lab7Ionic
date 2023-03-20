import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connacht',
  templateUrl: './connacht.page.html',
  styleUrls: ['./connacht.page.scss'],
})
export class ConnachtPage implements OnInit {
 counties: string[] = ["Galway", "Mayo", "Sligo", "Roscommon", "Leitrim"];
  constructor() { }

  ngOnInit() {
  }

}
