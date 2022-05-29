import { Card, Form, Button } from 'react-bootstrap';

const RightSide = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-2 text-center">DRIVERS</h4>
                <div className='inbox-widget'>
                    <div className='inbox-item'>
                        <p className="inbox-item-author">Tomaslau</p>
                        <p className="inbox-item-date">
                            <Form.Check className="text-info font-13" type="checkbox" id="default-checkbox" />
                        </p>
                    </div>
                </div>
                <div className='inbox-widget'>
                    <div className='inbox-item'>
                        <p className="inbox-item-author">Tomaslau</p>
                        <p className="inbox-item-date">
                            <Form.Check className="text-info font-13" type="checkbox" id="default-checkbox" />
                        </p> 
                    </div>
                </div>
                <div className='inbox-widget'>
                    <div className='inbox-item'>
                        <p className="inbox-item-author">Tomaslau</p>
                        <p className="inbox-item-date">
                            <Form.Check className="text-info font-13" type="checkbox" id="default-checkbox" />
                        </p>
                    </div>
                </div>
                <div className='inbox-widget'>
                    <div className='inbox-item'>
                        <p className="inbox-item-author">Tomaslau</p>
                        <p className="inbox-item-date">
                            <Form.Check className="text-info font-13" type="checkbox" id="default-checkbox" />
                        </p>
                    </div>
                </div>
                <div className='inbox-widget'>
                    <div className='inbox-item'>
                        <p className="inbox-item-author">Tomaslau</p>
                        <p className="inbox-item-date">
                            <Form.Check className="text-info font-13" type="checkbox" id="default-checkbox" />
                        </p>
                    </div>
                </div>
                <Card>
                    <Card.Header className='p-1'>MARCO ROZA</Card.Header>
                    <Card.Body className='p-1'>
                        CAREER<br />TRAILER <br />
                        AGE
                    </Card.Body>
                    <Button variant="link">read more</Button>
                </Card>
                <div className='inbox-widget'>
                    <div className='inbox-item'>
                        <p className="inbox-item-author">Tomaslau</p>
                        <p className="inbox-item-date">
                            <Form.Check className="text-info font-13" type="checkbox" id="default-checkbox" />
                        </p>
                    </div>
                </div>
                <div className='inbox-widget'>
                    <div className='inbox-item'>
                        <p className="inbox-item-author">Tomaslau</p>
                        <p className="inbox-item-date">
                            <Form.Check className="text-info font-13" type="checkbox" id="default-checkbox" />
                        </p>
                    </div>
                </div>
                <div className="d-grid">
                    <Button>INVITE</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default RightSide;
