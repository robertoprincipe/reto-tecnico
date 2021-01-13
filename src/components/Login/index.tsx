import React, { useState } from "react";
import './Login.scss';
import Login from "./Login";
import Add from "./Add";
import Tipo from "./Tipo";
import Thanks from "./Thanks";

const Cotizador = () => {
    const [paso, setPaso] = useState(0);

    const onGoStep = (p: any) => {
        setPaso(p);
    }

    const renderSteps = (step: any) => {
        if (step === 0) {
            return (
                <Login
                    onGoStep={onGoStep}
                />
            );
        } else if (step === 1) {
            return (
                <Add
                    onGoStep={onGoStep}
                />
            );
        } else if (step === 2) {
            return (
                <Tipo
                    onGoStep={onGoStep}
                />
            );
        } else if (step === 3) {
            return (
                <Thanks
                    onGoStep={onGoStep}
                />
            );
        }
    };

    return (
        <>
            {renderSteps(paso)}
        </>
    );
}

export default Cotizador;