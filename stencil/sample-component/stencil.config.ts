import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sample-component',
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www'
    }
  ]
};

export const devServer = {
  root: 'www',
  watchGlob: '**/**'
}