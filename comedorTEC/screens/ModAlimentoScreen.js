import React, { useState } from 'react'
import Layout from '../components/Layout'
import AlimentosList from '../components/AlimentosList'

const ModAlimentosScreen = ({navegation,route}) => {

    const { control, handleSubmit, formState: {errors}, } = useForm();

    const [alimento, setAlimento] = useState({

    });
    <Layout>
      <AlimentosList />
    </Layout>
}



export default ModAlimentosScreen;