'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _warnOnce = require('./warn-once');

var _warnOnce2 = _interopRequireDefault(_warnOnce);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents a CSS rule: a selector followed by a declaration block.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('a{}');
 * const rule = root.first;
 * rule.type       //=> 'rule'
 * rule.toString() //=> 'a{}'
 */
var Rule = function (_Container) {
    _inherits(Rule, _Container);

    function Rule(defaults) {
        _classCallCheck(this, Rule);

        var _this = _possibleConstructorReturn(this, _Container.call(this, defaults));

        _this.type = 'rule';
        if (!_this.nodes) _this.nodes = [];
        return _this;
    }

    /**
     * An array containing the rule’s individual selectors.
     * Groups of selectors are split at commas.
     *
     * @type {string[]}
     *
     * @example
     * const root = postcss.parse('a, b { }');
     * const rule = root.first;
     *
     * rule.selector  //=> 'a, b'
     * rule.selectors //=> ['a', 'b']
     *
     * rule.selectors = ['a', 'strong'];
     * rule.selector //=> 'a, strong'
     */


    _createClass(Rule, [{
        key: 'selectors',
        get: function get() {
            return _list2.default.comma(this.selector);
        },
        set: function set(values) {
            var match = this.selector ? this.selector.match(/,\s*/) : null;
            var sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen');
            this.selector = values.join(sep);
        }
    }, {
        key: '_selector',
        get: function get() {
            (0, _warnOnce2.default)('Rule#_selector is deprecated. Use Rule#raws.selector');
            return this.raws.selector;
        },
        set: function set(val) {
            (0, _warnOnce2.default)('Rule#_selector is deprecated. Use Rule#raws.selector');
            this.raws.selector = val;
        }

        /**
         * @memberof Rule#
         * @member {string} selector - the rule’s full selector represented
         *                             as a string
         *
         * @example
         * const root = postcss.parse('a, b { }');
         * const rule = root.first;
         * rule.selector //=> 'a, b'
         */

        /**
         * @memberof Rule#
         * @member {object} raws - Information to generate byte-to-byte equal
         *                         node string as it was in the origin input.
         *
         * Every parser saves its own properties,
         * but the default CSS parser uses:
         *
         * * `before`: the space symbols before the node. It also stores `*`
         *   and `_` symbols before the declaration (IE hack).
         * * `after`: the space symbols after the last child of the node
         *   to the end of the node.
         * * `between`: the symbols between the property and value
         *   for declarations, selector and `{` for rules, or last parameter
         *   and `{` for at-rules.
         * * `semicolon`: contains true if the last child has
         *   an (optional) semicolon.
         *
         * PostCSS cleans selectors from comments and extra spaces,
         * but it stores origin content in raws properties.
         * As such, if you don’t change a declaration’s value,
         * PostCSS will use the raw value with comments.
         *
         * @example
         * const root = postcss.parse('a {\n  color:black\n}')
         * root.first.first.raws //=> { before: '', between: ' ', after: '\n' }
         */

    }]);

    return Rule;
}(_container2.default);

exports.default = Rule;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9saWIvcnVsZS5lczYiXSwibmFtZXMiOlsiUnVsZSIsImRlZmF1bHRzIiwidHlwZSIsIm5vZGVzIiwiY29tbWEiLCJzZWxlY3RvciIsInZhbHVlcyIsIm1hdGNoIiwic2VwIiwicmF3Iiwiam9pbiIsInJhd3MiLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7O0lBV01BLEk7OztBQUVGLGtCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQUEscURBQ2xCLHNCQUFNQSxRQUFOLENBRGtCOztBQUVsQixjQUFLQyxJQUFMLEdBQVksTUFBWjtBQUNBLFlBQUssQ0FBQyxNQUFLQyxLQUFYLEVBQW1CLE1BQUtBLEtBQUwsR0FBYSxFQUFiO0FBSEQ7QUFJckI7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQWdCZ0I7QUFDWixtQkFBTyxlQUFLQyxLQUFMLENBQVcsS0FBS0MsUUFBaEIsQ0FBUDtBQUNILFM7MEJBRWFDLE0sRUFBUTtBQUNsQixnQkFBSUMsUUFBUSxLQUFLRixRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0UsS0FBZCxDQUFvQixNQUFwQixDQUFoQixHQUE4QyxJQUExRDtBQUNBLGdCQUFJQyxNQUFRRCxRQUFRQSxNQUFNLENBQU4sQ0FBUixHQUFtQixNQUFNLEtBQUtFLEdBQUwsQ0FBUyxTQUFULEVBQW9CLFlBQXBCLENBQXJDO0FBQ0EsaUJBQUtKLFFBQUwsR0FBZ0JDLE9BQU9JLElBQVAsQ0FBWUYsR0FBWixDQUFoQjtBQUNIOzs7NEJBRWU7QUFDWixvQ0FBUyxzREFBVDtBQUNBLG1CQUFPLEtBQUtHLElBQUwsQ0FBVU4sUUFBakI7QUFDSCxTOzBCQUVhTyxHLEVBQUs7QUFDZixvQ0FBUyxzREFBVDtBQUNBLGlCQUFLRCxJQUFMLENBQVVOLFFBQVYsR0FBcUJPLEdBQXJCO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE4QldaLEkiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInO1xuaW1wb3J0IHdhcm5PbmNlICBmcm9tICcuL3dhcm4tb25jZSc7XG5pbXBvcnQgbGlzdCAgICAgIGZyb20gJy4vbGlzdCc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIENTUyBydWxlOiBhIHNlbGVjdG9yIGZvbGxvd2VkIGJ5IGEgZGVjbGFyYXRpb24gYmxvY2suXG4gKlxuICogQGV4dGVuZHMgQ29udGFpbmVyXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHJvb3QgPSBwb3N0Y3NzLnBhcnNlKCdhe30nKTtcbiAqIGNvbnN0IHJ1bGUgPSByb290LmZpcnN0O1xuICogcnVsZS50eXBlICAgICAgIC8vPT4gJ3J1bGUnXG4gKiBydWxlLnRvU3RyaW5nKCkgLy89PiAnYXt9J1xuICovXG5jbGFzcyBSdWxlIGV4dGVuZHMgQ29udGFpbmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGRlZmF1bHRzKSB7XG4gICAgICAgIHN1cGVyKGRlZmF1bHRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3J1bGUnO1xuICAgICAgICBpZiAoICF0aGlzLm5vZGVzICkgdGhpcy5ub2RlcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHJ1bGXigJlzIGluZGl2aWR1YWwgc2VsZWN0b3JzLlxuICAgICAqIEdyb3VwcyBvZiBzZWxlY3RvcnMgYXJlIHNwbGl0IGF0IGNvbW1hcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2EsIGIgeyB9Jyk7XG4gICAgICogY29uc3QgcnVsZSA9IHJvb3QuZmlyc3Q7XG4gICAgICpcbiAgICAgKiBydWxlLnNlbGVjdG9yICAvLz0+ICdhLCBiJ1xuICAgICAqIHJ1bGUuc2VsZWN0b3JzIC8vPT4gWydhJywgJ2InXVxuICAgICAqXG4gICAgICogcnVsZS5zZWxlY3RvcnMgPSBbJ2EnLCAnc3Ryb25nJ107XG4gICAgICogcnVsZS5zZWxlY3RvciAvLz0+ICdhLCBzdHJvbmcnXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdG9ycygpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QuY29tbWEodGhpcy5zZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgc2V0IHNlbGVjdG9ycyh2YWx1ZXMpIHtcbiAgICAgICAgbGV0IG1hdGNoID0gdGhpcy5zZWxlY3RvciA/IHRoaXMuc2VsZWN0b3IubWF0Y2goLyxcXHMqLykgOiBudWxsO1xuICAgICAgICBsZXQgc2VwICAgPSBtYXRjaCA/IG1hdGNoWzBdIDogJywnICsgdGhpcy5yYXcoJ2JldHdlZW4nLCAnYmVmb3JlT3BlbicpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gdmFsdWVzLmpvaW4oc2VwKTtcbiAgICB9XG5cbiAgICBnZXQgX3NlbGVjdG9yKCkge1xuICAgICAgICB3YXJuT25jZSgnUnVsZSNfc2VsZWN0b3IgaXMgZGVwcmVjYXRlZC4gVXNlIFJ1bGUjcmF3cy5zZWxlY3RvcicpO1xuICAgICAgICByZXR1cm4gdGhpcy5yYXdzLnNlbGVjdG9yO1xuICAgIH1cblxuICAgIHNldCBfc2VsZWN0b3IodmFsKSB7XG4gICAgICAgIHdhcm5PbmNlKCdSdWxlI19zZWxlY3RvciBpcyBkZXByZWNhdGVkLiBVc2UgUnVsZSNyYXdzLnNlbGVjdG9yJyk7XG4gICAgICAgIHRoaXMucmF3cy5zZWxlY3RvciA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyb2YgUnVsZSNcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHNlbGVjdG9yIC0gdGhlIHJ1bGXigJlzIGZ1bGwgc2VsZWN0b3IgcmVwcmVzZW50ZWRcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXMgYSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2EsIGIgeyB9Jyk7XG4gICAgICogY29uc3QgcnVsZSA9IHJvb3QuZmlyc3Q7XG4gICAgICogcnVsZS5zZWxlY3RvciAvLz0+ICdhLCBiJ1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlcm9mIFJ1bGUjXG4gICAgICogQG1lbWJlciB7b2JqZWN0fSByYXdzIC0gSW5mb3JtYXRpb24gdG8gZ2VuZXJhdGUgYnl0ZS10by1ieXRlIGVxdWFsXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSBzdHJpbmcgYXMgaXQgd2FzIGluIHRoZSBvcmlnaW4gaW5wdXQuXG4gICAgICpcbiAgICAgKiBFdmVyeSBwYXJzZXIgc2F2ZXMgaXRzIG93biBwcm9wZXJ0aWVzLFxuICAgICAqIGJ1dCB0aGUgZGVmYXVsdCBDU1MgcGFyc2VyIHVzZXM6XG4gICAgICpcbiAgICAgKiAqIGBiZWZvcmVgOiB0aGUgc3BhY2Ugc3ltYm9scyBiZWZvcmUgdGhlIG5vZGUuIEl0IGFsc28gc3RvcmVzIGAqYFxuICAgICAqICAgYW5kIGBfYCBzeW1ib2xzIGJlZm9yZSB0aGUgZGVjbGFyYXRpb24gKElFIGhhY2spLlxuICAgICAqICogYGFmdGVyYDogdGhlIHNwYWNlIHN5bWJvbHMgYWZ0ZXIgdGhlIGxhc3QgY2hpbGQgb2YgdGhlIG5vZGVcbiAgICAgKiAgIHRvIHRoZSBlbmQgb2YgdGhlIG5vZGUuXG4gICAgICogKiBgYmV0d2VlbmA6IHRoZSBzeW1ib2xzIGJldHdlZW4gdGhlIHByb3BlcnR5IGFuZCB2YWx1ZVxuICAgICAqICAgZm9yIGRlY2xhcmF0aW9ucywgc2VsZWN0b3IgYW5kIGB7YCBmb3IgcnVsZXMsIG9yIGxhc3QgcGFyYW1ldGVyXG4gICAgICogICBhbmQgYHtgIGZvciBhdC1ydWxlcy5cbiAgICAgKiAqIGBzZW1pY29sb25gOiBjb250YWlucyB0cnVlIGlmIHRoZSBsYXN0IGNoaWxkIGhhc1xuICAgICAqICAgYW4gKG9wdGlvbmFsKSBzZW1pY29sb24uXG4gICAgICpcbiAgICAgKiBQb3N0Q1NTIGNsZWFucyBzZWxlY3RvcnMgZnJvbSBjb21tZW50cyBhbmQgZXh0cmEgc3BhY2VzLFxuICAgICAqIGJ1dCBpdCBzdG9yZXMgb3JpZ2luIGNvbnRlbnQgaW4gcmF3cyBwcm9wZXJ0aWVzLlxuICAgICAqIEFzIHN1Y2gsIGlmIHlvdSBkb27igJl0IGNoYW5nZSBhIGRlY2xhcmF0aW9u4oCZcyB2YWx1ZSxcbiAgICAgKiBQb3N0Q1NTIHdpbGwgdXNlIHRoZSByYXcgdmFsdWUgd2l0aCBjb21tZW50cy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2Ege1xcbiAgY29sb3I6YmxhY2tcXG59JylcbiAgICAgKiByb290LmZpcnN0LmZpcnN0LnJhd3MgLy89PiB7IGJlZm9yZTogJycsIGJldHdlZW46ICcgJywgYWZ0ZXI6ICdcXG4nIH1cbiAgICAgKi9cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSdWxlO1xuIl19
