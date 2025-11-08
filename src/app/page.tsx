import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-950">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50 via-transparent to-transparent dark:from-blue-900/20" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border bg-white px-3 py-1 text-xs text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
              Remote-first MSP • Security-first
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
              Modern IT for growing businesses.
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
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
            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
              Response SLA • Clear pricing • No lock-in
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-900/20" />
            <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-900/20" />
            <div className="relative rounded-xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-200">
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
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
          Core Services
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Start small. Scale confidently. Pay monthly with clear deliverables.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { title: "Remote IT Management (RMM)", desc: "Proactive monitoring, patching, backups, and helpdesk for your endpoints and servers." },
            { title: "MSP Packages", desc: "Tiered support plans with SLAs, reporting, and security baseline — tailor to your team size." },
            { title: "Cloud Migration", desc: "Plan and execute migrations to Azure/AWS/M365. Identity, email, storage, and networking." },
            { title: "Cybersecurity Audit & Hardening", desc: "Firewall/AD/M365 reviews, vulnerability scans, and practical remediation steps." },
            { title: "IT Setup for Startups", desc: "Domain, email, device policies, VPN, zero-trust access — ready in days, not weeks." },
            { title: "Documentation & Automation", desc: "Network diagrams, asset sheets, access controls, and repeatable playbooks." },
          ].map((s) => (
            <Card key={s.title} className="border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-base text-gray-900 dark:text-gray-100">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
            Pricing
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Clear tiers. No hidden fees. Cancel anytime.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Starter */}
            <Card className="relative border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-gray-100">Starter</CardTitle>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  $699<span className="text-base font-normal text-gray-500 dark:text-gray-400">/mo</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Up to 10 users • 1 site</p>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-700 dark:text-gray-200">
                <p>✓ RMM (monitoring, patching)</p>
                <p>✓ Helpdesk (business hours)</p>
                <p>✓ M365/Email admin</p>
                <p>✓ Monthly report</p>
                <Button asChild className="w-full mt-4"><Link href="#contact">Get Started</Link></Button>
              </CardContent>
            </Card>

            {/* Growth */}
            <Card className="relative border-blue-600 dark:border-blue-500 dark:bg-gray-900">
              <div className="absolute -top-3 right-3 rounded-full bg-blue-600 px-2 py-1 text-xs text-white">Most popular</div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-gray-100">Growth</CardTitle>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  $1,499<span className="text-base font-normal text-gray-500 dark:text-gray-400">/mo</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Up to 40 users • Multi-site</p>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-700 dark:text-gray-200">
                <p>✓ Everything in Starter</p>
                <p>✓ 24h SLA + on-call</p>
                <p>✓ Firewall/AD baseline hardening</p>
                <p>✓ Backup checks & DR runbook</p>
                <p>✓ Quarterly security review</p>
                <Button asChild className="w-full mt-4"><Link href="#contact">Choose Growth</Link></Button>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-gray-100">Enterprise</CardTitle>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">Custom</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">50+ users • Compliance-ready</p>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-700 dark:text-gray-200">
                <p>✓ SOC/SIEM integration</p>
                <p>✓ SSO/Zero Trust</p>
                <p>✓ Incident response playbooks</p>
                <p>✓ Vendor management & audits</p>
                <Button asChild className="w-full mt-4"><Link href="#contact">Talk to Sales</Link></Button>
              </CardContent>
            </Card>
          </div>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            All plans: no lock-in, month-to-month, simple onboarding.
          </p>
        </div>
      </section>

      {/* SECURITY STRIP */}
      <section id="security" className="border-y bg-gradient-to-br from-blue-600 to-indigo-600 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-xl font-semibold">Security-first by design</h3>
          <p className="mt-2 max-w-3xl text-sm text-blue-100">
            We enforce MFA, least-privilege access, automated backups, encrypted traffic, and weekly patching as a baseline — then harden to your needs.
          </p>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 md:text-3xl">Hands-on Training</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Short, practical workshops for IT teams: VPN, AD, M365, firewalls, and cloud basics — live or on-demand.
            </p>
            <div className="mt-6"><Button asChild><Link href="#contact">Request syllabus</Link></Button></div>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-200">
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
      <section id="contact" className="bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="rounded-2xl border p-8 md:p-12 dark:border-gray-800 dark:bg-gray-900">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 md:text-3xl">
                  Ready to modernize your IT?
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Get a free 30-minute assessment. We’ll review your setup and propose a pragmatic roadmap.
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

