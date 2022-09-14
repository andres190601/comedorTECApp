import React, { useState } from 'react'
import Layout from '../components/Layout'
import AlimentosList from '../components/AlimentosList'

const ModAlimentosScreen = ({navegation,route}) => {


    const [alimento, setAlimento] = useState({

    });
    <Layout>
      <AlimentosList />
    </Layout>
}



export default ModAlimentosScreen;