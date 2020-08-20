exports.id = "server";
exports.modules = {

/***/ "./src/SignInNavItem.jsx":
/*!*******************************!*\
  !*** ./src/SignInNavItem.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");




class SignInNavItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      disabled: true,
      user: {
        signedIn: false,
        givenName: ""
      }
    };
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  signOut() {
    this.setState({
      user: {
        signedIn: false,
        givenName: ""
      }
    });
  }

  showModal() {
    this.setState({
      showing: true
    });
  }

  hideModal() {
    this.setState({
      showing: false
    });
  }

  componentDidMount() {
    const clientId = window.ENV.GOOGLE_CLIENT_ID;
    if (!clientId) return;
    window.gapi.load("auth2", () => {
      if (!window.gapi.auth2.getAuthInstance()) {
        window.gapi.auth2.init({
          client_id: clientId
        }).then(() => {
          this.setState({
            disabled: false
          });
        });
      }
    });
  }

  async signIn() {
    this.hideModal();
    const {
      showError
    } = this.props;
    let googleToken;

    try {
      const auth2 = window.gapi.auth2.getAuthInstance();
      const googleUser = await auth2.signIn();
      googleToken = googleUser.getAuthResponse().id_token;
    } catch (error) {
      showError(`Error authenticating with Google:${error.error}`);
    }

    try {
      const apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;
      const response = await fetch(`${apiEndpoint}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          google_token: googleToken
        })
      });
      const body = await response.text();
      const result = JSON.parse(body);
      console.log({
        result
      });
      const {
        signedIn,
        givenName
      } = result;
      this.setState({
        user: {
          signedIn,
          givenName
        }
      });
    } catch (error) {
      showError(`Error signing into the app: ${error}`);
    }
  }

  showModal() {
    const clientId = window.ENV.GOOGLE_CLIENT_ID;
    const {
      showError
    } = this.props;

    if (!clientId) {
      showError("Missing environment variable GOOGLE_CLIENT_ID");
      return;
    }

    this.setState({
      showing: true
    });
  }

  render() {
    const {
      user
    } = this.state;
    const {
      showing,
      disabled
    } = this.state;

    if (user.signedIn) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"], {
        title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "thumbnail-image",
          src: user.givenName,
          style: {
            height: 25,
            widht: 25,
            borderRadius: 100
          },
          alt: "Sign In"
        }),
        id: "user"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
        onClick: this.signOut
      }, "Sign out"));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
        onClick: this.showModal
      }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
        show: showing,
        onHide: this.hideModal,
        bsSize: "sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
        closeButton: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, null, "Sign")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        bsStyle: "primary",
        onClick: this.signIn,
        disabled: disabled
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png",
        alt: "Sign In"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        bsStyle: "link",
        onClick: this.hideModal
      }, "Cancel"))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_withToast_jsx__WEBPACK_IMPORTED_MODULE_2__["default"])(SignInNavItem));

/***/ })

};
//# sourceMappingURL=server.98e2a351f921be60b227.hot-update.js.map