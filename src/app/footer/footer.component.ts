import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: string = ""

  constructor() { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear().toString();
  }
}
