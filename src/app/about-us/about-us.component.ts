import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  team: string[] = ['HITACHI', 'GOKU', 'HASHIRAMA', 'MADARA'];
  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

}