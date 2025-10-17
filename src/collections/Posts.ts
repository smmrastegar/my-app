// src/collections/Posts.ts
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: 'پست', plural: 'پست‌ها' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'publishedAt', 'updatedAt'],
    description: 'پست‌های بلاگ با بدنهٔ طولانی و گالری تصاویر',
  },

  access: {
    read: () => true,                 // همه بتوانند بخوانند
    create: ({ req }) => !!req.user,  // ساخت/ویرایش فقط برای لاگین‌شده‌ها
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },

  fields: [
    // عنوان
    { name: 'title', type: 'text', label: 'عنوان', required: true },

    // اسلاگ (اگر خالی بماند، از روی عنوان ساخته می‌شود)
    {
      name: 'slug',
      type: 'text',
      label: 'اسلاگ',
      unique: true,
      admin: { description: 'اگر خالی بماند از روی عنوان ساخته می‌شود' },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (!data) return data
            const base = data.slug || data.title
            if (!base) return data
            const s = String(base)
              .toLowerCase()
              .normalize('NFKD')
              .replace(/[^\w\s-]/g, '')
              .trim()
              .replace(/\s+/g, '-')
              .replace(/-+/g, '-')
            return { ...data, slug: s }
          },
        ],
      },
    },

    // خلاصه (برای کارت لیست)
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'خلاصه کارت',
      required: true,
    },

    // تصویر شاخص
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media', // از کالکشن Media
      label: 'تصویر شاخص',
    },

    // گالری تصاویر (اختیاری)
    {
      name: 'gallery',
      label: 'گالری تصاویر',
      type: 'array',
      labels: { singular: 'تصویر', plural: 'تصاویر' },
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true, label: 'تصویر' },
        { name: 'alt', type: 'text', label: 'ALT' },
        { name: 'caption', type: 'text', label: 'کپشن' },
      ],
    },

    // بدنهٔ بلند (Lexical richText)
    { name: 'body', type: 'richText', label: 'متن پست', required: true },

    // وضعیت و تاریخ انتشار
    {
      type: 'row',
      fields: [
        {
          name: 'status',
          type: 'select',
          label: 'وضعیت',
          defaultValue: 'draft',
          options: [
            { label: 'پیش‌نویس', value: 'draft' },
            { label: 'منتشر شده', value: 'published' },
          ],
          required: true,
        },
        {
          name: 'publishedAt',
          type: 'date',
          label: 'تاریخ انتشار',
          admin: { position: 'sidebar' },
          hooks: {
            // اگر وضعیت publish شد و تاریخی ست نیست، به‌صورت خودکار الان را بگذار
            beforeValidate: [
              ({ data }) => {
                if (!data) return data
                if (data.status === 'published' && !data.publishedAt) {
                  return { ...data, publishedAt: new Date().toISOString() }
                }
                return data
              },
            ],
          },
        },
      ],
    },

    // نویسنده
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      label: 'نویسنده',
      admin: { position: 'sidebar' },
    },
  ],

  // تاریخ‌های سیستم
  timestamps: true,

  // خروجی کمکی: تاریخ شمسی + URL خوانا
  hooks: {
    afterRead: [
      ({ doc }) => {
        // تاریخ شمسی (fa-IR + تقویم Persian) بدون وابستگی خارجی
        if (doc?.publishedAt) {
          try {
            const d = new Date(doc.publishedAt as string)
            const fmt = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })
            ;(doc as any).publishedAtJalali = fmt.format(d)
          } catch {
            // ignore
          }
        }

        // یک فیلد کمکی برای مسیر فرانت (مثلاً /blog/slug)
        if (doc?.slug) {
          ;(doc as any).path = `/blog/${doc.slug}`
        }

        return doc
      },
    ],
  },
}
