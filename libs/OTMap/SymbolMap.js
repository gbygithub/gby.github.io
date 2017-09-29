/**
 * @author LGD
 * @version 1.0
 * @date 2017-1-04
 * @description 范围值专题图（分层设色图）
 */

define(["OTMap/OTMap", "OTMap/Utils/DrawUtil"],
    function (OTMap, DrawUtil) {
        function SymbolMap(options, callback) {
            OTMap.apply(this, arguments);
            this.type = "Rank";
        }

        SymbolMap.prototype = new OTMap();

        SymbolMap.prototype.draw = function (callback) {
            var me = this;
            me.clear();
            DrawUtil.SimpleRenderLayer(me);
            me.drawLayer.redraw();
            me.backupConfig();
            if (callback) callback();

            return me;
        };
        return SymbolMap;
    });
