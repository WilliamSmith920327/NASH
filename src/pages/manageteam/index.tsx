import { Row, Col, Card, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const MangeTeam = () => {
    // handle compose modal
    return (
        <>
            <Card>
                <Card.Title>
                    <h2 className='text-center text-dark'>Manage Team</h2>
                </Card.Title>
                <Row>
                    <Col>
                        {/* <LeftSide /> */}
                        <LeftSide />
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col xxl={6}>
                                <Card>
                                    <Card.Body>
                                        <Dropdown align="end" className="float-end">
                                            <Dropdown.Toggle variant="link" className="arrow-none card-drop p-0">
                                                <i className="mdi mdi-dots-horizontal"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>View Profile</Dropdown.Item>
                                                <Dropdown.Item>Project Info</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <div className="text-center">
                                            <h4 className="mt-3 my-1">
                                                DEPARTMENT NAME <br />
                                                15847 POINTS <br />
                                                LEADER NAME <br />
                                            </h4>
                                            <p className="mb-0 text-muted">
                                                <i className="mdi mdi-email-outline me-1"></i>
                                                'client.emailId'
                                            </p>
                                            <hr className="my-3" />
                                            <Row className="mt-3">
                                                <Col xs={3} className='px-1'>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>dispatch</Tooltip>}>
                                                        <Link to="#" className="btn btn-light w-100 btn-rounded">
                                                            <i className="mdi mdi-transfer-right"></i><br/>dis
                                                        </Link>
                                                    </OverlayTrigger>
                                                </Col>
                                                <Col xs={3} className='px-1'>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Call</Tooltip>}>
                                                        <Link to="#" className="btn btn-light w-100 btn-rounded">
                                                            <i className="mdi mdi-assistant"></i><br/>assi
                                                        </Link>
                                                    </OverlayTrigger>
                                                </Col>
                                                <Col xs={3} className='px-1'>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Email</Tooltip>}>
                                                        <Link to="#" className="btn btn-light w-100">
                                                            <i className="mdi mdi-train-car"></i><br/>dirver
                                                        </Link>
                                                    </OverlayTrigger>
                                                </Col>
                                                <Col xs={3} className='px-1'>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Email</Tooltip>}>
                                                        <Link to="#" className="btn btn-light w-100">
                                                            <i className="mdi mdi-email-outline"></i><br/>4.3
                                                        </Link>
                                                    </OverlayTrigger>
                                                </Col>
                                            </Row>
                                            <Row className="mt-3">
                                                <Col xs={4} className='px-1'>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Message</Tooltip>}>
                                                        <Link to="#" className="btn btn-light w-100">
                                                            <i className="mdi mdi-message-processing-outline"></i><br/>REPORT
                                                        </Link>
                                                    </OverlayTrigger>
                                                </Col>
                                                <Col xs={4} className='px-1'>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Call</Tooltip>}>
                                                        <Link to="#" className="btn btn-light w-100">
                                                            <i className="mdi mdi-list-status"></i><br/>STATS
                                                        </Link>
                                                    </OverlayTrigger>
                                                </Col>
                                                <Col xs={4} className='px-1'>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Email</Tooltip>}>
                                                        <Link to="#" className="btn btn-light w-100">
                                                            <i className="mdi mdi-application-edit-outline"></i><br/>EDIT
                                                        </Link>
                                                    </OverlayTrigger>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6}>
                                <Card>
                                    <Card.Body>
                                        <Dropdown align="end" className="float-end">
                                            <Dropdown.Toggle variant="link" className="arrow-none card-drop p-0">
                                                <i className="mdi mdi-dots-horizontal"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>View Profile</Dropdown.Item>
                                                <Dropdown.Item>Project Info</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <div className="text-center">
                                            <h4 className="mt-3 my-1">
                                                DEPARTMENT NAME <br />
                                                15847 POINTS <br />
                                                LEADER NAME <br />
                                            </h4>
                                            <p className="mb-0 text-muted">
                                                <i className="mdi mdi-email-outline me-1"></i>
                                                'client.emailId'
                                            </p>
                                            <hr className="my-3" />
                                            <Row className="mt-3">
                                                <Col xs={3} className='px-1'>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>dispatch</Tooltip>}>
                                                        <Link to="#" className="btn btn-light w-100 btn-rounded">
                                                            <i className="mdi mdi-message-processing-outline"></i><br/>dis
                                                        </Link>
                                                    </OverlayTrigger>
                                                </Col>
                                                <Col xs={3} className='px-1'>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Call</Tooltip>}>
                                                        <Link to="#" className="btn btn-light w-100 btn-rounded">
                                                            <i className="mdi mdi-phone"></i><br/>assi
                                                        </Link>
                                                    </OverlayTrigger>
                                                </Col>
                                                <Col xs={3} className='px-1'>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Email</Tooltip>}>
                                                        <Link to="#" className="btn btn-light w-100">
                                                            <i className="mdi mdi-email-outline"></i><br/>dirver
                                                        </Link>
                                                    </OverlayTrigger>
                                                </Col>
                                                <Col xs={3} className='px-1'>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Email</Tooltip>}>
                                                        <Link to="#" className="btn btn-light w-100">
                                                            <i className="mdi mdi-email-outline"></i><br/>dirver
                                                        </Link>
                                                    </OverlayTrigger>
                                                </Col>
                                            </Row>
                                            <Row className="mt-3">
                                                <Col xs={4} className='px-1'>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Message</Tooltip>}>
                                                        <Link to="#" className="btn btn-light w-100">
                                                            <i className="mdi mdi-message-processing-outline"></i><br/>REPORT
                                                        </Link>
                                                    </OverlayTrigger>
                                                </Col>
                                                <Col xs={4} className='px-1'>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Call</Tooltip>}>
                                                        <Link to="#" className="btn btn-light w-100">
                                                            <i className="mdi mdi-phone"></i><br/>STATS
                                                        </Link>
                                                    </OverlayTrigger>
                                                </Col>
                                                <Col xs={4} className='px-1'>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Email</Tooltip>}>
                                                        <Link to="#" className="btn btn-light w-100">
                                                            <i className="mdi mdi-email-outline"></i><br/>EDIT
                                                        </Link>
                                                    </OverlayTrigger>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <RightSide />
                    </Col>
                </Row>
            </Card>
        </>
    );
};

export default MangeTeam;
