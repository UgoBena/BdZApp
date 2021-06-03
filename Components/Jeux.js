import React from 'react'
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'

class Jeux extends React.Component {

  render() {
    return (
      <ScrollView style={styles.scrollview_container}>
        <View style={styles.container}>
          <View style={styles.content_container}>
            <Text style={styles.main_title}>AMUSE TOI BIEN {"\n"}</Text>
            <Text style={styles.default_text}> Mais attend encore un peu ça arrive.... {"\n"} {"\n"}</Text>
            <Text style={styles.default_text}> Petit indice avec la photo : {"\n"} </Text>
            <Image
              style={styles.image}
              source = {require('../DinoZe.jpg')}
            />
            <Text style={styles.text}> (Si tu trouves le jeu tu gagnes 1 pintes) </Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollview_container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 350,
    marginTop: 10,
  },
main_title: {
  fontFamily: 'Courier New',
  fontWeight: "bold",
  fontSize: 30,
  textAlign: 'center',
  marginTop: 60

},
text: {
  fontFamily: 'Courier New',
  fontSize: 5,
  textAlign: 'center',
  marginTop: 70
},
default_text: {
  fontWeight: "bold",
  fontFamily: 'Courier New',
  color: "#9EA1A5",
  fontSize: 17,
  textAlign: 'center',
  marginTop: 10,
  lineHeight: 22
},
content_container: {
  flex: 1,
},
  })

export default Jeux
