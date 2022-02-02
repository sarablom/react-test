import { useState, ChangeEvent } from "react";
import { Contact } from "../../models/Contact";

interface Props {
  contact: Contact;
  changeContact: (newContact: Contact) => void;
}

// Alternativ syntax - destructuring två gånger, för att slippa variabeln "contact"
// const ContactCard = ({ contact: { id, name, phoneNumbers } }: Props) => {
const ContactCard = ({ contact, changeContact }: Props) => {
  // State
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [name, setName] = useState<string>(contact.name);

  // Event functions
  const editClick = () => {
    if (isEditing) {
      changeContact({ ...contact, name: name });
    }
    setIsEditing(!isEditing);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  // JSX
  return (
    <li data-testid={"contact" + contact.id}>
      <h3>
        {" "}
        {isEditing ? (
          <input type="text" value={name} onChange={handleNameChange} />
        ) : (
          contact.name
        )}
      </h3>
      {contact.phoneNumbers.map((phone) => (
        <div key={phone}> {phone} </div>
      ))}
      <div className="star">
        <div role="button" onClick={editClick}>
          🖊️
        </div>
      </div>
    </li>
  );
};

export default ContactCard;
