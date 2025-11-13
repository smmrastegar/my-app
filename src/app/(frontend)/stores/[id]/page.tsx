import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function StorePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    const store = await payload.findByID({
      collection: 'stores',
      id: id,
      overrideAccess: false,
    })

    if (!store) {
      notFound()
    }

    const iconPaths = [
      'M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
      'M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z',
      'M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
      'M21 6.5l-9 7.07L3 6.5V5l9 7 9-7v1.5zM3 19V8.5l9 7 9-7V19H3z',
      'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z',
      'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    ]

    const iconIndex = parseInt(id) % iconPaths.length
    const iconPath = iconPaths[iconIndex]

    return (
      <>
        <div className="store-detail-header">
          <div className="container">
            <Link href="/#stores" className="back-link">
              ← بازگشت به فروشگاه‌ها
            </Link>
          </div>
        </div>

        <section className="section store-detail">
          <div className="container">
            <div className="store-detail-content">
              <div className="store-detail-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d={iconPath} />
                </svg>
              </div>
              <h1>{store.name}</h1>
              <p className="store-detail-status">
                {store.status === 'coming_soon'
                  ? 'در حال راه‌اندازی'
                  : store.status === 'active'
                    ? 'فعال'
                    : 'در حال راه‌اندازی'}
              </p>
              <div className="store-detail-description">
                {typeof store.description === 'string' ? (
                  <p>{store.description}</p>
                ) : (
                  <p>این فروشگاه به زودی به شبکه نسی‌لند اضافه خواهد شد.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  } catch (error) {
    console.error('Error fetching store:', error)
    notFound()
  }
}

