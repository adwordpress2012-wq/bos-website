"use client"

import { useEffect } from "react"
import { MessageCircle } from "lucide-react"

declare global {
  interface Window {
    botpress?: {
      open?: () => void
      on?: (event: string, callback: () => void) => void
      sendEvent?: (payload: unknown) => void
    }
  }
}

const BOTPRESS_BOT_ID = process.env.NEXT_PUBLIC_BOTPRESS_BOT_ID
const INJECT_SRC = "https://cdn.botpress.cloud/webchat/v2/inject.js"

export function MicahWidget() {
  useEffect(() => {
    if (!BOTPRESS_BOT_ID) {
      return
    }

    const existingInject = document.querySelector<HTMLScriptElement>('script[data-botpress="inject"]')
    const existingConfig = document.querySelector<HTMLScriptElement>('script[data-botpress="config"]')

    const injectScript = existingInject ?? document.createElement("script")
    if (!existingInject) {
      injectScript.src = INJECT_SRC
      injectScript.async = true
      injectScript.defer = true
      injectScript.setAttribute("data-botpress", "inject")
      document.body.appendChild(injectScript)
    }

    const configScript = existingConfig ?? document.createElement("script")
    if (!existingConfig) {
      configScript.src = `https://mediafiles.botpress.cloud/${BOTPRESS_BOT_ID}/webchat/v2/config.js`
      configScript.async = true
      configScript.defer = true
      configScript.setAttribute("data-botpress", "config")
      document.body.appendChild(configScript)
    }

    const applyTheme = () => {
      window.botpress?.sendEvent?.({
        type: "SET_CONFIG",
        config: {
          botName: "Micah",
          botDescription: "AI Receptionist by Directive OS",
          containerWidth: "100%",
          layoutWidth: "400px",
          themeColor: "#00FF9D",
          showPoweredBy: false,
          phone: "02 8880 4339",
          email: "jayson@chatos.com.au",
          phoneNumber: "02 8880 4339",
          emailAddress: "jayson@chatos.com.au",
        },
      })
    }

    window.botpress?.on?.("READY", applyTheme)

    return () => {
      if (!existingInject) injectScript.remove()
      if (!existingConfig) configScript.remove()
    }
  }, [BOTPRESS_BOT_ID])

  return (
    <button
      type="button"
      aria-label="Chat with Micah"
      onClick={() => window.botpress?.open?.()}
      className="btn-glow-pulse fixed bottom-5 right-5 z-[70] inline-flex items-center gap-2 rounded-full border border-primary/50 bg-[#101922] px-4 py-3 text-sm font-semibold text-primary shadow-[0_0_26px_rgba(0,255,157,0.35)]"
    >
      <MessageCircle className="h-4 w-4" />
      Chat with Micah
    </button>
  )
}
