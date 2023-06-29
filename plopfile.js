module.exports = function(plop) {
  plop.setWelcomeMessage('请选择类型：')
  plop.setGenerator('page', require('./plop-tpls/page/index'))
  plop.setGenerator('component', require('./plop-tpls/component/index'))
}