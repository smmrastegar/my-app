import { getPayload } from 'payload'
import config from '@/payload.config'
// import type { Post, Store } from '@/payload-types'
import Link from 'next/link'
import ClientScripts from './ClientScripts'
import './styles.css'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch published posts
  const posts = await payload.find({
    collection: 'posts',
    where: {
      status: {
        equals: 'published',
      },
    },
    sort: '-publishedDate',
    limit: 4,
    depth: 1,
    overrideAccess: false,
  })

  // Fetch stores
  const stores = await payload.find({
    collection: 'stores',
    limit: 6,
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
                <a href="#guides">راهنما</a>
                <a href="#app">اپلیکیشن</a>
                <a href="#blog">بلاگ</a>
                <a href="#about">درباره ما</a>
                <a href="#stores">فروشگاه‌ها</a>
                <a href="#home">خانه</a>
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

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <h1>
                اعتبار امروز،
                <br />
                <span style={{ color: 'var(--gold)' }}>آسایش فردا</span>
              </h1>
              <p className="subtext">
                راهکار نوین خرید اعتباری برای افزایش قدرت خرید و کاهش ریسک اعتباری
              </p>
              <div className="cta-group">
                <a
                  href="https://app.nesilend.ir/"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary"
                >
                  دریافت اعتبار
                </a>
                <a
                  href="https://app.nesilend.ir/"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-ghost"
                >
                  ورود به برنامه
                </a>
              </div>
            </div>

            <div className="hero-art">
              <div className="card-mockup">
                <div className="card-top">
                  <div className="card-right-top">
                    <div className="card-logo">
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
                        <rect x="10" y="60" width="124" height="22" rx="4" ry="4" fill="#1a2332" />
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
                    <div className="card-type-text">کارت اعتباری</div>
                  </div>
                  <span className="card-title">نسی‌لند</span>
                </div>
                <div className="card-number">1234 **** **** ****</div>
                <div className="card-footer">
                  <div className="card-name">NESILEND</div>
                  <div className="card-credit">
                    <div className="credit-label">اعتبار موجود</div>
                    <div className="credit-amount">۵,۰۰۰,۰۰۰ تومان</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
              نسی‌لند راهکاری نوین برای چالش‌های مالی روزمره
            </p>
          </div>

          <div className="grid features-grid">
            <div className="feature-card">
              <div className="icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3>افزایش قدرت خرید</h3>
              <p>
                تورم و کاهش ارزش پول ملی باعث کاهش قدرت خرید شده؛ نسی‌لند راهکاری برای افزایش قدرت
                خرید کارکنان و کارگران است.
              </p>
            </div>

            <div className="feature-card">
              <div className="icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3>وصول مطالبات</h3>
              <p>
                کمک به شرکت‌های بزرگ تولیدی برای دریافت مطالبات خود از طریق اعتباردهی به کارکنان جهت
                خرید از فروشگاه‌ها.
              </p>
            </div>

            <div className="feature-card">
              <div className="icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3>صندوق رفاهی کارکنان</h3>
              <p>
                ایجاد امکان خرید قسطی برای کارکنان به‌عنوان گزینه‌ای مطلوب برای صندوق‌های رفاهی
                سازمان‌ها.
              </p>
            </div>

            <div className="feature-card">
              <div className="icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3>مدیریت نقدینگی</h3>
              <p>تسهیل مدیریت نقدینگی ماهانه برای کارمندان و کارگران با امکان پرداخت قسطی.</p>
            </div>

            <div className="feature-card">
              <div className="icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <h3>سبد معیشتی</h3>
              <p>ارائه خرید قسطی مایحتاج ماهانه به‌جای تسهیلات بانکی سخت‌گیرانه.</p>
            </div>

            <div className="feature-card">
              <div className="icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3>امنیت و اعتماد</h3>
              <p>
                تمام تراکنش‌ها با بالاترین استانداردهای امنیتی محافظت می‌شوند و اطلاعات شما کاملاً
                محرمانه است.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">چشم‌انداز نسی‌لند</h2>
            <p className="lead">
              پلتفرم نسی‌لند با هدف ارتقای عدالت مالی، کاهش ریسک اعتباری و افزایش قدرت خرید کاربران
              طراحی شده و به کمک مدل تأمین مالی ترکیبی، تکنولوژی‌های پیشرفته و اکوسیستم هم‌افزا،
              راهکار نوینی برای خرید اعتباری فراهم می‌سازد.
            </p>
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section id="stores" className="section stores">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title">فروشگاه‌های همکار</h2>
            <p className="lead">به زودی فروشگاه‌های معتبر به شبکه نسی‌لند اضافه خواهند شد</p>
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
            <Link href="/stores" className="btn btn-primary">
              مشاهده همه فروشگاه‌ها
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section blog">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title">بلاگ نسی‌لند</h2>
            <p className="lead">مطالب آموزشی و اخبار دنیای فین‌تک</p>
          </div>

          <div className="grid blog-grid">
            {posts.docs.length > 0 ? (
              posts.docs.slice(0, 4).map((post, index) => {
                const icons = [
                  'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                  'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                  'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
                  'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
                ]
                return (
                  <article key={post.id} className="post-card">
                    <div className="post-icon">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={icons[index % icons.length]} />
                      </svg>
                    </div>
                    <h3>{post.title}</h3>
                    <p>
                      {post.content && typeof post.content === 'object' && 'root' in post.content
                        ? (
                            post.content.root as {
                              children?: Array<{ children?: Array<{ text?: string }> }>
                            }
                          )?.children?.[0]?.children?.[0]?.text?.substring(0, 100) + '...'
                        : 'بررسی موضوعات مهم در حوزه فین‌تک و خدمات مالی'}
                    </p>
                    <Link href={`/blog/${post.slug}`} className="readmore">
                      ادامه مطلب ←
                    </Link>
                  </article>
                )
              })
            ) : (
              <>
                {[
                  {
                    title: 'امنیت در تراکنش‌های مالی',
                    desc: 'اهمیت امنیت سایبری و حفاظت از اطلاعات مالی در عصر دیجیتال',
                  },
                  {
                    title: 'صندوق رفاهی کارکنان',
                    desc: 'نقش صندوق‌های رفاهی در بهبود کیفیت زندگی کارکنان',
                  },
                  {
                    title: 'مدیریت نقدینگی',
                    desc: 'راهکارهای هوشمند برای مدیریت بهتر درآمد و هزینه‌های ماهانه',
                  },
                  {
                    title: 'مسئله به وجود آمدن لندتک‌ها',
                    desc: 'بررسی دلایل ظهور و رشد پلتفرم‌های وام‌دهی دیجیتال در دنیا',
                  },
                ].map((item, index) => {
                  const icons = [
                    'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                    'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
                    'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
                  ]
                  return (
                    <article key={index} className="post-card">
                      <div className="post-icon">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={icons[index]} />
                        </svg>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <span className="readmore">ادامه مطلب ←</span>
                    </article>
                  )
                })}
              </>
            )}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/blog" className="btn btn-primary">
              مشاهده همه مطالب
            </Link>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section id="app" className="section app-section">
        <div className="container">
          <div className="app-inner">
            <div className="app-mockup">
              <div className="phone-frame">
                <div className="phone-content">
                  <div className="app-header">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 144 144"
                      className="app-logo"
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
                    <span className="app-brand">نسی‌لند</span>
                  </div>
                  <div className="credit-card-mini">
                    <div className="credit-label">اعتبار موجود</div>
                    <div className="credit-value">۵,۰۰۰,۰۰۰ تومان</div>
                  </div>
                  <div className="app-buttons">
                    <button className="btn-app-primary">
                      <span>آخرین خرید</span>
                      <span className="store-name">فروشگاه بهروز</span>
                    </button>
                    <button className="btn-app-secondary">شروع خرید</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="app-content">
              <h2 className="section-title">برنامه نسی‌لند</h2>
              <p className="lead">
                تمام امکانات خرید اعتباری در دستان شما. اپلیکیشن نسی‌لند را دانلود کنید و از
                تجربه‌ای آسان و امن بهره‌مند شوید.
              </p>
              <div className="cta-group">
                <a href="https://app.nesilend.ir/" className="btn btn-app-download">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ width: '20px', height: '20px', marginLeft: '8px' }}
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  دانلود از Google Play
                </a>
                <a href="https://app.nesilend.ir/" className="btn btn-app-web">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ width: '20px', height: '20px', marginLeft: '8px' }}
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  نسخه وب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="section guides">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title">راهنماهای کاربری</h2>
            <p className="lead">آموزش گام به گام استفاده از خدمات نسی‌لند</p>
          </div>

          <div className="guides-grid">
            <div className="guide-card">
              <div className="guide-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                </svg>
              </div>
              <h3>راهنمای دریافت کیف پول</h3>
              <p>مراحل ثبت‌نام و دریافت کیف پول اعتباری نسی‌لند</p>
              <a href="https://app.nesilend.ir/" className="btn btn-guide">
                مشاهده راهنما
              </a>
            </div>

            <div className="guide-card">
              <div className="guide-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <h3>راهنمای خرید اعتباری</h3>
              <p>نحوه انجام خرید و پرداخت اقساط در نسی‌لند</p>
              <a href="https://app.nesilend.ir/" className="btn btn-guide">
                مشاهده راهنما
              </a>
            </div>
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

      <ClientScripts />
    </>
  )
}
