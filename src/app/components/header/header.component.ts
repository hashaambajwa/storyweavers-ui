import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'StoryWeavers';
  randomQuote: string = '';
  navLinks = ['Home', 'Stories', 'About', 'Contact'];

  quotes = [
    "Imagination is the only weapon in the war against reality.",
    "There is no greater agony than bearing an untold story inside you.",
    "Stories are a communal currency of humanity.",
    "A reader lives a thousand lives before he dies.",
    "Storytelling is the most powerful way to put ideas into the world."
  ];

  ngOnInit() {
    this.randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }
}
