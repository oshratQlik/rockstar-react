import * as React from 'react';
import './rock-star-artist.component.scss';
import {Song} from "../../models/song.model";
import {Genre} from "../../models/genre";

export interface Props {
    id: number;
    name: string;
    dateOfBirth: number;
    greatestHits: Song[];
    bandMembers: string[];
    genres: Genre[];
    imageUrl:string;
    onClick: ()=>void
}
interface State {

}

class RockStarArtistComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <div className="RockStarArtistComponent">
                <div className="artist-wrap" onClick={()=>{this.props.onClick()}}>
                    <div className="image"></div>
                    <div className="data-wrap">
                        <div className="line">
                            <span className="title">Name:</span>
                            <span className="content">{this.props.name}</span>
                        </div>

                        <div className="line">
                            <span className="title">Date of birth:</span>
                            <span className="content">{this.props.dateOfBirth}</span>
                            <span>-</span>
                        </div>

                        <div className="line">
                            <span className="title">Band members:</span>
                            <span className="content"></span>
                            <span>{this.props.bandMembers[0]}</span>
                            <span className="comma">,</span>
                            <span>-</span>
                        </div>

                        <div className="line">
                            <span className="title">Genres:</span>
                            <span className="content">
                            <span>{this.props.genres[0]}</span>
                            <span className="comma">,</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default RockStarArtistComponent;
