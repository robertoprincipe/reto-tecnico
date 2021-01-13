import React from "react";
import './Login.scss';
import { Col, Row, Button } from 'antd';
import { clearStorage } from "./../../utils";

const Thanks = (props: any) => {

    const goHome = () => {
        clearStorage();
        props.onGoStep(0);
    }

    return (
        <Row gutter={[16, 16]}>
            <Col span={16} offset={4}>
                <h1 className="title">¡Gracias por <span className="primary">confiar en nosotros!</span></h1>
                <p>
                    Queremos conocer la salud de los asegurados. Un asesor pondrá en contacto contigo en las siguienets 45 horas.
                    </p>
                <Button className="button primary" onClick={(e: any) => goHome()} >IR A SALUD</Button>
            </Col>
        </Row>
    );
}

export default Thanks;