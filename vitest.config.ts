import { configDefaults, defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      exclude: [...configDefaults.exclude, 'src/scripts/res', 'src/utils/ts'],
    },
  },
  plugins: [tsconfigPaths()],
});
