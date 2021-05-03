var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _Types=require("../../../../../Store/Types");var initialState={loading:false,loggedIn:false,user:null,error:""};var authReducer=function authReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments.length>1?arguments[1]:undefined;switch(action.type){case _Types.LOGIN:return(0,_extends2.default)({},state,{user:action.payload});case _Types.LOGOUT:return(0,_extends2.default)({},state,{loggedIn:false,user:null});case _Types.UPDATE_USER:return{loggedIn:true,user:(0,_extends2.default)({},state.user,action.payload)};case _Types.SIGNUP:return(0,_extends2.default)({},state,{user:(0,_extends2.default)({},state.user,action.payload)});case _Types.GOOGLE_SIGN_IN:return(0,_extends2.default)({},state,{user:(0,_extends2.default)({},state.user,action.payload)});case _Types.FACEBOOK_SIGN_IN:return(0,_extends2.default)({},state,{user:(0,_extends2.default)({},state.user,action.payload)});case _Types.GOOGLE_SIGN_UP:return(0,_extends2.default)({},state,{user:(0,_extends2.default)({},state.user,action.payload)});case _Types.FACEBOOK_SIGN_UP:return(0,_extends2.default)({},state,{user:(0,_extends2.default)({},state.user,action.payload)});case _Types.ERROR:return(0,_extends2.default)({},state,{error:action.payload});default:return state;}};var _default=authReducer;exports.default=_default;