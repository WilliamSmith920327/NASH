import { Row, Col, Card, Nav, Tab } from "react-bootstrap";

const ActiveLoads = () => {
    return (
        <Row>
            <Col xl={3}>
                <Card>
                    <Card.Header className="text-center">DRIVER</Card.Header>
                    <Card.Body  className="text-center">
                        DRIVE <br/>
                        TRUCK 123 <br />
                        TRAILER 185 <br />
                        COMPANY LOGO <br />
                        CALL ICON <br />
                        CHAT ICON <br />
                        ADD NOTE ICON <br />
                        SEND OFFER BT <br />
                        ADD TRIP BT <br />
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={9}>
                <Card>
                    <Tab.Container defaultActiveKey="driver">
                        <Card>
                            <Card.Header>
                                MY LOADS
                            </Card.Header>
                            <Card.Body>
                                <Nav as="ul" variant="pills" className="nav nav-pills bg-nav-pills nav-justified mb-3">
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="driver" className=" rounded-0">
                                            DRIVER
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="status" className=" rounded-0">
                                            STATUS
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="from" className=" rounded-0">
                                            FROM
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="date" className=" rounded-0">
                                            DATE
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="load" className=" rounded-0">
                                            LOAD
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="ddate" className=" rounded-0">
                                            D DATE
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="driver">
                                        driver
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="status">
                                        status
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="from">
                                        from
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="date">
                                        date
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="load">
                                        load
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ddate">
                                        ddate
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Card>
                    </Tab.Container>
                </Card>
                <Card>
                    <Tab.Container defaultActiveKey="driver">
                        <Card>
                            <Card.Header>
                                MY TEAM
                            </Card.Header>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </Tab.Container>
                </Card>
                <Card>
                    <Tab.Container defaultActiveKey="driver">
                        <Card>
                            <Card.Header>
                                RECENT COMPLETED
                            </Card.Header>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </Tab.Container>
                </Card>
            </Col>
        </Row>
    )
}

export default ActiveLoads;