var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _Types=require("../../Store/Types");var initialState={token:{},error:""};var tokenReducer=function tokenReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments.length>1?arguments[1]:undefined;switch(action.type){case _Types.ADD_TOKEN:return(0,_extends2.default)({},state,{token:action.payload});case _Types.ERROR:return(0,_extends2.default)({},state,{error:action.payload});default:return state;}};var _default=tokenReducer;exports.default=_default;