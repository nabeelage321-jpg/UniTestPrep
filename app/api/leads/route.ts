import { NextResponse } from "next/server"
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "fs"
import { join } from "path"

const DATA_DIR = join(process.cwd(), "data")
const LEADS_FILE = join(DATA_DIR, "leads.json")

// TODO: This local JSON file storage is only for local development.
// Vercel production uses an ephemeral/read-only filesystem, so this
// must be replaced with a real database (for example Supabase free-tier)
// before deploying live.
function ensureLeadsFile() {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true })
  }
  if (!existsSync(LEADS_FILE)) {
    writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), "utf8")
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, examId, examName, score, overallAccuracy, bandLabel, attemptId, timeSpent, attemptedAt } = body

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 })
    }

    ensureLeadsFile()

    const raw = readFileSync(LEADS_FILE, "utf8")
    const leads = Array.isArray(JSON.parse(raw)) ? JSON.parse(raw) : []
    const nextLead = {
      email: email.trim().toLowerCase(),
      examId,
      examName,
      score,
      overallAccuracy,
      bandLabel,
      attemptId,
      timeSpent,
      attemptedAt: typeof attemptedAt === "number" ? attemptedAt : Date.now(),
      savedAt: Date.now(),
    }

    leads.push(nextLead)
    writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf8")

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to save lead." },
      { status: 500 },
    )
  }
}
