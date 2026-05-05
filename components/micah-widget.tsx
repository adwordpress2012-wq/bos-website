"use client"

import { useEffect } from "react"

export function MicahWidget() {
  useEffect(() => {
    const existingInject = document.querySelector<HTMLScriptElement>(
      'script[data-botpress="inject-v36"]',
    )
    const existingConfig = document.querySelector<HTMLScriptElement>(
      'script[data-botpress="config-v36"]',
    )

    const injectScript = existingInject ?? document.createElement("script")
    if (!existingInject) {
      injectScript.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js"
      injectScript.async = true
      injectScript.setAttribute("data-botpress", "inject-v36")
      document.body.appendChild(injectScript)
    }

    const configScript = existingConfig ?? document.createElement("script")
    if (!existingConfig) {
      configScript.src =
        "https://files.bpcontent.cloud/2026/05/04/10/20260504103655-J6I7VTWP.js"
      configScript.defer = true
      configScript.setAttribute("data-botpress", "config-v36")
      document.body.appendChild(configScript)
    }

    return () => {
      if (!existingInject) injectScript.remove()
      if (!existingConfig) configScript.remove()
    }
  }, [])

  return null
}
