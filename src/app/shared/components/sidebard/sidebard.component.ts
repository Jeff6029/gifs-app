import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,

  templateUrl: './sidebard.component.html',
  styleUrl: './sidebard.component.css'
})
export class SidebardComponent {

  // public tagsHistory: string[] = [];

  constructor(
    private gifsService: GifsService
  ) {}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

}
