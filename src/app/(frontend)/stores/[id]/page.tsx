import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { StoreIcon } from '../../components/StoreIcons'
import './store-detail.css'

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

    const isActive = store.status === 'active'

    return (
      <div className="store-detail-page">
        <div className="store-detail-container">
          <Link href="/stores" className="store-detail-back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              style={{ width: '20px', height: '20px' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            بازگشت به فروشگاه‌ها
          </Link>

          <div className="store-detail-card">
            <div className="store-detail-icon-wrapper">
              <StoreIcon iconType={store.iconType} />
            </div>

            <h1 className="store-detail-title">{store.name}</h1>

            <div
              className={`store-detail-status-badge ${isActive ? 'active' : 'coming-soon'}`}
            >
              {isActive ? (
                <>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  فعال
                </>
              ) : (
                <>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  در حال راه‌اندازی
                </>
              )}
            </div>

            <div className="store-detail-divider"></div>

            <div className="store-detail-description">
              {typeof store.description === 'string' ? (
                <p>{store.description}</p>
              ) : (
                <p>
                  این فروشگاه به زودی به شبکه نسی‌لند اضافه خواهد شد. صندوق‌های رفاهی می‌توانند به
                  بهبود قدرت خرید کارکنان و افزایش رضایت شغلی آن‌ها کمک شایانی کنند.
                </p>
              )}
            </div>

            <div className="store-detail-features">
              {(store.features?.creditPurchase ?? true) && (
                <div className="store-feature-badge" title="خرید اعتباری">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  <span>خرید اعتباری</span>
                </div>
              )}

              {(store.features?.noInterest ?? true) && (
                <div className="store-feature-badge" title="بدون سود">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>بدون سود</span>
                </div>
              )}

              {(store.features?.fastApproval ?? true) && (
                <div className="store-feature-badge" title="تایید سریع">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span>تایید سریع</span>
                </div>
              )}

              {store.features?.freeDelivery && (
                <div className="store-feature-badge" title="ارسال رایگان">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                  <span>ارسال رایگان</span>
                </div>
              )}

              {store.features?.warranty && (
                <div className="store-feature-badge" title="گارانتی اصالت">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>گارانتی اصالت</span>
                </div>
              )}

              {store.features?.support247 && (
                <div className="store-feature-badge" title="پشتیبانی 24/7">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span>پشتیبانی 24/7</span>
                </div>
              )}
            </div>

            <div className="store-detail-action">
              <a href="https://app.nesilend.ir/" className="store-detail-btn store-detail-btn-primary">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{ width: '20px', height: '20px' }}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                شروع خرید
              </a>
              <Link href="/" className="store-detail-btn store-detail-btn-secondary">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{ width: '20px', height: '20px' }}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                بازگشت به صفحه اصلی
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching store:', error)
    notFound()
  }
}

