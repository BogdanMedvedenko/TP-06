import { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { PageWrapper, Text, Card, ContainerFacts } from "./styles";

function Homework_09() {
  const [note, setNote] = useState<string>("");    
  const [notes, setNotes] = useState<string[]>([]);   

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const handleAddNote = () => {
    if (!note.trim()) return;

    setNotes((prev) => [...prev, note]); 
    setNote(""); 
  };

  return (
    <PageWrapper>
      <Card>
        <Text>My Notes</Text>

        <Input
          id="note"
          name="note"
          placeholder="Введите заметку..."
          label="Note"
          value={note}
          onChange={handleChange}
        />

        <Button name="Add" onClick={handleAddNote} />

        <ContainerFacts>
          {notes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ContainerFacts>
      </Card>
    </PageWrapper>
  );
}

export default Homework_09;