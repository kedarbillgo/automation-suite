import { chromium, FullConfig } from '@playwright/test';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
 
dotenv.config({
    path: '.env',
});
 
export default async function globalSetup(config: FullConfig) {
    if (process.env.username === '**TODO**') {
        throw new Error('Env file is not correct');
    }
 
    const { baseURL, storageState, ignoreHTTPSErrors, headless } = config.projects[0].use;
 
    const stats = fs.existsSync(storageState!.toString())
        ? fs.statSync(storageState!.toString())
        : null;
    if (stats && stats.mtimeMs > new Date().getTime() - 600000) {
        console.log(`\x1b[2m\tSign in skipped because token is fresh\x1b[0m`);
        return;
    }
 
    const browser = await chromium.launch({ headless });
    const context = await browser.newContext({ ignoreHTTPSErrors });
    const page = await context.newPage();
 
    console.log(`\x1b[2m\tSign in started against '${baseURL}'\x1b[0m`);
 
    await page.goto(baseURL!);
 
    console.log(`\x1b[2m\tSign in as '${process.env.username}'\x1b[0m`);
 
    await page.fill('input[name="Username"]', process.env.username as string);
    await page.fill('input[name="Password"]', process.env.password as string);
 
    console.log(`\x1b[2m\tSign in processing\x1b[0m`);
 
    await page.click('button >> text=Login');
 
    console.log(`\x1b[2m\tSign in processed\x1b[0m`);
 
    await page.evaluate(() => {
        window.localStorage.setItem('__language', 'en');
    });
 
    await page.context().storageState({ path: storageState as string });
    await browser.close();
}