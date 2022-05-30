import { Button, Col, Modal, Row, Form, InputGroup, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks';
import { PageTitle } from 'components';

const Broker = () => {
    const { isOpen, size, className, scroll, toggleModal, openModalWithSize, openModalWithClass, openModalWithScroll } =
        useModal();
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'broker', path: '/trip/addtrip/broker', active: true },
                    { label: 'commodity', path: '/trip/addtrip/commodity' },
                    { label: 'pickup', path: '/trip/addtrip/pickup' },
                    { label: 'delivery', path: '/trip/addtrip/delivery' },
                    { label: 'submit', path: '/trip/addtrip/submit' }
                ]}
                title={'BROKER'}
            />
            <Modal show={isOpen} onHide={toggleModal} dialogClassName={className} size="lg" backdrop="static" keyboard={false}>
            {/* <Modal show={signUpModal} onHide={toggleSignUp}> */}
                <Modal.Header className='text-dark' closeButton>TRIP OFFER MODAL</Modal.Header>
                <Modal.Body>
                    <Form className="ps-3 pe-3" action="#">
                        <Row>
                            <Col md='6'>
                                <Form.Group>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">RATE</InputGroup.Text>
                                        <Form.Control
                                            aria-label="rate"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md='6'>
                                <Form.Group>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">MILES</InputGroup.Text>
                                        <Form.Control
                                            aria-label="miles"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='6'>
                                <Form.Group>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">FROM</InputGroup.Text>
                                        <Form.Control
                                            aria-label="from"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md='6'>
                                <Form.Group>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">TO</InputGroup.Text>
                                        <Form.Control
                                            aria-label="to"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='6'>
                                <Form.Group>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">PICK DAE</InputGroup.Text>
                                        <Form.Control
                                            aria-label="picdae"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md='6'>
                                <Form.Group>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">DEL DATE</InputGroup.Text>
                                        <Form.Control
                                            aria-label="deldate"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='6'>
                                <Form.Group>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">WEIGHT</InputGroup.Text>
                                        <Form.Control
                                            aria-label="weight"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="username" className="form-label">
                                    COMMENT
                                </label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Row>
                                <Col md='2'></Col>
                                <Col className='m-auto' md='9'>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="TARP" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="RAMPS" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className='my-2'>
                                        <Col>
                                            <Form.Group className="mb-3" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="OVERSIZE" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="PARTIAL" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className='my-2'>
                                        <Col>
                                            <Form.Group className="mb-3" id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="HAZMAT" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Row>
                        <Modal.Footer>
                            <div className='m-auto'>
                                <div className="mt-5">
                                    <Link to="#" className="btn btn-info me-2" onClick={toggleModal}>
                                        <i className="mdi mdi-reply me-1"></i> LOOKS GOOD
                                    </Link>
                                    <Link to="#" className="btn btn-primary">
                                        COVLD WORK <i className="mdi mdi-forward ms-1"></i>
                                    </Link>
                                </div>
                                {/* <Button variant="info" onClick={toggleModal}>
                                    LOOKS GOOD
                                </Button>
                                <Button variant="primary">COVLD WORK</Button> */}
                            </div>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
            <Card>
                <Card.Body className="text-center">
                    <h4>MC# OR NAME</h4>
                    <Table className="mb-0" responsive>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>MC</th>
                                <th>SCORE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>name1</td>
                                <td>mc1</td>
                                <td>score1</td>
                            </tr>
                            <tr>
                                <td>name2</td>
                                <td>mc2</td>
                                <td>score2</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Link to="/trip/addtrip/broker/newbroker" className="btn btn-primary mt-4 mb-2 btn-rounded">CREATE NEW</Link>
                </Card.Body>
            </Card>
        </>
    )
};

export default Broker;