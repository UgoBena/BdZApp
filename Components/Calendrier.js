import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Calendrier extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Evenements a suivre....</Text>
      </View>
    )
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    }
  })

export default Calendrier
