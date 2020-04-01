exports.id = "server";
exports.modules = {

/***/ "./server/render.jsx":
/*!***************************!*\
  !*** ./server/render.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\server\\render.jsx: Unterminated regular expression (10:19)\n\n\u001b[0m \u001b[90m  8 | \u001b[39masync \u001b[36mfunction\u001b[39m render(req\u001b[33m,\u001b[39m res) {\u001b[0m\n\u001b[0m \u001b[90m  9 | \u001b[39m  \u001b[36mconst\u001b[39m activeRoute \u001b[33m=\u001b[39m routes\u001b[33m.\u001b[39mfind(route \u001b[33m=>\u001b[39m matchPath(req\u001b[33m.\u001b[39mpath\u001b[33m,\u001b[39m route))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 10 | \u001b[39m  let initialData\u001b[33m;\u001b[39m\u001b[33m/\u001b[39m \u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39m  \u001b[36mif\u001b[39m (activeRoute \u001b[33m&&\u001b[39m activeRoute\u001b[33m.\u001b[39mcomponent\u001b[33m.\u001b[39mfetchData) {\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39m    initialData \u001b[33m=\u001b[39m await activeRoute\u001b[33m.\u001b[39mcomponent\u001b[33m.\u001b[39mfetchData()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 13 | \u001b[39m  }\u001b[0m\n    at Object.raise (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:7017:17)\n    at Object.readRegexp (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:7746:20)\n    at Object.readToken_slash (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:7390:12)\n    at Object.getTokenFromCode (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:7668:14)\n    at Object.getTokenFromCode (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:4152:18)\n    at Object.nextToken (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:7241:12)\n    at Object.next (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:7170:10)\n    at Object.eat (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:7175:12)\n    at Object.isLineTerminator (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:8373:17)\n    at Object.semicolon (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:8377:15)\n    at Object.parseVarStatement (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11159:10)\n    at Object.parseStatementContent (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10757:21)\n    at Object.parseStatement (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10690:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11264:25)\n    at Object.parseBlockBody (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11251:10)\n    at Object.parseBlock (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11235:10)\n    at Object.parseFunctionBody (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10252:24)\n    at Object.parseFunctionBodyAndFinish (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10222:10)\n    at D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11394:12\n    at Object.withTopicForbiddingContext (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10565:14)\n    at Object.parseFunction (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11393:10)\n    at Object.parseFunctionStatement (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11036:17)\n    at Object.parseStatementContent (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10813:25)\n    at Object.parseStatement (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10690:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11264:25)\n    at Object.parseBlockBody (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11251:10)\n    at Object.parseTopLevel (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10621:10)\n    at Object.parse (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12222:10)\n    at parse (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12273:38)\n    at parser (D:\\WebDev Material\\mernStack trials\\The-Issue-Tracker-app-master\\ui\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)");

/***/ }),

/***/ "./server/template.js":
false,

/***/ "./src/About.jsx":
false,

/***/ "./src/Contents.jsx":
false,

/***/ "./src/DateInput.jsx":
false,

/***/ "./src/IssueAddNavItem.jsx":
false,

/***/ "./src/IssueDetail.jsx":
false,

/***/ "./src/IssueEdit.jsx":
false,

/***/ "./src/IssueFilter.jsx":
false,

/***/ "./src/IssueList.jsx":
false,

/***/ "./src/IssueReport.jsx":
false,

/***/ "./src/IssueTable.jsx":
false,

/***/ "./src/NotFound.jsx":
false,

/***/ "./src/NumInput.jsx":
false,

/***/ "./src/Page.jsx":
false,

/***/ "./src/Store.js":
false,

/***/ "./src/TextInput.jsx":
false,

/***/ "./src/Toast.jsx":
false,

/***/ "./src/graphQLFetch.js":
false,

/***/ "./src/routes.js":
false,

/***/ "isomorphic-fetch":
false,

/***/ "react":
false,

/***/ "react-bootstrap":
false,

/***/ "react-bootstrap/lib/NavbarHeader":
false,

/***/ "react-dom/server":
false,

/***/ "react-router-bootstrap":
false,

/***/ "react-router-dom":
false,

/***/ "url-search-params":
false

};
//# sourceMappingURL=server.ecbf7ee327fa74d3d596.hot-update.js.map