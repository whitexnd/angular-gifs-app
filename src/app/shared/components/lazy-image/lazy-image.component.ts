import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit{
  @Input()
  url!: string;

  @Input()
  alt: string = '';

  hasLoaded: boolean = false;

  ngOnInit(): void {
      if(!this.url) throw new Error('URL property is required');
  }

  onLoad(){
    this.hasLoaded = true;
  }
}
