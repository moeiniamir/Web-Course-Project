import React, {Component} from "react";

class ChangePassword extends Component {


    changed = event => {

    };


    render() {
        return (
            <React.Fragment>
                <form className="ui form">
                    <div className="field">
                        <div className="three fields">
                            <div className="field">
                                <label>old password</label>
                                <input type="text" name="old_password" placeholder="Enter old password"
                                       onChange={this.changed}/>
                            </div>
                        </div>
                        <div className="three fields">
                            <div className="field">
                                <label>new password</label>
                                <input type="text" name="new_password" placeholder="Enter new password"
                                       onChange={this.changed}/>
                            </div>
                        </div>
                        <div className="three fields">
                            <div className="field">
                                <label>new password again</label>
                                <input type="text" name="new_password" placeholder="Enter new password again"
                                       onChange={this.changed}/>
                            </div>
                        </div>
                    </div>
                </form>
                <button className="ui button"  >
                   change password
                </button>

            </React.Fragment>
        )
    }
}

export default ChangePassword
