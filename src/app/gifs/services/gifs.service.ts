import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    this._tagsHistory.unshift(tag);
    console.log("Desde el servicio -->", this._tagsHistory)
    // this._tagsHistory = this._tagsHistory.slice(0, 10);
  }
}
