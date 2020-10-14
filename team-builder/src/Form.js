import React from "react";

export default function TeamForm(props) {

const { values, update, submit } = props;

const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
};

const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
};

    return (
    <form className="form container" onSubmit={onSubmit}>
        <div className="form-group inputs">

        <label>
            Username
            <input
            type="text"
            name="username"
            onChange={onChange}
            value={values.username}
            placeholder="Enter a username"
            maxLength="30"
            />
        </label>

        <label>
            Email
            <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
            placeholder="Enter an email"
            maxLength="50"
            />
        </label>

        <label>
            Role
            <select name="role" value={values.role} onChange={onChange}>
            <option value="">--- Select Role ---</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Designer">Designer</option>
            </select>
        </label>

        <div className="submit">
            <button>submit</button>
        </div>
        </div>
    </form>
    );
}