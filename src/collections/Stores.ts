// src/collections/Stores.ts
import type { CollectionConfig } from 'payload'

export const Stores: CollectionConfig = {
  slug: 'stores',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'نام فروشگاه',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'آدرس URL',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'توضیحات',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'لوگو',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'تصویر کاور',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'coming_soon',
          label: 'در حال راه‌اندازی',
        },
        {
          value: 'active',
          label: 'فعال',
        },
        {
          value: 'inactive',
          label: 'غیرفعال',
        },
      ],
      defaultValue: 'coming_soon',
      required: true,
      label: 'وضعیت',
    },
    {
      name: 'website',
      type: 'text',
      required: false,
      label: 'وبسایت',
    },
    {
      name: 'phone',
      type: 'text',
      required: false,
      label: 'تلفن',
    },
    {
      name: 'address',
      type: 'textarea',
      required: false,
      label: 'آدرس',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { value: 'grocery', label: 'سوپرمارکت' },
        { value: 'electronics', label: 'لوازم الکترونیکی' },
        { value: 'clothing', label: 'پوشاک' },
        { value: 'home', label: 'لوازم خانگی' },
        { value: 'other', label: 'سایر' },
      ],
      required: false,
      label: 'دسته‌بندی',
    },
    {
      name: 'features',
      type: 'group',
      label: 'ویژگی‌های فروشگاه',
      fields: [
        {
          name: 'creditPurchase',
          type: 'checkbox',
          label: '💳 خرید اعتباری',
          defaultValue: true,
        },
        {
          name: 'noInterest',
          type: 'checkbox',
          label: '💰 بدون سود',
          defaultValue: true,
        },
        {
          name: 'fastApproval',
          type: 'checkbox',
          label: '⚡ تایید سریع',
          defaultValue: true,
        },
        {
          name: 'freeDelivery',
          type: 'checkbox',
          label: '🚚 ارسال رایگان',
          defaultValue: false,
        },
        {
          name: 'warranty',
          type: 'checkbox',
          label: '🛡️ گارانتی اصالت',
          defaultValue: false,
        },
        {
          name: 'support247',
          type: 'checkbox',
          label: '📞 پشتیبانی 24/7',
          defaultValue: false,
        },
      ],
    },
  ],
}

