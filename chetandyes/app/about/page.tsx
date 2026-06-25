import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";

export const metadata = {
  title: "About Us | Chetan Dyes & Chemical Company",
  description:
    "Learn about Chetan Dyes & Chemical Company - over 50 years of trusted service to India's textile industry. Meet our leadership and discover our commitment to quality.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="pattern-bg absolute inset-0" />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full" />
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              About Us
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              A legacy of trust, quality, and service spanning over five decades
              in India&apos;s textile industry.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="reveal-left">
              <div>
                <h2 className="section-title">Our Story</h2>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  Founded in 1975, Chetan Dyes & Chemical Company has been a
                  cornerstone of India&apos;s textile supply chain for over 50
                  years. What started as a small trading business has grown into a
                  trusted name in the dyes and chemicals distribution industry.
                </p>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  Over the decades, we have built strong relationships with leading
                  manufacturers, enabling us to bring the highest quality products
                  to our customers. Our partnership with Spectrum Dye & Chemical
                  Pvt Ltd (Surat) allows us to offer their premium range of
                  VIBRASPERSE disperse dyes and CHROMAZOL reactive dyes.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Today, we serve textile mills, garment manufacturers, and
                  factories across India, continuing the legacy of quality and
                  reliability that our founders established.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="reveal-right">
              <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 border border-stone-200">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
                    <div className="text-4xl font-extrabold text-amber-800 mb-2">
                      1975
                    </div>
                    <div className="text-stone-500 font-medium text-sm">
                      Year Founded
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
                    <div className="text-4xl font-extrabold text-amber-800 mb-2">
                      <AnimatedCounter end={50} suffix="+" />
                    </div>
                    <div className="text-stone-500 font-medium text-sm">
                      Years of Service
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
                    <div className="text-4xl font-extrabold text-amber-800 mb-2">
                      <AnimatedCounter end={190} suffix="+" />
                    </div>
                    <div className="text-stone-500 font-medium text-sm">
                      Products
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
                    <div className="text-4xl font-extrabold text-amber-800 mb-2">
                      <AnimatedCounter end={1000} suffix="+" />
                    </div>
                    <div className="text-stone-500 font-medium text-sm">
                      Clients Served
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-stone-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="section-title">Our Journey</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Five decades of growth, trust, and excellence
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="stagger-children">
              <div className="space-y-0">
                {[
                  {
                    year: "1975",
                    title: "Company Founded",
                    desc: "Maganlal establishes Chetan Dyes & Chemical Company, beginning the journey in India's textile supply chain.",
                  },
                  {
                    year: "1990s",
                    title: "Expanding Horizons",
                    desc: "Grew from a local business to serving clients across multiple states, building a reputation for reliability.",
                  },
                  {
                    year: "2000s",
                    title: "Strategic Partnerships",
                    desc: "Partnered with Spectrum Dye & Chemical Pvt Ltd (Surat) to distribute their premium VIBRASPERSE and CHROMAZOL ranges.",
                  },
                  {
                    year: "Today",
                    title: "Pan India Presence",
                    desc: "Serving 1000+ clients across India with 190+ products, led by the second generation continuing the legacy.",
                  },
                ].map((milestone, idx) => (
                  <div key={idx} className="flex gap-6 pb-8 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-lg shadow-amber-200">
                        {milestone.year}
                      </div>
                      {idx < 3 && (
                        <div className="w-0.5 h-full bg-amber-200 mt-2" />
                      )}
                    </div>
                    <div className="pb-4">
                      <h3 className="text-lg font-bold text-stone-900 mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-stone-600 leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="section-title">Our Leadership</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Two generations of dedication to quality and customer service
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="reveal-scale">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-stone-100">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src="/leadership.jpeg"
                      alt="Chetan and Maganlal - Leadership of Chetan Dyes & Chemical Company"
                      width={500}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-6 tracking-tight">
                      A Family Legacy
                    </h3>
                    <div className="space-y-6">
                      <div className="pl-4 border-l-2 border-amber-600">
                        <div className="font-semibold text-lg text-stone-900">
                          Maganlal
                        </div>
                        <div className="text-amber-700 font-medium text-sm mb-1">
                          Founder
                        </div>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          Established Chetan Dyes & Chemical Company in 1975,
                          building the foundation of trust and quality that defines
                          us today.
                        </p>
                      </div>
                      <div className="pl-4 border-l-2 border-amber-600">
                        <div className="font-semibold text-lg text-stone-900">
                          Chetan
                        </div>
                        <div className="text-amber-700 font-medium text-sm mb-1">
                          Managing Director
                        </div>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          Carrying forward the legacy with modern business
                          practices while maintaining the core values of
                          reliability and customer service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-stone-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="section-title">Our Values</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                The principles that guide every interaction
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger-children">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 text-center border border-stone-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-8 h-8 text-amber-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  Quality First
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  We only supply products from trusted manufacturers, ensuring
                  consistent quality for our customers.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center border border-stone-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-8 h-8 text-amber-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  Customer Relationships
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  We believe in building long-term partnerships, not just
                  transactions. Many of our clients have been with us for decades.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center border border-stone-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-8 h-8 text-amber-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  Reliable Service
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Timely delivery and responsive support - we understand that your
                  production depends on us.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950">
        <div className="absolute inset-0 opacity-10">
          <div className="pattern-bg absolute inset-0" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Partner with Us
            </h2>
            <p className="text-stone-300 mb-10 max-w-xl mx-auto text-lg">
              Experience the difference of working with a trusted, experienced
              supplier.
            </p>
            <Link
              href="/contact"
              className="btn-primary bg-amber-700 hover:bg-amber-600 text-white"
            >
              Get in Touch
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
