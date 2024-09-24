import { inngest } from '../client';

const sendEmail = async (to: string, subject: string, body: string) => {
    // send an email using your email provider
    console.log(`Sending email to ${to} with subject: ${subject}`);
    console.log(body);
    return { to, subject, body, id: "email-id" };
  }

export const signupDripCampaign = inngest.createFunction(
    { id: "signup-drip-campaign" , name : "Signup Drip Campaign"},
    { event: "app/signup.completed" },
    async ({ event, step }) => {
      const { user } = event.data;
      const { email, firstName } = user
      const welcome = "Welcome to ACME";
  
      const { id: emailId } = await step.run("welcome-email", async () => {
        return await sendEmail(
          email,
          welcome,
          `<div>
            <h1>Welcome to ACME, ${user.firstName}</h1>
          </div>`
        );
      });
  
      // Wait up to 3 minutes for the user open the email and click any link in it
      const clickEvent = await step.waitForEvent("wait-for-engagement", {
        event: "resend/email.clicked",
        if: `async.data.email_id == ${emailId}`,
        timeout: "3 minutes",
      });
  
      // if the user clicked the email, send them power user tips
      if (clickEvent) {
        await step.sleep("delay-power-tips-email", "1 day");
        await step.run("send-power-user-tips", async () => {
          await sendEmail(
            email,
            "Supercharge your ACME experience",
            `<h1>
              Hello ${firstName}, here are tips to get the most out of ACME
            </h1>`
          );
        });
  
        // wait one more day before sending the trial offer
        await step.sleep("delay-trial-email", "1 day");
      }
  
      // check that the user is not already on the pro plan
      const dbUser = {
        plan: "free",
      }
  
      if (dbUser.plan !== "pro") {
        // send them a free trial offer
        await step.run("trial-offer-email", async () => {
          return await sendEmail(
            email,
            "Free ACME Pro trial",
            `<h1>
              Hello ${firstName}, try our Pro features for 30 days for free
            </h1>`
          );
        });
      }
    }
  );
  