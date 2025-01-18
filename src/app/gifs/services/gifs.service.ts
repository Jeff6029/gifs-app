import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = "lEvlUN6i1Ib643SOIJ5tIARQjXP4yccY";
  private _tagsHistory: string[] = [];
  // private _tagsHistory: Set<string> = new Set<string>();

  constructor() { }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  organizeHistory(tag: string): void {
    tag = tag.trim().toLowerCase();
    this._tagsHistory = this._tagsHistory.filter(
      (oldTag: string) => oldTag !== tag
    );

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);

    // this._tagsHistory = new Set<string>([tag, ...this._tagsHistory].slice(0,10));   // si deseas trabajarlo como set de string donde las claves no se repiten
  }

  searchTag(tag: string): void {
    if(tag.length === 0) return;
    this.organizeHistory(tag);
  }
}
