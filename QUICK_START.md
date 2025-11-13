# 🚀 راهنمای سریع شروع

## ✅ مشکل حل شد!

دیتابیس با موفقیت ریست شد و تمام migrations اجرا شدند.

## 📝 دستورات مهم

### اجرای پروژه
```bash
npm run dev
```

سپس مراجعه کنید به:
- 🏠 **صفحه اصلی**: http://localhost:3000
- 🔐 **پنل ادمین**: http://localhost:3000/admin

### اگر دوباره مشکل دیتابیس پیش آمد
```bash
npm run reset-db          # پاک کردن دیتابیس
npm run payload migrate   # اجرای migrations
npm run dev              # اجرای پروژه
```

یا به صورت یکجا:
```bash
npm run setup            # همه کارها به صورت خودکار
```

## 🎨 اضافه کردن محتوا

### 1️⃣ ایجاد کاربر ادمین
اولین بار که وارد پنل ادمین می‌شوید، باید یک کاربر بسازید:

1. برو به: http://localhost:3000/admin
2. فرم ثبت‌نام را پر کن
3. وارد شو

### 2️⃣ اضافه کردن فروشگاه
1. در پنل ادمین به **Stores** برو
2. روی **Create New** کلیک کن
3. فرم را پر کن:
   ```
   نام: فروشگاه تست
   Slug: test-store
   توضیحات: این یک فروشگاه تستی است
   وضعیت: فعال
   ```
4. **Save** کن

### 3️⃣ اضافه کردن مقاله بلاگ
1. در پنل ادمین به **Posts** برو
2. روی **Create New** کلیک کن
3. فرم را پر کن:
   ```
   Title: مقاله تستی
   Slug: test-post
   Content: محتوای مقاله...
   Status: published (حتماً!)
   Published Date: امروز
   ```
4. **Save** کن

### 4️⃣ آپلود تصویر (اختیاری)
1. در پنل ادمین به **Media** برو
2. تصاویر خود را آپلود کن
3. هنگام ایجاد Post یا Store، این تصاویر را انتخاب کن

## 📁 ساختار فایل‌ها

```
src/
├── app/(frontend)/
│   ├── page.tsx          ← صفحه اصلی نسی‌لند
│   ├── layout.tsx        ← Layout با suppressHydrationWarning
│   └── styles.css        ← استایل‌های زیبا
├── collections/
│   ├── Stores.ts         ← کالکشن فروشگاه‌ها (جدید)
│   └── Posts.ts          ← کالکشن مقالات (اصلاح شده)
└── migrations/
    └── 20251107_add_stores.* ← Migration فروشگاه‌ها
```

## 🔧 اسکریپت‌های مفید

| دستور | توضیح |
|-------|-------|
| `npm run dev` | اجرای development server |
| `npm run build` | ساخت پروژه برای production |
| `npm run reset-db` | پاک کردن دیتابیس لوکال |
| `npm run payload migrate` | اجرای migrations |
| `npm run generate:types` | ساخت TypeScript types |
| `npm run setup` | ریست + migration + dev |

## 🎯 ویژگی‌های صفحه اصلی

### بخش‌های پیاده‌سازی شده:
- ✅ Hero با کارت اعتباری
- ✅ Features (6 ویژگی)
- ✅ Vision
- ✅ **Stores** (متصل به PayloadCMS)
- ✅ **Blog** (متصل به PayloadCMS)
- ✅ App Section
- ✅ Guides
- ✅ Footer

### Dynamic Content:
- اگر فروشگاهی نباشد → نمایش 6 placeholder
- اگر پستی منتشر نشده → نمایش 4 مقاله نمونه
- همه محتوا از PayloadCMS بارگذاری می‌شود

## 🐛 رفع مشکلات رایج

### خطای "Failed query: DROP TABLE"
```bash
npm run reset-db
npm run payload migrate
```

### خطای Hydration Mismatch
✅ حل شده! `suppressHydrationWarning` به `<body>` اضافه شده

### تصاویر نمایش داده نمی‌شوند
- مطمئن شوید تصاویر در پنل ادمین آپلود شده‌اند
- R2 Storage باید فعال باشه (برای لوکال خودکار هست)

### پست‌ها نمایش داده نمی‌شوند
- مطمئن شوید Status روی **published** است
- تاریخ انتشار نباید در آینده باشد

## 📚 منابع بیشتر

- [PayloadCMS Docs](https://payloadcms.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- راهنمای کامل: `NESILEND_README.md`

## 🎉 موفق باشید!

حالا می‌تونید:
1. `npm run dev` رو اجرا کنید
2. به http://localhost:3000 برید
3. صفحه زیبای نسی‌لند رو ببینید!
4. از پنل ادمین محتوا اضافه کنید

---

**نکته**: برای اولین بار، صفحه با محتوای placeholder نمایش داده می‌شه. بعد از اضافه کردن محتوا از پنل ادمین، محتوای واقعی نمایش داده میشه.

