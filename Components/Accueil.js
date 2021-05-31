import React from 'react'
import { StyleSheet, Text, View, ScrollView,Image } from 'react-native'

class Accueil extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollview_container}>
        <Image
          style={styles.image}
          source = {require('../BDZ.png')}
        />
        <Text style={styles.intro}>Le bar des Zés accueille tous les amoureux de l'apéritif dans une ambiance de proximité et d'élégance hors norme. </Text>
        <View style={styles.content_container}>
              <Text style={styles.main_title}>LA CARTE</Text>
        </View>
        <View style={styles.content_pression}>
          <Text style={styles.sous_titleBP}>BIÈRE PRESSION</Text>
          <Text style={styles.default_text}>
          BLONDE DEMI (25cl)_____________3€{"\n"}
          BLONDE PINTE (50cl)____________5.50€{"\n"}
          (PICON BIÈRE + 1 €){"\n"}
          BIÈRE DU MOMENT DEMI (25cl)____4€{"\n"}
          BIÈRE DU MOMENT (50cl)_________8€
          </Text>
          <Text style={styles.sous_titleBB}>BIÈRE BOUTEILLES</Text>
          <Text style={styles.default_text}>
          CORONA (33cl)____________________4€{"\n"}
          SKOLL (33cl)_____________________4€{"\n"}
          CIDRE MORDUE (27.5cl)____________4€
          </Text>
          <Text style={styles.sous_titleC}>COCKTAILS</Text>
          <Text style={styles.default_text}>
          GET PERRIER (33cl)_______________5€{"\n"}
          SUZE TONIC (33cl)________________5€{"\n"}
          APEROL SPRITZ (33cl)_____________6€{"\n"}
          CHIEN DE LA C***E (33cl)_________6€{"\n"}
          <Text style={styles.description_alcool}>(Planteur, Proscecco, Crème de cassis)</Text>
          </Text>

          <Text style={styles.sous_titleS}>SOFT (33cl)</Text>
          <Text style={styles.default_text}>
          COCA-COLA _______________________2€{"\n"}
          PERRIER _________________________2€{"\n"}
          SEVEN UP ________________________2€{"\n"}
          SCHWEPPES TONIC _________________2€{"\n"}
          REDBULL _________________________2€{"\n"}
          CAFÉ ____________________________2€{"\n"}
          JUS DE FRUIT ____________________2€{"\n"}
          CACOLAC _________________________2€{"\n"}
          </Text>
          <Text style={styles.sous_titleA}>TAPAS</Text>
          <Text style={styles.default_text}>
          PLANCHE BDZ (X 1 PORTION) _______5€{"\n"}
          <Text style={styles.description_tapas}>(Assortiment de fromages et charcutteries)</Text>
          </Text>
          <Text style={styles.sous_titleV}>VINS</Text>
          <Text style={styles.default_text}>
          VIN _____________________________2€{"\n"}
          </Text>
        </View>
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  intro: {
    fontWeight: "bold",
    fontFamily: 'Courier New',
    color: "#9EA1A5",
    fontSize: 18,
    textAlign: 'center',
  },
  scrollview_container: {
    flex: 1,
    backgroundColor: "white"
  },
  image: {
      width: 400,
      height: 400,
      marginLeft: -15
  },
  main_title: {
    fontFamily: 'Courier New',
    fontWeight: "bold",
    fontSize: 35,
    textAlign: 'center'

  },
  content_pression: {
    flex:2
  },
  sous_titleBP: {
    fontFamily: 'Courier New',
    fontWeight: "bold",
    fontSize: 25,
    color: "#0663DA",
    textDecorationLine: 'underline',
    marginTop: 35,
    textAlign: 'center'
  },
  sous_titleBB: {
    fontFamily: 'Courier New',
    fontWeight: "bold",
    fontSize: 25,
    color: "#000000",
    textDecorationLine: 'underline',
    marginTop: 40,
    textAlign: 'center'
  },
  sous_titleC: {
    fontFamily: 'Courier New',
    fontWeight: "bold",
    fontSize: 25,
    color: "#FF0000",
    textDecorationLine: 'underline',
    marginTop: 40,
    textAlign: 'center'
  },
  sous_titleS: {
    fontFamily: 'Courier New',
    fontWeight: "bold",
    fontSize: 25,
    color: "#0663DA",
    textDecorationLine: 'underline',
    marginTop: 40,
    textAlign: 'center'
  },
  sous_titleA: {
    fontFamily: 'Courier New',
    fontWeight: "bold",
    fontSize: 25,
    color: "#000000",
    textDecorationLine: 'underline',
    marginTop: 40,
    textAlign: 'center'
  },
  sous_titleV: {
    fontFamily: 'Courier New',
    fontWeight: "bold",
    fontSize: 25,
    color: "#FF0000",
    textDecorationLine: 'underline',
    marginTop: 40,
    textAlign: 'center'
  },
  default_text: {
    fontWeight: "bold",
    fontFamily: 'Courier New',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 10,
    lineHeight: 25
  },
  description_alcool: {
    fontFamily: 'Courier New',
    fontSize: 10,
    marginLeft: 20,
    lineHeight: 10

  },
  description_tapas: {
    fontFamily: 'Courier New',
    fontSize: 10,
    marginLeft: 20,
    lineHeight: 15
  },
  content_container: {
        flex: 1,
        margin: 5,
        marginTop: 100
  }
})



export default Accueil
