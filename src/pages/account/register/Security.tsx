import { Col, Row, Form, Button } from 'react-bootstrap';

const Security = (previous: any) => {
    return (
        <Row>
            <Col sm={12}>
                <div className="text-center">
                    <h2 className="mt-0">
                        <i className="mdi mdi-check-all"></i>
                    </h2>
                    <h3 className="mt-0">Thank you !</h3>

                    <p className="w-75 mb-2 mx-auto">
                        Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                        dignissim eros at volutpat. In egestas mattis dui. Aliquam
                        mattis dictum aliquet.
                    </p>

                    <div className="mb-3">
                        <Form.Check type="checkbox" className="d-inline-block">
                            <Form.Check.Input type="checkbox" />{' '}
                            <Form.Check.Label>
                                I agree with the Terms and Conditions
                            </Form.Check.Label>
                        </Form.Check>
                    </div>
                </div>
            </Col>

            <Col sm={12}>
                <ul className="list-inline wizard mb-0">
                    <li className="previous list-inline-item">
                        <Button onClick={previous} variant="info">
                            CODE
                        </Button>
                    </li>

                    <li className="next list-inline-item float-end">
                        <Button variant="success">FINISH</Button>
                    </li>
                </ul>
            </Col>
        </Row>
    )
}

export default Security;
