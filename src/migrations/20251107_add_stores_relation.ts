import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Add stores_id column to payload_locked_documents_rels
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD COLUMN \`stores_id\` integer;`)
  
  // Create index for stores_id
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_stores_id_idx\` ON \`payload_locked_documents_rels\` (\`stores_id\`);`)
  
  // Add foreign key - note: SQLite doesn't support adding foreign keys to existing tables
  // So we'll skip this in the migration and rely on application-level constraints
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Drop the index
  await db.run(sql`DROP INDEX IF EXISTS \`payload_locked_documents_rels_stores_id_idx\`;`)
  
  // SQLite doesn't support dropping columns directly
  // Would need to recreate the table to remove the column
}

