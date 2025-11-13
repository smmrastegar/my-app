import { getPayload } from 'payload'
import config from '../src/payload.config'

// Default admin user
const defaultAdmin = {
  email: 'admin@nesilend.ir',
  password: 'Admin@12345',
}

// Stores data
const stores = [
  {
    name: 'فروشگاه یک',
    slug: 'store-1',
    description: 'فروشگاه‌های همکار به زودی معرفی خواهند شد',
    status: 'coming_soon' as const,
    category: 'grocery' as const,
  },
  {
    name: 'فروشگاه دو',
    slug: 'store-2',
    description: 'فروشگاه‌های همکار به زودی معرفی خواهند شد',
    status: 'coming_soon' as const,
    category: 'electronics' as const,
  },
  {
    name: 'فروشگاه سه',
    slug: 'store-3',
    description: 'فروشگاه‌های همکار به زودی معرفی خواهند شد',
    status: 'coming_soon' as const,
    category: 'clothing' as const,
  },
  {
    name: 'فروشگاه چهار',
    slug: 'store-4',
    description: 'فروشگاه‌های همکار به زودی معرفی خواهند شد',
    status: 'coming_soon' as const,
    category: 'home' as const,
  },
  {
    name: 'فروشگاه پنج',
    slug: 'store-5',
    description: 'فروشگاه‌های همکار به زودی معرفی خواهند شد',
    status: 'coming_soon' as const,
    category: 'other' as const,
  },
  {
    name: 'فروشگاه شش',
    slug: 'store-6',
    description: 'فروشگاه‌های همکار به زودی معرفی خواهند شد',
    status: 'coming_soon' as const,
    category: 'other' as const,
  },
]

// Posts data
const posts = [
  {
    title: 'مسئله به وجود آمدن لندتک‌ها',
    slug: 'lendtech-emergence',
    content: {
      root: {
        type: 'root' as any,
        children: [
          {
            type: 'paragraph' as any,
            version: 1,
            children: [
              {
                type: 'text',
                text: 'بررسی دلایل ظهور و رشد پلتفرم‌های وام‌دهی دیجیتال در دنیا. صنعت فین‌تک در سال‌های اخیر شاهد رشد چشمگیر پلتفرم‌های لندتک بوده است که با ارائه خدمات وام‌دهی سریع و آسان، بازار سنتی بانکداری را متحول کرده‌اند.',
              },
            ],
          },
        ],
        direction: 'rtl' as any,
        format: '' as any,
        indent: 0,
        version: 1,
      },
    },
    status: 'published' as const,
    publishedDate: new Date().toISOString(),
  },
  {
    title: 'مدیریت نقدینگی',
    slug: 'liquidity-management',
    content: {
      root: {
        type: 'root' as any,
        children: [
          {
            type: 'paragraph' as any,
            version: 1,
            children: [
              {
                type: 'text',
                text: 'راهکارهای هوشمند برای مدیریت بهتر درآمد و هزینه‌های ماهانه. یکی از مهم‌ترین چالش‌های خانوارهای ایرانی، مدیریت صحیح نقدینگی و جلوگیری از خرج‌های غیرضروری است که با برنامه‌ریزی دقیق قابل حل است.',
              },
            ],
          },
        ],
        direction: 'rtl' as any,
        format: '' as any,
        indent: 0,
        version: 1,
      },
    },
    status: 'published' as const,
    publishedDate: new Date().toISOString(),
  },
  {
    title: 'صندوق رفاهی کارکنان',
    slug: 'employee-welfare-fund',
    content: {
      root: {
        type: 'root' as any,
        children: [
          {
            type: 'paragraph' as any,
            version: 1,
            children: [
              {
                type: 'text',
                text: 'نقش صندوق‌های رفاهی در بهبود کیفیت زندگی کارکنان. صندوق‌های رفاهی می‌توانند با ارائه تسهیلات خرید اقساطی، به بهبود قدرت خرید کارکنان و افزایش رضایت شغلی آن‌ها کمک شایانی کنند.',
              },
            ],
          },
        ],
        direction: 'rtl' as any,
        format: '' as any,
        indent: 0,
        version: 1,
      },
    },
    status: 'published' as const,
    publishedDate: new Date().toISOString(),
  },
  {
    title: 'امنیت در تراکنش‌های مالی',
    slug: 'financial-transaction-security',
    content: {
      root: {
        type: 'root' as any,
        children: [
          {
            type: 'paragraph' as any,
            version: 1,
            children: [
              {
                type: 'text',
                text: 'اهمیت امنیت سایبری و حفاظت از اطلاعات مالی در عصر دیجیتال. با افزایش استفاده از خدمات مالی آنلاین، حفاظت از اطلاعات شخصی و مالی کاربران از اهمیت بالایی برخوردار است و پلتفرم‌های معتبر باید از بالاترین استانداردهای امنیتی استفاده کنند.',
              },
            ],
          },
        ],
        direction: 'rtl' as any,
        format: '' as any,
        indent: 0,
        version: 1,
      },
    },
    status: 'published' as const,
    publishedDate: new Date().toISOString(),
  },
]

async function seedAll() {
  console.log('🌱 Starting complete seed process...')
  console.log('')

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // Step 1: Create admin user if not exists
    console.log('👤 Step 1: Creating admin user...')
    const existingUsers = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: defaultAdmin.email,
        },
      },
      limit: 1,
    })

    let adminUser
    if (existingUsers.totalDocs === 0) {
      adminUser = await payload.create({
        collection: 'users',
        data: defaultAdmin,
      })
      console.log(`   ✅ Admin user created: ${defaultAdmin.email}`)
      console.log(`   🔑 Password: ${defaultAdmin.password}`)
    } else {
      adminUser = existingUsers.docs[0]
      console.log(`   ⏭️  Admin user already exists: ${defaultAdmin.email}`)
    }
    console.log('')

    // Step 2: Create stores
    console.log('🏪 Step 2: Creating stores...')
    const existingStores = await payload.find({
      collection: 'stores',
      limit: 1,
    })

    if (existingStores.totalDocs === 0) {
      for (const store of stores) {
        await payload.create({
          collection: 'stores',
          data: store,
        })
        console.log(`   ✅ Created: ${store.name}`)
      }
      console.log(`   🎉 Total stores created: ${stores.length}`)
    } else {
      console.log(`   ⏭️  Stores already exist (${existingStores.totalDocs} found)`)
    }
    console.log('')

    // Step 3: Create posts
    console.log('📝 Step 3: Creating blog posts...')
    const existingPosts = await payload.find({
      collection: 'posts',
      limit: 1,
    })

    if (existingPosts.totalDocs === 0) {
      for (const post of posts) {
        await payload.create({
          collection: 'posts',
          data: {
            ...post,
            author: adminUser.id,
          },
        })
        console.log(`   ✅ Created: ${post.title}`)
      }
      console.log(`   🎉 Total posts created: ${posts.length}`)
    } else {
      console.log(`   ⏭️  Posts already exist (${existingPosts.totalDocs} found)`)
    }
    console.log('')

    // Summary
    console.log('✨ ═══════════════════════════════════════════')
    console.log('🎉 Seed completed successfully!')
    console.log('✨ ═══════════════════════════════════════════')
    console.log('')
    console.log('📊 Summary:')
    console.log(`   👤 Admin User: ${defaultAdmin.email}`)
    console.log(`   🔑 Password: ${defaultAdmin.password}`)
    console.log(`   🏪 Stores: ${stores.length} items`)
    console.log(`   📝 Posts: ${posts.length} items`)
    console.log('')
    console.log('🌐 Next Steps:')
    console.log('   1. Visit: http://localhost:3000')
    console.log('   2. Admin Panel: http://localhost:3000/admin')
    console.log(`   3. Login with: ${defaultAdmin.email}`)
    console.log('')
  } catch (error) {
    console.error('❌ Error during seed:', error)
    throw error
  }
}

// Run the seed function
seedAll()
  .then(() => {
    console.log('✅ Process completed!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('💥 Process failed:', error)
    process.exit(1)
  })

