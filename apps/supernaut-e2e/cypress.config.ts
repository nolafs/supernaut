import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: { default: 'nx run supernaut:start' },
      ciWebServerCommand: 'nx run supernaut:serve-static',
    }),
    baseUrl: 'http://localhost:3000',
  },
});
