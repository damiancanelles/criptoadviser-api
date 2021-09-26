import React from 'react';
import LandingNavBar from 'components/Home/landingNavbar';
import LandingFooter from 'components/Home/LandingFooter';
import TiendaHeader from 'components/Tienda/TIendaHeader';
import TiendaBody from 'components/Tienda/TiendaBody';

import { Helmet } from 'react-helmet';

const TiendView = ()=> {
    return (
        <>
            <Helmet>
                <title>Tienda</title>
                <meta name="description" content="Compra desde la comodidad de tu hogar algo nunca visto los mejores productos y los mejores precios." />
            </Helmet>
            <LandingNavBar/>
            <TiendaHeader></TiendaHeader>
            <TiendaBody></TiendaBody>
            <LandingFooter></LandingFooter>
            
            
        </>
    )
}

export default TiendView;
