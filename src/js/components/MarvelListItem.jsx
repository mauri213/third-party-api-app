var React = require('react');

var MarvelDetails = require('./MarvelDetails.jsx')

var MarvelListItem = React.createClass({

	getInitialState: function () {
		return {
			detailsVisible: false
		}
	},
	render: function () {
		var details;

		if (this.state.detailsVisible) {
			details = <MarvelDetails hero={this.props.hero} />;
		}

		return (
			<div onClick={this.handleDetailsClick}>
				{this.props.hero.name}
				{details}
			</div>
		);
	},
	
	handleDetailsClick: function () {
		this.setState({
			detailsVisible: !this.state.detailsVisible
		});
	}
});

module.exports = MarvelListItem; 