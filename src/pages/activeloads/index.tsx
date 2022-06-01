import { Row, Col, Card, Nav, Tab } from "react-bootstrap";
import Driver from "./Driver";
import Load from "./Loads";
import Products from './Products';
import MyTeam from './MyTeam';
import RecentCompleted from './RecentCompleted';


const ActiveLoads = () => {
    return (
        <>
            
            <Card>
                <Card.Title>
                    <h3 className="text-center text-dark">ACTIVE LOADS</h3>
                </Card.Title>
                <Row>
                    <Col xl={3}>
                        <Driver/>
                    </Col>
                    <Col xl={9}>
                        <Products/>
                        <MyTeam/>
                        <RecentCompleted/>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default ActiveLoads;