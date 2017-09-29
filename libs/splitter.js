/// <reference path="angular.js" />
angular.module('bgDirectives', [])
    .directive('bgSplitter', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                orientation: '@',
                splitsizechanged: '&',
                splitid: "="
            },
            //require: "bgSplitter",
            template: '<div class="split-panes {{orientation}}" ng-transclude></div>',
            controller: "ctr-bgspliter",
            link: function (scope, element, attrs, ctrl) {
                ctrl.element = element;
                ctrl.createHandler();
                ctrl.bindEvent();
            }
        };
    })
    .directive('bgPane', function () {
        return {
            restrict: 'E',
            require: '^bgSplitter',
            replace: true,
            transclude: true,
            scope: {
                minSize: '=',
                shown: '=',
                size: "@"
            },
            template: '<div class="split-pane{{index}}" ng-transclude></div>',
            link: function (scope, element, attrs, bgSplitterCtrl) {
                scope.ele = element;
                scope.index = bgSplitterCtrl.addPane(scope);
                scope.$watch("shown", function () {
                    bgSplitterCtrl.toggle();
                })

            }
        };
    })

    .controller("ctr-bgspliter", ["$scope", function ($scope) {
        var me = this;
        this.element = null;
        this.pane1 = null;
        this.pane2 = null;
        this.handler = null;
        this.drag = false;
        this.vertical = $scope.orientation == "vertical";

        //添加新的pane
        this.addPane = function (pane) {
            if (!this.pane1) {
                this.pane1 = pane;
                return 1;//返回index 1
            } else if (!this.pane2) {
                this.pane2 = pane;
                return 2;//返回index 2
            } else {
                return;
            }
        };

        //创建分隔线
        this.createHandler = function () {
            this.handler = angular.element('<div class="split-handler"></div>');
            this.pane1.ele.after(this.handler);
        };

        //绑定一下事件处理
        this.bindEvent = function () {
            //监视水平竖直变化
            $scope.$watch("orientation", function (n, o) {
                me.vertical = n == 'vertical';
                if (me.vertical) {
                    me.handler.css("left", 0);
                } else {
                    me.handler.css("top", 0);
                }
                me.handler.css("z-index",1);
            });

            //分隔鼠标按下事件
            this.handler.bind('mousedown', function (ev) {
                ev.preventDefault();
                me.drag = true;
            });

            //鼠标抬起事件
            angular.element(document).bind('mouseup', function (ev) {
                me.drag = false;
            });

            //鼠标移动事件
            this.element.bind('mousemove', function (ev) {
                if (!me.drag) return;
                var bounds = me.element[0].getBoundingClientRect();//获取整个容器的位置大小信息
                var  pos1,pos2;
                if (me.vertical) {
                    var height = bounds.bottom - bounds.top;//计算整体的高度
                    var height2 = Math.round((bounds.bottom - ev.clientY)*100)/100;//计算第二个pane的高度
                    me.pane1.size ? pos1 = height -height2 : pos2 = height2;
                } else {
                    var width = bounds.right - bounds.left;//计算整体的宽度
                    var width2 = Math.round((bounds.right - ev.clientX)*100)/100;//计算第二个pane的宽度
                    me.pane1.size ? pos1 = width -width2 : pos2 = width2;
                }
                if(pos2 < me.pane2.minSize)return;//检测是否超过设置的最小范围
                if(pos1 < me.pane1.minSize)return;
                me.resize(pos1,pos2);
            });
        };

        //重新设置一下大小
        this.resize = function (size1, size2) {
            if (size1) {
                size1 = getSize(size1) + "px";//第一个值 pane1的大小
                size2 = "calc( 100% - "+size1+")";//第二个值 pane2的大小
            } else if (size2) {
                size2 = getSize(size2) + "px";
                size1 = "calc( 100% - "+size2+")";
            } else {
                size1 = "calc( 50% )";
                size2 = "calc( 50% )";//都没有值，使用默认的
            }
            if (this.vertical) {
                this.pane1.ele.height(size1);
                this.handler.css("top", size1);
                this.pane2.ele.height(size2);
            } else {
                this.pane1.ele.width(size1);
                this.handler.css("left", size1);
                this.pane2.ele.width(size2);
            }
            //lzl  触发尺寸改变事件
            $scope.splitsizechanged();
        };

        //显示或隐藏pane1、pane2、handler
        this.toggle=function(){
            if(this.pane1.shown != false && this.pane2.shown != false){ //pane1和pane2显示
                this.pane1.ele.removeClass("ng-hide");
                this.pane2.ele.removeClass("ng-hide");
                this.handler.removeClass("ng-hide");//取消隐藏
                this.resize(this.pane1.size, this.pane2.size);//重新设置大小

            }else if(this.pane1.shown != false && this.pane2.shown == false){
                this.pane1.ele.removeClass("ng-hide");
                var attr = this.vertical ? "height" : "width";//根据水平竖直，设置属性
                this.pane1.ele.css(attr, "100%");//设置大小为100%
                this.handler.addClass("ng-hide");//隐藏
                this.pane2.ele.addClass("ng-hide");//隐藏
                $scope.splitsizechanged();
            }else if(this.pane2.shown !== false && this.pane1.shown == false){
                this.pane2.ele.removeClass("ng-hide");
                var attr = this.vertical ? "height" : "width";//根据水平竖直，设置属性
                this.pane2.ele.css(attr, "100%");//设置大小为100%
                this.handler.addClass("ng-hide");//隐藏
                this.pane1.ele.addClass("ng-hide");//隐藏
                //lzl  触发尺寸改变事件
                $scope.splitsizechanged();
            }
        };
        function getSize(pos) {
            //获取容器的大小
            var getPanelSize = function () {
                var bound = me.element[0].getBoundingClientRect();
                var size = 0;
                if (me.vertical) {
                    size = bound.bottom - bound.top;
                } else {
                    size = bound.right - bound.left;
                }
                return size;
            };
            //如果是数字，直接返回
            if (angular.isNumber(pos)) {
                return pos;
            }
            //不是数字 尝试类型转换
            var _num = new Number(pos);
            if (isNaN(_num) == false) {
                return _num;//能转换为数值，直接用数值
            }
            //如果是百分比形式，去掉百分号
            if (angular.isString(pos) && pos.indexOf("%") == pos.length - 1) {
                pos =parseInt(pos,10);
            } else {
                //其它情况，一律按50% 处理
                pos = 50;
            }
            //转换为数值类型
            var num = new Number(pos);
            if (num > 100 || num < 0) {
                num = 50;
            }
            //计算大小
            pos = getPanelSize() * num / 100.0;
            return pos;
        }
    }])
