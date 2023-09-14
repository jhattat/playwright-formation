
const { FullConfig } = require("@playwright/test");
const dotenv = require('dotenv');

async function globalSetup(config) {

  if(process.env.context) {
    dotenv.config({
      path: `envs/.env.${process.env.context}`,
      override: true
    });
  } else {
    dotenv.config({
      path: `envs/.env.lmfr-prod`,
      override: true
    });
  }
}
  
module.exports = globalSetup;