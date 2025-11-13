import { getPayload } from 'payload'
import config from '../src/payload.config'

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

async function seedPosts() {
  console.log('🌱 Starting seed process...')
  console.log('')

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // Check if admin user exists
    const users = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: 'admin@nesilend.ir',
        },
      },
      limit: 1,
    })

    let authorId: number
    if (users.docs.length === 0) {
      console.log('❌ Admin user not found. Please run seed-all.ts first or create an admin user.')
      process.exit(1)
    } else {
      authorId = users.docs[0].id
      console.log(`✅ Found admin user: ${users.docs[0].email}`)
    }

    console.log('')
    console.log('📝 Creating blog posts...')

    for (const post of posts) {
      await payload.create({
        collection: 'posts',
        data: {
          ...post,
          author: authorId,
        },
      })
      console.log(`   ✅ Created: ${post.title}`)
    }

    console.log('')
    console.log(`🎉 Successfully created ${posts.length} blog posts!`)
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding posts:', error)
    process.exit(1)
  }
}

seedPosts()
