import React, { Component } from 'react';
import { Row, Col, Accordion, Card } from 'react-bootstrap';
import CarPanterService from '../../../services/carpainter/carPanterService';
import ConstructionService from '../../../services/construction/ConstructionService';
import ElectricianService from '../../../services/electrician/electricalService';
import HomeCleaningService from '../../../services/homecleaning/homeCleaningService';
import HvacService from '../../../services/HVacTechnician/HvtechnicianService';
import PainterService from '../../../services/painter/painterService';
import PlumberService from '../../../services/plumber/plumberService';
import ServiceGraph from '../../graphs/serviceGraph';
import '../Reports.css';
class ServiceReport extends Component {
    render() {
        return (
            <div className='report'>
                <Row>
                    <Col xs={12} lg={12}>
                    <br /><br />
                        <h1>Service Report</h1><br />
                        <Row>
                            <Col xs={12} lg={{ span: 10, offset: 1 }}><br />
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle className='serviceCollapse' eventKey="0" as={Card.Header}>
                                        CarPanter Services<i class="fas fa-angle-double-down collapseIcon"></i>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <CarPanterService />
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle className='serviceCollapse' eventKey="1" as={Card.Header}>
                                        Construction Services<i class="fas fa-angle-double-down collapseIcon"></i>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <ConstructionService />
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle className='serviceCollapse' eventKey="2" as={Card.Header}>
                                        Electricial Services<i class="fas fa-angle-double-down collapseIcon"></i>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <ElectricianService />
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle className='serviceCollapse' eventKey="3" as={Card.Header}>
                                        HomeCleaning Services <i class="fas fa-angle-double-down collapseIcon"></i>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <HomeCleaningService />
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle className='serviceCollapse' eventKey="4" as={Card.Header}>
                                            HVAC, A/C Service & Gas Refilling Services<i class="fas fa-angle-double-down collapseIcon"></i>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <HvacService />
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle className='serviceCollapse' eventKey="5" as={Card.Header}>
                                        Painter Service <i class="fas fa-angle-double-down collapseIcon"></i>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="5">
                                            <PainterService />
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle className='serviceCollapse' eventKey="6" as={Card.Header}>
                                        Plumber Service <i class="fas fa-angle-double-down collapseIcon"></i>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="6">
                                            <PlumberService />
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row><br /><br />
                    <ServiceGraph />
                    </Col>
                </Row>
            </div>
        );
    }
}
export default ServiceReport;

