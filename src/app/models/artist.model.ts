import {Song} from "./song.model";
import {Genre} from "./genre";

export class Artist {

  constructor(
              public id: number,
              public name: string,
              public date_of_birth: number, // timestamp
              public all_songs: Song[],
              public greatest_hits: string[],
              public image_url: string,
              public band_members: string[],
              public genres: Genre[]
  ) {}
}
