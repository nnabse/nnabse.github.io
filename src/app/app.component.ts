import { Component, OnInit } from '@angular/core';

import { Theme } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public themes: Theme[] = [
    {
      titleColor: '#0d34ff',
      descriptionColor: '#0d34ff',
      wrapperColor: '#415fff',
      descriptionMemojiPath: 'assets/icons/butterfly.png',
      descriptionMemojiAlt: 'butterfly icon',
      lastPageMemojiPath: 'assets/icons/blue_heart.svg',
      lastPageMemojiAlt: 'blue heart icon',
    },
    {
      titleColor: '#77FF0D',
      descriptionColor: '#77FF0D',
      wrapperColor: '#C2FF41',
      descriptionMemojiPath: 'assets/icons/clover.png',
      descriptionMemojiAlt: 'clover icon',
      lastPageMemojiPath: 'assets/icons/green_heart.png',
      lastPageMemojiAlt: 'green heart icon',
    },
    {
      titleColor: '#770DFF',
      descriptionColor: '#770DFF',
      wrapperColor: '#AB41FF',
      descriptionMemojiPath: 'assets/icons/unicorn.png',
      descriptionMemojiAlt: 'unicorn icon',
      lastPageMemojiPath: 'assets/icons/purple_heart.png',
      lastPageMemojiAlt: 'purple heart icon',
    },
    {
      titleColor: '#FF9E0D',
      descriptionColor: '#FF9E0D',
      wrapperColor: '#FFB341',
      descriptionMemojiPath: 'assets/icons/pumpkin.png',
      descriptionMemojiAlt: 'pumpkin icon',
      lastPageMemojiPath: 'assets/icons/orange_heart.png',
      lastPageMemojiAlt: 'orange heart icon',
    },
    {
      titleColor: '#FF0D90',
      descriptionColor: '#FF0D90',
      wrapperColor: '#FF41B3',
      descriptionMemojiPath: 'assets/icons/flower.png',
      descriptionMemojiAlt: 'flower icon',
      lastPageMemojiPath: 'assets/icons/hearts.png',
      lastPageMemojiAlt: 'hearts icon',
    },
    {
      titleColor: '#FF0D0D',
      descriptionColor: '#FF0D0D',
      wrapperColor: '#FF4141',
      descriptionMemojiPath: 'assets/icons/strawberry.png',
      descriptionMemojiAlt: 'strawberry icon',
      lastPageMemojiPath: 'assets/icons/rose.png',
      lastPageMemojiAlt: 'rose icon',
    },
    {
      titleColor: '#0DA8FF',
      descriptionColor: '#0DA8FF',
      wrapperColor: '#41BBFF',
      descriptionMemojiPath: 'assets/icons/ice.png',
      descriptionMemojiAlt: 'ice icon',
      lastPageMemojiPath: 'assets/icons/white_heart.png',
      lastPageMemojiAlt: 'white heart icon',
    },
  ];

  public selectedTheme: Theme = this.themes[0];

  ngOnInit(): void {
    this.selectedTheme =
      this.themes[Math.floor(Math.random() * this.themes.length)];
  }
}
