import * as React from 'react';
import './rock-star-header.component.scss';
import Icon from '@material-ui/core/Icon';

export interface Props {
}
interface State {
    userName: string,
	appVersion: string,
	date: string
}

class RockStarHeaderComponent extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {
			userName: "Oshrat",
			appVersion: "1.0.0",
			date: ""
		};
	}

	checkTime(i:number):string {
		let j = String(i);
		if (i < 10) {
			j = "0" + String(i);
		}
		return j;
	}

	getDate() {
		let day = new Date().getDate(); //Current Date
		let month = this.checkTime(new Date().getMonth() + 1); //Current Month
		let year = new Date().getFullYear().toString().substr(-2); //Current Year
		let hours = this.checkTime(new Date().getHours()); //Current Hours
		let min = this.checkTime(new Date().getMinutes()); //Current Minutes
		// let sec = this.checkTime(new Date().getSeconds()); //Current Minutes

		this.setState({
			//Setting the value of the date time
			date: day + '/' + month + '/' + year + ' ' + hours + ':' + min,
		});
	}

	componentDidMount() {
		this.getDate();
		setInterval(() => {
			this.getDate();
			}, 1000*60);
	}

    render() {
        return (
            <div className="RockStarHeaderComponent">
	            <div className="header-wrap">
		            <div className="user-wrap">
						<Icon className="header-icon user">account_circle</Icon>
						<span className="header-data">Hello</span>
			            <span className="header-title">{this.state.userName}</span>
		            </div>
		            <div className="details-wrap">
			            <span className="header-title">version:</span>
			            <span className="header-data version">{this.state.appVersion}</span>
						<span className="header-data date">{this.state.date}</span>
	            </div>
            </div>

            </div>
        );
    }
}

export default RockStarHeaderComponent;
