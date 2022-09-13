import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = 'primary' }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container : {
    
    width: '100%',
    padding: 15,
    marginVertical : 7,
    alignItems : 'center',
    borderRadius : 5,
  },
  text : {
    fontWeight: 'bold', 
    fontSize: 12,
    color: 'white',
  },

  container_primary : {
    backgroundColor: '#3B71F3'
  },
  
  container_tertiary : {},

  text_tertiary : {
    color: 'gray',
  },
});

export default CustomButton