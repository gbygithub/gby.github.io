//定义RequireJS配置
require.config({
    waitSeconds: 20,
    paths: {
        'angular': '../libs/angular',
        'ocLazyLoad': '../libs/ocLazyLoad.require',
        'ngStorage': '../libs/ngStorage',
        'materialize':'../libs/materialize.min',
        'ui-router': '../libs/angular-ui-router',
        'bootstrap': '../libs/bootstrap.min',
        'ui-bootstrap': '../libs/ui-bootstrap-tpls-1.3.1',
        'ui-grid': '../libs/ui-grid',
        'jquery': '../libs/jquery-2.2.1',
         'jquery-min': '../libs/jquery.min',
        
        'ztree': '../libs/jquery.ztree.all',
        'config': 'config',
        'layer': '../libs/layer/layer',
        'splitter': '../libs/splitter',
        'highcharts': '../libs/highcharts',
        "resize": "../libs/resize",
        //angular右键菜单的工具库
        "ng-contextmenu": "../libs/ng-contextmenu",
        //编辑器引入的库
        "clike": "../libs/clike",
        "codemirror": "../libs/codemirror",
        'OTMap': '../libs/OTMap',
        'BaiduMap': '../libs/BaiduMap',

        'eca-core': 'core/eca-core',
        'eca-service': 'core/eca-service',

        'eca-form': 'core/form/eca-form',
        'eca-form-controls': 'core/form/eca-form-controls',
        'eca-form-controls-button': 'core/form/eca-form-controls-button',
        'eca-form-controls-checkbox': 'core/form/eca-form-controls-checkbox',
        'eca-form-controls-util': 'core/form/eca-form-controls-util',
        'eca-form-controls-combobox': 'core/form/eca-form-controls-combobox',
        'eca-form-controls-datetime':'core/form/eca-form-controls-datetime',
        'eca-form-controls-innerview': 'core/form/eca-form-controls-innerview',
        'eca-form-controls-picture': 'core/form/eca-form-controls-picture',
        'eca-form-controls-textbox':'core/form/eca-form-controls-textbox',
        'eca-form-controls-signature':'core/form/eca-form-controls-signature',
        'eca-form-controls-htmlEditor':'core/form/eca-form-controls-htmlEditor',

        'eca-grid': 'core/grid/eca-grid',
        'eca-grid-pager': 'core/grid/pager/eca-grid-pager',
        'eca-grid-search': 'core/grid/search/eca-grid-search',
        'eca-grid-split': 'core/grid/eca-grid-split',
        'eca-toolbar': 'core/toolbar/eca-toolbar',
        'eca-login': 'eca-login',
        'eca-mis-main': 'eca-mis-main',
        'eca-file': 'core/files/eca-file',
        'eca-ftp': 'core/files/eca-ftp',
        'eca-chart': 'core/chart/eca-chart',
        //图片截取
        'ng-img-crop': '../libs/ng-img-crop',

        //脚本
        'eca-script': 'core/script/eca-script',

        //加载loading
        'angular-loading': '../libs/angular-loading/angular-loading',
        //angular-loading所依赖的进度圈显示
        'spinjs': '../libs/angular-loading/spin',

        //封装的类似C#DataTable的组件
        'eca-data': 'core/eca-data',
        //通用的对JavaScript方法的扩展
        'eca-extend': 'core/eca-extend',
        //socket服务
        'eca-socket': 'core/eca-socket',
        //客户端建模
        'eca-designer':'designer/eca-designer',
        //arcgis库文件
        'esri': 'http://192.168.20.100/gis/esri',
        'dojo': 'http://192.168.20.100/gis/dojo',
        'dojox': 'http://192.168.20.100/gis/dojox',
        'dijit': 'http://192.168.20.100/gis/dijit',
        'moment': 'http://106.39.231.23/arcgis_js_api/library/3.16/3.16/moment',

        'eca-gis-config': 'components/gis/config',
        'eca-gis-main': 'components/gis/eca-gis-main',
        'eca-gis-map': 'components/gis/app/eca-gis-map',
        'eca-gis-core': 'components/gis/app/eca-gis-core',
        'eca-gis-toolbar': "components/gis/app/toolbar/eca-gis-toolbar",
        'eca-gis-panel': 'components/gis/app/togglePanel/eca-gis-toggle-panel',

        //xml2json
        'xml2json': '../libs/xml2json',
        //中文显示
        'zh-cn': '../libs/angular-locale_zh-cn',
        //统计图、表
        'c3': '../libs/pivot/c3.min', //图形库
        'd3': '../libs/pivot/d3.min',
        'pivot': '../libs/pivot/pivot',
        'jquery-ui': '../libs/pivot/jquery-ui.min',
        'c3_renderers': '../libs/pivot/c3_renderers',
        'zh': '../libs/pivot/pivot.zh', //中文包
        'highlight': '../libs/highlight.min',
        'tableExport': '../libs/tableExprot/tableExport',
        'FileSaver': '../libs/tableExprot/FileSaver.min',
        'ueditor-config': '../libs/ueditor/ueditor.config',
        'ueditor-all': '../libs/ueditor/ueditor.all',
        'ueditor': '../libs/angular-ueditor',
        //手机
        //手机图片查看器
        'pinchzoom':'../libs/pinchzoom',
        //手机滑动插件
        'swipe':'../libs/swipe',
        //手机动画
        'ngAnimate':'../libs/angular-animate.min',        
        'eca-phone-grid':'../forPhone/grid/eca-phone-gridModel',
        'eca-phone-navigate':'../forPhone/navigation/eca-phone-menu',
        'eca-wxLogin':'../forPhone/login/wxlogin'
    },
    shim: {
        'app': ['jquery-min', 'css!../css/bootstrap.css', 'css!../css/bootstrap-rewrite.css', 'css!../css/icon-eca.css', 'css!../css/common.css', 'css!../css/app.css', 'css!../css/materialize.css' ,'css!../css/personal/style.css'],
        'eca-grid': ['css!../css/cautionlight.css'],
        'ocLazyLoad': ['angular'],
        'ngStorage': ['angular'],
        'ui-router': ['angular'],
        'ui-bootstrap': ['angular'],
        'ui-grid': ['angular', 'css!../css/ui-grid.css'],
        'layer': ['jquery'],
        'angular-loading': ['angular', 'spinjs', 'css!../libs/angular-loading/angular-loading.css'],
        'highcharts': ['jquery'],
        "ng-contextmenu": ["angular"],
        'ztree': ["css!../css/metroStyle/metroStyle.css"],
        "zh-cn": ["angular"],
        "c3": ["d3"],
        "jquery-ui": ["jquery", "css!../css/jqueryui/jquery-ui.min.css"],
        "pivot": ["css!../css/pivot.css"],
        "zh": ["c3", "c3_renderers", "jquery", "pivot"],
        "highlight": ["css!../css/hljs.css"],
        "tableExport": ["jquery"],
        "FileSaver": ["jquery"]
    },
    map: {
        '*': {
            'css': '../libs/css'
        }
    }
});

//启动
require(['app'], function (app) {    

         angular.bootstrap(document, ['portal.app']);

});