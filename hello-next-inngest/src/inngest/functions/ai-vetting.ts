import { inngest } from "../client";

export const vettingInitiate = inngest.createFunction(
  { id: "ai/vetting.initiate", name: "AI Vetting Initiate" },
  { event: "ai/vetting.initiate" },
  async ({ event }) => {
    const { tenantId, count } = event.data;
    console.log(
      `AI Vetting initiated for tenant: ${tenantId} with count: ${count}`
    );
  }
);
