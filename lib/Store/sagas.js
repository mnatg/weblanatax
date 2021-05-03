var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=rootSaga;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _effects=require("redux-saga/effects");var _Types=require("../../Store/Types");var _Auth=require("./sagas/Auth.js");var _Room=require("./sagas/Room.js");var _marked=_regenerator.default.mark(rootSaga);function rootSaga(){return _regenerator.default.wrap(function rootSaga$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return(0,_effects.all)([(0,_effects.takeLatest)(_Types.SIGNUP,_Auth.signUp),(0,_effects.takeLatest)(_Types.LOAD_ROOM,_Room.loadRoom),(0,_effects.takeLatest)(_Types.LOGOUT,_Auth.logOut),(0,_effects.takeLatest)(_Types.LOGIN,_Auth.signIn),(0,_effects.takeLatest)(_Types.GOOGLE_SIGN_IN,_Auth.googleSignIn),(0,_effects.takeLatest)(_Types.FACEBOOK_SIGN_IN,_Auth.facebookSignIn),(0,_effects.takeLatest)(_Types.GOOGLE_SIGN_UP,_Auth.googleSignUp),(0,_effects.takeLatest)(_Types.FACEBOOK_SIGN_UP,_Auth.facebookSignUp)]);case 2:case"end":return _context.stop();}}},_marked);}