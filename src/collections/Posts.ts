// ./collections/Posts.ts
import type { CollectionConfig } from 'payload/types'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'publishedAt', 'updatedAt'],
    description: 'Simple blog posts',
  },
  access: {
    read: () => true,                 // همه بتوانند پست‌ها را بخوانند
    create: ({ req }) => !!req.user,  // ساخت/ویرایش فقط برای لاگین‌شده‌ها
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: { description: 'optional; leave empty to auto-generate' },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (!data) return data
            const src = data.slug || data.title
            if (!src) return data
            const s = String(src)
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
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: { position: 'sidebar' },
      hooks: {
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
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media', // از کالکشن Media شما استفاده می‌کند (slug باید 'media' باشد)
      admin: { description: 'Optional featured image' },
    },
    {
      name: 'body',
      type: 'richText', // شما global editor را lexical گذاشته‌اید، پس همین کافیست
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users', // از کالکشن Users شما
      admin: { position: 'sidebar' },
    },
  ],
  timestamps: true, // createdAt / updatedAt
}
