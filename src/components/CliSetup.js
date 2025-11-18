import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Admonition from '@theme/Admonition';

export default function CLISetup() {

  const frameworks = ["sveltekit", "nextjs"]
  const packageManagers = [
    { name: "npm", command: "npx" },
    { name: "pnpm", command: "pnpm dlx" },
    { name: "yarn", command: "yarn dlx" },
    { name: "bun", command: "bunx" },
  ];

  return (
    <>
      <p>
        With our <strong>CLI</strong> tool you can easily add The <strong>Mecha Agent Inference Client</strong> into your project by a single command 👇
      </p>
      <Tabs groupId="frameworks">
        {frameworks.map((framework) => (
          <TabItem value={framework} label={framework}>
            <Tabs groupId="package-managers">
              {packageManagers.map((packageManager) => (
                <TabItem value={packageManager.name} label={packageManager.name}>
                  <pre>
                    <code>
                      # omit '-ts' flag if you don't use TypeScript <br />
                      {packageManager.command} @mecha_agent_inference_client/cli {framework} -ts
                    </code>
                  </pre>
                </TabItem>
              ))}
            </Tabs>
          </TabItem>
        ))}
      </Tabs>

      <Admonition type="info">
        After running the CLI tool, you should see that a new package has been added to your dependencies and a new API route handlers file has been created.
      </Admonition>
    </>
  );
}
