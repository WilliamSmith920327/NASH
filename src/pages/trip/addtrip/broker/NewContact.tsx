import { Button, Col, Modal, Row, Form, InputGroup, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks';
import { PageTitle } from 'components';

const NewContact = () => {

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'broker', path: '/trip/addtrip/broker/newbroker', active: true },
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
                            <Form.Label htmlFor="firstname" column sm={3}>
                                FIRST NAME:
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" name="firstname" id="firstname" placeholder="FIRST NAME" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="lastname" column sm={3}>
                                LAST NAME:
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" name="last name" id="lastname" placeholder="LAST NAME" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="email" column sm={3}>
                                EMAIL:
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="email" name="email" id="email" placeholder="EMAIL" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="phone" column sm={3}>
                                PHONE:
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="number" name="phone" id="phone" placeholder="PHONE NUMBER" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="ext" column sm={3}>
                                EXT
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" name="ext" id="ext" placeholder="EXT" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-0" controlId="formHorizontalCheck">
                            <Col sm={{ span: 9, offset: 3 }}>
                                <Link className='btn btn-primary' to="/trip/addtrip/broker/findagent">
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

export default NewContact;