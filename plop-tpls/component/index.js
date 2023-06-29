const {
    isEmpty,
    titleCase
} = require('../utils')
module.exports = {
    description: '创建组件',
    prompts: [
        {
            type: 'input',
            name: 'moduleName',
            message: '模块名（选填）',
            // validate: isEmpty('模块名')
        },
        {
            type: 'input',
            name: 'componentName',
            message: '组件名（必填）',
            validate: isEmpty('组件名')
        }
    ],
    actions: function (data) {
        data.name = data.moduleName ? `${data.moduleName}-${data.componentName}` : `${data.componentName}`;
        const addPath = data.moduleName ? `src/pages/${data.moduleName}/components/${data.componentName}` : `src/components/${data.componentName}`;
        const actions = [
            {
                type: 'add',
                path: `${addPath}/index.vue`,
                templateFile: 'plop-tpls/component/index.hbs',
                data: data
            }
        ]
        return actions
    }
}

