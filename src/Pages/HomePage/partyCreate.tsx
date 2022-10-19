import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function PartyCreate() {
  return (
    <div style={{margin: "100px auto", color: "#fff", width: "40%"}}>
        <h3 style={{marginBottom: "20px"}}> Create your game </h3>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="gameName">Game name</Form.Label>
                <Form.Control id="gameName" placeholder="Wanderful name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="gamePass">Password</Form.Label>
                <Form.Control id="gamePass" placeholder="1234" type="password" />
            </Form.Group>
            <fieldset disabled>
                <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    id="disabledFieldsetCheck"
                    label="Private Game"
                />
                </Form.Group>
            </fieldset>
            <Button type="submit">Submit</Button>
        </Form>
    </div>
    );
}