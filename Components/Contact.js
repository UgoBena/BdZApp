import React from 'react'
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'

class Contact extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content_container}>
          <Text style={styles.main_title}>CONTACTEZ-NOUS</Text>
          <Text style={styles.sous_title}>TROUVEZ NOUS À CETTE ADRESSE</Text>
          <Text style={styles.default_text}>
          Bar des zés{"\n"}
          49 rue pargaminieres,{"\n"}
          31000 Toulouse
          </Text>
          <Text style={styles.sous_title}>CONTACT</Text>
          <Text style={styles.default_text}>
          Instagram : <Text style={styles.lien} onPress={() => Linking.openURL('https://www.instagram.com/bdz_bardeszes/?hl=fr')}>@bdz_bardeszes{"\n"}</Text>
          Messenger : <Text style={styles.lien} onPress={() => Linking.openURL('https://www.facebook.com/BARDESZES')}>Bar des Zés{"\n"}</Text>
          Site internet : <Text style={styles.lien} onPress={() => Linking.openURL('https://bardeszes.com')}>BardesZés.com {"\n"}</Text>
          Mail : <Text style={styles.lien} onPress={() => Linking.openURL('bardeszes@gmail.com')}>bardeszes@gmail.com{"\n"}</Text>
          </Text>
          <Text style={styles.sous_title}>OÙ NOUS TROUVER</Text>
          <Text style={styles.default_text}>METTRE MAP SI POSSIBLE</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content_container: {
    flex: 1,
  },
  main_title: {
    fontFamily: 'Courier New',
    fontWeight: "bold",
    fontSize: 30,
    textAlign: 'center',
    marginTop: 60

  },
  sous_title: {
    textDecorationLine: 'underline',
    fontFamily: 'Courier New',
    fontWeight: "bold",
    fontSize: 23,
    textAlign: 'center',
    marginTop: 50

  },
  lien: {
    fontFamily: 'Courier New',
    color: "#006DFF",
    textDecorationLine: 'underline',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22
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
  })

export default Contact
