import { inngest } from "@/inngest";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { tenantId, count } = body;
  inngest.send({
    name: "ai/vetting.initiate",
    data: {
      tenantId,
      count,
    },
    user: {
      userId: tenantId,
    },
  });
  return NextResponse.json({ message: "Success" });
}
