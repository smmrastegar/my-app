import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'

export default async function BlogPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 100,
    where: { status: { equals: 'published' } },
    sort: '-publishedAt',
    overrideAccess: false,
  })

  const icons = [
    'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
    'M13 10V3L4 14h7v7l9-11h-7z',
    'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  ]

  return (
    <>
      <div className="blog-page-header">
        <div className="container">
          <Link href="/" className="back-link">
            ← بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>

      <section className="section blog">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 className="section-title">بلاگ نسی‌لند</h1>
            <p className="lead">مطالب آموزشی و اخبار دنیای فین‌تک</p>
          </div>

          <div className="grid blog-grid">
            {posts.docs.length > 0 ? (
              posts.docs.map((post, index) => (
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
              ))
            ) : (
              <>
                {[
                  { title: 'امنیت در تراکنش‌های مالی', desc: 'اهمیت امنیت سایبری و حفاظت از اطلاعات مالی در عصر دیجیتال' },
                  { title: 'صندوق رفاهی کارکنان', desc: 'نقش صندوق‌های رفاهی در بهبود کیفیت زندگی کارکنان' },
                  { title: 'مدیریت نقدینگی', desc: 'راهکارهای هوشمند برای مدیریت بهتر درآمد و هزینه‌های ماهانه' },
                  { title: 'مسئله به وجود آمدن لندتک‌ها', desc: 'بررسی دلایل ظهور و رشد پلتفرم‌های وام‌دهی دیجیتال در دنیا' },
                  { title: 'راهنمای خرید اعتباری', desc: 'آشنایی با مزایا و چالش‌های خرید اعتباری و نکات مهم' },
                  { title: 'مدیریت بودجه خانواده', desc: 'روش‌های عملی برای برنامه‌ریزی مالی و کنترل هزینه‌ها' },
                  { title: 'فین‌تک و آینده بانکداری', desc: 'نقش تکنولوژی در تحول خدمات بانکی و مالی' },
                  { title: 'سرمایه‌گذاری هوشمند', desc: 'آشنایی با روش‌های نوین سرمایه‌گذاری و کاهش ریسک' },
                ].map((item, index) => (
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
                        <path d={icons[index % icons.length]} />
                      </svg>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <span className="readmore">ادامه مطلب ←</span>
                  </article>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

