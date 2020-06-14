import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  loading = false;
  error = null;
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('درباره');
  }
}
