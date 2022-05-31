import { Row, Col, Card, Nav, Tab } from "react-bootstrap";
import Driver from "./Driver";
import Load from "./Loads";

const ActiveLoads = () => {
    return (
        <>
            {/* <PageTitle
                breadCrumbItems={[
                    { label: 'Apps', path: '/apps/social' },
                    { label: 'Social Feed', path: '/apps/social', active: true },
                ]}
                title={'Social Feed'}
            /> */}
            <Card>
                <Card.Title>
                    <h3 className="text-center text-dark">ACTIVE LOADS</h3>
                </Card.Title>
                <Row>
                    <Col xl={3}>
                        <Driver/>
                    </Col>
                    <Col xl={9}>
                        <Load/>
                        <Tab.Container defaultActiveKey="driver">
                            <Card>
                                <Card.Header>
                                    MY TEAM
                                </Card.Header>
                                <Card.Body>
                                    team content
                                </Card.Body>
                            </Card>
                        </Tab.Container>
                        <Tab.Container defaultActiveKey="driver">
                            <Card>
                                <Card.Header>
                                    RECENT COMPLETED
                                </Card.Header>
                                <Card.Body>
                                    recent complete
                                </Card.Body>
                            </Card>
                        </Tab.Container>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default ActiveLoads;