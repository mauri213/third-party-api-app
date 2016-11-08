var React = require('react');

var MarvelList = require('./MarvelList.jsx');

var App = React.createClass({
	render: function () {
		return (
			<main>
				<h1>Cerebro</h1>
				<MarvelList />
			</main>
		);
	}

});

module.exports = App;