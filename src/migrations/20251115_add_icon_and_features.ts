import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Add icon_type column
  await db.run(sql`ALTER TABLE \`stores\` ADD COLUMN \`icon_type\` text DEFAULT 'store' NOT NULL;`)
  
  // Add features columns
  await db.run(sql`ALTER TABLE \`stores\` ADD COLUMN \`features_credit_purchase\` integer DEFAULT 1;`)
  await db.run(sql`ALTER TABLE \`stores\` ADD COLUMN \`features_no_interest\` integer DEFAULT 1;`)
  await db.run(sql`ALTER TABLE \`stores\` ADD COLUMN \`features_fast_approval\` integer DEFAULT 1;`)
  await db.run(sql`ALTER TABLE \`stores\` ADD COLUMN \`features_free_delivery\` integer DEFAULT 0;`)
  await db.run(sql`ALTER TABLE \`stores\` ADD COLUMN \`features_warranty\` integer DEFAULT 0;`)
  await db.run(sql`ALTER TABLE \`stores\` ADD COLUMN \`features_support247\` integer DEFAULT 0;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // SQLite doesn't support DROP COLUMN, so we need to recreate the table without these columns
  // This is a simplified version - in production you'd want to preserve data
  await db.run(sql`
    CREATE TABLE stores_backup AS SELECT 
      id, name, slug, description, logo_id, cover_image_id, 
      status, website, phone, address, category, updated_at, created_at
    FROM stores;
  `)
  
  await db.run(sql`DROP TABLE stores;`)
  
  await db.run(sql`ALTER TABLE stores_backup RENAME TO stores;`)
  
  // Recreate indexes
  await db.run(sql`CREATE UNIQUE INDEX \`stores_slug_idx\` ON \`stores\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`stores_logo_idx\` ON \`stores\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`stores_cover_image_idx\` ON \`stores\` (\`cover_image_id\`);`)
  await db.run(sql`CREATE INDEX \`stores_updated_at_idx\` ON \`stores\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`stores_created_at_idx\` ON \`stores\` (\`created_at\`);`)
}

