import type { CollectionConfig } from 'payload'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
dayjs.extend(jalaliday)

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'publishedAt', 'updatedAt'],
    group: 'محتوا',
  },
  access: {
    read: () => true, // همه بتوانند بخوانند
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'عنوان' },

    // اسلاگ خودکار
    {
      name: 'slug',
      type: 'text',
      unique: true,
      label: 'اسلاگ',
      admin: { description: 'اگر خالی بگذاری از روی عنوان ساخته می‌شود' },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (!data) return data
            const src = data.slug || data.title
            if (!src) return data
            const s = String(src)
              .toLowerCase()
              .normalize('NFKD')
              .replace(/[^\w\s-آ-یءۀؤأإ]/g, '') // اجازه حروف فارسی
              .trim()
              .replace(/\s+/g, '-')
              .replace(/-+/g, '-')
            return { ...data, slug: s }
          },
        ],
      },
    },

    { name: 'excerpt', type: 'textarea', label: 'خلاصه (کوتاه برای کارت)' },

    // تصویر شاخص
    { name: 'heroImage', type: 'upload', relationTo: 'media', label: 'تصویر شاخص' },

    // گالری چندعکسی
    {
      name: 'gallery',
      type: 'array',
      label: 'گالری تصاویر',
      fields: [{ name: 'image', type: 'upload', relationTo: 'media', required: true }],
    },

    // متن بلند (Lexical)
    { name: 'body', type: 'richText', label: 'متن پست' },

    // دسته و تگ (اختیاری)
    { name: 'categories', type: 'relationship', relationTo: 'categories', hasMany: true, label: 'دسته‌ها', admin: { position: 'sidebar' } },
    { name: 'tags', type: 'text', hasMany: true, label: 'تگ‌ها', admin: { position: 'sidebar' } },

    // وضعیت و تاریخ انتشار
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
      admin: { position: 'sidebar' },
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'تاریخ انتشار (میلادی ذخیره می‌شود)',
      admin: { position: 'sidebar' },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (!data) return data
            // اگر منتشر می‌شود و تاریخ خالی‌ست، الان را بگذار
            if (data.status === 'published' && !data.publishedAt) {
              return { ...data, publishedAt: new Date().toISOString() }
            }
            return data
          },
        ],
      },
    },

    // فیلد مجازی فقط برای نمایش شمسی در ادمین (readOnly)
    {
      name: 'publishedAtJalali',
      type: 'text',
      label: 'تاریخ انتشار (شمسی)',
      admin: { position: 'sidebar', readOnly: true },
      hooks: {
        afterRead: [
          ({ data }) => {
            const iso = data?.publishedAt
            if (!iso) return undefined
            // خروجی مثل 1403/07/25 - 10:30
            return dayjs(iso).calendar('jalali').locale('fa').format('YYYY/MM/DD - HH:mm')
          },
        ],
      },
    },
  ],
  timestamps: true,
}
