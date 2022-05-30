import { Col, Row, Button } from 'react-bootstrap';
import { FileUploader } from 'components';
import { FormInput } from 'components';

const General = (props:any) => {
    const { errors, register } = props;
    return (
        <Row>
            <Col lg={3} className="mb-3">
                <h4 className="header-title mb-3">Dropzone File Upload</h4>
                <FileUploader
                    onFileUpload={(files) => {
                        console.log(files);
                    }}
                />
            </Col>
            <Col lg={9}>
                <Row className='mb-3'>
                    <Col sm={6}>
                        <FormInput
                            label="first name"
                            type="name"
                            name="firstName"
                            containerClass={'mb-3'}
                            register={register}
                            errors={errors}
                        />
                        <FormInput
                            label="middle name"
                            type="name"
                            name="middleName"
                            containerClass={'mb-3'}
                            register={register}
                            errors={errors}
                        />
                        <FormInput
                            label="last name"
                            type="name"
                            name="lastName"
                            containerClass={'mb-3'}
                            register={register}
                            errors={errors}
                        />
                    </Col>
                    <Col  sm={6}>
                        <FormInput
                            label="phone number"
                            type="number"
                            name="PhoneNumber"
                            containerClass={'mb-3'}
                            register={register}
                            errors={errors}
                        />
                        <FormInput
                            label="country"
                            type="text"
                            name="country"
                            containerClass={'mb-3'}
                            register={register}
                            errors={errors}
                        />
                        <FormInput
                            label="birthday"
                            type="date"
                            name="birthday"
                            containerClass={'mb-3'}
                            register={register}
                            errors={errors}
                        />
                        <ul className="list-inline wizard mb-0">
                            <li className="next list-inline-item float-end">
                                <Button variant="success" type="submit">
                                    Next
                                </Button>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

export default General;