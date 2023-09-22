import Card from 'react-bootstrap/Card';
import  {Button,ListGroup } from 'react-bootstrap';
import BMWCAR from '../img/BMWcar.png';

function BMW() {
  return (
    <Card style={{ width: '80rem' }}>
      <Card.Img variant="top" src={BMWCAR} />
      <Card.Body>
        <Card.Title>BMW</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>240i</ListGroup.Item>
        <ListGroup.Item>Best in the game</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Card.Link className='m-2 btn btn-primary' href="/products">
        products
    </Card.Link>
        <div className='m-2'>
        <Button type="submit">Submit</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BMW;