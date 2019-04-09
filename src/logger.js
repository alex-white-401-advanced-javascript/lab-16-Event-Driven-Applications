'use strict';

const events = require('./event-pool.js');

// Create a logger module that listens for and responds to events by doing a console.log() with something useful about the event.

events.on('Finished', handleCompleted);
events.on(`Error`, handleError);

function handleCompleted(file) {
  console.log(`${file} Saved!`);
}

function handleError(err) {
  throw err;
}