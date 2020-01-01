import * as React from 'react';
import './rock-star-artist-list.component.scss';
import {Artist} from "../../models/artist.model";
import RockStarArtistComponent from "../rock-star-artist/rock-star-artist.component";
import {History } from "history";

export interface Props {
    listArtists: Artist[];
    history: History
}
interface State {
}

class RockStarArtistListComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            // artists: null
        };
    }

    navigateToArtist(artistId:number) {
        this.props.history.push('/artist/' + artistId);
    }

    render() {
        const { listArtists } = this.props;
        const listArtistsView = listArtists.length > 0 ? (
            listArtists.map(artist => {
                return (
                        <RockStarArtistComponent
                            onClick={()=>{this.navigateToArtist(artist.id)}}
                            key={artist.id}
                            id={artist.id}
                            name={artist.name}
                            dateOfBirth={artist.date_of_birth}
                            greatestHits={artist.all_songs}
                            imageUrl={artist.image_url}
                            bandMembers={artist.band_members}
                            genres={artist.genres}>
                        </RockStarArtistComponent>
                )
            })
        ) : (
            <div>No artist to show</div>
        );

        return (
            <div className="RockStarArtistListComponent">
                {listArtistsView}
            </div>
        )
    }
}

export default RockStarArtistListComponent;
