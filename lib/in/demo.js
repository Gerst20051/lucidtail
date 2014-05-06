/**
		lucidtail
		ie. lucidtail *.log
		Copyright (C) 2013	David Duong

		https://github.com/davidnqd/lucidtail

		This program is free software: you can redistribute it and/or modify
		it under the terms of the GNU Affero General Public License as published by
		the Free Software Foundation, either version 3 of the License, or
		(at your option) any later version.

		This program is distributed in the hope that it will be useful,
		but WITHOUT ANY WARRANTY; without even the implied warranty of
		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.	See the
		GNU Affero General Public License for more details.

		You should have received a copy of the GNU Affero General Public License
		along with this program.	If not, see <http://www.gnu.org/licenses/>.
*/
var EventEmitter = require('events').EventEmitter;

/**
 * Example demonstrating creating an emitter which sends a test messages every second
 */
module.exports = function (name) {
	var result = new EventEmitter();
	var message = [
					'Exception in thread "main" java.lang.NullPointerException',
					'Actually, this is lucidTAIL configured to listen to nothing;',
					'but, instead of nothing, lucidTAIL will broadcasts a line of this message.',
					'lucidTAIL is a real-time zero-configuration web-based tail.',
					'It broadcasts events such as new lines added to any monitored files, new UDP messages, and those emitted by other EventEmitters to your browser',
					'.. as you can clearly see.',
					'Homepage: https://github.com/davidnqd/lucidtail',
					'Not sure what else to put here..',
					'Now.. to back these messages with a circular buffer (looking at you MongoDB)'
				];

	var i = 0;
	setInterval(function() {
		result.emit('data', {data: message[i++], source: name, 'a key': 'a value'});
		if (i >= message.length) i = 0;
	}, 1500);

	return result;
}