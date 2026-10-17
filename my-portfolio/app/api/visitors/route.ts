import { Redis } from "@upstash/redis"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  console.log("url", url)
  console.log("token", token)


  if (!url || !token) {
    throw new Error("Upstash Redis environment variables are not configured")
  }

  return new Redis({ url, token })
}

export async function POST() {
  try {
    const visitors = await getRedis().incr("portfolio:page-views")

    return NextResponse.json(
      { visitors },
      { headers: { "Cache-Control": "no-store" } },
    )
  } catch (error) {
    console.error("Unable to record portfolio visit", error)
    return NextResponse.json(
      { error: "Unable to record visit" },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    const visitors =
      (await getRedis().get<number>("portfolio:page-views")) ?? 0

    return NextResponse.json(
      { visitors },
      { headers: { "Cache-Control": "no-store" } },
    )
  } catch (error) {
    console.error("Unable to read portfolio visits", error)
    return NextResponse.json(
      { error: "Unable to read visits" },
      { status: 500 },
    )
  }
}
