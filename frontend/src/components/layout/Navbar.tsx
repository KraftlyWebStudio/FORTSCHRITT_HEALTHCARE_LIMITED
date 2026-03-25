"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const styles = `
  @keyframes dropIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-12px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0px) scale(1);
    }
  }

  .nav-dropdown {
    animation: dropIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .nav-link-underline {
    position: relative;
  }
  .nav-link-underline::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, var(--color-primary, #3a5abe), #38bdf8);
    border-radius: 99px;
    transition: width 0.38s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .nav-link-underline:hover::after {
    width: 60%;
  }

  .chevron-spin {
    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1),
                color 0.3s ease;
  }
  .chevron-spin.is-open {
    transform: rotate(180deg);
  }

  .drop-row {
    transition: background 0.2s ease, padding-left 0.22s ease;
  }
  .drop-row:hover {
    padding-left: 14px;
  }
  .drop-row .drop-icon {
    transition: background 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .drop-row:hover .drop-icon {
    background: var(--color-primary, #3a5abe);
    transform: scale(1.12);
  }
  .drop-row:hover .drop-icon .material-icons {
    color: white;
  }
`;

type Sub = { label: string; href: string; icon: string; description: string };
type NavItem = { label: string; href?: string; dropdown?: Sub[] };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    dropdown: [
      { label: "Company Overview",    href: "/#about",   icon: "domain",           description: "Our story, mission & values"     },
      { label: "CEO's Message",       href: "/#ceo",     icon: "person",           description: "Leadership vision & direction"   },
      { label: "Our Team",            href: "/#team",    icon: "groups",           description: "Meet the experts behind us"      },
      { label: "Legacy & Milestones", href: "/#legacy",  icon: "timeline",         description: "12+ years of healthcare impact"  },
    ],
  },
  {
    label: "Products",
    dropdown: [
      { label: "Pharmaceuticals",           href: "/products#pharmaceuticals", icon: "medication",     description: "Tablets, capsules & injectables" },
      { label: "Active Pharma Ingredients", href: "/products#api",             icon: "science",        description: "High-purity API manufacturing"   },
      { label: "Nutraceuticals",            href: "/products#nutra",           icon: "local_pharmacy", description: "Wellness & dietary supplements"   },
      { label: "Veterinary Products",       href: "/products#vet",             icon: "pets",           description: "Animal healthcare solutions"      },
    ],
  },
  {
    label: "Infrastructure",
    dropdown: [
      { label: "R&D Center",      href: "/infrastructure#rnd",           icon: "biotech",           description: "Cutting-edge research facility"  },
      { label: "Manufacturing",   href: "/infrastructure#manufacturing",  icon: "factory",           description: "GMP-compliant plant & processes" },
      { label: "Quality Control", href: "/infrastructure#quality",        icon: "verified",          description: "Rigorous QA/QC protocols"        },
      { label: "Certifications",  href: "/infrastructure#certs",          icon: "workspace_premium", description: "WHO-GMP, ISO & international certs" },
    ],
  },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [mobileExp,      setMobileExp]      = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }
    };
  }, []);

  const open = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 380);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <style>{styles}</style>

      <header
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-500 ${
          isScrolled
            ? "shadow-lg shadow-primary/10 border-b border-primary/10"
            : "border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            <Link href="/" onClick={scrollToTop}
              className="flex items-center gap-3 group flex-shrink-0"
            >
              <div className="flex items-center justify-center h-11 w-11 flex-shrink-0">
                <img
                  src="/images/brand/logo.png"
                  alt="Fortschritt Healthcare"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center leading-tight">
                <span className="font-extrabold text-[17px] tracking-tight text-primary">
                  FORTSCHRITT
                </span>
                <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-primary">
                  Healthcare Limited
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5">

              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => open(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    {/* Trigger */}
                    <button
                      className={`nav-link-underline flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                        activeDropdown === item.label
                          ? "text-primary bg-primary/5"
                          : "text-slate-600 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`material-icons text-[17px] chevron-spin ${
                          activeDropdown === item.label ? "is-open text-primary" : "text-slate-400"
                        }`}
                      >
                        keyboard_arrow_down
                      </span>
                    </button>

                    {activeDropdown === item.label && item.dropdown && (
                      <div
                        className="nav-dropdown absolute top-[calc(100%+6px)] left-1/2 w-[295px]"
                        style={{ transform: "translateX(-50%)" }}
                      >
                        <div
                          className="bg-white rounded-2xl overflow-hidden border border-slate-100"
                          style={{
                            boxShadow:
                              "0 24px 64px -12px rgba(58,90,190,0.18), 0 4px 16px -4px rgba(0,0,0,0.07)",
                          }}
                        >
                          {/* Top gradient accent */}
                          <div className="h-[3px] bg-gradient-to-r from-primary via-sky-400 to-primary" />

                          <div className="p-2.5 space-y-0.5">
                            {item.dropdown.map((sub) => (
                              <a
                                key={sub.label}
                                href={sub.href}
                                className="drop-row flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-primary/5"
                              >
                                <div className="drop-icon w-9 h-9 rounded-lg flex items-center
                                  justify-center flex-shrink-0 bg-primary/10">
                                  <span className="material-icons text-[18px] text-primary">
                                    {sub.icon}
                                  </span>
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="text-[13px] font-semibold text-slate-700 leading-tight">
                                    {sub.label}
                                  </p>
                                  <p className="text-[11px] text-slate-400 mt-0.5 truncate">
                                    {sub.description}
                                  </p>
                                </div>
                                <span className="material-icons text-[14px] text-slate-300 flex-shrink-0">
                                  chevron_right
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                ) : (
                  <Link
                    key={item.label}
                    href={item.href || "/"}
                    onClick={item.href === "/" ? scrollToTop : undefined}
                    className="nav-link-underline px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* CTA */}
              <a
                href="/contact"
                className="ml-4 flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 active:scale-95 group transition-all duration-200"
                style={{ boxShadow: "0 4px 22px -4px rgba(58,90,190,0.5)" }}
              >
                <span className="material-icons text-[16px] transition-transform duration-500 group-hover:rotate-12">
                  mail_outline
                </span>
                Contact Us
              </a>
            </nav>

            {/* ── Hamburger ─────────────────────────────────── */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-xl hover:bg-primary/5 transition-colors duration-200"
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              {/** Helper functions to keep hamburger line styles readable **/}
              {/** These are defined inline to avoid cluttering the component's top-level scope **/}
              {/*
                Note: Using function declarations inside JSX expressions is allowed in TS/JS.
                They are evaluated each render but are trivial in cost here.
              */}
              {(() => {
                const getHamburgerLineWidth = (index: number, isOpen: boolean): string => {
                  if (index === 1) {
                    return isOpen ? "0px" : "18px";
                  }
                  return "22px";
                };

                const getHamburgerLineTransform = (index: number, isOpen: boolean): string => {
                  if (!isOpen) return "none";
                  if (index === 0) return "rotate(45deg) translate(3.5px, 3.5px)";
                  if (index === 2) return "rotate(-45deg) translate(3.5px, -3.5px)";
                  return "none";
                };

                return [0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="block bg-primary rounded-full"
                    style={{
                      height: "2px",
                      width: getHamburgerLineWidth(i, mobileOpen),
                      transform: getHamburgerLineTransform(i, mobileOpen),
                      opacity: i === 1 && mobileOpen ? 0 : 1,
                      transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), width 0.3s ease, opacity 0.25s ease",
                    }}
                  />
                ));
              })()}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ───────────────────────────────────── */}
        <div
          className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          style={{
            maxHeight: mobileOpen ? "600px" : "0px",
            opacity: mobileOpen ? 1 : 0,
            transition: "max-height 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
            boxShadow: mobileOpen ? "0 16px 40px -8px rgba(58,90,190,0.14)" : "none",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileExp((p) => (p === item.label ? null : item.label))}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-primary/5 hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                    <span
                      className={`material-icons text-[18px] chevron-spin ${
                        mobileExp === item.label ? "is-open text-primary" : "text-slate-400"
                      }`}
                    >
                      keyboard_arrow_down
                    </span>
                  </button>

                  <div
                    className="overflow-hidden"
                    style={{
                      maxHeight: mobileExp === item.label ? "400px" : "0px",
                      opacity: mobileExp === item.label ? 1 : 0,
                      transition: "max-height 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
                    }}
                  >
                    <div className="ml-4 mt-1 mb-1 space-y-0.5 border-l-2 border-primary/20 pl-3">
                      {item.dropdown?.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                        >
                          <span className="material-icons text-[16px] text-primary/60">{sub.icon}</span>
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href || "/"}
                  onClick={item.href === "/" ? scrollToTop : () => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-primary/5 hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )
            )}

            <div className="pt-2 pb-1">
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary/90 transition-all duration-200"
                style={{ boxShadow: "0 4px 20px -4px rgba(58,90,190,0.4)" }}
              >
                <span className="material-icons text-[16px]">mail_outline</span>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
