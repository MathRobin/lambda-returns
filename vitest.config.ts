import path from 'node:path';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname),
    },
  },
  test: {
    coverage: {
      provider: 'v8',
      exclude: [...configDefaults.exclude, 'src/scripts/res', 'src/utils/ts'],
    },
  },
});
