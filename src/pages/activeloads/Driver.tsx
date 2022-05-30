import { Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/logo_sm_dark.png';

const Driver = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-3">Driver Information</h4>

                <hr />

                <div className="text-start">
                    <p className="text-muted">
                        <strong>Full Name :</strong> <span className="ms-2">Michael A. Franklin</span>
                    </p>

                    <p className="text-muted">
                        <strong>TRUCK :</strong>
                        <span className="ms-2">(+12) 123 1234 567</span>
                    </p>
                    <div className='text-center'>
                        <p className="text-muted mb-0">
                            <OverlayTrigger placement="top" overlay={<Tooltip id="overlay-example">LOGO</Tooltip>}>
                                <Link className="d-inline-block text-muted" to="/">
                                    <span>
                                        <img src={Logo} alt="" height="15" />
                                    </span>
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="top" overlay={<Tooltip id="overlay-example">Call</Tooltip>}>
                                <Link className="d-inline-block ms-2 text-muted" to="#">
                                    <i className="mdi mdi-cellphone-sound"></i>
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="top" overlay={<Tooltip id="overlay-example">CHAT</Tooltip>}>
                                <Link className="d-inline-block ms-2 text-muted" to="#">
                                    <i className="mdi mdi-chat-outline"></i>
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="top" overlay={<Tooltip id="overlay-example">ADD NOTE</Tooltip>}>
                                <Link className="d-inline-block ms-2 text-muted" to="#">
                                    <i className="mdi mdi-note-multiple-outline"></i>
                                </Link>
                            </OverlayTrigger>
                        </p>
                        <div className="button-list mt-3">
                            <Link to="#" className="btn btn-primary btn-sm mr-1">
                                <i className="mdi mdi-heart me-1"></i> <span>Send Offer</span>
                            </Link>
                            <Link to="/trip" className="btn btn-warning btn-sm">
                                <i className="mdi mdi-rocket me-1"></i> <span>Add trip</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Driver;
