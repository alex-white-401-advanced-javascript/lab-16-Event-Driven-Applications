'use strict';

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const events = require('./event-pool.js');
require('./logger.js');
// require('./cache.js');

/**
 * Takes in a file
 * @param  {} file 
 * Reads the file
 * @param  {} =>{fileReader(file
 * Gets data from file and uppercases it
 * @param  {} textData
 * @param  {} .then(data => {@param {} lettextData = uppercaseFile(data)
 * Writes uppercased data back to file
 * @param  {} returnfileWriter(@param {} file)
 * Rather than throwing errors and console.log() inline, fire events
 * @param  {} .then( () => events.emit('Finished', @param {} file)
 * @param  {} .catch(error=>events.emit('Error', @param {} error)
 */
const alterFile = (file) => {
  fileReader(file)
    .then( data => {
      let textData = uppercaseFile(data);
      return fileWriter(file, textData);
    })
    .then(() => events.emit('Finished', file))
    .catch(error => events.emit('Error', error));
};

/**
 * Read the file from the file system
 * @param  {} file 
 * @param  {} {returnreadFile(file
  */
function fileReader(file) {
  return readFile(file);
}
  
/**
   *  Convert it's contents to upper case
   * @param  {} data
   * @param  {} {returnBuffer.from(data.toString(
   * @param  {} .toUpperCase(
    */
function uppercaseFile(data) {
  return Buffer.from(data.toString().toUpperCase());
}
    
/**
     * Write it back to the file system
     * @param  {} file
     * @param  {} data
     * @param  {} {returnwriteFile(file
     * @param  {} data
     */
function fileWriter(file, data) {
  return writeFile(file, data);
}
    
module.exports = {
  fileReader,
  uppercaseFile,
  fileWriter,
};

// node app.js test.txt
let file = process.argv.slice(2).shift();
alterFile(file);