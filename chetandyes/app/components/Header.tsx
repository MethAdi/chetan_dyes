'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-stone-200/60 shadow-sm'
          : 'bg-white border-b border-stone-200'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Chetan Dyes & Chemical Company"
              width={220}
              height={50}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/products', label: 'Products' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors relative py-1 ${
                  isActive(link.href)
                    ? 'text-amber-800'
                    : 'text-stone-700 hover:text-amber-800'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-700 rounded-full" />
                )}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-72 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="border-t border-stone-200 pt-4">
            <div className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/products', label: 'Products' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium px-3 py-2 rounded-lg transition-colors ${
                    isActive(link.href)
                      ? 'text-amber-800 bg-amber-50'
                      : 'text-stone-700 hover:text-amber-800 hover:bg-stone-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary text-center mt-1">
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
