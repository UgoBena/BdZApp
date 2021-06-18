import React from "react";
import Unity from "react-native-unity-webgl";

import {View} from "react-native"

class DinoGame extends React.Component {
  render() {
    return (
    <View>
        {console.log()}
        <Unity
        loader="/DinoZe/Build/UnityLoader.js"
            src="/Dinoze/Build/DinoZe.json"
            
        />
    </View>
      
    );
  }
}

export default DinoGame