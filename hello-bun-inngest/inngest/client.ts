import { Inngest, EventSchemas } from 'inngest';
import type { EventUnion } from './events';

export const inngest = new Inngest({ 
    id: 'demo-app',  
    schemas: new EventSchemas().fromUnion<EventUnion>()
});