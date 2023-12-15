const { shareAll, share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mf-1st-app',

  exposes: {
    "./routes": "./projects/mf-1st-app/src/app/app.routes.ts",
    './app-component': './projects/mf-1st-app/src/app/app.component.ts',
    './first-module': './projects/mf-1st-app/src/app/modules/first-module/first-module.module.ts',
  },

  shared: share({
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  }),

});
