import * as React from 'react';
import './rock-star-artist-page.component.scss';
import {Artist} from "../../models/artist.model";
import {RockStarApiService} from "../../services/rock-star-api.service";

export interface Props {
    match:any
}
interface State {
    artist: Artist|null;
}

class RockStarArtistPageComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            artist: null
        };
        this.rockStarApiService = new RockStarApiService();
    }

    rockStarApiService: RockStarApiService;

    componentDidMount(){
        let id = this.props.match.params.id;
        this.rockStarApiService.getArtist(id, res => {
            console.log(res.data);
            this.setState({
                artist: res.data
            });
        });
    }

    render() {
        const artist = this.state.artist ? (
            <div className="main-title">{this.state.artist.name}</div>
        ) : (
            <div>Loading artist...</div>
        );

        return (
            <div className="RockStarMainComponent">
                {artist}
            </div>
        )

    }
}

export default RockStarArtistPageComponent;
