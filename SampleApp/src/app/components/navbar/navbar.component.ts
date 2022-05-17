import { Component, Input, OnInit } from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() menuList: Menu[] = [
    {
      title: 'Anasayfa',
      url: '/',
    },
    {
      title: 'Yapılacaklar',
      url: '/todos',
    },
    {
      title: 'Makaleler',
      url: 'posts',
    },

    {
      title: 'albümler',
      url: '/album',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
