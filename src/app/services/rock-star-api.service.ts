import {DataService} from "./data-service.service";
import {Artist} from "../models/artist.model";

export class RockStarApiService extends DataService<Artist> {

  constructor() {
    super();
  }

  public getListArtists(onSuccess:(a:any)=>void) {
    let requestUrl = `${this.actionUrl}/artists`;
    this.get(requestUrl,onSuccess);
  }

  public getArtist(id:number,onSuccess:(a:any)=>void) {
    let requestUrl = `${this.actionUrl}/artist/${id}`;
    this.get(requestUrl,onSuccess);
  }


}
