
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.css";

const HelloCard = () => {
    return ( 
        <Card className='ml-20'style={{ width: '18rem' }}>
            <Card.Img variant="top" src="download.png" />
            <Card.Body>
                <Card.Title>HELLOWORLD</Card.Title>
                <Card.Text>
                    HELLOOO WORLDDDD
                </Card.Text>
                
            </Card.Body>
        </Card>
     );
}
 
export default HelloCard;