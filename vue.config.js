const fs = require('fs')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
// 将scss文件读入进来，配置进scss中，components中的scss文件都默认引入了此scss文件
var sassSource = fs.readFileSync('src/assets/styles/lib/var.scss', 'utf-8')



module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  baseUrl: process.env.VUE_APP_BASE_URL,
  // baseUrl: process.env.NODE_ENV === 'production'? '/production-sub-path/':'/',

  // where to output built files
  outputDir: 'dist',

  // assetsDir:'', Default: `''`

  // whether to use eslint-loader for lint on save.
  // valid values: true | false | 'error'
  // when set to 'error', lint errors will cause compilation to fail.
  lintOnSave: false,

  // Whether to use the build of Vue core that includes the runtime compiler. 
  // Setting it to `true` will allow you to use the `template` option in Vue components, 
  // but will incur around an extra 10kb payload for your app.

  // See also: [Runtime + Compiler vs. Runtime only](https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only).
  runtimeCompiler: false,

  // babel-loader skips `node_modules` deps by default.
  // explicitly transpile a dependency with this option.
  transpileDependencies: [ /* string or regex */ ],

  // generate sourceMap for production build?
  productionSourceMap: false,

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias
    .set('@services', resolve('src/services'))
    config.resolve.alias
    .set('@assets', resolve('src/assets'))
  },
  configureWebpack: () => {},

  // CSS related options
  css: {
    // extract CSS in components into a single CSS file (only in production)
    // can also be an object of options to pass to extract-text-webpack-plugin
    // 是否将css从components中剥离出来
    extract: true,

    // enable CSS source maps?
    sourceMap: false,

    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    loaderOptions: {
      sass: {
        data: sassSource
      }
    },

    // Enable CSS modules for all css / pre-processor files.
    // This option does not affect *.vue files.
    modules: false
  },

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,

  // options for the PWA plugin.
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // configure webpack-dev-server behavior
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: null, // string | Object
    before: app => {}
  },

  // options for 3rd party plugins
  pluginOptions: {
    // ...
  }
}
