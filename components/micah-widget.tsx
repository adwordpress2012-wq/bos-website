"use client"

import { useEffect } from "react"

export function MicahWidget() {
  useEffect(() => {
    const existingMicahScript = document.querySelector<HTMLScriptElement>(
      'script[src^="https://chatos.com.au/micah-widget.js"]',
    )
    const micahScript = existingMicahScript ?? document.createElement("script")

    if (!existingMicahScript) {
      micahScript.src = "https://chatos.com.au/micah-widget.js"
      micahScript.async = true
      micahScript.setAttribute("data-client-id", "micah-demo")
      document.body.appendChild(micahScript)
    }

    return () => {
      if (!existingMicahScript) micahScript.remove()
    }
  }, [])

  return null
}
