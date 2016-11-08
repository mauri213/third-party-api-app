var EventEmitter = require('eventEmitter3');
var $ = require('jquery');

var marvelStore = Object.create(EventEmitter.prototype);
EventEmitter.call(marvelStore);

var heroes = [];

marvelStore.getHeroes = function () {
	return heroes;
};

marvelStore.fetchHeroes = function (offset) {
	offest = offset || 0;

	$.ajax({
		url: 'https://gateway.marvel.com/v1/public/characters?apikey=507d1910c614c046ed94c1e4643096a2&offset=' + offset,
		success: function (response) { 
			var results = response.data.results;
			heroes = heroes.concat(results);
			marvelStore.emit('update');
		}
	});

	return heroes;
};

// window.marvelStore = marvelStore;

module.exports = marvelStore;