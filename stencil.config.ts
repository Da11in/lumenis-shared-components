import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'lumenis-shared-components',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
  extras: {
    enableImportInjection: true,
  },
};
