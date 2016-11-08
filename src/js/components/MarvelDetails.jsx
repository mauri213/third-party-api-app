var React = require('react');

var MarvelDetails = React.createClass({
	render: function () {
		return (
			<div>
				<h4>Description</h4>
				<p>{this.props.hero.description}</p>
			</div>
		);
	}
});

module.exports = MarvelDetails;