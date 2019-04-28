"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var PropTypes=_interopDefault(require("prop-types")),React=require("react"),React__default=_interopDefault(React);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperty(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function _objectSpread(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){_defineProperty(r,e,o[e])})}return r}function _objectWithoutPropertiesLoose(e,r){if(null==e)return{};var o,t,n={},u=Object.keys(e);for(t=0;t<u.length;t++)o=u[t],0<=r.indexOf(o)||(n[o]=e[o]);return n}function _objectWithoutProperties(e,r){if(null==e)return{};var o,t,n=_objectWithoutPropertiesLoose(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)o=u[t],0<=r.indexOf(o)||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_nonIterableRest()}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var r=0,o=new Array(e.length);r<e.length;r++)o[r]=e[r];return o}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _iterableToArrayLimit(e,r){var o=[],t=!0,n=!1,u=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done)&&(o.push(a.value),!r||o.length!==r);t=!0);}catch(e){n=!0,u=e}finally{try{t||null==s.return||s.return()}finally{if(n)throw u}}return o}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _toPrimitive(e,r){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0===o)return("string"===r?String:Number)(e);var t=o.call(e,r||"default");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}function _toPropertyKey(e){var r=_toPrimitive(e,"string");return"symbol"==typeof r?r:String(r)}function getBy(e,r,o){if(!r)return e;var t,n=makePathArray(r);try{t=n.reduce(function(e,r){return e[r]},e)}catch(e){}return void 0!==t?t:o}function defaultOrderByFn(e,a,s){return _toConsumableArray(e).sort(function(e,r){for(var o=0;o<a.length;o+=1){var t=a[o],n=!1===s[o]||"desc"===s[o],u=t(e,r);if(0!==u)return n?-u:u}return s[0]?e.index-r.index:r.index-e.index})}function defaultSortByFn(e,r,o){return r=null==r?"":r,e="string"==typeof(e=null==e?"":e)?e.toLowerCase():e,(r="string"==typeof r?r.toLowerCase():r)<e?1:e<r?-1:0}function getFirstDefined(){for(var e=0;e<arguments.length;e+=1)if(void 0!==(e<0||arguments.length<=e?void 0:arguments[e]))return e<0||arguments.length<=e?void 0:arguments[e]}function defaultGroupByFn(e,n){return e.reduce(function(e,r,o){var t="function"==typeof n?n(r.values,o):r.values[n];return e[t]=Array.isArray(e[t])?e[t]:[],e[t].push(r),e},{})}function defaultFilterFn(e,r,o,t){return void 0===e.values[r]||String(e.values[r]).toLowerCase().includes(String(o).toLowerCase())}function setBy(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},u=1<arguments.length?arguments[1]:void 0,a=2<arguments.length?arguments[2]:void 0;return function e(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=u[o],n="object"!==_typeof(r[t])?{}:r[t];return _objectSpread({},r,_defineProperty({},t,o===u.length-1?a:e(n,o+1)))}(e)}function flexRender(e,r){return"function"==typeof e?Object.getPrototypeOf(e).isReactComponent?React__default.createElement(e,r):e(r):e}var mergeProps=function(){for(var u={},e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return r.forEach(function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=e.style,o=void 0===r?{}:r,t=e.className,n=_objectWithoutProperties(e,["style","className"]);u=_objectSpread({},u,n,{style:_objectSpread({},u.style||{},o),className:[u.className,t].filter(Boolean).join(" ")})}),u},applyHooks=function(e,r){for(var o=arguments.length,t=new Array(2<o?o-2:0),n=2;n<o;n++)t[n-2]=arguments[n];return e.reduce(function(e,r){return r.apply(void 0,[e].concat(t))},r)},applyPropHooks=function(e){for(var r=arguments.length,o=new Array(1<r?r-1:0),t=1;t<r;t++)o[t-1]=arguments[t];return e.reduce(function(e,r){return mergeProps(e,r.apply(void 0,o))},{})};function sum(e){return e.reduce(function(e,r){return e+r},0)}function makePathArray(e){return flattenDeep(e).join(".").replace(/\[/g,".").replace(/\]/g,"").split(".")}function flattenDeep(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];if(Array.isArray(e))for(var o=0;o<e.length;o+=1)flattenDeep(e[o],r);else r.push(e);return r}var defaultState={},defaultReducer=function(e,r){return r},useTableState=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=r.reducer,n=void 0===t?defaultReducer:t,u=r.useState,a=_slicedToArray((void 0===u?React.useState:u)(_objectSpread({},defaultState,e)),2),s=a[0],i=a[1];return[React.useMemo(function(){var r=_objectSpread({},s);return Object.keys(o).forEach(function(e){r[e]=o[e]}),r},[s].concat(_toConsumableArray(Object.values(o)))),function(o,t){return i(function(e){var r=o(e);return n(e,r,t)})}]},renderErr='You must specify a render "type". This could be "Header", "Filter", or any other custom renderers you have set on your column.',propTypes={data:PropTypes.array.isRequired,debug:PropTypes.bool},useTable=function(e){PropTypes.checkPropTypes(propTypes,e,"property","useTable");var r=e.data,o=void 0===r?[]:r,t=e.state,n=e.debug;n="production"!==process.env.NODE_ENV&&n;var u=useTableState(),a=_objectSpread({},e,{data:o,state:t||u,hooks:{beforeRender:[],columns:[],headers:[],headerGroups:[],rows:[],row:[],renderableRows:[],getTableProps:[],getRowProps:[],getHeaderRowProps:[],getHeaderProps:[],getCellProps:[]}});n&&console.time("hooks");for(var s=arguments.length,i=new Array(1<s?s-1:0),c=1;c<s;c++)i[c-1]=arguments[c];return a=i.filter(Boolean).reduce(function(e,r){return r(e)},a),n&&console.timeEnd("hooks"),n&&console.time("hooks.beforeRender"),applyHooks(a.hooks.beforeRender,void 0,a),n&&console.timeEnd("hooks.beforeRender"),n&&console.time("hooks.columns"),a.columns=applyHooks(a.hooks.columns,a.columns,a),n&&console.timeEnd("hooks.columns"),n&&console.time("hooks.headers"),a.headers=applyHooks(a.hooks.headers,a.headers,a),n&&console.timeEnd("hooks.headers"),[].concat(_toConsumableArray(a.columns),_toConsumableArray(a.headers)).forEach(function(o){o.render=function(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!e)throw new Error(renderErr);return flexRender(o[e],_objectSpread({},a,o,r))},o.getHeaderProps=function(e){return mergeProps({key:["header",o.id].join("_")},applyPropHooks(a.hooks.getHeaderProps,o,a),e)}}),n&&console.time("hooks.headerGroups"),a.headerGroups=applyHooks(a.hooks.headerGroups,a.headerGroups,a).filter(function(r,o){return r.headers=r.headers.filter(function(e){return e.columns?function r(e){return e.filter(function(e){return e.columns?r(e.columns):e.visible}).length}(e.columns):e.visible}),!!r.headers.length&&(r.getRowProps=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return mergeProps({key:["header".concat(o)].join("_")},applyPropHooks(a.hooks.getHeaderRowProps,r,a),e)},!0)}),n&&console.timeEnd("hooks.headerGroups"),n&&console.time("hooks.rows"),a.rows=applyHooks(a.hooks.rows,a.rows,a),n&&console.timeEnd("hooks.rows"),a.prepareRow=function(r){var n=r.path;r.getRowProps=function(e){return mergeProps({key:["row"].concat(_toConsumableArray(n)).join("_")},applyHooks(a.hooks.getRowProps,r,a),e)},applyHooks(a.hooks.row,r,a);var e=a.columns.filter(function(e){return e.visible});r.cells=e.map(function(o){var t={column:o,row:r,value:r.values[o.id],getCellProps:function(e){var r=[n,o.id].join("_");return mergeProps({key:["cell",r].join("_")},applyPropHooks(a.hooks.getCellProps,t,a),e)},render:function(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!e)throw new Error('You must specify a render "type". This could be "Cell", "Header", "Filter", "Aggregated" or any other custom renderers you have set on your column.');return flexRender(o[e],_objectSpread({},a,t,r))}};return t})},a.getTableProps=function(e){return mergeProps(applyPropHooks(a.hooks.getTableProps,a),e)},a.getRowProps=function(e){return mergeProps(applyPropHooks(a.hooks.getRowProps,a),e)},a},propTypes$1={columns:PropTypes.arrayOf(PropTypes.shape({Cell:PropTypes.any,Header:PropTypes.any}))},useColumns=function(e){var n=e.debug,u=e.columns,a=_slicedToArray(e.state,1)[0].groupBy;PropTypes.checkPropTypes(propTypes$1,e,"property","useColumns");var r=React.useMemo(function(){n&&console.info("getColumns");var e=function r(e,o){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;return e.map(function(e){return(e=c(e,o)).columns&&(e.columns=r(e.columns,e,t+1)),e})}(u),o=s(e,"columns"),r=function(e,i){var o=[];e.forEach(function e(r){delete r.columns,r.parent&&e(r.parent)});return function e(r){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,u={headers:[]},a=[],s=r.some(function(e){return e.parent});r.forEach(function(e){var r=!a.length,o=[].concat(a).reverse()[0];if(e.parent)(r||o.originalID!==e.parent.id)&&a.push(_objectSpread({},e.parent,{originalID:e.parent.id,id:[e.parent.id,a.length].join("_")}));else if(s){var t=c({originalID:[e.id,"placeholder",i-n].join("_"),id:[e.id,"placeholder",i-n,a.length].join("_")});(r||o.originalID!==t.originalID)&&a.push(t)}(e.parent||s)&&((o=[].concat(a).reverse()[0]).columns=o.columns||[],o.columns.includes(e)||o.columns.push(e)),u.headers.push(e)}),o.push(u),a.length&&e(a)}(e),o.reverse()}(o=[].concat(_toConsumableArray(a.map(function(r){return o.find(function(e){return e.id===r})})),_toConsumableArray(o.filter(function(e){return!a.includes(e.id)}))),function o(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;return e.reduce(function(e,r){return r.columns?Math.max(e,o(r.columns,t+1)):t},0)}(e)),t=s(r,"headers");return{columns:o,headerGroups:r,headers:t}},[a,u]);return _objectSpread({},e,{columns:r.columns,headerGroups:r.headerGroups,headers:r.headers});function c(e,r){var o=e,t=o.id,n=o.accessor,u=o.Header;if("string"==typeof n){t=t||n;var a=n;n=function(e){return getBy(e,a)}}if(t||"string"!=typeof u||(t=u),!t)throw console.error(e),new Error("A column id is required!");return e=_objectSpread({Header:"",Cell:function(e){return e.value},show:!0},e,{id:t,accessor:n,parent:r})}function s(e,o){var t=[];return function r(e){e.forEach(function(e){e[o]?r(e[o]):t.push(e)})}(e),t}},propTypes$2={subRowsKey:PropTypes.string},useRows=function(e){PropTypes.checkPropTypes(propTypes$2,e,"property","useRows");var r=e.debug,i=e.columns,o=e.subRowsKey,c=void 0===o?"subRows":o,p=e.data;return _objectSpread({},e,{rows:React.useMemo(function(){r&&console.info("getAccessedRows");return p.map(function(e,r){return function o(r,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,e=r,u=r[c]?r[c].map(function(e,r){return o(e,r,n+1)}):void 0,a={original:e,index:t,path:[t],subRows:u,depth:n,cells:[{}]},s=function(){throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.")};return a.cells.map=s,a.cells.filter=s,a.cells.forEach=s,a.cells[0].getCellProps=s,a.values={},i.forEach(function(e){a.values[e.id]=e.accessor?e.accessor(r,t,{subRows:u,depth:n,data:p}):void 0}),a}(e,r)})},[p,i])})},useSimpleLayout=function(e){var r=e.hooks,o=r.columns,t=r.getHeaderProps,n=r.getCellProps;return o.push(function(e,r){return e.forEach(function(e){e.visible="function"==typeof e.show?e.show(r):!!e.show}),t.push(function(e){return{style:{boxSizing:"border-box",width:void 0!==e.width?"".concat(e.width,"px"):"auto"}}}),n.push(function(e){return{style:{boxSizing:"border-box",width:void 0!==e.column.width?"".concat(e.column.width,"px"):"auto"}}}),e}),e},actions={},addActions=function(r){Object.keys(r).forEach(function(e){actions[e]=r[e]})};defaultState.expanded={},addActions({toggleExpanded:"__toggleExpanded__",useExpanded:"__useExpanded__"});var propTypes$3={expandedKey:PropTypes.string},useExpanded=function(e){PropTypes.checkPropTypes(propTypes$3,e,"property","useExpanded");var r=e.debug,o=e.columns,t=e.rows,n=e.expandedKey,s=void 0===n?"expanded":n,u=e.hooks,a=_slicedToArray(e.state,2),i=a[0].expanded,c=a[1],p=function(t,n){return c(function(e){var r=e.expanded,o=getBy(r,t);return n=getFirstDefined(n,!o),_objectSpread({},e,{expanded:setBy(r,t,n)})},actions.toggleExpanded)};u.row.push(function(e){var r=e.path;e.toggleExpanded=function(e){return p(r,e)}});var l=React.useMemo(function(){r&&console.info("getExpandedRows");var a=[];return t.forEach(function(e,r){return function o(e,r){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:[],u=[].concat(_toConsumableArray(n),[r]);e.path=u,e.depth=t,e.isExpanded=e.original&&e.original[s]||getBy(i,u),a.push(e),e.isExpanded&&e.subRows&&e.subRows.length&&e.subRows.forEach(function(e,r){return o(e,r,t+1,u)})}(e,r)}),a},[t,i,o]),d=findExpandedDepth(i);return _objectSpread({},e,{toggleExpandedByPath:p,expandedDepth:d,rows:l})};function findExpandedDepth(e){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;return Object.values(e).reduce(function(e,r){return"object"===_typeof(r)?Math.max(e,findExpandedDepth(r,o+1)):o},0)}defaultState.filters={},addActions({setFilter:"__setFilter__",setAllFilters:"__setAllFilters__"});var propTypes$4={columns:PropTypes.arrayOf(PropTypes.shape({filterFn:PropTypes.func,filterAll:PropTypes.bool,canFilter:PropTypes.bool,Filter:PropTypes.any})),filterFn:PropTypes.func,manualFilters:PropTypes.bool},useFilters=function(e){PropTypes.checkPropTypes(propTypes$4,e,"property","useFilters");var r=e.debug,o=e.rows,s=e.columns,t=e.filterFn,i=void 0===t?defaultFilterFn:t,n=e.manualFilters,u=e.disableFilters,a=e.hooks,c=_slicedToArray(e.state,2),p=c[0].filters,l=c[1];s.forEach(function(e){var r=e.id,o=e.accessor,t=e.canFilter;e.canFilter=!!o&&getFirstDefined(t,!0!==u&&void 0,!0),e.filterValue=p[r]});var d=function(r,o){return l(function(e){if(void 0!==o)return _objectSpread({},e,{filters:_objectSpread({},p,_defineProperty({},r,o))});p[r];return _objectSpread({},e,{filters:_objectSpread({},_objectWithoutProperties(p,[r].map(_toPropertyKey)))})},actions.setFilter)};a.columns.push(function(e){return e.forEach(function(r){r.canFilter&&(r.setFilter=function(e){return d(r.id,e)})}),e});var f=React.useMemo(function(){if(n||!Object.keys(p).length)return o;r&&console.info("getFilteredRows");return function r(e){return Object.entries(p).reduce(function(e,r){var o=_slicedToArray(r,2),t=o[0],n=o[1],u=s.find(function(e){return e.id===t});if(!u||!1===u.filterable)return e;var a=u.filterMethod||i;return u.filterAll?a(e,t,n,u):e.filter(function(e){return a(e,t,n,u)})},e).map(function(e){return e.subRows?_objectSpread({},e,{subRows:r(e.subRows)}):e}).filter(function(e){return!e.subRows||0<e.subRows.length})}(o)},[o,p,n]);return _objectSpread({},e,{setFilter:d,setAllFilters:function(r){return l(function(e){return _objectSpread({},e,{filters:r})},actions.setAllFilters)},rows:f})};function sum$1(e,r){return e.reduce(function(e,r){return e+r},0)}function average(e,r){return Math.round(sum$1(e,r)/e.length*100)/100}var aggregations=Object.freeze({sum:sum$1,average:average});defaultState.groupBy=[],addActions({toggleGroupBy:"__toggleGroupBy__"});var propTypes$5={columns:PropTypes.arrayOf(PropTypes.shape({aggregate:PropTypes.func,canGroupBy:PropTypes.bool,Aggregated:PropTypes.any})),groupByFn:PropTypes.func,manualGrouping:PropTypes.bool,aggregations:PropTypes.object},useGroupBy=function(e){PropTypes.checkPropTypes(propTypes$5,e,"property","useGroupBy");var r=e.debug,o=e.rows,l=e.columns,t=e.groupByFn,n=void 0===t?defaultGroupByFn:t,u=e.manualGroupBy,a=e.disableGrouping,s=e.aggregations,d=void 0===s?{}:s,i=e.hooks,c=_slicedToArray(e.state,2),p=c[0].groupBy,f=c[1];l.forEach(function(e){var r=e.id,o=e.accessor,t=e.canGroupBy;e.grouped=p.includes(r),e.canGroupBy=!!o&&getFirstDefined(t,!0!==a&&void 0,!0),e.Aggregated=e.Aggregated||e.Cell});i.columns.push(function(e){return e.forEach(function(e){e.canGroupBy&&(e.toggleGroupBy=function(){return r=e.id,f(function(e){return _objectSpread({},e,(void 0!==o?o:!p.includes(r))?{groupBy:[].concat(_toConsumableArray(p),[r])}:{groupBy:p.filter(function(e){return e!==r})})},actions.toggleGroupBy);var r,o})}),e}),i.getGroupByToggleProps=[];var y=function(e,t){return e.forEach(function(r){var o=r.canGroupBy;r.getGroupByToggleProps=function(e){return mergeProps({onClick:o?function(e){e.persist(),r.toggleGroupBy()}:void 0,style:{cursor:o?"pointer":void 0},title:"Toggle GroupBy"},applyPropHooks(t.hooks.getGroupByToggleProps,r,t),e)}}),e};return i.columns.push(y),i.headers.push(y),_objectSpread({},e,{rows:React.useMemo(function(){if(u||!p.length)return o;r&&console.info("getGroupedRows");return function i(e,c){var p=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;return p>=c.length?e:Object.entries(n(e,c[p])).map(function(e,r){var o=_slicedToArray(e,2),t=o[0],n=o[1];n=i(n,c,p+1);var u,a,s=(u=n,a={},l.forEach(function(r){var e=u.map(function(e){return e.values[r.id]}),o=d[r.aggregate]||aggregations[r.aggregate]||r.aggregate;if("function"==typeof o)a[r.id]=o(e,u);else{if(o)throw new Error('Invalid aggregate "'.concat(o,'" passed to column with ID: "').concat(r.id,'"'));a[r.id]=e[0]}}),a);return{groupByID:c[p],groupByVal:t,values:s,subRows:n,depth:p,index:r}})}(o,p)},[o,p,l,u])})};defaultState.sortBy=[],addActions({sortByChange:"__sortByChange__"});var propTypes$6={columns:PropTypes.arrayOf(PropTypes.shape({sortByFn:PropTypes.func,efaultSortDesc:PropTypes.bool})),sortByFn:PropTypes.func,manualSorting:PropTypes.bool,disableSorting:PropTypes.bool,defaultSortDesc:PropTypes.bool,disableMultiSort:PropTypes.bool},useSortBy=function(e){PropTypes.checkPropTypes(propTypes$6,e,"property","useSortBy");var r=e.debug,o=e.rows,p=e.columns,t=e.orderByFn,u=void 0===t?defaultOrderByFn:t,n=e.sortByFn,a=void 0===n?defaultSortByFn:n,s=e.manualSorting,i=e.disableSorting,l=e.defaultSortDesc,c=e.hooks,d=_slicedToArray(e.state,2),f=d[0].sortBy,y=d[1];p.forEach(function(e){var r=e.accessor,o=e.canSortBy;e.canSortBy=!!r&&getFirstDefined(o,!0!==i&&void 0,!0)});c.columns.push(function(e){return e.forEach(function(o){o.canSortBy&&(o.toggleSortBy=function(e,r){return s=o.id,i=e,c=r,y(function(e){var r,o=e.sortBy,t=getFirstDefined(p.find(function(e){return e.id===s}).defaultSortDesc,l),n=o.find(function(e){return e.id===s}),u=null!=i,a=[];return"replace"==(r=c?n?u?"set":"toggle":"add":o.length<=1&&n?n.desc?"remove":"toggle":"replace")?a=[{id:s,desc:u?i:t}]:"add"===r?a=[].concat(_toConsumableArray(o),[{id:s,desc:u?i:t}]):"set"===r?a=o.map(function(e){return e.id===s?_objectSpread({},e,{desc:i}):e}):"toggle"===r?a=o.map(function(e){return e.id===s?_objectSpread({},e,{desc:!n.desc}):e}):"remove"===r&&(a=[]),_objectSpread({},e,{sortBy:a})},actions.sortByChange);var s,i,c})}),e}),c.getSortByToggleProps=[];var g=function(e,t){return e.forEach(function(r){var o=r.canSortBy;r.getSortByToggleProps=function(e){return mergeProps({onClick:o?function(e){e.persist(),r.toggleSortBy(void 0,!t.disableMultiSort&&e.shiftKey)}:void 0,style:{cursor:o?"pointer":void 0},title:"Toggle SortBy"},applyPropHooks(t.hooks.getSortByToggleProps,r,t),e)}}),e};return c.columns.push(g),c.headers.push(g),p.forEach(function(e){var r=e.id;e.sorted=f.find(function(e){return e.id===r}),e.sortedIndex=f.findIndex(function(e){return e.id===r}),e.sortedDesc=e.sorted?e.sorted.desc:void 0}),_objectSpread({},e,{rows:React.useMemo(function(){if(s||!f.length)return o;r&&console.info("getSortedRows");var n={};p.filter(function(e){return e.sortMethod}).forEach(function(e){n[e.id]=e.sortMethod});return function r(e){var o=u(e,f.map(function(o){var t=n[o.id];return function(e,r){return(t||a)(e.values[o.id],r.values[o.id],o.desc)}}),f.map(function(e){return!e.desc}));return o.forEach(function(e){e.subRows&&(e.subRows=r(e.subRows))}),o}(o)},[o,p,f,s])})};defaultState.pageSize=10,defaultState.pageIndex=0,addActions({pageChange:"__pageChange__"});var propTypes$7={manualPagination:PropTypes.bool},usePagination=function(e){PropTypes.checkPropTypes(propTypes$7,e,"property","usePagination");var t=e.rows,n=e.manualPagination,u=e.debug,r=_slicedToArray(e.state,2),o=r[0],a=o.pageSize,s=o.pageIndex,i=o.pageCount,c=o.filters,p=o.groupBy,l=o.sortBy,d=r[1];React.useLayoutEffect(function(){d(function(e){return _objectSpread({},e,{pageIndex:0})},actions.pageChange)},[c,p,l]);var f=React.useMemo(function(){if(n)return{pages:[t],pageCount:i};u&&console.info("getPages");for(var e=t.length?[]:[[]],r=0;r<t.length;){var o=r+a;e.push(t.slice(r,o)),r=o}return{pages:e,pageCount:e.length,pageOptions:h}},[t,a,i]),y=f.pages,g=f.pageCount,h=_toConsumableArray(new Array(g)).map(function(e,r){return r}),v=n?t:y[s]||[],m=function(r){return u&&console.info("gotoPage"),d(function(e){return r<0||g-1<r?e:_objectSpread({},e,{pageIndex:r})},actions.pageChange)};return _objectSpread({},e,{pages:y,pageOptions:h,page:v,canPreviousPage:0<s,canNextPage:s<g-1,gotoPage:m,previousPage:function(){return m(s-1)},nextPage:function(){return m(s+1)},setPageSize:function(o){d(function(e){var r=e.pageSize*e.pageIndex;return _objectSpread({},e,{pageIndex:Math.floor(r/o),pageSize:o})},actions.setPageSize)}})},propTypes$8={defaultFlex:PropTypes.number},useFlexLayout=function(e){PropTypes.checkPropTypes(propTypes$8,e,"property","useFlexLayout");var r=e.defaultFlex,a=void 0===r?1:r,o=e.hooks,t=o.columns,s=o.getRowProps,i=o.getHeaderRowProps,c=o.getHeaderProps,p=o.getCellProps;return t.push(function(e,n){var r=e.filter(function(e){return e.visible="function"==typeof e.show?e.show(n):!!e.show,e.visible}),o={},u=0;r.forEach(function(e){var r=getSizesForColumn(e,a,void 0,void 0,n),o=r.width,t=r.minWidth;u+=o||(t||a)});var t={style:{display:"flex",minWidth:"".concat(u,"px")}};return n.rowStyles=t,s.push(function(){return t}),i.push(function(){return t}),c.push(function(e){return{style:_objectSpread({boxSizing:"border-box"},getStylesForColumn(e,o,a,n))}}),p.push(function(e){return{style:_objectSpread({},getStylesForColumn(e.column,o,a,void 0,n))}}),e}),e};function getStylesForColumn(e,r,o,t){var n=getSizesForColumn(e,r,o,t),u=n.flex,a=n.width,s=n.maxWidth;return{flex:"".concat(u," 0 auto"),width:"".concat(a,"px"),maxWidth:"".concat(s,"px")}}function getSizesForColumn(e,r,o,t){var n=e.columns,u=e.id,a=e.width,s=e.minWidth,i=e.maxWidth;return n?!!(n=n.map(function(e){return getSizesForColumn(e,r,o,t)}).filter(Boolean)).length&&{flex:sum(n.map(function(e){return e.flex})),width:sum(n.map(function(e){return e.width})),maxWidth:sum(n.map(function(e){return e.maxWidth}))}:{flex:a?0:o,width:"auto"===a?r[u]||o:getFirstDefined(a,s,o),maxWidth:i}}var useTokenPagination=function(){var e=_slicedToArray(React.useState(),2),r=e[0],o=e[1],t=_slicedToArray(React.useState(),2),n=t[0],u=t[1],a=_slicedToArray(React.useState([]),2),s=a[0],i=a[1],c=_slicedToArray(React.useState(0),2),p=c[0],l=c[1],d=s.length;return{setNextPageToken:u,pageToken:r,pageIndex:p,previousPage:function(){l(function(e){return e-1}),i(function(e){return _toConsumableArray(e).reverse().slice(1).reverse()}),o(s[s.length-1])},nextPage:function(){l(function(e){return e+1}),i(function(e){return[].concat(_toConsumableArray(e),[r])}),o(n)},canPreviousPage:d,canNextPage:n,resetPagination:function(){o(void 0),l(0),u(void 0),i([])}}};exports.useTable=useTable,exports.useColumns=useColumns,exports.useRows=useRows,exports.useSimpleLayout=useSimpleLayout,exports.useExpanded=useExpanded,exports.useFilters=useFilters,exports.useGroupBy=useGroupBy,exports.useSortBy=useSortBy,exports.usePagination=usePagination,exports.useTableState=useTableState,exports.useFlexLayout=useFlexLayout,exports.useTokenPagination=useTokenPagination,exports.actions=actions;
//# sourceMappingURL=index.js.map
