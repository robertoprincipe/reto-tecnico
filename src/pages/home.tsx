import React from 'react';
import LayoutWrapper from "../components/_shared/Layout";
import Cotizador from "../components/Login";

class Home extends React.Component<any, any> {

    render() {
        return (
            <>
                <LayoutWrapper>
                    <div className="section">
                        <Cotizador />
                    </div>
                </LayoutWrapper>
            </>
        )
    }

}

export default Home;