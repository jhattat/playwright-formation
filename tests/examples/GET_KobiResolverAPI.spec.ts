// ressource : https://playwrightsolutions.com/the-definitive-guide-to-api-test-automation-with-playwright-part-2-adding-more-in-depth-checks/
// url : https://gtdp-uat1.priv.nprd.api.devportal.adeo.cloud/api-kobi-resolver/v2/sites/ID565159b139084b7096b35f4bb8373fd9/locales/fr-FR/resources/PRODUCT/75768434?mode=USE_CACHE
// url resolver : https://leroymerlin-frlm-uat1.nprd-02-a9ef.priv.manawa.adeo.cloud/produits/materiaux-menuiserie/toiture-charpente-et-bardage/bardage-et-clin/clin-pour-bardage-pvc-blanc-ral-9003-freefoam-faza-design-2-4-m-75768434.html
import { test, expect } from '@playwright/test'

const baseUrl = 'https://ccdp-uat1.priv.nprd.api.devportal.adeo.cloud'
const siteId = 'ID565159b139084b7096b35f4bb8373fd9';
const locales = 'fr-FR';
const reference = '82389957';
let resourceId;
let path;

test.describe('test api', () => {

  test.beforeEach(async ({ request }) => {
    const newIssue = await request.get(`${baseUrl}/api-kobi-resolver/v2/sites/${siteId}/locales/${locales}/resources/PRODUCT/${reference}?mode=USE_CACHE`, {
      headers: {
        "X-BU-Code": `LMFR`,
        "X-ClientApiKey": `iC8ElSdF23lpQTbvp5vo6QZS94ZNHPQA`,
      }
    });

    const body = await newIssue.json();
    console.log(await newIssue.json());
    expect(newIssue.status()).toBe(200);
    expect(body.resourceId).toEqual('82389957');
    resourceId=body.resourceId;
    path=body.path;
  });
  
  test(`Access to product page`, async ({ page }) => {
    await page.goto(`https://leroymerlin-frlm-uat1.nprd-02-a9ef.priv.manawa.adeo.cloud/${path}`);
    await page.waitForTimeout(3000);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

});