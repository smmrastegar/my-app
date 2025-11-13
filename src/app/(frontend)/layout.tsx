import React from 'react'
import './styles.css'

export const metadata = {
  description: 'نسی‌لند؛ خرید اعتباری هوشمند برای افزایش قدرت خرید، مدیریت نقدینگی و رفاه کارکنان. اعتبار امروز، آسایش فردا.',
  title: 'نسی‌لند - اعتبار امروز، آسایش فردا',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="fa" dir="rtl">
      <head>
        <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
