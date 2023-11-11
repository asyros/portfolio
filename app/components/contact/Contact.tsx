import React from "react";
import { data } from "./data";

export default function Contact() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const { heading } = data;

  const handleSubmit = () => {
    // TODO: Work out what logic should be done here
  }

  if (data) {
    return (
      <div id="contact">
        <div className="mt-20">
          <div className="w-1/2	m-auto">
            {heading && <p className="font-mono text-3xl mb-6">{heading}</p>}
            {userDetails && (
              <form>
                <label>
                  First Name: 
                  <input type="text" onChange={e => setFirstName({...firstName, e.target.value})} value={firstName} placeholder="First Name:" />
                </label>
                <label>
                  Last Name: 
                  <input type="text" onChange={e => setLastName({...lastName, e.target.value})} value={lastName} placeholder="Last Name:" />
                </label>
                <label>
                  Email: 
                  <input type="text" onChange={e => setEmail({...email, e.target.value})} value={email} placeholder="Email: "/>
                </label>
                <label>
                  Notes: 
                  <input type="text" onChange={e => setNotes({...notes, e.target.value})} value={notes} placeholder="Notes: " />
                </label>
                <button type="submit" onClick={handleSubmit}>Submit</button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
