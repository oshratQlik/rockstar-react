import * as React from 'react';
import './rock-star-main.component.scss';
import RockStarArtistListComponent from "../rock-star-artist-list/rock-star-artist-list.component";
import {Artist} from "../../models/artist.model";
import {History} from "history";
import {RockStarApiService} from "../../services/rock-star-api.service";

export interface Props {
    history: History
}
interface State {
    listArtists:Artist[]
}

class RockStarMainComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            listArtists: []
        };
        this.rockStarApiService = new RockStarApiService();
    }

    rockStarApiService: RockStarApiService;

    componentDidMount(){
        this.rockStarApiService.getListArtists(res => {
            console.log(res.data);
            this.setState({
                listArtists: res.data
            });
        });
    }


    render() {
        return (
            <div className="RockStarMainComponent">
                <RockStarArtistListComponent
                    history={this.props.history}
                    listArtists={this.state.listArtists}>
                </RockStarArtistListComponent>
            </div>
        );
    }
}

export default RockStarMainComponent;
