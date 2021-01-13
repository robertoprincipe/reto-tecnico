import React, { useState } from "react";
import './Login.scss';
import { Form, Input, Col, Row, Checkbox, Button, Select, DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/es';
import locale from 'antd/es/date-picker/locale/es_ES';

const { Option } = Select;

const Login = (props: any) => {
    localStorage.removeItem('a_quien_asegurar');
    const [terminos, setTerminos] = useState(false);
    const [politicaenvios, setPoliticaenvios] = useState(false);
    const [form] = Form.useForm();

    const onSendForm = (values: any) => {
        console.log('Enviando datos del form', values);
        //localstorage
        localStorage.setItem("doc_tipo", values.doc_tipo);
        localStorage.setItem("doc_nro", values.doc_nro);
        localStorage.setItem("fecNacimiento", values.fecNacimiento);
        localStorage.setItem("celular", values.celular);
        localStorage.setItem("terminos", values.terminos);
        localStorage.setItem("politicaenvios", values.politicaenvios);
        //BOTON COMENCEMOS
        props.onGoStep(1);
    }

    return (
        <div className="banner">
            <Row gutter={[16, 16]}>
                <Col span={16} offset={4}>
                    <h1 className="title">Obten tu <span className="primary">Seguro ahora</span></h1>
                    <p>Ingresa los datos para comenzar</p>
                    <Form
                        form={form}
                        initialValues={{
                            doc_tipo: localStorage.getItem("doc_tipo") ? localStorage.getItem("doc_tipo") : "1",
                            doc_nro: localStorage.getItem("doc_nro") ? localStorage.getItem("doc_nro") : "",
                            fecNacimiento: localStorage.getItem("fecNacimiento") ? moment(localStorage.getItem("fecNacimiento")) : "",
                            celular: localStorage.getItem("celular") ? localStorage.getItem("celular") : "",
                            terminos: localStorage.getItem("terminos") ? localStorage.getItem("terminos") : false,
                            politicaenvios: localStorage.getItem("politicaenvios") ? localStorage.getItem("politicaenvios") : false
                        }}
                        name="login"
                        layout="horizontal"
                        onFinish={onSendForm}
                        size="large"
                    >

                        <Form.Item>
                            <Input.Group compact>
                                <Form.Item
                                    name="doc_tipo"
                                    noStyle
                                >
                                    <Select style={{ width: '25%' }}>
                                        <Option value="1">DNI</Option>
                                        <Option value="2">Carnet de extranjería</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="doc_nro"
                                    noStyle
                                    rules={[
                                        { required: true, message: 'Ingrese número de documento' }
                                    ]}
                                >
                                    <Input style={{ width: '75%' }} placeholder="Nro de documento" />
                                </Form.Item>
                            </Input.Group>
                        </Form.Item>

                        <Form.Item
                            name="fecNacimiento"
                            rules={[
                                { required: true, message: 'Ingrese su cumpleaños' }
                            ]}
                        >
                            <DatePicker style={{ width: '100%' }} size="large" placeholder="Fecha de nacimiento" locale={locale} format={"DD/MM/YYYY"} inputReadOnly={true} />
                        </Form.Item>

                        <Form.Item
                            name="celular"
                            rules={[
                                { required: true, message: 'Ingrese su celular' }
                            ]}
                        >
                            <Input style={{ width: '100%' }} placeholder="Celular" />
                        </Form.Item>

                        <Form.Item
                            name="terminos"
                            valuePropName="checked"
                            className="mb0"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject('Debe aceptar los términos y condiciones'),
                                },
                            ]}
                        >
                            <Checkbox checked={terminos} onChange={(e: any) => { setTerminos(e.target.checked) }} className="font12">
                                Acepto la <a href="/">política de protección de datos y los terminos y condiciones</a>
                            </Checkbox>
                        </Form.Item>

                        <Form.Item
                            name="politicaenvios"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject('Debe aceptar las políticas de envios'),
                                },
                            ]}
                        >
                            <Checkbox checked={politicaenvios} onChange={(e: any) => { setPoliticaenvios(e.target.checked) }} className="font12">
                                Acepto la <a href="/">política de envio de comunicaciones comerciales</a>
                            </Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" >COMENCEMOS</Button>
                        </Form.Item>

                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Login;