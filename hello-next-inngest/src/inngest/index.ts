import * as emails from "./functions/emails";
import * as emailSequence from "./functions/email-sequence";
import * as aiVetting from "./functions/ai-vetting";

export const functions = [
  ...Object.values(emails),
  ...Object.values(emailSequence),
  ...Object.values(aiVetting),
];

export { inngest } from "./client";
