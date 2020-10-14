import React, { useState, useEffect } from "react";
import Teammate from "./Teammate";
import TeamForm from "./Form";
import axios from "./axios";


const initialFormValues = {
  username: "",
  email: "",
  role: "",
};

export default function App() {
  const [teammates, setTeammates] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {

    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {

    let newTeammate = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    if (!newTeammate.username || !newTeammate.email || !newTeammate.role) return;
    axios
      .post("fakeapi.com", newTeammate)
      .then((res) => {
        setTeammates([...teammates, res.data]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        // debugger;
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get("fakeapi.com").then((res) => setTeammates(res.data));
  }, []);

  return (
    <div className="container">
      <h1>Team List</h1>

      <TeamForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {teammates.map((teammate) => {
        return <Teammate key={teammate.id} details={teammate} />;
      })}
    </div>
  );
}
