import React from 'react'
import { StyleSheet, Text, View, ImageBackground,ScrollView,TouchableOpacity, Image } from 'react-native'

class Jeux extends React.Component {



  startDinoGame = () =>{
    this.props.navigation.navigate('DinoGame');
  }

  startRoulette(){
    return;
  }

  render() {
    return (
      <ScrollView style={styles.scrollview_container}>
        <TouchableOpacity style={styles.game_container}
        onPress={() => this.startDinoGame()}>
          <ImageBackground source={require('../DinoZe.jpg')} style={styles.game_bg_image}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.game_title_even}> Jeu du Dinosaure</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.game_container} disabled={true}
        onPress={() => startRoulette()}>
          <ImageBackground source={require('../roulette.jpg')} style={styles.game_bg_image}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.game_title_odd}> Roulette de la Pinte (en developpement)</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollview_container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  game_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  game_bg_image: {
    width:"80%",
    height:"100%",
    resize:"contain"
  },
game_title_even: {
  fontFamily: 'Courier New',
  fontWeight: "bold",
  fontSize: 30,
  textAlign: 'center',
  marginTop: 60,
  color: "#0663DA"
},
game_title_odd: {
  fontFamily: 'Courier New',
  fontWeight: "bold",
  fontSize: 30,
  textAlign: 'center',
  marginTop: 60,
  color: "#d73719"
},
 
default_text: {
  fontWeight: "bold",
  fontFamily: 'Courier New',
  color: "red",
  fontSize: 17,
},
text_container:{
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center'
}
  })

export default Jeux
