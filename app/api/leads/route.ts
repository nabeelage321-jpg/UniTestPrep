import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY
const supabaseClient = createClient(supabaseUrl ?? "", supabaseKey ?? "")

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, examId, examName, score, overallAccuracy, bandLabel, attemptId, timeSpent, attemptedAt } = body

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 })
    }

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: "Supabase credentials are not configured." }, { status: 500 })
    }

    // Map incoming camelCase fields to snake_case DB columns used in Supabase
    const leadToInsert = {
      email: email.trim().toLowerCase(),
      exam_id: examId,
      exam_name: examName,
      score,
      overall_accuracy: overallAccuracy,
      band_label: bandLabel,
      attempt_id: attemptId,
      time_spent: timeSpent,
      // Supabase timestamptz columns expect ISO date strings, not raw epoch ms.
      attempted_at:
        typeof attemptedAt === "number" ? new Date(attemptedAt).toISOString() : new Date().toISOString(),
      saved_at: new Date().toISOString(),
    }

    const { data, error } = await supabaseClient.from("leads").insert([leadToInsert])

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to save lead." },
      { status: 500 },
    )
  }
}
