import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = "lEvlUN6i1Ib643SOIJ5tIARQjXP4yccY";
  private serviceUrl: string = "https://api.giphy.com/v1/gifs";
  private _tagsHistory: string[] = [];
  // private _tagsHistory: Set<string> = new Set<string>();

  constructor( private http: HttpClient ) { }

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

    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("limit", "10")
      .set("q", tag)

    this.http.get(`${this.serviceUrl}/search`, { params })
      .subscribe( (response: any) => {
        console.log({response});
      });
  }
}
