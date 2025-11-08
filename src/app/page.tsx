import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50 via-transparent to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border bg-white px-3 py-1 text-xs text-gray-600">
              Remote-first MSP • Security-first
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Modern IT for growing businesses.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We manage your infrastructure, secure your systems, and move you to the cloud —
              so your team focuses on what matters.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="#contact">Book a Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
            <p className="mt-3 text-xs text-gray-500">Response SLA • Clear pricing • No lock-in</p>
          </div>

          <div className="relative">
            <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="relative rounded-xl border bg-white p-6 shadow-sm">
              <ul className="space-y-4 text-sm text-gray-700">
                <li>✓ Remote IT Management & Monitoring</li>
                <li>✓ MSP Packages with Monthly SLAs</li>
                <li>✓ Cloud Migration: Azure • AWS • M365</li>
                <li>✓ Cybersecurity Audit & Hardening</li>
                <li>✓ IT Setup for Startups</li>
                <li>✓ Documentation & Process Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Core Services</h2>
        <p className="mt-2 text-gray-600">
          Start small. Scale confidently. Pay monthly with clear deliverables.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Remote IT Management (RMM)",
              desc:
                "Proactive monitoring, patching, backups, and helpdesk for your endpoints and servers.",
            },
            {
              title: "MSP Packages",
              desc:
                "Tiered support plans with SLAs, reporting, and security baseline — tailor to your team size.",
            },
            {
              title: "Cloud Migration",
              desc:
                "Plan and execute migrations to Azure/AWS/M365. Identity, email, storage, and networking.",
            },
            {
              title: "Cybersecurity Audit & Hardening",
              desc:
                "Firewall/AD/M365 reviews, vulnerability scans, and practical remediation steps.",
            },
            {
              title: "IT Setup for Startups",
              desc:
                "Domain, email, device policies, VPN, zero-trust access — ready in days, not weeks.",
            },
            {
              title: "Documentation & Automation",
              desc:
                "Network diagrams, asset sheets, access controls, and repeatable playbooks.",
            },
          ].map((s) => (
            <Card key={s.title}>
              <CardHeader>
                <CardTitle className="text-base">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SECURITY STRIP */}
      <section
        id="security"
        className="border-y bg-gradient-to-br from-blue-600 to-indigo-600 py-12 text-white"
      >
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-xl font-semibold">Security-first by design</h3>
          <p className="mt-2 max-w-3xl text-sm text-blue-100">
            We enforce MFA, least-privilege access, automated backups, encrypted traffic, and
            weekly patching as a baseline — then harden to your compliance needs.
          </p>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Hands-on Training</h2>
            <p className="mt-2 text-gray-600">
              Short, practical workshops for IT teams: VPN, AD, M365, firewalls, and cloud
              basics — delivered live or on-demand.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="#contact">Request syllabus</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>Site-to-Site VPN (pfSense/Sophos)</li>
              <li>Active Directory & M365 Identity</li>
              <li>Cloudflare Zero Trust</li>
              <li>Backup & Disaster Recovery</li>
              <li>Network Monitoring 101</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="rounded-2xl border p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">
                  Ready to modernize your IT?
                </h2>
                <p className="mt-2 text-gray-600">
                  Get a free 30-minute assessment. We’ll review your setup and propose a
                  pragmatic roadmap.
                </p>
              </div>
              <div className="flex items-center justify-end">
                <Button asChild size="lg" className="w-full md:w-auto">
                  <Link href="mailto:hello@itima.example">Schedule now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

