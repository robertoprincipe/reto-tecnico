import React, { useEffect, useState } from "react";
import './Login.scss';
import { Form, Input, Col, Row, Radio, DatePicker, Button, Select } from 'antd';
import moment from 'moment';
import 'moment/locale/es';
import locale from 'antd/es/date-picker/locale/es_ES';
import * as dataservice from "../../api/api";
import { LeftCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const Add = (props: any) => {
    const [form] = Form.useForm();
    const [datos, setDatos] = useState([] as any);
    const [sexo, setSexo] = useState();
    const [tiposeguro, setTiposeguro] = useState("1");

    const onChange1 = (e:any) => {
        setSexo(e.target.value);
    };

    const onChange2 = (a:any) => {
        setTiposeguro(a.target.value);
    };

    form.setFieldsValue({
        doc_tipo: localStorage.getItem("doc_tipo") ? localStorage.getItem("doc_tipo") : datos.tipoDocumento,
        doc_nro: localStorage.getItem("doc_nro") ? localStorage.getItem("doc_nro") : datos.numDocumento,
        nombres: localStorage.getItem("nombres") ? localStorage.getItem("nombres") : datos.nombres,
        apellidoPaterno: localStorage.getItem("apellidoPaterno") ? localStorage.getItem("apellidoPaterno") : datos.apellidoPaterno,
        apellidoMaterno: localStorage.getItem("apellidoMaterno") ? localStorage.getItem("apellidoMaterno") : datos.apellidoMaterno,
        fecNacimiento: moment(localStorage.getItem("fecNacimiento")) ? moment(localStorage.getItem("fecNacimiento")) : moment(datos.fecNacimiento),
        sexo: localStorage.getItem("sexo") ? localStorage.getItem("sexo") : datos.sexo,
        a_quien_asegurar: localStorage.getItem("a_quien_asegurar") ? localStorage.getItem("a_quien_asegurar") : "1"
    });

    useEffect(() => {
        dataservice
            .dataUser()
            .then((res: any) => {
                //asigmanos la data del api res
                setDatos(res.data.data.tercero);
                console.log(res.data.data.tercero);
            })
            .catch((err: any) => {
                console.log(err);
            });
    }, []);

    const onSedingForm = (values: any) => {
        console.log('Enviando datos del form ', values);
        //para la prueba usaremos localstore
        localStorage.setItem("doc_tipo", values.doc_tipo);
        localStorage.setItem("doc_nro", values.doc_nro);
        localStorage.setItem("nombres", values.nombres);
        localStorage.setItem("apellidoPaterno", values.apellidoPaterno);
        localStorage.setItem("apellidoMaterno", values.apellidoMaterno);
        localStorage.setItem("fecNacimiento", values.fecNacimiento);
        localStorage.setItem("sexo", values.sexo);
        localStorage.setItem("a_quien_asegurar", values.a_quien_asegurar);
        //Boton CONTINUAR
        props.onGoStep(2);
    };

    return (
        <div className="banner">

            <Row gutter={[16, 16]}>
                <Col span={16} offset={4}>
                    <div className="navStep"><LeftCircleOutlined onClick={(e: any) => props.onGoStep(0)} /> PASO 1 <span className="de">DE 7</span></div>
                    <h1 className="title">Hola <span className="primary">{datos.nombres}</span></h1>
                    <p>
                        Valida que los datos sean correctos.
                    </p>
                    <Form
                        form={form}
                        initialValues={{
                            tipo: 'DNI'
                        }}
                        name="parientes"
                        layout="horizontal"
                        onFinish={onSedingForm}
                        size="large"
                        scrollToFirstError
                    >
                        <h2>Datos personales del titular</h2>
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
                            name="nombres"
                            rules={[
                                { required: true, message: 'Ingrese su nombre' },
                            ]}
                        >
                            <Input style={{ width: '100%' }} placeholder="Nombres" />
                        </Form.Item>


                        <Form.Item
                            name="apellidoPaterno"
                            rules={[
                                { required: true, message: 'Ingrese su apellido paterno' },
                            ]}
                        >
                            <Input style={{ width: '100%' }} placeholder="Apellido paterno" />
                        </Form.Item>


                        <Form.Item
                            name="apellidoMaterno"
                            rules={[
                                { required: true, message: 'Ingrese su apellido materno' },
                            ]}
                        >
                            <Input style={{ width: '100%' }} placeholder="Apellido materno" />
                        </Form.Item>

                        <Form.Item
                            name="fecNacimiento"
                            rules={[
                                { required: true, message: 'Ingrese su cumpleaños' }
                            ]}
                        >
                            <DatePicker style={{ width: '100%' }} size="large" placeholder="Fecha de nacimiento" locale={locale} format={"DD/MM/YYYY"} inputReadOnly={true} />
                        </Form.Item>

                        <h2>Género</h2>
                        <Form.Item
                            name="sexo"
                            rules={[
                                { required: true, message: 'Seleccione su sexo' }
                            ]}
                        >
                            <Radio.Group onChange={onChange1} value={sexo}>
                                <Radio value={"M"}>Masculino</Radio>
                                <Radio value={"F"}>Femenino</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <h2>¿A quién vamos asegurar?</h2>
                        <Form.Item
                            name="a_quien_asegurar"
                            rules={[
                                { required: true, message: 'Seleccione la opción' }
                            ]}
                        >
                            <Radio.Group onChange={onChange2} value={tiposeguro}>
                                <Radio value={"1"}>Solo a mí</Radio>
                                <Radio value={"2"}>A mí y a mi familia</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">CONTINUAR</Button>
                        </Form.Item>

                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Add;