import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="section store-detail">
      <div className="container">
        <div className="store-detail-content">
          <h1>فروشگاه یافت نشد</h1>
          <p style={{ color: '#6b7280', marginBottom: '24px' }}>
            متأسفانه فروشگاه مورد نظر شما یافت نشد.
          </p>
          <Link href="/#stores" className="btn btn-primary">
            بازگشت به فروشگاه‌ها
          </Link>
        </div>
      </div>
    </div>
  )
}

