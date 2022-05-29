import { Card, Form, Button } from 'react-bootstrap';

const Dispatch = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-2 text-center">DISPATCH</h4>
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
                <div className="d-grid">
                    <Button className='btn-info'>INVITE</Button>
                </div>
                <hr />
                <h4 className="header-title mb-2 text-center">ASSISTENT</h4>
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
                <div className="d-grid">
                    <Button>INVITE</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Dispatch;
