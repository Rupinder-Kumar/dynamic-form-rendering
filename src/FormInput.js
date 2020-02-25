import React, { Component } from "react";

class FormInput extends Component {
    render() {
        const { name, type, value } = this.props;
        console.log(this.props)
        return (
            <React.Fragment>
                {type === "textArea" ?
                    <div className="form-group">
                        <label htmlFor={name}><b>{name}</b></label>
                        <textarea className="form-control" name={name} value={value}></textarea>
                    </div>
                    :
                    <div className="form-group">
                        <label htmlFor={name}><b>{name}</b></label>

                        <input className="form-control" type={type} value={value} name={name} />
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default FormInput;