import { Row, Col, Card, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import {departmentStats} from './data';
import { PageTitle } from 'components';

const MangeTeam = () => {
    // handle compose modal
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Manage team', path: '/manageteam', active: true },
                ]}
                title={'Manage Team'}
            />
            <Card>
                <Card.Title>
                    <h2 className='text-center text-dark'>Manage Team</h2>
                </Card.Title>
                <Row>
                    <Col>
                        <LeftSide />
                    </Col>
                    <Col md={8}>
                        <Row>
                            {departmentStats.map((department, i) => {
                                return(
                                    <Col xxl={6} key={i}>
                                        <Card>
                                            <Card.Body>
                                                <div className="text-center">
                                                    <h4 className="mt-3 my-1">
                                                        {department.name}<br />
                                                        {department.point} POINTS<br />
                                                        {department.leader}<br />
                                                    </h4>
                                                    <hr className="my-3" />
                                                    <ul className="mb-0 list-inline">
                                                        <li className="list-inline-item me-3">
                                                            <p className="mb-0 font-13">{department.dispatch}</p>
                                                            <h5 className="mb-1">Dispatch</h5>
                                                        </li>
                                                        <li className="list-inline-item me-3">
                                                            <p className="mb-0 font-13">{department.assistent}</p>
                                                            <h5 className="mb-1">Assistent</h5>
                                                        </li>
                                                        <li className="list-inline-item me-3">
                                                            <p className="mb-0 font-13">{department.driver}</p>
                                                            <h5 className="mb-1">Driver</h5>
                                                        </li>
                                                        <li className="list-inline-item me-3">
                                                            <p className="mb-0 font-13">{department.score}</p>
                                                            <h5 className="mb-1">Score</h5>
                                                        </li>
                                                    </ul>
                                                    <Row className="mt-3">
                                                        <Col xs={4} className='px-1'>
                                                                <Link to="#" className="btn btn-light w-100">
                                                                    <i className="mdi mdi-message-processing-outline"></i><br/>REPORT
                                                                </Link>
                                                        </Col>
                                                        <Col xs={4} className='px-1'>
                                                                <Link to="#" className="btn btn-light w-100">
                                                                    <i className="mdi mdi-list-status"></i><br/>STATS
                                                                </Link>
                                                        </Col>
                                                        <Col xs={4} className='px-1'>
                                                                <Link to="#" className="btn btn-light w-100">
                                                                    <i className="mdi mdi-application-edit-outline"></i><br/>EDIT
                                                                </Link>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
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
