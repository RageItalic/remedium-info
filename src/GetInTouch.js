import React, {Component} from 'react';
import fire from './fire';

class GetInTouch extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			buttonClicked: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event) {
		console.log(event.target.value)
		this.setState({
			email: event.target.value
		})
	}

	handleClick(event) {
		event.preventDefault();
		fire.database().ref('emails').push(this.state.email)
		this.setState({
			email: 'Thank You.',
			buttonClicked: true
		});
	}

	render () {
		console.log(this.state)
		return (
			<div className="container">
				<div className="columns is-centered is-mobile">
					<div className="field is-grouped is-6-mobile">
					    <p className="control">
					    	<input className="input" type="text" placeholder="Your Email" value={this.state.email} onChange={this.handleChange}/>
					    </p>
						{this.state.buttonClicked === false &&
						  <p className="control">
						    <a className="button is-info" onClick={this.handleClick}>
						      I'm Interested
						    </a>
						  </p>
					 	}
					</div>
				</div>
			</div>
		)
	}
}

export default GetInTouch;