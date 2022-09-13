import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Layout = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        padding: 20,
        flex: 1,
        alignItems: 'center',
    }
})

export default Layout
