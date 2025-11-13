import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20251018_075911_add_posts from './20251018_075911_add_posts';
import * as migration_20251107_090347 from './20251107_090347';
import * as migration_20251107_add_stores from './20251107_add_stores';
import * as migration_20251107_add_stores_relation from './20251107_add_stores_relation';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20251018_075911_add_posts.up,
    down: migration_20251018_075911_add_posts.down,
    name: '20251018_075911_add_posts',
  },
  {
    up: migration_20251107_090347.up,
    down: migration_20251107_090347.down,
    name: '20251107_090347'
  },
  {
    up: migration_20251107_add_stores.up,
    down: migration_20251107_add_stores.down,
    name: '20251107_add_stores',
  },
  {
    up: migration_20251107_add_stores_relation.up,
    down: migration_20251107_add_stores_relation.down,
    name: '20251107_add_stores_relation',
  },
];
