let requireComponent = require.context('../components/views', true, /\.vue$/);
let routes = requireComponent.keys().map(fileName => {
    let componentName = fileName.replace(/^\.\//, '').replace(/\.vue$/, '');
    return {
        path: `/views/${componentName}`,
        name: `/views/${componentName}`,
        component: resolve => require([`@/components/views/${componentName}.vue`], resolve),
    }
});
export default routes