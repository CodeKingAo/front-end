const BG_NAME = Symbol('bgName'), //首页背景图名称
    TITLE_NAME_COLOR = 'titleColor',//首页标题名称
    BTN_COLOR = 'btnColor',//首页登录按钮名称
    HEAD_BG = 'headBackgroundColor',//头部背景颜色
    HEAD_LIST_BG_COLOR = 'headListHeader',//一级菜单背景颜色
    HEAD_ITEM_ACTIVE_BG_COLOR = 'headItemBagroundColor',//一级菜单激活状态背景色

    LIST_ITEM_ACTIVE_BG_COLOR = 'listBackgroundColor',//左侧菜单节点激活状态背景颜色
    LIST_ITEM_TEXT_ACTIVE_COLOR = 'listTextColor',//左侧菜单文字激活状态颜色
    LIST_ITEM_SUBMENU_ACTIVE_HOVER_COLOR = 'listItemMenuActiveColor'//左侧菜单节点列表鼠标悬浮激活状态
let styleObj = {
    // 默认风格
    "1": {
        [BG_NAME]: 'bg1.png',
        [TITLE_NAME_COLOR]: 'black',
        [BTN_COLOR]: '#27a8ea',
        [HEAD_BG]: '#0c9d72',
        [HEAD_LIST_BG_COLOR]: '#0b956c',
        [HEAD_ITEM_ACTIVE_BG_COLOR]: 'rgba(0,0,0,0.4)',
        [LIST_ITEM_ACTIVE_BG_COLOR]: '#ffa800',
        [LIST_ITEM_TEXT_ACTIVE_COLOR]: '#0c9d72',
        [LIST_ITEM_SUBMENU_ACTIVE_HOVER_COLOR]: '#0c9d72'
    },
    // 哀悼
    "2": {
        [BG_NAME]: 'AD.png',
        [TITLE_NAME_COLOR]: '#EBEEF5',
        [BTN_COLOR]: 'black',
        [HEAD_BG]: '#2d2e36',
        [HEAD_LIST_BG_COLOR]: '#2d2e36',
        [HEAD_ITEM_ACTIVE_BG_COLOR]: '#847c74',
        [LIST_ITEM_ACTIVE_BG_COLOR]: '#847c74',
        [LIST_ITEM_TEXT_ACTIVE_COLOR]: '#1890ff',
        [LIST_ITEM_SUBMENU_ACTIVE_HOVER_COLOR]: '#1890ff'
    },
    // 喜庆
    "3": {
        [BG_NAME]: 'QZ.png',
        [TITLE_NAME_COLOR]: '#673424',
        [BTN_COLOR]: '#673424',
        [HEAD_BG]: '#006699',
        [HEAD_LIST_BG_COLOR]: '#006699',
        [HEAD_ITEM_ACTIVE_BG_COLOR]: '#004466',
        [LIST_ITEM_ACTIVE_BG_COLOR]: '#008c99',
        [LIST_ITEM_TEXT_ACTIVE_COLOR]: '#1890ff',
        [LIST_ITEM_SUBMENU_ACTIVE_HOVER_COLOR]: '#008c99'

    },
    //国庆
    "4": {
        [BG_NAME]: 'GQ.png',
        [TITLE_NAME_COLOR]: '#f23e23',
        [BTN_COLOR]: '#f23e23',
        [HEAD_BG]: '#f23e23',
        [HEAD_LIST_BG_COLOR]: '#f23e23',
        [HEAD_ITEM_ACTIVE_BG_COLOR]: 'rgba(0,0,0,0.4)',
        [LIST_ITEM_ACTIVE_BG_COLOR]: '#ffa800',
        [LIST_ITEM_TEXT_ACTIVE_COLOR]: '#ffa800',
        [LIST_ITEM_SUBMENU_ACTIVE_HOVER_COLOR]: '#0c9d72'

    },
    //春节
    "5": {
        [BG_NAME]: 'CJ.png',
        [TITLE_NAME_COLOR]: 'black',
        [BTN_COLOR]: '#d42517',
        [HEAD_BG]: '#c04851',
        [HEAD_LIST_BG_COLOR]: '#c04851',
        [HEAD_ITEM_ACTIVE_BG_COLOR]: 'rgba(0,0,0,0.4)',
        [LIST_ITEM_ACTIVE_BG_COLOR]: '#ea8c8f',
        [LIST_ITEM_TEXT_ACTIVE_COLOR]: '#ea8c8f',
        [LIST_ITEM_SUBMENU_ACTIVE_HOVER_COLOR]: '#ea8c8f'
    }
}
function getStyle(styleName, key) {
    let str = ''
    if (styleObj[styleName]) {
        str = styleObj[styleName][key]
    } else {
        str = styleObj['1'][key]
    }
    return str
}
export default function (themeString) {
    return `#app #login_wrapper{background:url('./static/img/${getStyle(themeString, BG_NAME)}') no-repeat;background-size:100% 100%;}
    #app #login_wrapper>.login_title{font-size:35px;color: ${getStyle(themeString, TITLE_NAME_COLOR)};}
    #app #login_wrapper .logining button{background:${getStyle(themeString, BTN_COLOR)}}
    #app .head .header{background-color: ${getStyle(themeString, HEAD_BG)};}
    #app .head .tip{background: linear-gradient(to left, #093637, ${getStyle(themeString, HEAD_BG)});}
    #app .head .tip .item{background: linear-gradient(to left, #093637, ${getStyle(themeString, HEAD_BG)});}
    .el-dialog__header{background-color: ${getStyle(themeString, HEAD_BG)};}
    .low{background-color: ${getStyle(themeString, HEAD_BG)};}
    .lowDoWz{background-color: ${getStyle(themeString, HEAD_BG)};}
    #app .vuc .vuc-head{border-top: 2px solid rgba(0,0,0,0.1);background-color: ${getStyle(themeString, HEAD_LIST_BG_COLOR)}}
    #app .vuc .vuc-head .headMenuClick{background-color: ${getStyle(themeString, HEAD_ITEM_ACTIVE_BG_COLOR)};    border-left: 1px solid  ${getStyle(themeString, HEAD_ITEM_ACTIVE_BG_COLOR)};    border-right: 1px solid  ${getStyle(themeString, HEAD_ITEM_ACTIVE_BG_COLOR)};}
    .el-menu .el-menu-item.is-active{background-color:${getStyle(themeString, LIST_ITEM_ACTIVE_BG_COLOR)}} 
    #app .el-submenu.is-active>.el-submenu__title{color:${getStyle(themeString, LIST_ITEM_TEXT_ACTIVE_COLOR)}}
    .el-menu .active{background-color:${getStyle(themeString, LIST_ITEM_ACTIVE_BG_COLOR)}}
    .data-wrapper{background-color:${getStyle(themeString, LIST_ITEM_ACTIVE_BG_COLOR)}}
    .el-submenu.is-active>.el-submenu__title{color:${getStyle(themeString, LIST_ITEM_SUBMENU_ACTIVE_HOVER_COLOR)}}
    .el-menu-item:not(.is-active):hover{color:${getStyle(themeString, LIST_ITEM_SUBMENU_ACTIVE_HOVER_COLOR)}}
    #app #infoMap .dt-right .dt-header{background-color:${getStyle(themeString, HEAD_LIST_BG_COLOR)}}
    #app #infoMap .dt-left{border-top:3px solid ${getStyle(themeString, HEAD_LIST_BG_COLOR)}}
    .verifybox-close{display: none;}
    .inactive{display: none;}
    `
};