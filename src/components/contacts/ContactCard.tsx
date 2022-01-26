import React from "react";
import styled from "styled-components/macro";
import { Contact } from "../../models/Contact"

interface Props {
  contact: Contact;
}

function ContactCard({contact}: Props) {
  return (
    <li data-testid={'contact' + contact.id}>
					<h3> {contact.name} </h3>
					{contact.phoneNumbers.map(phone => (
						<div key={phone}> {phone} </div>
					))}
          <div className="star">
            <div role="button">✏ </div>
          </div>
				</li>
  );
}

export default ContactCard;
