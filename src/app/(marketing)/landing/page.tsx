// src/app/(marketing)/landing/page.tsx

'use client'

import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="bg-white text-black">

      {/* HEADER */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-sm bg-white">
        <div className="text-xl font-bold">PestComply</div>
        <nav className="space-x-6">
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Free Trial</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Never Miss Another License Expiry Date</h1>
        <p className="text-lg text-gray-700 mb-8">
          Simple, automated compliance tracking for pest control businesses.
        </p>
        <Link href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded text-lg hover:bg-blue-700">
          Start Free Trial – No Setup Required
        </Link>
        <p className="mt-4 text-sm text-gray-500">
          Built for Australian regulations. Track licenses, insurance, and reminders — all in one place.
        </p>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Automatic License Renewal Alerts',
              'Insurance Expiry Notifications',
              'Document Upload & Storage',
              'Secure and Private',
              'Built for Australian Pest Control Rules',
              'Mobile-Friendly Interface'
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded shadow">
                <p className="font-medium">✅ {feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Straightforward Pricing</h2>
        <p className="mb-4 text-gray-700">Built for small operators. Transparent and scalable.</p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: 'Essentials Plan',
              range: '1–5 Employees',
              price: '$4.50/mo',
              storage: '2 GB included',
            },
            {
              title: 'Growth Plan',
              range: '6–11 Employees',
              price: '$9.50/mo',
              storage: '5 GB included',
            },
            {
              title: 'Team Plan',
              range: '12+ Employees',
              price: '$15.50/mo',
              storage: '10 GB included',
            }
          ].map(({ title, range, price, storage }, idx) => (
            <div key={idx} className="border rounded p-6 bg-white shadow text-left">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700 mb-1">{range}</p>
              <p className="text-2xl font-bold mb-2">{price}</p>
              <p className="text-sm text-gray-600 mb-4">{storage}</p>
              <Link href="/signup" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Start Free Trial
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">FAQs</h2>
          {[
            ['Do I need to install anything?', 'No. PestComply runs in your browser, works on mobile and desktop.'],
            ['Will I get reminders by email or SMS?', 'Yes. You choose how you want to be notified.'],
            ['Can I cancel anytime?', 'Yes. No lock-in contracts.'],
            ['Does it work in every state?', 'Yes. Built with state-specific Australian rules in mind.'],
            ['What if I have a bigger team?', 'The Team Plan supports more users and storage. Need more? Contact us.']
          ].map(([q, a], idx) => (
            <div key={idx} className="mb-6">
              <p className="font-semibold">{q}</p>
              <p className="text-gray-700">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white text-gray-500 text-sm text-center py-6 border-t">
        <p>&copy; {new Date().getFullYear()} PestComply. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>

    </div>
  )
}
