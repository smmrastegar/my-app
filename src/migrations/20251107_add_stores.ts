import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`stores\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`logo_id\` integer,
  	\`cover_image_id\` integer,
  	\`status\` text DEFAULT 'coming_soon' NOT NULL,
  	\`website\` text,
  	\`phone\` text,
  	\`address\` text,
  	\`category\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`cover_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`stores_slug_idx\` ON \`stores\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`stores_logo_idx\` ON \`stores\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`stores_cover_image_idx\` ON \`stores\` (\`cover_image_id\`);`)
  await db.run(sql`CREATE INDEX \`stores_updated_at_idx\` ON \`stores\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`stores_created_at_idx\` ON \`stores\` (\`created_at\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`stores\`;`)
}

