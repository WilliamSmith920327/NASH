import { Button, Col, Modal, Row, Form, InputGroup, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useModal } from '../../../../pages/uikit/hooks';
import { PageTitle } from 'components';
import TripOfferModal from '../../TripOfferModal';

const Broker = () => {

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'broker', path: '/trip/addtrip/broker', active: true },
                    { label: 'commodity', path: '/trip/addtrip/commodity' },
                    { label: 'pickup', path: '/trip/addtrip/pickup' },
                    { label: 'delivery', path: '/trip/addtrip/delivery' },
                    { label: 'submit', path: '/trip/addtrip/submit' }
                ]}
                title={'BROKER'}
            />
            <TripOfferModal />
            <Card>
                <Card.Body className="text-center">
                    <h4>MC# OR NAME</h4>
                    <Table className="mb-0" responsive>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>MC</th>
                                <th>SCORE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>name1</td>
                                <td>mc1</td>
                                <td>score1</td>
                            </tr>
                            <tr>
                                <td>name2</td>
                                <td>mc2</td>
                                <td>score2</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Link to="/trip/addtrip/broker/newbroker" className="btn btn-primary mt-4 mb-2 btn-rounded">CREATE NEW</Link>
                </Card.Body>
            </Card>
        </>
    )
};

export default Broker;