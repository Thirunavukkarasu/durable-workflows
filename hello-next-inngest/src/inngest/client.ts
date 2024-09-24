import { Inngest } from "inngest";
// import type { EventUnion } from './events';

// Create a new Inngest client to send and receive events
export const inngest = new Inngest({
    id: 'demo-app',
    // schemas: new EventSchemas().fromUnion<EventUnion>()
})