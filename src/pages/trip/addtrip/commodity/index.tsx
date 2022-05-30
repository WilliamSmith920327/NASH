import { Form, Button, Row, Col, ButtonGroup } from 'react-bootstrap';
import { PageTitle, FileUploader } from 'components';
import { Link } from 'react-router-dom';

const Commodit = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'broker', path: '/trip/addtrip/broker/newbroker' },
                    { label: 'commodity', path: '/trip/addtrip/commodity', active: true },
                    { label: 'pickup', path: '/trip/addtrip/pickup' },
                    { label: 'delivery', path: '/trip/addtrip/delivery' },
                    { label: 'submit', path: '/trip/addtrip/submit' }
                ]}
                title={'COMMODITY'}
            />
            <Row>
                <Col></Col>
                <Col md={7}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="load">CLIENT LOAD</Form.Label>
                                <Form.Control type="text" name="load" id="load" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="loadedmiles">LOADED MILES</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="loadedmiles"
                                    id="loadedmiles"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="weight">WEIGHT</Form.Label>
                                <Form.Control type="number" name="weight" id="weight" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="width">WIDTH</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="width"
                                    id="width"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3">
                                <Form.Label htmlFor="rate">RATE</Form.Label>
                                <Form.Control type="number" name="rate" id="rate" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="emptymiles">EMPTY MILES</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="emptymiles"
                                    id="emptymiles"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="pieces">PIECES</Form.Label>
                                <Form.Control type="number" name="pieces" id="pieces" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="height">HEIGHT</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="height"
                                    id="height"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3">
                                <Form.Label htmlFor="paymethod">PAYMENT METHOD</Form.Label>
                                <Form.Control type="text" name="paymethod" id="paymethod" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="treller">TRELLER</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="treller"
                                    id="treller"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor=""></Form.Label>
                                <Form.Control type="text" name="" id="" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="examplePassword2">LENGTH</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="length"
                                    id="length"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-0">
                                <Form.Label htmlFor="description">description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    id='description'
                                    placeholder="Leave a comment here"
                                    style={{ height: '200px' }}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>RATE COMFRMATION</Form.Label>

                                <FileUploader
                                    onFileUpload={(files) => {
                                        console.log(files);
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className='text-center'>
                        <ButtonGroup>
                            <Link to="/trip" className="btn btn-danger">
                                <i className='mdi mdi-arrow-left'></i>
                                BACK
                            </Link>
                            <Link to="/trip/addtrip/pickup" className="btn btn-success">
                                NEXT
                                <i className='mdi mdi-arrow-right'></i>
                            </Link>
                        </ButtonGroup>
                    </div>

                </Col>
                <Col></Col>
            </Row>
        </>
    )
}

export default Commodit;