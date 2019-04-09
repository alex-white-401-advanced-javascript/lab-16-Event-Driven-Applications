'use strict';

// const faker = require('faker');
const fileReader = require('../src/app.js').fileReader;
const uppercaseFile = require('../src/app.js').uppercaseFile;
const fileWriter = require('../src/app.js').fileWriter;

describe('app.js', () => {

  xit('fileReader() returns an error when given a bad file', () => {
    let file = 'bad.txt';
    return fileReader(file)
      .then(success => {
        expect(success).toBeFalsy();
      })
      .catch(err => {
        expect(err).toBeDefined();
      });
  });

  it('fileReader() can read a file succesfully', () => {
    let file = 'this.txt';
    return fileReader(file)
      .then( happy => {
        expect(happy).toBeDefined();
      });
  });

});
