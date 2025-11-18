import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from '@theme/CodeBlock';

export default function CLISetup() {
    const frameworks = ["sveltekit", "nextjs"]
    const packageManagers = [
        { name: "npm", command: "install" },
        { name: "pnpm", command: "install" },
        { name: "yarn", command: "add" },
        { name: "bun", command: "add" },
    ];
    return (
        <>
            <p>
                To setup the <strong>Mecha Agent Inference Client</strong> into your project manually you need to install the right package
                for your framework first.
            </p>

            <Tabs groupId="frameworks">
                {frameworks.map((framework) => (
                    <TabItem value={framework} label={framework}>
                        <Tabs groupId="package-managers">
                            {packageManagers.map((packageManager) => (
                                <TabItem value={packageManager.name} label={packageManager.name}>
                                    <pre>
                                        <code>
                                            {packageManager.name} {packageManager.command} @mecha_agent_inference_client/{framework}
                                        </code>
                                    </pre>
                                </TabItem>
                            ))}
                        </Tabs>
                    </TabItem>
                ))}
            </Tabs>

            <p>Then create the API route handler file of the backend side of the <strong>Mecha Agent Inference Client</strong> in your project</p>
            <Tabs groupId="frameworks" >
                <TabItem value="nextjs" label="Next.js">
                    <CodeBlock
                        language="ts"
                        title="app/api/mecha-agent/route.(ts or .js)"
                        showLineNumbers
                    >
                        {`\
import { handler } from "@mecha_agent_inference_client/nextjs";

const routeHandler = handler({ agentId: "..." })

export { routeHandler as GET, routeHandler as POST };\
                        `}
                    </CodeBlock>
                </TabItem>
                <TabItem value="sveltekit" label="Sveltekit">
                    <CodeBlock
                        language="ts"
                        title="routes/api/mecha-agent/+server.(ts or .js)"
                        showLineNumbers
                    >
                        {`\
import { handler } from "@mecha_agent_inference_client/sveltekit/server";

export const fallback = handler({ agentId: "..." })\
                    `}
                    </CodeBlock>
                </TabItem>
            </Tabs>
        </>
    );
}
