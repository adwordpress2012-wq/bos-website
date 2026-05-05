import Link from "next/link"

export function LiveDemoSection() {
  return (
    <section id="live-demo" className="scroll-mt-20 bg-muted py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Live Demo
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            See how Micah handles a real customer enquiry in seconds.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Interactive WhatsApp-style flow designed to convert enquiry to confirmed booking, instantly.
          </p>
          <Link
            href="#contact"
            className="btn-glow-pulse mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
          >
            Book Micah for Your Business
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative mx-auto h-[600px] w-[300px] rounded-3xl border-[14px] border-[#2A2A2A] bg-[#18181B] shadow-[0_0_20px_rgba(0,255,157,0.3)]">
            <div className="absolute -left-[17px] top-[72px] h-[32px] w-[3px] rounded-s-lg bg-[#2A2A2A]" />
            <div className="absolute -left-[17px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-[#2A2A2A]" />
            <div className="absolute -left-[17px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-[#2A2A2A]" />
            <div className="absolute -right-[17px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-[#2A2A2A]" />

            <div className="flex h-full w-full flex-col overflow-hidden rounded-[2rem] bg-[#18181B]">
              <div className="flex items-center gap-3 bg-[#202C33] p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  M
                </div>
                <div className="text-sm font-semibold text-white">
                  Micah (AI Receptionist)
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-4 text-[12px]">
                <div className="max-w-[80%] self-start rounded-lg border-l-4 border-primary bg-[#202C33] p-2 text-white">
                  Table for 4 tonight at 7pm
                </div>
                <div className="max-w-[80%] self-end rounded-lg bg-[#005C4B] p-2 text-white">
                  Hey. I can help with that. Just confirming - 4 guests at 7:00pm tonight?
                </div>
                <div className="max-w-[80%] self-start rounded-lg border-l-4 border-primary bg-[#202C33] p-2 text-white">
                  Yes
                </div>
                <div className="max-w-[80%] self-end rounded-lg bg-[#005C4B] p-2 text-white">
                  Perfect. You are booked for 7:00pm tonight. I have updated the calendar.
                </div>

                <div className="rounded-md border border-zinc-700 bg-zinc-900 p-2 text-center font-mono text-[10px] text-primary">
                  - Booking added to Google Calendar
                  <br />
                  - SMS Confirmation Sent
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
              className="h-10 transition-opacity hover:opacity-80"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-10 transition-opacity hover:opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
