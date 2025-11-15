import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // SQLite doesn't support DROP COLUMN directly, so we need to recreate the table
  
  // 1. Create a new table without icon_type column
  await db.run(sql`
    CREATE TABLE stores_new (
      id INTEGER PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      slug TEXT NOT NULL,
      description TEXT NOT NULL,
      logo_id INTEGER,
      cover_image_id INTEGER,
      status TEXT DEFAULT 'coming_soon' NOT NULL,
      website TEXT,
      phone TEXT,
      address TEXT,
      category TEXT,
      features_credit_purchase INTEGER DEFAULT 1,
      features_no_interest INTEGER DEFAULT 1,
      features_fast_approval INTEGER DEFAULT 1,
      features_free_delivery INTEGER DEFAULT 0,
      features_warranty INTEGER DEFAULT 0,
      features_support247 INTEGER DEFAULT 0,
      updated_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
      created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
      FOREIGN KEY (logo_id) REFERENCES media(id) ON UPDATE no action ON DELETE set null,
      FOREIGN KEY (cover_image_id) REFERENCES media(id) ON UPDATE no action ON DELETE set null
    );
  `)
  
  // 2. Copy data from old table to new table (without icon_type column)
  await db.run(sql`
    INSERT INTO stores_new (
      id, name, slug, description, logo_id, cover_image_id, status,
      website, phone, address, category,
      features_credit_purchase, features_no_interest, features_fast_approval,
      features_free_delivery, features_warranty, features_support247,
      updated_at, created_at
    )
    SELECT 
      id, name, slug, description, logo_id, cover_image_id, status,
      website, phone, address, category,
      features_credit_purchase, features_no_interest, features_fast_approval,
      features_free_delivery, features_warranty, features_support247,
      updated_at, created_at
    FROM stores;
  `)
  
  // 3. Drop old table
  await db.run(sql`DROP TABLE stores;`)
  
  // 4. Rename new table to stores
  await db.run(sql`ALTER TABLE stores_new RENAME TO stores;`)
  
  // 5. Recreate indexes
  await db.run(sql`CREATE UNIQUE INDEX stores_slug_idx ON stores (slug);`)
  await db.run(sql`CREATE INDEX stores_logo_idx ON stores (logo_id);`)
  await db.run(sql`CREATE INDEX stores_cover_image_idx ON stores (cover_image_id);`)
  await db.run(sql`CREATE INDEX stores_updated_at_idx ON stores (updated_at);`)
  await db.run(sql`CREATE INDEX stores_created_at_idx ON stores (created_at);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Add icon_type column back
  await db.run(sql`ALTER TABLE stores ADD COLUMN icon_type TEXT DEFAULT 'store' NOT NULL;`)
}

