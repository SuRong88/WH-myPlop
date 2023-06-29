const {
    isEmpty,
    titleCase
} = require('../utils')
module.exports = {
    description: '创建页面',
    prompts: [
        {
            type: 'input',
            name: 'moduleName',
            message: '模块名（必填）',
            validate: isEmpty('模块名')
        },
        {
            type: 'input',
            name: 'viewName',
            message: '页面名（选填）',
            //   validate: isEmpty('页面名')
        },
        {
            type: 'input',
            name: 'title',
            message: '页面标题（选填）',
        }
    ],
    actions: function (data) {
        // 其中这里的值可以使用data获取，比如获取和moduleName输入的值，可以是 const moduleName = data.moduleName  ，
        // data就是一个包含name的对象，其中的属性key就是name的值
        data.title = data.title ? data.title : '默认标题';
        data.name = data.viewName ? `${data.moduleName}-${data.viewName}` : `${data.moduleName}`;
        const addPath = data.viewName ? `src/pages/${data.moduleName}/${data.viewName}` : `src/pages/${data.moduleName}`;
        const actions = [
            {
                type: 'add',
                path: `${addPath}/index.vue`,
                templateFile: 'plop-tpls/page/index.hbs',
                data: data
            },
            {
                type: 'add',
                path: `${addPath}/index.css`,
                templateFile: 'plop-tpls/page/index-css.hbs',
            },
        ]
        return actions
    }
}

