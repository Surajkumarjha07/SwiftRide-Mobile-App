import { Text, StyleSheet } from 'react-native'
import React from 'react'
import MaskedView from '@react-native-masked-view/masked-view'
import LinearGradient from 'react-native-linear-gradient'

export default function Logo() {
  return (
    // <MaskedView maskElement={
      <Text style={styles.logo}>
        SwiftRide
      </Text>
    // }>
    //   <LinearGradient
    //   colors={['#1c1c1e', '#8e8e93']}
    //   start={{ x: 1, y: 1 }}
    //   end={{ x: 1, y: 0 }}
    //   style={styles.gradient}
    //   />
    // </MaskedView>
  )
}

const styles = StyleSheet.create({
    logo: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: "semibold",
        color: "white"
    },

    gradient: {
      width: 200,
      height: 50
    }
})