var React = require('react');

var marvelStore = require('../stores/marvelStore');
var MarvelListItem = require('./MarvelListItem.jsx');

var MarvelList = React.createClass({
	getInitialState: function () {
		return {
			offset: 20,
			heroes: marvelStore.fetchHeroes()
		};
	},

	componentWillMount: function () {
		var _this = this;
		marvelStore.on('update', function () {
			_this.setState({
				heroes: marvelStore.getHeroes()
			});
		});
	},

	render: function () {
		var marvelListItems = this.state.heroes.map(function (hero) {
			return <MarvelListItem key={hero.id} hero={hero} />;
		});
		return (
			<div>
				{marvelListItems}
				Loaded: {this.state.heroes.length}
				<a href="#" onClick={this.handleLoadClick}>(Load More)</a>
			</div>
		);
	},

	handleLoadClick: function () {
		this.setState({
			offset: this.state.offset + 20
		});
		marvelStore.fetchHeroes(this.state.offset);
	}
});

module.exports = MarvelList;