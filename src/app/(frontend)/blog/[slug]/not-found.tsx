import Link from 'next/link'
import './not-found.css'

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-icon">📄</div>
        <h1 className="not-found-title">مقاله یافت نشد</h1>
        <p className="not-found-text">
          متأسفانه مقاله‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.
        </p>
        <Link href="/" className="not-found-button">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  )
}

