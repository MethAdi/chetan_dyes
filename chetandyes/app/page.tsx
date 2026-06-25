import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import AnimatedCounter from "./components/AnimatedCounter";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 py-20 md:py-32">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="pattern-bg absolute inset-0" />
        </div>
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              Trusted Since 1975
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Premium Dyes & Chemicals for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">
                India&apos;s Textile Industry
              </span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 mb-10 leading-relaxed max-w-2xl">
              For over 50 years, Chetan Dyes & Chemical Company has been the
              trusted partner for textile mills, garment manufacturers, and
              factories across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="btn-primary bg-amber-700 hover:bg-amber-600 text-white text-center"
              >
                View Our Products
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
              <Link
                href="/contact"
                className="btn-secondary border-stone-600 text-white hover:border-amber-400 hover:text-amber-300 text-center"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 border-b border-stone-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-stone-500 font-medium">Years of Experience</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-2">
                <AnimatedCounter end={190} suffix="+" />
              </div>
              <div className="text-stone-500 font-medium">Products Available</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-2">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <div className="text-stone-500 font-medium">Happy Clients</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-2">
                Pan India
              </div>
              <div className="text-stone-500 font-medium">Delivery Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section pattern-bg">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="section-title">Our Product Range</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                We offer a comprehensive range of high-quality dyes from Spectrum
                Dye & Chemical Pvt Ltd (Surat)
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal animation="reveal-left">
              <div className="group relative overflow-hidden rounded-xl border border-stone-200 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600" />
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-red-500 to-blue-600 rounded-xl flex-shrink-0 shadow-lg" />
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-800 transition-colors">
                      Disperse Dyes
                    </h3>
                    <p className="text-stone-600 mb-4 leading-relaxed">
                      VIBRASPERSE series - Premium disperse dyes for polyester and
                      synthetic fabrics. Available in 100+ shades including
                      yellows, reds, blues, blacks, and specialty colors.
                    </p>
                    <Link
                      href="/products#disperse"
                      className="inline-flex items-center gap-2 text-amber-800 font-semibold hover:gap-3 transition-all"
                    >
                      View Products
                      <svg
                        className="w-4 h-4"
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
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="reveal-right">
              <div className="group relative overflow-hidden rounded-xl border border-stone-200 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600" />
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-xl flex-shrink-0 shadow-lg" />
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-800 transition-colors">
                      Reactive Dyes
                    </h3>
                    <p className="text-stone-600 mb-4 leading-relaxed">
                      CHROMAZOL, CHROMAFIX, CHROMACTIVE series - High-performance
                      reactive dyes for cotton and cellulosic fibers. Multiple
                      series for different applications.
                    </p>
                    <Link
                      href="/products#reactive"
                      className="inline-flex items-center gap-2 text-amber-800 font-semibold hover:gap-3 transition-all"
                    >
                      View Products
                      <svg
                        className="w-4 h-4"
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
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link href="/products" className="btn-secondary">
                View All 190+ Products
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section bg-stone-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="section-title">Industries We Serve</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Our dyes and chemicals power diverse sectors across India&apos;s
                textile ecosystem
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger-children">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                  title: "Textile Mills",
                },
                {
                  icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z",
                  title: "Garment Manufacturers",
                },
                {
                  icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
                  title: "Fabric Processors",
                },
                {
                  icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
                  title: "Printing Houses",
                },
              ].map((industry) => (
                <div
                  key={industry.title}
                  className="bg-white rounded-xl p-6 text-center border border-stone-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-100 transition-colors">
                    <svg
                      className="w-7 h-7 text-amber-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={industry.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-stone-800">
                    {industry.title}
                  </h3>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="section-title">Why Choose Chetan Dyes?</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Decades of experience and commitment to quality make us your ideal
                partner
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger-children">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-5">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-3">
                  Trusted Quality
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Authorized distributor for Spectrum Dye & Chemical Pvt Ltd,
                  ensuring genuine quality products every time.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-5">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-3">
                  50+ Years Experience
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Five decades of serving India&apos;s textile industry with
                  expertise, reliability, and deep market knowledge.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-5">
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
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-3">
                  Expert Support
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Technical guidance and personalized service for all your dyeing
                  requirements, from selection to application.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-stone-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Trusted by textile businesses across India for quality and
                reliability
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger-children">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Chetan Dyes has been our go-to supplier for over 15 years. Their VIBRASPERSE range delivers consistent quality batch after batch.",
                  name: "Rajesh Patel",
                  company: "Textile Mill Owner, Surat",
                },
                {
                  quote:
                    "The technical support team is outstanding. They helped us optimize our dyeing process and reduce wastage significantly.",
                  name: "Suresh Kumar",
                  company: "Garment Manufacturer, Ahmedabad",
                },
                {
                  quote:
                    "Reliable delivery and competitive pricing. We never worry about supply chain disruptions with Chetan Dyes as our partner.",
                  name: "Amit Shah",
                  company: "Fabric Processor, Mumbai",
                },
              ].map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-white rounded-xl p-8 border border-stone-200 relative"
                >
                  <svg
                    className="w-10 h-10 text-amber-100 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                  </svg>
                  <p className="text-stone-600 mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t border-stone-100 pt-4">
                    <div className="font-semibold text-stone-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-stone-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950">
        <div className="absolute inset-0 opacity-10">
          <div className="pattern-bg absolute inset-0" />
        </div>
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Ready to Place an Order?
            </h2>
            <p className="text-stone-300 mb-10 max-w-xl mx-auto text-lg">
              Contact us today for competitive pricing and fast delivery across
              India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary bg-amber-700 hover:bg-amber-600 text-white"
              >
                Get a Quote
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
              <a
                href="tel:+91XXXXXXXXXX"
                className="btn-secondary border-stone-600 text-white hover:border-white hover:text-white"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
