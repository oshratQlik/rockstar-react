import * as React from 'react';
import './app.component.scss';
import RockStarHeaderComponent from "./components/rock-star-header/rock-star-header.component";
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import RockStarMainComponent from "./components/rock-star-main/rock-star-main.component";
import RockStarArtistPageComponent from "./components/rock-star-artist-page/rock-star-artist-page.component";

export interface Props {
}
interface State {
}

class AppComponent extends React.Component<Props, State> {

    // constructor(props: Props) {
    //     super(props);
    // }

    render() {
        return (
            <BrowserRouter>
                <div className="AppComponent">
                    <RockStarHeaderComponent></RockStarHeaderComponent>
                    <Switch>
                        <Route exact path='/' component={RockStarMainComponent}/>
                        <Route path='/artist/:id' component={RockStarArtistPageComponent} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppComponent;
