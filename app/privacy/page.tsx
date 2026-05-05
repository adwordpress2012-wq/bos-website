export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-4 py-24 text-foreground md:px-6">
      <h1 className="font-display text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: April 2026</p>
      <section className="mt-10 space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>
          BOS respects your privacy. We collect only the information required to respond to
          enquiries and deliver our AI receptionist services.
        </p>
        <p>
          If you contact us through this site, we may store your name, email, phone details and
          enquiry message so our team can follow up.
        </p>
        <p>
          We do not sell your personal information. Data is processed using trusted service
          providers and reasonable security controls.
        </p>
        <p>
          For privacy requests, contact us at{" "}
          <a className="text-primary hover:underline" href="mailto:jayson@chatos.com.au">
            jayson@chatos.com.au
          </a>
          .
        </p>
      </section>
    </main>
  )
}
