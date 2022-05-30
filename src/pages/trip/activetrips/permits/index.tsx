import { Row, Col, Card, Tab, Nav, Button} from 'react-bootstrap';
import { PageTitle, FormInput, FileUploader } from 'components';
import classNames from 'classnames';
import Chat from '../../../../components/Chat';
import Notes from '../../../../components/Notes';
import ActiveTripsNavbar from '../../../../components/ActiveTripsNavbar';

const Permits = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'pages', path: '/pages' },
                    { label: 'trip', path: '/pages/trip' },
                    { label: 'activetrips', path: '/pages/trip/activetrips' },
                    { label: 'permits', path: '/pages/trip/activetrips/permits', active: true },
                ]}
                title={'Permits'}
            />    
            <ActiveTripsNavbar eventKey="4"/>

            <Row>
                <Col xl={8} lg={7}>
                    <Card className="d-block">
                        <Card.Header>
                            <div className="button-list">
                                <Button variant="primary">UTAH <i className="dripicons-question"></i></Button>
                                <Button variant="primary">DHIO <i className=" dripicons-menu"></i></Button>
                                <Button variant="primary">ADD NEW <i className=" dripicons-plus"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col sm = {4}>
                                    <h4>DRIVER</h4>
                                    <p>NAME: </p>
                                    <p>CDL #: </p>
                                    <p>PHONE: </p>
                                    <p>EMAIL: </p>
                                    <Button variant="primary">CHAT</Button>
                                </Col>
                                <Col sm = {4}>
                                    <h4>TRUCK # 919</h4>
                                    <p>MAKE: </p>
                                    <p>MODEL: </p>
                                    <p>YEAR: </p>
                                    <p>PLATE: </p>
                                    <p>STATE: </p>
                                    <p>VIN: </p>
                                </Col>
                                <Col sm = {4}>
                                    <h4>TRAILER # 351</h4>
                                    <p>MAKE: </p>
                                    <p>MODEL: </p>
                                    <p>YEAR: </p>
                                    <p>PLATE: </p>
                                    <p>STATE: </p>
                                    <p>VIN: </p>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col sm={4}>
                                    <FormInput
                                        label="VALID FROM"
                                        type="text"
                                        name="validFrom"
                                        placeholder="VALID FROM"
                                        containerClass={'mb-3'}
                                    />
                                    <FormInput
                                        label="VALID FROM"
                                        type="text"
                                        name="validFrom"
                                        placeholder="VALID FROM"
                                        containerClass={'mb-3'}
                                    />
                                    <FormInput
                                        label="VALID FROM"
                                        type="text"
                                        name="validFrom"
                                        placeholder="VALID FROM"
                                        containerClass={'mb-3'}
                                    />
                                </Col>
                                <Col sm={4}>
                                    <FormInput
                                        label="VALID TO"
                                        type="text"
                                        name="validTo"
                                        placeholder="VALID TO"
                                        containerClass={'mb-3'}
                                    />
                                    <FormInput
                                        label="ESCORT"
                                        type="text"
                                        name="escort"
                                        placeholder="ESCORT"
                                        containerClass={'mb-3'}
                                    />
                                    <FormInput
                                        label="GOOGLE ROUTE"
                                        type="text"
                                        name="googleRoute"
                                        placeholder="GOOGLE ROUTE"
                                        containerClass={'mb-3'}
                                    />
                                </Col>
                                <Col sm={4}>
                                    <FormInput
                                        label="STATE"
                                        type="text"
                                        name="state"
                                        placeholder="STATE"
                                        containerClass={'mb-3'}
                                    />
                                    <FileUploader
                                        onFileUpload={(files) => {
                                            console.log(files);
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row class="col-md-12 text-center" style={{display: 'flex', justifyContent: 'center'}}>
                                <Button variant="primary" style ={{width: '100px'}}>ADD</Button>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={4} lg={5}>
                    <Tab.Container defaultActiveKey="timeline">
                        <Card>
                            <Card.Body>
                                <Nav as="ul" variant="pills" className="nav nav-pills bg-nav-pills nav-justified mb-3">
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="chat" className=" rounded-0">
                                            CHAT
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="notes" className=" rounded-0">
                                            NOTES
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="chat">
                                        <Chat/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="notes">
                                        <Notes />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Card>
                    </Tab.Container>
                </Col>
            </Row>
        </>
    )
};

export default Permits;