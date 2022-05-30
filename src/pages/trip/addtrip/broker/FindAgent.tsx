import { Button, Col, Modal, Row, Form, InputGroup, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PageTitle } from 'components';
import Rating from 'react-rating';

const FindAgent = () => {

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
                title={'Find Agent'}
            />
            <Row>
                <Col></Col>
                <Col sm={4}>
                    <div className="border p-3 mt-4 mt-lg-0 rounded">
                        <h4 className="header-title text-center mb-3">Find Agent</h4>
                        <div className="text-center">
                            <i className="mdi mdi-truck-fast h2 text-muted"></i>
                            <h5>
                                <b>BROKER NAME</b>
                            </h5>
                            <p className="mb-1">
                                <b>First Name or Last Name:</b> details.order_id
                            </p>
                            <Card className='mb-5'>
                                <Card.Body>
                                    <Card.Title as="h5">HIKE OZZO, 902-555-9321</Card.Title>
                                    <Card.Text>MIKER@GMAIL.COM</Card.Text>
                                    <Rating
                                        initialRating={5}
                                        readonly
                                        emptySymbol="mdi mdi-star-outline font-22 text-muted"
                                        fullSymbol="mdi mdi-star font-22 text-warning"
                                    />
                                </Card.Body>
                                <Card.Footer className='p-0'>
                                    <Link to='/trip/addtrip/broker/select' className="btn btn-primary w-100">
                                        SELECT
                                    </Link>
                                </Card.Footer>
                            </Card>
                            <p>
                                <b>Payment Mode :</b> details.payment_mode
                            </p>
                            <Link to='/trip/addtrip/broker/newcontact' className="btn btn-success w-20">
                                CREATE NEW
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col></Col>
            </Row>

        </>
    )
};

export default FindAgent;
