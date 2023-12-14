import 'dotenv/config';
import fetch from 'node-fetch';
import ping from 'ping';
import { CronJob } from 'cron';

new CronJob(
    '*/30 * * * * *',
    pushStatus,
    null,
    true,
    process.env.TZ
)

console.info("Started push job");

async function pushStatus() {
    try {
        const address = process.env.URL.split('/')[2];

        const { output, time } = await ping.promise.probe(address);

        if (time === 'unknown')
            throw new Error(output.split(':')[1].trim());

        const response = await fetch(process.env.URL + '?status=up&msg=OK&ping=' + Math.round(time));
        const data = await response.json();
        if (!data.ok)
            throw new Error(data.msg);
    }
    catch (e) {
        console.error("Check failed: " + e.message);
    }
}

pushStatus();