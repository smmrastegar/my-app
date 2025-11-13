# صفحه اصلی نسی‌لند

این پروژه شامل پیاده‌سازی صفحه اصلی نسی‌لند بر اساس طراحی [nesilend.ir](https://www.nesilend.ir) است که به PayloadCMS متصل شده است.

## ✨ ویژگی‌ها

### 🎨 طراحی مدرن و زیبا
- طراحی Responsive و سازگار با موبایل
- انیمیشن‌ها و افکت‌های Hover جذاب
- رنگ‌بندی و تایپوگرافی حرفه‌ای
- گرادیانت‌های زیبا و Shadow های حرفه‌ای

### 📦 بخش‌های صفحه
1. **Hero Section** - معرفی اصلی با کارت اعتباری
2. **Features** - ویژگی‌های نسی‌لند (6 ویژگی)
3. **Vision** - چشم‌انداز نسی‌لند
4. **Stores** - فروشگاه‌های همکار (متصل به PayloadCMS)
5. **Blog** - مقالات بلاگ (متصل به PayloadCMS)
6. **App** - معرفی اپلیکیشن موبایل
7. **Guides** - راهنماهای کاربری
8. **Footer** - اطلاعات تماس و شبکه‌های اجتماعی

## 🗄️ کالکشن‌های PayloadCMS

### 1. Stores (فروشگاه‌های همکار)
فیلدها:
- `name` - نام فروشگاه
- `slug` - آدرس URL یکتا
- `description` - توضیحات فروشگاه
- `logo` - لوگو (آپلود تصویر)
- `coverImage` - تصویر کاور (آپلود تصویر)
- `status` - وضعیت (در حال راه‌اندازی / فعال / غیرفعال)
- `website` - وبسایت
- `phone` - تلفن
- `address` - آدرس
- `category` - دسته‌بندی

### 2. Posts (مقالات بلاگ) - موجود قبلی
فیلدها:
- `title` - عنوان مقاله
- `slug` - آدرس URL یکتا
- `content` - محتوای مقاله (Rich Text)
- `featuredImage` - تصویر شاخص
- `author` - نویسنده
- `status` - وضعیت (پیش‌نویس / منتشر شده / آرشیو)
- `publishedDate` - تاریخ انتشار

## 🚀 راه‌اندازی

### 1. نصب وابستگی‌ها
```bash
npm install
```

### 2. اجرای Migration ها
```bash
npm run payload migrate
```

### 3. اجرای پروژه در حالت Development
```bash
npm run dev
```

### 4. دسترسی به پنل ادمین
برای اضافه کردن فروشگاه‌ها و مقالات:
```
http://localhost:3000/admin
```

## 📝 نحوه استفاده

### اضافه کردن فروشگاه جدید
1. وارد پنل ادمین شوید: `/admin`
2. به بخش "Stores" بروید
3. روی "Create New" کلیک کنید
4. فرم را پر کنید:
   - نام فروشگاه
   - آدرس یکتا (slug)
   - توضیحات
   - لوگو (اختیاری)
   - وضعیت را انتخاب کنید
5. ذخیره کنید

### اضافه کردن مقاله بلاگ
1. وارد پنل ادمین شوید: `/admin`
2. به بخش "Posts" بروید
3. روی "Create New" کلیک کنید
4. فرم را پر کنید:
   - عنوان مقاله
   - آدرس یکتا (slug)
   - محتوا
   - تصویر شاخص
   - نویسنده
   - وضعیت را روی "Published" قرار دهید
   - تاریخ انتشار
5. ذخیره کنید

## 🎯 ویژگی‌های فنی

### استفاده از Next.js 15
- Server Components برای بهینه‌سازی
- Dynamic Data Fetching از PayloadCMS
- SEO Optimized

### استفاده از PayloadCMS
- API قدرتمند GraphQL و REST
- پنل ادمین زیبا و کاربرپسند
- مدیریت تصاویر با R2 Storage
- Database: SQLite با D1

### CSS سفارشی
- CSS Variables برای مدیریت رنگ‌ها
- Grid Layout برای Responsive Design
- Animations و Transitions نرم
- RTL Support کامل

## 🌐 دسترسی‌ها

- **صفحه اصلی**: `http://localhost:3000/`
- **پنل ادمین**: `http://localhost:3000/admin`
- **API GraphQL**: `http://localhost:3000/api/graphql`
- **API REST**: `http://localhost:3000/api`

## 📱 Responsive Design

صفحه برای تمام سایزهای صفحه نمایش بهینه شده:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 رنگ‌بندی

```css
--primary-color: #6366f1    /* بنفش اصلی */
--secondary-color: #8b5cf6  /* بنفش ثانویه */
--accent-color: #ec4899     /* صورتی */
--text-primary: #1e293b     /* متن اصلی */
--text-secondary: #64748b   /* متن ثانویه */
```

## 📄 فایل‌های اصلی

```
src/
├── app/(frontend)/
│   ├── page.tsx           # صفحه اصلی
│   ├── layout.tsx         # Layout اصلی
│   └── styles.css         # استایل‌های صفحه اصلی
├── collections/
│   ├── Stores.ts          # کالکشن فروشگاه‌ها
│   └── Posts.ts           # کالکشن مقالات
├── migrations/
│   └── 20251107_add_stores.ts  # Migration فروشگاه‌ها
└── payload.config.ts      # تنظیمات PayloadCMS
```

## 🔧 تنظیمات اضافی

### اضافه کردن فونت فارسی
برای بهبود ظاهر متن‌های فارسی، فونت Vazirmatn را اضافه کنید:

```html
<link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" rel="stylesheet">
```

## 🐛 رفع مشکلات

### مشکل Hydration Mismatch
اگر خطای hydration مشاهده کردید، `suppressHydrationWarning` به تگ `<body>` اضافه شده است.

### مشکل در نمایش تصاویر
مطمئن شوید R2 Storage به درستی پیکربندی شده و تصاویر آپلود شده‌اند.

## 📚 منابع

- [Next.js Documentation](https://nextjs.org/docs)
- [PayloadCMS Documentation](https://payloadcms.com/docs)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Nesilend Website](https://www.nesilend.ir/)

## 🙏 تشکر

این پروژه با الهام از طراحی زیبای [nesilend.ir](https://www.nesilend.ir) ساخته شده است.

