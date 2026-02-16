import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge-component',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  standalone: false,
})
export class BadgeComponent implements OnInit {
  @Input() value: string = '';

  constructor() {}

  ngOnInit(): void {}
}
