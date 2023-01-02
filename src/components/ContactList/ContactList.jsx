import React from "react";

export default function ContactList({ contacts, deliteContact }) {
  return (
    <div>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            <p>
              {name} {number}
            </p>
            <button onClick={() => deliteContact(id)}>Delite</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
