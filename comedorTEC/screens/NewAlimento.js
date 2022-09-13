import React from "react";
import { View, Text, TextInput,StyleSheet } from "react-native";

import Layout from "../components/Layout";
const NewAlimento = () => {
    return (
        <Layout>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
            />
            <TextInput
                style={styles.input}
                placeholder="Precio"
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    input: {
        width:'90%',
        marginBottom: 7,
        borderWidth:1,
        fontSize: 16,
        height:35,
        padding:4,
        textAlign: 'center',
        borderRadius:5
        
    }
})
export default NewAlimento;