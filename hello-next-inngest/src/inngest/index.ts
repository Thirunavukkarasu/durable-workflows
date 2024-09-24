import * as emails from './functions/emails';
import * as emailSequence from './functions/email-sequence';

export const functions = [
    ...Object.values(emails),
    ...Object.values(emailSequence)
];

export { inngest } from './client';