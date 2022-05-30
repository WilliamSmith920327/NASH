import { Button, Col, Modal, Row, Form, InputGroup, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks';
import { PageTitle } from 'components';

const NewBroker = () => {

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'new broker', path: '/trip/addtrip/broker/newbroker', active: true },
                    { label: 'commodity', path: '/trip/addtrip/commodity' },
                    { label: 'pickup', path: '/trip/addtrip/pickup' },
                    { label: 'delivery', path: '/trip/addtrip/delivery' },
                    { label: 'submit', path: '/trip/addtrip/submit' }
                ]}
                title={'NEW BROKER'}
            />
            <Row>
                <Col></Col>
                <Col sm={6}>
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="brokermc" column sm={3}>
                                BROKER MC
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" name="brokermc" id="brokermc" placeholder="broker MC" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="exampleEmail3" column sm={3}>
                                COMPANY NAME
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" name="campany" id="campany" placeholder="COMPANY" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="mc" column sm={3}>
                                MC #
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" name="mc" id="mc" placeholder="MC#" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="dot" column sm={3}>
                                DOT #
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="dot" name="dot" id="dot" placeholder="DOT #" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="score" column sm={3}>
                                CREATE SCORE
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" name="score" id="score" placeholder="CREATE SCORE" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="address" column sm={3}>
                                COMPANY ADDRESS
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" name="address" id="address" placeholder="COMPANY ADDRESS" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="email" column sm={3}>
                                ACCOUNTING EMAIL
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="email" name="email" id="email" placeholder="ACCOINTING EMAIL" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="phone" column sm={3}>
                                COORPORATE PHONE
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="number" name="phone" id="phone" placeholder="PHONE" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-0" controlId="formHorizontalCheck">
                            <Col sm={{ span: 9, offset: 3 }}>
                                <Link className='btn btn-primary' to="/trip/addtrip/broker/newcontact">
                                    NEXT
                                </Link>
                            </Col>
                        </Form.Group>
                    </Form>

                </Col>
                <Col></Col>
            </Row>

        </>
    )
};

export default NewBroker;