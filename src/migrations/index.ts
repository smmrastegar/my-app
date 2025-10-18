import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20251018_075911_add_posts from './20251018_075911_add_posts';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20251018_075911_add_posts.up,
    down: migration_20251018_075911_add_posts.down,
    name: '20251018_075911_add_posts'
  },
];
