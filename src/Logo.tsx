import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View>
      <Text style={styles.logo}> RideSwift </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    logo: {
        color: "#48494a",
        fontSize: 40,
        textAlign: "center"
    }
})