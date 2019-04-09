'use strict';

// Create an event module that has a single event emitter instance

const EE = require('events');

const events = new EE();

module.exports = events;