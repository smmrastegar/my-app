import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import '../styles.css'

export default async function AllStoresPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch all stores
  const stores = await payload.find({
    collection: 'stores',
    limit: 100, // Get all stores
    depth: 0,
    overrideAccess: false,
  })

  return (
    <>
      {/* Header */}
      <header className="site-header">
        <div className="header-top-bar"></div>
        <div className="header-main">
          <div className="container">
            <nav className="nav">
              <div className="brand">
                <div className="brand-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144">
                    <rect width="144" height="144" fill="transparent" />
                    <rect
                      x="10"
                      y="28"
                      width="124"
                      height="88"
                      rx="16"
                      ry="16"
                      fill="none"
                      stroke="#1a2332"
                      strokeWidth="8"
                    />
                    <rect x="10" y="60" width="124" height="22" rx="4" ry="4" fill="#FFD23C" />
                    <path
                      d="M18 128 C 24 96, 44 52, 72 68 C 86 76, 92 94, 100 84 L 120 52"
                      fill="none"
                      stroke="#1a2332"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M113 54 L129 40 L125 60" fill="#1a2332" />
                  </svg>
                </div>
                <span>نسی‌لند</span>
              </div>

              <div className="nav-links">
                <Link href="/#guides">راهنما</Link>
                <Link href="/#app">اپلیکیشن</Link>
                <Link href="/#blog">بلاگ</Link>
                <Link href="/#about">درباره ما</Link>
                <Link href="/#stores">فروشگاه‌ها</Link>
                <Link href="/">خانه</Link>
              </div>

              <a
                href="https://app.nesilend.ir/"
                target="_blank"
                rel="noopener"
                className="btn btn-header-primary"
              >
                ورود به برنامه
              </a>

              <button className="menu-toggle" aria-label="منو">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </nav>
          </div>
        </div>
        <div className="header-bottom-bar"></div>
      </header>

      {/* Breadcrumb */}
      <section className="section" style={{ paddingTop: '120px', paddingBottom: '24px' }}>
        <div className="container">
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
            <Link href="/" style={{ color: '#DAAE1A', textDecoration: 'none' }}>
              خانه
            </Link>
            {' > '}
            <span>همه فروشگاه‌ها</span>
          </div>
        </div>
      </section>

      {/* All Stores Section */}
      <section className="section stores">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 className="section-title">همه فروشگاه‌های همکار</h1>
            <p className="lead">
              {stores.totalDocs > 0
                ? `${stores.totalDocs} فروشگاه معتبر در شبکه نسی‌لند`
                : 'به زودی فروشگاه‌های معتبر به شبکه نسی‌لند اضافه خواهند شد'}
            </p>
          </div>

          <div className="grid stores-grid">
            {stores.docs.length > 0 ? (
              stores.docs.map((store) => {
                return (
                  <Link key={store.id} href={`/stores/${store.id}`} className="store-card">
                    <div className="store-icon">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                      </svg>
                    </div>
                    <h3>{store.name}</h3>
                    <p className="store-status">
                      {store.status === 'coming_soon'
                        ? 'در حال راه‌اندازی'
                        : store.status === 'active'
                          ? 'فعال'
                          : 'در حال راه‌اندازی'}
                    </p>
                    <p className="store-desc">
                      {typeof store.description === 'string'
                        ? store.description
                        : 'فروشگاه‌های همکار به زودی معرفی خواهند شد'}
                    </p>
                  </Link>
                )
              })
            ) : (
              <>
                {[
                  'فروشگاه یک',
                  'فروشگاه دو',
                  'فروشگاه سه',
                  'فروشگاه چهار',
                  'فروشگاه پنج',
                  'فروشگاه شش',
                  'فروشگاه هفت',
                  'فروشگاه هشت',
                  'فروشگاه نه',
                ].map((name, index) => {
                  return (
                    <div key={index} className="store-card">
                      <div className="store-icon">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                        </svg>
                      </div>
                      <h3>{name}</h3>
                      <p className="store-status">در حال راه‌اندازی</p>
                      <p className="store-desc">فروشگاه‌های همکار به زودی معرفی خواهند شد</p>
                    </div>
                  )
                })}
              </>
            )}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/" className="btn btn-ghost">
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col footer-brand">
              <div className="footer-logo-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 144 144"
                  className="footer-logo"
                >
                  <rect width="144" height="144" fill="transparent" />
                  <rect
                    x="10"
                    y="28"
                    width="124"
                    height="88"
                    rx="16"
                    ry="16"
                    fill="none"
                    stroke="#DAAE1A"
                    strokeWidth="8"
                  />
                  <rect x="10" y="60" width="124" height="22" rx="4" ry="4" fill="#DAAE1A" />
                  <path
                    d="M18 128 C 24 96, 44 52, 72 68 C 86 76, 92 94, 100 84 L 120 52"
                    fill="none"
                    stroke="#DAAE1A"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M113 54 L129 40 L125 60" fill="#DAAE1A" />
                </svg>
                <span className="footer-brand-name">نسی‌لند</span>
              </div>
              <p className="footer-slogan">اعتبار امروز، آسایش فردا</p>
            </div>

            <div className="footer-col footer-contact">
              <h4>تماس با ما</h4>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>021-88640244</span>
              </div>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>info@nesilend.com</span>
              </div>
            </div>

            <div className="footer-col footer-social">
              <h4>شبکه‌های اجتماعی</h4>
              <div className="footer-social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener"
                  className="social-icon"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener"
                  className="social-icon"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener"
                  className="social-icon"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 1404 نسی‌لند. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
