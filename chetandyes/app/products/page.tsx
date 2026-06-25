import Link from "next/link";

export const metadata = {
  title: "Products | Chetan Dyes & Chemical Company",
  description: "Browse our comprehensive range of disperse dyes (VIBRASPERSE) and reactive dyes (CHROMAZOL, CHROMAFIX, CHROMACTIVE) from Spectrum Dye & Chemical Pvt Ltd.",
};

// Product data organized by category
const disperseDyes = {
  name: "VIBRASPERSE Disperse Dyes",
  description: "Premium disperse dyes for polyester and synthetic fabrics",
  categories: [
    {
      name: "Yellows & Golden Yellows",
      products: [
        { code: "5044", name: "VIBRASPERSE LUMINOUS YELLOW 8GF 200%" },
        { code: "5020", name: "VIBRASPERSE LUMINOUS YELLOW 10GN" },
        { code: "5002", name: "VIBRASPERSE YELLOW SG H/C" },
        { code: "5004", name: "VIBRASPERSE YELLOW 4G 200%" },
        { code: "5041", name: "VIBRASPERSE GOLDEN YELLOW GG" },
        { code: "5010", name: "VIBRASPERSE GOLDEN YELLOW 2GD" },
      ]
    },
    {
      name: "Oranges & Scarlets",
      products: [
        { code: "5148", name: "VIBRASPERSE LUMINOUS ORANGE FCR" },
        { code: "5107", name: "VIBRASPERSE ORANGE 3R 150%" },
        { code: "5104", name: "VIBRASPERSE ORANGE RL 200%" },
        { code: "5321", name: "VIBRASPERSE SCARLET CRR" },
        { code: "5303", name: "VIBRASPERSE SCARLET 3R 150%" },
        { code: "5328", name: "VIBRASPERSE SCARLET GS" },
      ]
    },
    {
      name: "Reds & Pinks",
      products: [
        { code: "5304", name: "VIBRASPERSE BRILL. RED SRGL" },
        { code: "5313", name: "VIBRASPERSE LUMINOUS RED G" },
        { code: "5338", name: "VIBRASPERSE LUMINOUS PINK RB" },
        { code: "5314", name: "VIBRASPERSE RED BF 200%" },
        { code: "5309", name: "VIBRASPERSE BRILL. RED F3BS 400%" },
        { code: "5322", name: "VIBRASPERSE BRILL. PINK BRF 300%" },
      ]
    },
    {
      name: "Rubines & Violets",
      products: [
        { code: "5390", name: "VIBRASPERSE RUBINE BL" },
        { code: "5318", name: "VIBRASPERSE RUBINE GFL 200%" },
        { code: "5401", name: "VIBRASPERSE RUBINE 3B 200%" },
        { code: "5403", name: "VIBRASPERSE RED VIOLET FBL 200%" },
        { code: "5404", name: "VIBRASPERSE VIOLET 3R CONC" },
        { code: "5423", name: "VIBRASPERSE VIOLET S3R" },
      ]
    },
    {
      name: "Blues & Navy Blues",
      products: [
        { code: "5509", name: "VIBRASPERSE BRILL. BLUE BG 200%" },
        { code: "5514", name: "VIBRASPERSE BRILL. BLUE SR 200%" },
        { code: "5574", name: "VIBRASPERSE TURQ. BLUE SBR" },
        { code: "5505", name: "VIBRASPERSE NAVY BLUE 3G 200%" },
        { code: "5536", name: "VIBRASPERSE NAVY BLUE S2G" },
        { code: "5864", name: "VIBRASPERSE LUNAR TURQ. BLUE XIGL" },
      ]
    },
    {
      name: "Greens, Browns & Blacks",
      products: [
        { code: "5623", name: "VIBRASPERSE GREEN 2G 200%" },
        { code: "5603", name: "VIBRASPERSE GREEN 2B 200%" },
        { code: "5207", name: "VIBRASPERSE BROWN 3RSF H/C" },
        { code: "5620", name: "VIBRASPERSE BROWN CBS 150%" },
        { code: "5642", name: "VIBRASPERSE BLACK R LIQUID" },
        { code: "5659", name: "VIBRASPERSE DEEP BLACK GR" },
      ]
    },
  ]
};

const reactiveDyes = {
  name: "Reactive Dyes",
  description: "High-performance reactive dyes for cotton and cellulosic fibers",
  series: [
    {
      name: "CHROMAZOL General Series",
      description: "Standard reactive dyes for general applications",
      products: [
        { code: "85010", name: "CHROMAZOL YELLOW FG" },
        { code: "85009", name: "CHROMAZOL GOLDEN YELLOW R" },
        { code: "85109", name: "CHROMAZOL ORANGE 3R" },
        { code: "85308", name: "CHROMAZOL RED RB 133%" },
        { code: "85506", name: "CHROMAZOL TURQ. BLUE G" },
        { code: "85610", name: "CHROMAZOL BLACK B" },
      ]
    },
    {
      name: "CHROMAFIX ME Series (Bifunctional)",
      description: "Bifunctional reactive dyes for enhanced performance",
      products: [
        { code: "85007", name: "CHROMAFIX YELLOW ME4G 150%" },
        { code: "85108", name: "CHROMAFIX ORANGE ME2R 150%" },
        { code: "85314", name: "CHROMAFIX RED ME3B" },
        { code: "85515", name: "CHROMAFIX BLUE MERS" },
        { code: "85524", name: "CHROMAFIX BRILL. SKY BLUE G" },
        { code: "85512", name: "CHROMAFIX NAW BLUE SFB" },
      ]
    },
    {
      name: "CHROMAFIX GD Series (High Build Up)",
      description: "High build-up reactive dyes for deep shades",
      products: [
        { code: "85003", name: "CHROMAFIX YELLOW GD3R" },
        { code: "85105", name: "CHROMAFIX ORANGE GD3R" },
        { code: "85312", name: "CHROMAFIX RED GD2B" },
        { code: "85313", name: "CHROMAFIX RUBINE GDB" },
        { code: "85502", name: "CHROMAFIX NAVY GDG" },
        { code: "85608", name: "CHROMAFIX JET BLACK GDR" },
      ]
    },
    {
      name: "CHROMACTIVE H Series (Printing)",
      description: "Reactive dyes optimized for printing applications",
      products: [
        { code: "85012", name: "CHROMACTIVE YELLOW H4G" },
        { code: "85106", name: "CHROMACTIVE ORANGE H2R" },
        { code: "85402", name: "CHROMACTIVE MAGENTA HB" },
        { code: "85404", name: "CHROMACTIVE PURPLE H3R" },
        { code: "85507", name: "CHROMACTIVE TURQ. BLUE H2GP" },
        { code: "85616", name: "CHROMACTIVE BLACK HN" },
      ]
    },
    {
      name: "CHROMACION HE Series (Hot Dyeing)",
      description: "Reactive dyes for hot dyeing applications",
      products: [
        { code: "85014", name: "CHROMACION YELLOW HE4G" },
        { code: "85015", name: "CHROMACION GOLDEN YELLOW HE4R" },
        { code: "85318", name: "CHROMACION RED HE3B" },
        { code: "85511", name: "CHROMACION NAVY BLUE HE2R 150%" },
        { code: "85518", name: "CHROMACION BLUE HERD" },
        { code: "85619", name: "CHROMACION GREEN HE4B" },
      ]
    },
  ]
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-50 to-stone-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-stone-600 mb-4">
              Comprehensive range of quality dyes from Spectrum Dye & Chemical Pvt Ltd (Surat)
            </p>
            <p className="text-stone-500">
              Browse our catalog below and request a quote for any product. Prices available on inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="sticky top-20 bg-white border-b border-stone-200 py-4 z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto">
            <a href="#disperse" className="btn-secondary whitespace-nowrap text-sm">
              Disperse Dyes
            </a>
            <a href="#reactive" className="btn-secondary whitespace-nowrap text-sm">
              Reactive Dyes
            </a>
            <Link href="/contact" className="btn-primary whitespace-nowrap text-sm">
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Disperse Dyes Section */}
      <section id="disperse" className="section">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-red-500 to-blue-600 rounded-lg"></div>
              <div>
                <h2 className="text-2xl font-bold text-stone-900">{disperseDyes.name}</h2>
                <p className="text-stone-600">{disperseDyes.description}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {disperseDyes.categories.map((category, idx) => (
              <div key={idx} className="card">
                <h3 className="text-lg font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200">
                  {category.name}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.products.map((product, pIdx) => (
                    <div key={pIdx} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors">
                      <div>
                        <div className="text-xs text-stone-500 mb-1">Code: {product.code}</div>
                        <div className="text-sm font-medium text-stone-800">{product.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100 text-center">
                  <span className="text-stone-500 text-sm">+ more shades available</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reactive Dyes Section */}
      <section id="reactive" className="section bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-lg"></div>
              <div>
                <h2 className="text-2xl font-bold text-stone-900">{reactiveDyes.name}</h2>
                <p className="text-stone-600">{reactiveDyes.description}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {reactiveDyes.series.map((series, idx) => (
              <div key={idx} className="card bg-white">
                <div className="mb-4 pb-2 border-b border-stone-200">
                  <h3 className="text-lg font-bold text-stone-900">{series.name}</h3>
                  <p className="text-sm text-stone-600">{series.description}</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {series.products.map((product, pIdx) => (
                    <div key={pIdx} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors">
                      <div>
                        <div className="text-xs text-stone-500 mb-1">Code: {product.code}</div>
                        <div className="text-sm font-medium text-stone-800">{product.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100 text-center">
                  <span className="text-stone-500 text-sm">+ more products in this series</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Products Note */}
      <section className="py-12 border-t border-stone-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-stone-600 mb-2">
            <strong>Note:</strong> This is a representative selection of our product range.
          </p>
          <p className="text-stone-500 mb-6">
            We carry 190+ products across multiple series. Contact us for the complete catalog and current availability.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Complete Catalog
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Quote?</h2>
          <p className="text-stone-300 mb-8 max-w-xl mx-auto">
            Contact us with your requirements and we&apos;ll provide competitive pricing with fast delivery across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-amber-700 hover:bg-amber-600">
              Request Quote
            </Link>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi, I would like to inquire about your dyes."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-stone-600 text-white hover:border-green-500 hover:text-green-400"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
