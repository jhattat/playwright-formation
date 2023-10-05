// documentation : https://playwright.dev/docs/api-testing#writing-tests
// service path : https://gtdp.priv.api.devportal.adeo.cloud/api-datahunt-adeo-network/v1/query
// request : SELECT AdeoKey FROM `dfdp-datahunt-uat.datahunt_QA_views_uat.LMFR - SFS Std` WHERE ContextCode = '176' LIMIT 1
// header : x-gateway-apikey : ph4dV7TN1wyzPnjyBpCVkH7TxQfjQjMS

import { test, expect } from '@playwright/test'

test.describe('test api', () => {

    test.skip('should create a bug report @skip', async ({ request }) => {
        const newIssue = await request.post(`https://gtdp.priv.api.devportal.adeo.cloud/api-datahunt-adeo-network/v1/query`, {
            headers: {
                // We set this header per GitHub guidelines.
                //'Accept': 'application/vnd.github.v3+json',
                // Add authorization token to all requests.
                // Assuming personal access token available in the environment.
                'x-gateway-apikey': `ph4dV7TN1wyzPnjyBpCVkH7TxQfjQjMS`,
            },
            data: {
                body: "SELECT AdeoKey FROM `dfdp-datahunt-uat.datahunt_QA_views_uat.LMFR - SFS Std` WHERE ContextCode = '176' LIMIT 1",
            }
        });
        expect(newIssue.status()).toBe(200)
        expect(newIssue.ok()).toBeTruthy();
    });
});