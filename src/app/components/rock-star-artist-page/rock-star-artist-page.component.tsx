import * as React from 'react';
import './rock-star-artist-page.component.scss';
import {Artist} from "../../models/artist.model";
import axios from 'axios'

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
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        axios.get('http://localhost:4009/artist/' + id)
            .then(res => {
                this.setState({
                    artist: res.data
                });
                //console.log(res.data);
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
