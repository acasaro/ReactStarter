import React, { Component } from 'react';
import { connect } from 'react-redux';
import './_login.scss';

class Login extends Component {
    render() {
        var login = this.props.content.login;

        return (

            <div className="login-container">
                <div className="flex-align-center">
                    <div className="box login">
                        <div className="title">{login.title}</div>
                        <div className="form-control">
                            <input className="full-width" id="name" type="text" placeholder="Username" />
                            <div className="feedback"></div>
                        </div>
                        <div className="form-control">
                            <input className="full-width" id="password" type="password" placeholder="Password" />
                            <div className="feedback"></div>
                        </div>
                        <div className="form-control">
                            <div className="feedback"></div>
                        </div>
                        <div className="flex-align-end">
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        content: state.contentStatic
    };
}

export default connect(mapStateToProps)(Login);