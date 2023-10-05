// Ressource : https://playwright.dev/docs/api/class-apirequestcontext#api-request-context-get

import { test, expect } from '@playwright/test'

test.describe('test api', () => {

  test('Call opus content', async ({ request }) => {
    const newIssue = await request.get(`https://ccdp-uat1.priv.nprd.api.devportal.adeo.cloud/api-opus-product-and-decision-query/v1/api/product_details/82389957?compose=commercial-operations,enrichment,meshing,gtins`, {
        headers: {
          "X-BU-Code": `LMFR`,
          "X-ClientApiKey": `tOxg1QZWXGGRn0YaRgqzUP8TbDeNcH1J`,
        }
    });

    const body = await newIssue.json();
    expect(newIssue.status()).toBe(200)
    expect(body.code).toEqual('82389957');
    console.log(await newIssue.json())
    
    });
});