/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody, Button } from 'reactstrap';
import Divider from '@material-ui/core/Divider';

import img1 from '../../../assets/images/postulate/icono-postulate.png';
import img2 from '../../../assets/images/postulate/flecha-postulate.png';

const PostulateComponent = () => {
    return (
        <div className="mini-spacer">
            <div className="container-sumate2">
                <Container className="cont1">
                    <Row className="m-t-40">
                        <Col md="12" className="colSumate">
                            <Card className="card-shadow card-sumate1">
                                <CardBody className="card-sumate2">
                                    <Col md="9" className="colSumate">
                                        <Row className="m-t-40 row-sumate">
                                        <h5 className="titulo-sumate">¿Buscas Empleo?</h5>
                                        </Row>
                                        <Row className="m-t-40 row-sumate2">
                                        <a href="/" className="botones-1 hvr-sweep-to-right">Postulate</a>{' '}
                                        </Row>
                                    </Col>
                                    <Col md="3" className="colSumate2">
                                    <Row>
                                        <a href="/" className="img-ho cont-img2"><img src={img1} alt="img" className="img-responsive img-thumbnail img-redirecciones2" width="200" /></a>
                                        </Row>
                                    </Col>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="12" className="colSumate2">
                        <Col md="3"  className="colSumate">
                            <Card className="card-shadow card-sumate">
                                <CardBody className="card-sumate2">
                                    <Row className="m-t-40 row-sumate row-sumatenumero1">
                                    <h5 className="numero-sumate">01</h5>
                                    </Row>
                                    <Row className="m-t-40 row-sumate row-sumatenumero12">
                                    <h6 className="titulo-sumate2">Registrate</h6>{' '}
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                         <Col md="3" className="colSumate3 contenedorLineaimg">
                      
                            {/* <hr className="linea-sumate"/> */}

                      
                        </Col>
                        <Col md="6"  className="colSumateco22">
                            <Card className="card-shadow card-sumate3">
                                <CardBody className="card-sumate2">
                                    <Row className="m-t-40 row-sumate row-sumatenumero">
                                    <h5 className="numero-sumate">02</h5>
                                    </Row>
                                    <Row className="m-t-40 row-sumate row-sumatenumero">
                                    <h6 className="titulo-sumate2">Cargá tu CV</h6>{' '}
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3" className="colSumate3 contenedorLineaimg2">
                      
                             <hr className="linea-sumate2"/>

                
                        </Col>
                        <Col md="6"  className="colSumateco223">
                                    <Card className="card-shadow card-sumate5">
                                        <CardBody className="card-sumate2">
                                            <Row className="m-t-40 row-sumate row-sumatenumero">
                                            <h5 className="numero-sumate">03</h5>
                                            </Row>
                                            <Row className="m-t-40 row-sumate row-sumatenumero">
                                            <h6 className="titulo-sumate2">Te vinculamos</h6>{' '}
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                  
                                <Col md="3" className="colSumate3 contenedorLineaimg2">
                      
                      <hr className="linea-sumate3"/>

         
                 </Col>
                        {/**
                         <Col md="3" className="colSumate3">
                            <Row>
                                <a href="https://capacitaciones.chaco.gob.ar/" className="img-ho "><img src={img2} alt="img" className="img-responsive img-thumbnail img-redirecciones3"  /></a>
                            </Row>
                        </Col>
                        <Col md="3"  className="colSumate">
                            <Card className="card-shadow card-sumate">
                                <CardBody className="card-sumate2">
                                    <Row className="m-t-40 row-sumate">
                                    <h5 className="numero-sumate">02</h5>
                                    </Row>
                                    <Row className="m-t-40 row-sumate">
                                    <h6 className="titulo-sumate2">Te llamamos</h6>{' '}
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3" className="colSumate4">
                            <Row>
                                <a href="https://capacitaciones.chaco.gob.ar/" className="img-ho "><img src={img2} alt="img" className="img-responsive img-thumbnail img-redirecciones3"  /></a>
                            </Row>
                        </Col>
                        <Col md="3"  className="colSumate">
                            <Card className="card-shadow card-sumate">
                                <CardBody className="card-sumate2">
                                    <Row className="m-t-40 row-sumate">
                                    <h5 className="numero-sumate">03</h5>
                                    </Row>
                                    <Row className="m-t-40 row-sumate">
                                    <h6 className="titulo-sumate2">Sumate a los beneficios</h6>{' '}
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>  
                         */}
                        
                        </Col>
                                              
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default PostulateComponent;
