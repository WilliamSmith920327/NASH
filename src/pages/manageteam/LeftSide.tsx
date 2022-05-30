import { Card, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3 text-center">DISPATCH</h4>

                <div className="d-flex align-items-center mb-2">
                    <div className="flex-grow-1">
                        <h5 className="fw-semibold my-0">Tomaslau</h5>
                    </div>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Info</Tooltip>}>
                        <Link to="#" className="text-muted">
                            <i className="mdi mdi-information-outline h4  my-0"></i>
                        </Link>
                    </OverlayTrigger>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <div className="flex-grow-1">
                        <h5 className="fw-semibold my-0">Tomaslau</h5>
                    </div>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Info</Tooltip>}>
                        <Link to="#" className="text-muted">
                            <i className="mdi mdi-information-outline h4  my-0"></i>
                        </Link>
                    </OverlayTrigger>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <div className="flex-grow-1">
                        <h5 className="fw-semibold my-0">Tomaslau</h5>
                    </div>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Info</Tooltip>}>
                        <Link to="#" className="text-muted">
                            <i className="mdi mdi-information-outline h4  my-0"></i>
                        </Link>
                    </OverlayTrigger>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <div className="flex-grow-1">
                        <h5 className="fw-semibold my-0">Tomaslau</h5>
                    </div>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Info</Tooltip>}>
                        <Link to="#" className="text-muted">
                            <i className="mdi mdi-information-outline h4  my-0"></i>
                        </Link>
                    </OverlayTrigger>
                </div>
                <div className="d-grid">
                    <Button className='btn-info'>INVITE</Button>
                </div>
                <hr />
                <h4 className="header-title mb-2 text-center">ASSISTENT</h4>
                <div className="d-flex align-items-center mb-2">
                    <div className="flex-grow-1">
                        <h5 className="fw-semibold my-0">Tomaslau</h5>
                    </div>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Info</Tooltip>}>
                        <Link to="#" className="text-muted">
                            <i className="mdi mdi-information-outline h4  my-0"></i>
                        </Link>
                    </OverlayTrigger>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <div className="flex-grow-1">
                        <h5 className="fw-semibold my-0">Tomaslau</h5>
                    </div>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Info</Tooltip>}>
                        <Link to="#" className="text-muted">
                            <i className="mdi mdi-information-outline h4  my-0"></i>
                        </Link>
                    </OverlayTrigger>
                </div>

                <div className="d-flex align-items-center mb-2">
                    <div className="flex-grow-1">
                        <h5 className="fw-semibold my-0">Tomaslau</h5>
                    </div>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Info</Tooltip>}>
                        <Link to="#" className="text-muted">
                            <i className="mdi mdi-information-outline h4  my-0"></i>
                        </Link>
                    </OverlayTrigger>
                </div>

                <div className="d-flex align-items-center mb-2">
                    <div className="flex-grow-1">
                        <h5 className="fw-semibold my-0">Tomaslau</h5>
                    </div>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Info</Tooltip>}>
                        <Link to="#" className="text-muted">
                            <i className="mdi mdi-information-outline h4  my-0"></i>
                        </Link>
                    </OverlayTrigger>
                </div>

                <div className="d-grid">
                    <Button>INVITE</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default LeftSide;
