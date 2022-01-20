import React from "react";


function ContactList() {
  return (
    <ul className="contact-list">
      <li data-testid="contact1">
        <h3> Anna Andersson </h3>
        <div>031-12345678</div>
        <div>0733-1234123</div>
        <div className="star">
          <div>⭐</div>
          <div>🖊️</div>
        </div>
      </li>
      <li data-testid="contact2">
        <h3> Bo Bengtsson </h3>
        <div>031-33333333</div>
        <div>0733-4444444</div>
      </li>
      <li data-testid="contact3">
        <h3> Cecilia Circus </h3>
        <div>031-55555555</div>
        <div>0733-5555555</div>
      </li>
    </ul>
  );
}

export default ContactList;
