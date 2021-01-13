import React, { useState } from "react";
import './Login.scss';
import { Form, Col, Row, Radio, Button, Collapse } from 'antd';
import { HeartFilled, LeftCircleOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const Tipo = (props: any) => {
    //seteamos plan basico por default
    const plandefault = 'basico';
    const [plan, setPlan] = useState(plandefault);
    //declare form
    const [form] = Form.useForm();

    //funcion para enviar form
    const onSendForm = (values: any) => {
        console.log('Datos enviado: ', values);
        //Boton COMPRAR PLAN
        props.onGoStep(3);
    };

    //arrow funcion calculo que devuelve monto según plan
    const monto = (plan: any) => {
        let valor: string;
        switch (plan) {
            case 'basico':
                valor = "1MM";
                break;
            case 'avanzado':
                valor = "5MM";
                break;
            case 'premium':
                valor = "10MM";
                break;
            case 'full':
                valor = "50MM";
                break;
            default:
                valor = "1MM";
        }
        return valor;
    }

    return (
        <Row gutter={[16, 16]}>
            <Col span={18} offset={3}>
            <div className="navStep"><LeftCircleOutlined onClick={(e: any) => props.onGoStep(1)} /> PASO 2 <span className="de">DE 7</span></div>
                <h1 className="title">Elige <span className="primary">tu protección</span></h1>
                <p>
                    Selecciona tu plan de salud ideal
                    </p>
                <Form
                    form={form}
                    initialValues={{
                        plan: plandefault
                    }}
                    name="tipo"
                    layout="horizontal"
                    onFinish={onSendForm}
                    size="large"
                    scrollToFirstError
                >

                    <Form.Item
                        name="plan"
                        rules={[
                            { required: true, message: 'Seleccione su plan' }
                        ]}
                        className="cplan__wrap"
                    >
                        <Radio.Group onChange={(e: any) => { setPlan(e.target.value) }} value={plan} >
                            <Radio value={"basico"} className="cplan">
                                <p className="cplan__tipo">BÁSICO</p>
                                <p className="cplan__monto"><span>S/</span> 160</p>
                                <p className="cplan__frecuencia">mensual</p>
                            </Radio>
                            <Radio value={"avanzado"} className="cplan">
                                <p className="cplan__tipo">AVANZADO</p>
                                <p className="cplan__monto"><span>S/</span> 200</p>
                                <p className="cplan__frecuencia">mensual</p>
                            </Radio>
                            <Radio value={"premium"} className="cplan">
                                <p className="cplan__tipo">PREMIUM</p>
                                <p className="cplan__monto"><span>S/</span> 250</p>
                                <p className="cplan__frecuencia">mensual</p>
                            </Radio>
                            <Radio value={"full"} className="cplan">
                                <p className="cplan__tipo">FULL</p>
                                <p className="cplan__monto"><span>S/</span> 500</p>
                                <p className="cplan__frecuencia">mensual</p>
                            </Radio>
                        </Radio.Group>
                    </Form.Item>

                    <div className="detail">
                        <h2 className="subtitle center">Cuenta con estos beneficios:</h2>

                        <div className="resume">
                            <p className="resume__tipo">Cobertura máxima</p>
                            <p className="resume__monto">S/ {monto(plan)}</p>
                            <p className="resume__nivel">PLAN {plan}</p>
                        </div>

                        <div className="feature">
                            <p className="feature__item active"><HeartFilled /> <span className="big">Lima</span> (zona de cobertura)</p>
                            <p className="feature__item active"><HeartFilled /> <span className="big">+30 clínicas</span> (en red afiliada)</p>
                            <p className={"feature__item " + (plan === 'avanzado' || plan === 'premium' || plan === 'full' ? 'active' : '')}><HeartFilled /> Médico a domicilio</p>
                            <p className={"feature__item " + (plan === 'avanzado' || plan === 'premium' || plan === 'full' ? 'active' : '')}><HeartFilled /> Chequeos preventivos</p>
                            <p className={"feature__item " + (plan === 'premium' || plan === 'full' ? 'active' : '')}><HeartFilled /> Reembolso nacional</p>
                            <p className={"feature__item " + (plan === 'full' ? 'active' : '')}><HeartFilled /> Reembolso internacional</p>
                        </div>
                    </div>

                    <h2 className="gray">Revisa nuestros</h2>
                    <p className="subtitle primary">servicios y exclusiones</p>

                    <Collapse accordion expandIconPosition="right">
                        <Panel header="Servicios blindados" key="1">
                            <p>texto de ejemplo</p>
                        </Panel>
                        <Panel header="Exclusiones" key="2">
                            <p>texto de ejemplo</p>
                        </Panel>
                    </Collapse>

                    <Form.Item className="botonera">
                        <Button type="default">ENVIAR COTIZACIÓN POR CORREO</Button>
                        <Button type="primary" htmlType="submit">COMPRAR PLAN</Button>
                    </Form.Item>

                </Form>
            </Col>
        </Row>
    );
}

export default Tipo;