"use client"

import { useEffect } from "react"

const MICAH_WIDGET_SCRIPT_SRC = process.env.NEXT_PUBLIC_MICAH_WIDGET_SCRIPT_SRC
const MICAH_WIDGET_CONTAINER_ID =
  process.env.NEXT_PUBLIC_MICAH_WIDGET_CONTAINER_ID ?? "micah-ai-receptionist-widget"

export function MicahWidget() {
  useEffect(() => {
    if (!MICAH_WIDGET_SCRIPT_SRC) {
      return
    }

    const hasSecretKey =
      MICAH_WIDGET_SCRIPT_SRC.includes("sk-proj-") ||
      MICAH_WIDGET_SCRIPT_SRC.includes("sk-")
    const isHttpUrl = /^https?:\/\//i.test(MICAH_WIDGET_SCRIPT_SRC)

    if (hasSecretKey) {
      console.warn(
        "Security Warning: Do NOT put sk/sk-proj keys in NEXT_PUBLIC_* variables. Use a public Micah widget URL.",
      )
      return
    }

    if (!isHttpUrl) {
      console.warn(
        "Micah Widget Warning: NEXT_PUBLIC_MICAH_WIDGET_SCRIPT_SRC must be a full http(s) script URL.",
      )
      return
    }

    if (
      process.env.NODE_ENV === "development" &&
      MICAH_WIDGET_SCRIPT_SRC.includes("sk-proj-")
    ) {
      console.warn(
        "Security Warning: Do NOT put sk-proj- keys in NEXT_PUBLIC_* variables—these are exposed to all clients.",
      )
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[data-micah-widget="true"]`,
    )

    if (existingScript) {
      return
    }

    const script = document.createElement("script")
    script.src = MICAH_WIDGET_SCRIPT_SRC
    script.async = true
    script.defer = true
    script.setAttribute("data-micah-widget", "true")
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return <div id={MICAH_WIDGET_CONTAINER_ID} />
}
