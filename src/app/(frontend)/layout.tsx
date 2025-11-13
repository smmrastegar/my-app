import React from 'react'
import './styles.css'

export const metadata = {
  description:
    'نسی‌لند؛ خرید اعتباری هوشمند برای افزایش قدرت خرید، مدیریت نقدینگی و رفاه کارکنان. اعتبار امروز، آسایش فردا.',
  title: 'نسی‌لند - اعتبار امروز، آسایش فردا',
}

export default async function FrontendLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <div lang="fa" dir="rtl" style={{ minHeight: '100vh' }}>
      {children}
    </div>
  )
}
