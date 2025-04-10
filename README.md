## Deploye your own
Run npm install to install dependencies in terminal.
Run npm run dev. It will prompt you to log into Convex and create a project.
It will then ask you to supply the CLERK_ISSUER_URL. To do this:
Make a Clerk account.
Copy both the CLERK_SECRET_KEY and NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY API keys into .env.local.
Do steps 1-3 here and copy the Issuer URL. It should look something like https://some-animal-123.clerk.accounts.dev.
Add CLERK_ISSUER_URL to your Convex Environment Variables Paste the Issuer URL as the value and click "Save".
Add CLERK_HOST_NAME to your Convex Environment Variables as for the value paste the CLERK_ISSUER_URL's value
From your CLERK account, under the WebHooks, add an endpoint which should look like this: https://your-convex-url.convex.site/clerk and select user.created user.updated session.created session.ended events. Copy the webhook secret and in your Convex Dashboard add this env variable CLERK_WEBHOOK_SECRET and paste the value
Now your frontend and backend should be running and you should be able to log in but not support OpenAI features.
Create an OpenAI account to get $5 of free credit or pay for your current account and get your OPENAI_API_KEY and add it to Convex Dashboard
To enable video calling, create a ZEGOCLOUD account, create a project and select voice && video calls. Paste ZEGO_APP_ID and ZEGO_SERVER_SECRET to .env.local and save

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
oy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
