import { Col, Row, Button } from 'react-bootstrap';
import { FormInput } from 'components';

const Email = (props:any) => {
    const { errors, register, previous } = props
    return (
        <Row>
            <Col lg={6}>
                <FormInput
                    label="EMAIL ADDRESS"
                    type="text"
                    name="emailAdress"
                    containerClass={'mb-3'}
                    register={register}
                    errors={errors}
                />
                <FormInput
                    label="EMAIL PASSWORD"
                    type="text"
                    name="emailPassword"
                    containerClass={'mb-3'}
                    register={register}
                    errors={errors}
                />
                <FormInput
                    label="RECOVERY EMAIL"
                    type="text"
                    name="recoveryEmail"
                    containerClass={'mb-3'}
                    register={register}
                        errors={errors}
                />
            </Col>
            <Col lg={6}>
            </Col>
            <ul className="list-inline wizard mb-0">
                <li className="previous list-inline-item">
                    <Button onClick={previous} variant="info">
                        Previous
                    </Button>
                </li>
                <li className="next list-inline-item float-end">
                    <Button variant="success" type="submit">
                        Next
                    </Button>
                </li>
            </ul>
        </Row>
    )
};

export default Email;