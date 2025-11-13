import { getPayload } from 'payload'
import config from '../src/payload.config'

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

async function seedStores() {
  console.log('🌱 Starting to seed stores...')

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // Check if stores already exist
    const existingStores = await payload.find({
      collection: 'stores',
      limit: 1,
    })

    if (existingStores.totalDocs > 0) {
      console.log('⚠️  Stores already exist. Skipping seed.')
      console.log(`   Found ${existingStores.totalDocs} existing store(s).`)
      return
    }

    // Create stores
    for (const store of stores) {
      console.log(`   Creating: ${store.name}...`)
      await payload.create({
        collection: 'stores',
        data: store,
      })
      console.log(`   ✅ Created: ${store.name}`)
    }

    console.log('🎉 Successfully seeded all stores!')
    console.log(`   Total stores created: ${stores.length}`)
  } catch (error) {
    console.error('❌ Error seeding stores:', error)
    throw error
  }
}

// Run the seed function
seedStores()
  .then(() => {
    console.log('✨ Seed completed!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('💥 Seed failed:', error)
    process.exit(1)
  })

