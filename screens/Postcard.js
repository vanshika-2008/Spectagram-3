import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class PostCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.cardContainer}>
                  <View style = {styles.authorContainer}> 
                    </View>
                 </View>
                 <View style = {styles.authorContainer}>
                   <Text style = {styles.storyAuthorText}>
                      {this.props.post.author}
                   </Text>
                   <View>
                     <Image source = {require('../assets/post.jpeg')}
                            style = {styles.postImage}
                     ></Image>
                     </View> 
                   <View style = {styles.captionContainer}>
                      <Text style = {styles.captionText}>
                        {this.props.post.caption}
                      </Text>
                   </View>
                 </View>
                 <View style = {styles.actionContainer}>
                   <View style = {styles.likeButton}>
                      <Ionicons 
                      name = {"heart"}
                      size = {RFValue(30)}
                      color = {"white"}
                      />
                      <Text style = {styles.likeText}>12k</Text>
                   </View>
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  authorContainer : {
    flex : 1,
    flexDirection : 'row'
  },
  postImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  captionContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  captionText: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  descriptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});
