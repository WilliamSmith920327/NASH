import { Button, Col, Modal, Row, Form, ButtonGroup, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks';
import { PageTitle, FileUploader } from 'components';
import Attachments from './Attachments';

const SelectBroker = () => {

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
                title={'SELECT BROKER'}
            />
            <Row>
                <Col></Col>
                <Col sm={8}>
                    <Row>
                        <Col>
                            <Card className="text-center p-3">
                                <h5>
                                    <b>BROKER NAME</b>
                                </h5>
                                <p>
                                    <b>BROKER </b> MC
                                </p>
                                <p>
                                    <b>AGENT NAME</b>
                                </p>
                                <p>
                                    <b>AGENT PHONE</b>
                                </p>
                                <p>
                                    <b>AGENT EMAIL</b>
                                </p>
                                <Card.Footer>
                                    <Link className='btn btn-primary' to="/trip/addtrip/broker/newcontact">
                                        EDIT BUTTON
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Form>
                                    <Form.Group className="m-3">
                                        <Form.Label htmlFor="exampleEmail2">CREDIT SCORE</Form.Label>
                                        <Form.Control type="text" name="score" id="exampleEmail2" readOnly/>
                                    </Form.Group>
                                    <Form.Group className="m-3">
                                        <Form.Label>SCORE PROOF</Form.Label>
                                        <FileUploader />
                                    </Form.Group>
                                    <Form.Group className="m-3">
                                        <Form.Label>BROKER AGREEMENT</Form.Label>
                                        <FileUploader />
                                    </Form.Group>
                                </Form>                                
                            </Card>
                        </Col>
                    </Row>
                    <div className='text-center'>
                        <ButtonGroup>
                            <Link to="/trip/addtrip/broker/findagent" className="btn btn-danger">
                                <i className='mdi mdi-arrow-left'></i>
                                BACK
                            </Link>
                            <Link to="/trip/addtrip/commodity" className="btn btn-success">
                                NEXT
                                <i className='mdi mdi-arrow-right'></i>
                            </Link>
                        </ButtonGroup>
                    </div>
                </Col>
                <Col>
                </Col>
            </Row>

        </>
    )
};

export default SelectBroker;