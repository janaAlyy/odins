import { promises as fs } from "node:fs";
import path from "node:path";

import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload;

    const payload = {
      name: data.name?.trim() ?? "",
      company: data.company?.trim() ?? "",
      email: data.email?.trim() ?? "",
      phone: data.phone?.trim() ?? "",
      service: data.service?.trim() ?? "",
      message: data.message?.trim() ?? ""
    };

    if (!payload.name || !payload.company || !payload.email || !payload.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!isEmail(payload.email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "content", "contact-submissions.json");
    const currentRaw = await fs.readFile(filePath, "utf8").catch(() => "[]");
    const current = JSON.parse(currentRaw) as Array<Record<string, string>>;

    const entry = {
      id: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
      ...payload
    };

    current.push(entry);
    await fs.writeFile(filePath, JSON.stringify(current, null, 2), "utf8");

    // Placeholder: integrate transactional email or CRM webhook here.
    console.log("[ODIN_CONTACT_SUBMISSION]", entry);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Contact submission failed", error);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
