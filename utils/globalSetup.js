
const { FullConfig } = require("@playwright/test");
const dotenv = require('dotenv');

async function globalSetup(config) {

  if(process.env.context) {
    dotenv.config({
      path: `.env.${process.env.context}`,
      override: true
    });
  } else {
    dotenv.config({
      path: `.env.prod`,
      override: true
    });
  }
}
  
module.exports = globalSetup;