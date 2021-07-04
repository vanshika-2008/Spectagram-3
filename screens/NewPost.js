import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";
import AppLoading from "expo-app-loading";
import { color } from "react-native-reanimated";

export default class CreatePost extends Component {
constructor(){
    super();
   this.state ={
       previewImage : 'image_1',
       dropDownHeight : 40
   }
       
}
    render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      let preview_images = {
        image_1: require('../assets/story_image_1.png'),
        image_2: require('../assets/story_image_2.png'),
        image_3: require('../assets/story_image_3.png'),
        image_4: require('../assets/story_image_4.png'),
        image_5: require('../assets/story_image_5.png'),
      };
        return (
            <View style = {styles.container}>
                <SafeAreaView style = {StyleSheet.droidSafeArea} />
                    <View style = {styles.appTitle}>
                        <View style = {styles.appIcon}>
                            <Image 
                            source = {require('../assets/logo.png')}
                            style = {styles.iconImage}
                            />
                        </View>
                    <View style = {styles.appTitleTextContainer}>
                      <Text style = {styles.appTitleText}>
                            New Post
                      </Text>
                    </View>
                   <View style = {styles.fieldContainer}>
                    <ScrollView>
                        <Image 
                        source = {preview_images[this.state.previewImage]}
                        style = {styles.previewImage}
                        />
                        <View style = {{height : RFValue(this.state.dropDownHeight)}}>
                        <DropDownPicker
                  items={[
                    { label: 'Image 1', value: 'image_1' },
                    { label: 'Image 2', value: 'image_2' },
                    { label: 'Image 3', value: 'image_3' },
                    { label: 'Image 4', value: 'image_4' },
                    { label: 'Image 5', value: 'image_5' },
                  ]}
                  defaultValue={this.state.previewImage}
                  containerStyle={{
                    height: 40,
                    borderRadius: 20,
                    marginBottom: 10,
                  }}
                  onOpen={() => {
                    this.setState({ dropdownHeight: 170 });
                  }}
                  onClose={() => {
                    this.setState({ dropdownHeight: 40 });
                  }}
                  style={{ backgroundColor: 'transparent' }}
                  itemStyle={{
                    justifyContent: 'flex-start',
                  }}
                  dropDownStyle={{
                    backgroundColor: '#2a2a2a'
                  }}
                  labelStyle={
                    color = 'white'
                  }
                  arrowStyle={
                   color = 'white'
                  }
                  onChangeItem={(item) =>
                    this.setState({
                      previewImage: item.value,
                    })
                  }
                />   
                        </View>
                     <TextInput 
                        style = {styles.inputFont}
                        onChangeText = {caption = ()=> this.setState({
                            caption : 150
                        })}
                        placeholder = {'Caption'}
                        placeholderTextColor = "white"
                        />
                    </ScrollView>
                 </View>
                 <View style = {{flex : 0.08}}/>
                    </View>
               
            </View>
        )
    }
}

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#15193c',
      },
      droidSafeArea: {
        marginTop:
          Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
      },
      appTitle: {
        flex: 0.07,
        flexDirection: 'row',
      },
      appIcon: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
      },
      iconImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      },
      appTitleTextContainer: {
        flex: 0.7,
        justifyContent: 'center',
      },
      appTitleText: {
        color: 'white',
        fontSize: RFValue(28),
        fontFamily: 'Bubblegum-Sans',
      },
      fieldsContainer: {
        flex: 0.85,
      },
      previewImage: {
        width: '93%',
        height: RFValue(250),
        alignSelf: 'center',
        borderRadius: RFValue(10),
        marginVertical: RFValue(10),
        resizeMode: 'contain',
      },
      inputFont: {
        height: RFValue(40),
        borderColor: 'white',
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        paddingLeft: RFValue(10),
        color: 'white',
        fontFamily: 'Bubblegum-Sans',
      },
      inputFontExtra: {
        marginTop: RFValue(15),
      },
      inputTextBig: {
        textAlignVertical: 'top',
        padding: RFValue(5),
      },
      dropDownLabel: {
        color: 'white',
        fontFamily: 'Bubblegum-Sans',
      },
      
      
      
           
})