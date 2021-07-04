import React, { Component } from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import { FlatList } from 'react-native';

export default class Feed extends Component {
    render() {
        return (
           <View style = {styles.container}>
               <SafeAreaView style = {styles.droidSafeArea}/>
               <View style = {styles.appTitle}>
               <View style = {styles.appIcon}>
                   <Image  
                   source = {require('../assets/logo.png')}
                   style = {styles.iconImage}
                   />
                   <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Spectagram</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={stories}
              renderItem={this.renderItem}
            />
          </View>
          <View style={{ flex: 0.08 }} />
        </View>
       </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row",
    },
    appIcon: {
      flex: 0.2,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    cardContainer: {
      flex: 0.85
    }
  });
  