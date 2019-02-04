'use strict';

const fs = require('fs');
const path = require('path');

const FONT_AWESOME_NPM_REGISTRY = `@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=PUT TOKEN HERE
`;

function createNpmRcFile() {
  if (!fs.existsSync('.npmrc')) {
    try {
      fs.writeFileSync(path.join(__dirname, '../', '.npmrc'), FONT_AWESOME_NPM_REGISTRY);
    }
    catch(e) {
      console.error('Error creating npmrc file.', e);
    }
  }
}

createNpmRcFile();
