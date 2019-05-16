import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const DisplayWeather = (props) => {
    // No data yet, so it must still be loading
    if (props.data === null) {
      return <Text>Loading...</Text>
    }
    // Cod is where codes go, so if an error occurred, the value would not be 200 (could be 400, 404, etc.)
    if (props.data.cod !== 200) {
      return <Text>An Error has occurred</Text>
    }
    // If no error and not loading, load/display weather data, grabbing the appropriate data from props
    const { temp } = props.data.main
    const { description } = props.data.weather[0]
    return (
      <View style={styles.container}>
        <Text style={styles.icon}>˚</Text>
        <Text style={styles.temp}>{temp}</Text>
        <Text>{description}</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      position: 'relative',
    },
    temp: {
      fontSize: 40,
      fontWeight: 'bold'
    },
    icon: {
      textAlign: 'right',
      position: 'absolute'
    }
  })

export default DisplayWeather
