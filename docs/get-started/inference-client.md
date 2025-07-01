---
title: Inference Client
description: A quick tutorial on how to integrate with the inference client.
sidebar_position: 2
---

# Inference Client

The **Mecha Agent Inference Client** is a package provides a Chat UI client you can put into your web apps so people on the internet can interact and chat with your agents through it.

In this quick tutorial, I’ll walk you through integrating the **Inference Client** into your existing web app so your 
visitors can engage with your AI agent.

Here is how the **Inference Client** look 👇

<Tabs groupId="theme">
    <TabItem value="dark" label="Dark">
    ![Mecha Agent Inference Client dark theme](/img/mecha-agent-interface-client-dark-theme.webp)
    </TabItem>
    <TabItem value="light" label="Light">
    ![Mecha Agent Inference Client light theme](/img/mecha-agent-interface-client-light-theme.webp)
    </TabItem>
</Tabs>

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note
    We currently support only `Next.js` and `Sveltekit` frameworks, So your web app must be built with these frameworks to be able to add the **Inference Client** into your app.
:::

<Tabs groupId="setup-method">
  <TabItem value="cli" label="CLI setup">
    With our **CLI** tool you can easily add The **Mecha Agent Inference Client** into your project by a single command 👇
    <Tabs groupId="frameworks">
        <TabItem value="nextjs" label="Next.js">
            ```shell
            npx @mecha_agent_inference_client/cli nextjs -ts
            ```
        </TabItem>
        <TabItem value="sveltekit" label="Sveltekit">
            ```shell
            npx @mecha_agent_inference_client/cli sveltekit -ts
            ```
        </TabItem>
    </Tabs>

    :::note
        You have to remove the `-ts` option if you use only **JavaScript** 
    :::

    :::tip
        You can use `pnpm dlx`, `yarn dlx` or `bunx` to run our `@mecha_agent_inference_client/cli` CLI tool.
    :::

    :::info
        After running the CLI tool, you should see that a new package has been added to your dependencies and a new API route handers file has been created.
    :::
  </TabItem>
  <TabItem value="manual" label="Manual setup">
    To setup the **Mecha Agent Inference Client** into your project manually you need to install the right package 
    for your framework first.
    <Tabs groupId="frameworks">
        <TabItem value="nextjs" label="Next.js">
            ```shell
            npm install @mecha_agent_inference_client/nextjs
            ```
        </TabItem>
        <TabItem value="sveltekit" label="Sveltekit">
            ```shell
            npm install @mecha_agent_inference_client/sveltekit
            ```
        </TabItem>
    </Tabs>

    :::tip
        Or use `pnpm install`, `yarn add`, `bun add` or `deno add npm:...` depending on which packages manager do you use
    :::

    Then create the API route handler file of the backend side of the **Mecha Agent Inference Client** in your project
    <Tabs groupId="framework">
        <TabItem value="nextjs" label="Next.js">
            ```ts
            // app/api/mecha-agent/route.(ts or .js) 
            import { handler } from "@mecha_agent_inference_client/nextjs";

            export const routeHandler = handler({
                agentId: process.env.AGENT_ID as string,
                apiKey: process.env.MECHA_AGENT_API_KEY as string,
            })

            export { routeHandler as GET, routeHandler as POST };
            ```

            :::note
                The API route handler file must be placed in `app/api/mecha-agent/route` file to be accessible via HTTP requests 
                from the frontend side of the inference client like this: 👇

                ```ts
                fetch("/api/mecha-agent")
                ```
            :::
        </TabItem>
        <TabItem value="sveltekit" label="Sveltekit">
            ```ts
            // routes/api/mecha-agent/+server.(ts or .js) 
            import { MECHA_AGENT_API_KEY, AGENT_ID } from "$env/static/private";
            import { handler } from "@mecha_agent_inference_client/sveltekit/server";

            export const fallback = handler({
                agentId: AGENT_ID,
                apiKey: MECHA_AGENT_API_KEY,
            })
            ```

            :::note
                The API route handler file must be placed in `routes/api/mecha-agent/+server` file to be accessible
                via HTTP requests from the frontend side of the inference client like this: 👇

                ```ts
                fetch("/api/mecha-agent")
                ```
            :::
        </TabItem>
    </Tabs>

  </TabItem>
</Tabs>

## Environment variables

Now you need to bring and set the values of `MECHA_AGENT_API_KEY` and `AGENT_ID` environment variables so that the 
**Mecha Agent Inference Client** works as it's supposed to be.

### Bring an API Key

To bring an API Key, Go to your account in **Mecha Agent App**, Navigate to `/api-keys` page, 
Create an API Key with `inference` and `read` permissions, Click on the "Copy" icon beside the Key in API keys table to 
copy it, And put the key in your `.env` file as `MECHA_AGENT_API_KEY=the API Key here` environment variable.

:::note
    The API Key must have `inference` and `read` permissions, Otherwise, The **Mecha Agent Inference Client** 
    will not work as expected.
:::

### Bring agent's id

To get your agent's id, Go to `/agents` page and click on your agent to open it up in its full page, 
Then click on the "copy" icon beside your agent's name to copy it's id, And past the id of the agent in your `.env` 
file as `AGENT_ID=agent's id here` environment variable.

## Usage 

Now you are ready to use the **Inference Client** in your app!, Just import the `MechaAgentChat` component and put it wherever you want in the UI of your project !.

<Tabs groupId="framework">
    <TabItem value="nextjs" label="Next.js">
    ```tsx
    import { MechaAgentChat } from "@mecha_agent_inference_client/nextjs";

    <MechaAgentChat /> // Put this somewhere
    ```
    </TabItem>
    <TabItem value="sveltekit" label="Sveltekit">
    ```jsx
    import { MechaAgentChat } from "@mecha_agent_inference_client/sveltekit";

    <MechaAgentChat /> // Put this somewhere
    ```
    </TabItem>
</Tabs>