import * as emails from './functions/emails';

export const functions = [
    ...Object.values(emails)
];

export { inngest } from './client';