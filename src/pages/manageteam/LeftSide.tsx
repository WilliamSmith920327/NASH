import { Card, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import dispatch from './data';
import { assistent, dispatch } from './data';

const LeftSide = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3 text-center">DISPATCH</h4>
                {
                    dispatch.map((dis, i) => {
                        return (
                            <div className="d-flex align-items-center mb-2" key={i}>
                                <div className="flex-grow-1">
                                    <h5 className="fw-semibold my-0">{dis.name}</h5>
                                </div>
                                <OverlayTrigger placement="top" overlay={<Tooltip>Info</Tooltip>}>
                                    <Link to="#" className="text-muted">
                                        <i className="mdi mdi-information-outline h4  my-0"></i>
                                    </Link>
                                </OverlayTrigger>
                            </div>
                        );
                    })
                }
                <div className="d-grid">
                    <Button variant="info">INVITE</Button>
                </div>

                <hr />
                <h4 className="header-title mb-2 text-center">ASSISTENT</h4>
                {
                    assistent.map((ass, i) => {
                        return (
                            <div className="d-flex align-items-center mb-2" key={i}>
                                <div className="flex-grow-1">
                                    <h5 className="fw-semibold my-0">{ass.name}</h5>
                                </div>
                                <OverlayTrigger placement="top" overlay={<Tooltip>Info</Tooltip>}>
                                    <Link to="#" className="text-muted">
                                        <i className="mdi mdi-information-outline h4  my-0"></i>
                                    </Link>
                                </OverlayTrigger>
                            </div>
                        );
                    })
                }
                <div className="d-grid">
                    <Button>INVITE</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default LeftSide;
