import React from "react";

type ContactData = {
  heading: "CONTACT";
}

export default function Contact(data: ContactData) {
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
      <div id="contact" data-test-id="contact-form">
        <div className="mt-20">
          <div className="w-1/2	m-auto">
            {heading && <p data-test-id="heading" className="font-mono text-3xl mb-6">{heading}</p>}
            {userDetails && (
              <form>
                <label>
                  First Name: 
                  <input type="text" data-test-id="first-name-input" onChange={e => setFirstName({...firstName, e.target.value})} value={firstName} placeholder="First Name:" />
                </label>
                <label>
                  Last Name: 
                  <input type="text" data-test-id="last-name-input" onChange={e => setLastName({...lastName, e.target.value})} value={lastName} placeholder="Last Name:" />
                </label>
                <label>
                  Email: 
                  <input type="text" data-test-id="email-input" onChange={e => setEmail({...email, e.target.value})} value={email} placeholder="Email: "/>
                </label>
                <label>
                  Notes: 
                  <input type="text" data-test-id="notes-input" onChange={e => setNotes({...notes, e.target.value})} value={notes} placeholder="Notes: " />
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
