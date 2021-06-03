import React from 'react'
import { StyleSheet, Text, View, Linking, TouchableOpacity, Image, ScrollView } from 'react-native'

class Contact extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
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
          <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps/place/49+Rue+Pargaminières,+31000+Toulouse/@43.6043238,1.4364856,17z/data=!3m1!4b1!4m5!3m4!1s0x12aebb63ff5df949:0xacfb957de45d8f89!8m2!3d43.6043238!4d1.4386743')}>
            <View>
              <Image
                style={styles.image}
                source = {require('../MAP.png')}
              />
            </View>
          </TouchableOpacity>
          <Text> {"\n"} </Text>
        </View>
      </ScrollView>
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
  image: {
      width: 300,
      height: 200,
      marginTop: 15,
      margin:'auto'
  },
  })

export default Contact
