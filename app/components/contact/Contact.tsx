'use client'
import React from 'react'
import { data } from './data'

const Contact = () => {
  const [firstName, setFirstName] = React.useState<string>('')
  const [lastName, setLastName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [notes, setNotes] = React.useState<string>('')

  const { heading } = data

  const handleSubmit = () => {
    // TODO: Work out what logic should be done here
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    console.log(name)
    console.log(value)
  }

  if (data) {
    return (
      <div id="contact" data-test-id="contact-form">
        <div className="mt-20">
          <div className="w-1/2	m-auto">
            {heading && (
              <p data-test-id="heading" className="font-mono text-3xl mb-6">
                {heading}
              </p>
            )}
            <form>
              <label>
                First Name:
                <input
                  type="text"
                  data-test-id="first-name-input"
                  onChange={handleInputChange}
                  value={firstName}
                  placeholder="First Name:"
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  data-test-id="last-name-input"
                  onChange={handleInputChange}
                  value={lastName}
                  placeholder="Last Name:"
                />
              </label>
              <label>
                Email:
                <input
                  type="text"
                  data-test-id="email-input"
                  onChange={handleInputChange}
                  value={email}
                  placeholder="Email: "
                />
              </label>
              <label>
                Notes:
                <input
                  type="text"
                  data-test-id="notes-input"
                  onChange={handleInputChange}
                  value={notes}
                  placeholder="Notes: "
                />
              </label>
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
  return null
}

export { Contact }
