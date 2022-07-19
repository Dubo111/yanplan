/*
 * @Author: baimiaolei baimiaolei@sinowits.cn
 * @Date: 2022-06-07 14:11:52
 * @LastEditors: baimiaolei baimiaolei@sinowits.cn
 * @LastEditTime: 2022-06-07 17:09:18
 * @FilePath: \my-project\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const IS_PREVIEW = process.env.VUE_APP_PREVIEW === 'true'

const plugins = []
if (IS_PROD && !IS_PREVIEW) {
  // 去除日志的插件，
  plugins.push('transform-remove-console')
}

// lazy load ant-design-vue
// if your use import on Demand, Use this code
plugins.push(['import', {
  'libraryName': 'ant-design-vue',
  'libraryDirectory': 'es',
  'style': true // `style: true` 会加载 less 文件
}])

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'entry',
        'corejs': 3
      }
    ]
  ],
  plugins
}
