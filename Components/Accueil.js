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
        <View style={styles.content_carte}>
          <View>
            <Text style={styles.sous_titleBP}>BIÈRE PRESSION</Text>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>BLONDE DEMI (25cl)</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>3€</Text>
            </View>

            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>BLONDE PINTE (25cl)</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>5.5€</Text>
            </View>

            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>PICON BIÈRE</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>+1€</Text>
            </View>

            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>BIÈRE DU MOMENT DEMI</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>4€</Text>
            </View>

            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>BIÈRE DU MOMENT PINTE</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>8€</Text>
            </View>
          </View>
          <View>
            <Text style={styles.sous_titleBB}>BIÈRE BOUTEILLES</Text>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>CORONA (33cl)</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>4€</Text>
            </View>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>SKOLL (33cl)</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>4€</Text>
            </View>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>CIDRE MORDUE (27.5cl)</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>4€</Text>
            </View>
          </View>

          <View>
            <Text style={styles.sous_titleC}>COCKTAILS (33cl)</Text>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>GET PERRIER</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>8€</Text>
            </View>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>SUZE TONIC</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>5€</Text>
            </View>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>APEROL SPRITZ</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>6€</Text>
            </View>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>CHIEN DE LA C***E</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>6€</Text>
            </View>
            <Text style={styles.description_alcool}>(Planteur, Proscecco, Crème de cassis)</Text>
          </View>
          <View>
            <Text style={styles.sous_titleS}>SOFT (33cl)</Text>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>COCA-COLA</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>2€</Text>
            </View>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>PERRIER</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>2€</Text>
            </View>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>sEVEN UP</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>2€</Text>
            </View>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>SWCHEPPES TONIC</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>2€</Text>
            </View>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>REDBULL</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>2€</Text>
            </View>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>CAFÉ</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>2€</Text>
            </View>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>JUS DE FRUIT</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>2€</Text>
            </View>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>CACOLAC</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>2€</Text>
            </View>
          </View>
          <View>
            <Text style={styles.sous_titleA}>TAPAS</Text>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>PLANCHE BDZ (x1 PORTION)</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>5€</Text>
            </View>
            <Text style={styles.description_tapas}>(Assortiment de fromages et charcutteries)</Text>
          </View>
          <View>
            <Text style={styles.sous_titleA}>VINS</Text>
            <View style={styles.boisson_item}>
              <Text style={styles.name_text}>VIN (16cl)</Text> 
              <View style={styles.price_name_separator}></View> 
              <Text style={styles.price_text}>2€</Text>
            </View>
            <Text style={styles.description_alcool}>(Rouge, rosé)</Text>
          </View>
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
      margin:"auto"
  },
  main_title: {
    fontFamily: 'Courier New',
    fontWeight: "bold",
    fontSize: 35,
    textAlign: 'center'

  },
  content_carte: {
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
    lineHeight: 25,
  },


  boisson_item: {
    flexDirection:"row",
    alignSelf : "stretch",
    alignItems:"flex-end",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },

  name_text: {
    alignSelf : "stretch",
    fontWeight: "bold",
    fontFamily: 'Courier New',
    fontSize: 15,
    
  },
  price_name_separator: {
    flex:30,
    borderBottomWidth :2,
    borderBottomColor: '#000',
  },
  price_text: {
    width:"3em",
    fontWeight: "bold",
    fontFamily: 'Courier New',
    fontSize: 15,
    marginLeft:3
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
