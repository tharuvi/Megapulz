import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import dashbord from './dashbicons';

class Flatlistitem extends Component{

  render() {
    return(
      <View 
          style={ styles.container}     
      >
      < Pressable onPress={() => Alert.alert('edit')}>
      <Image source={{uri:this.props.item.imageUrl}} style={styles.image}></Image>
        
      <View style={{  }}> 
      <Text  style={{marginLeft:35, marginTop:5}}>{this.props.item.pagename }</Text>
      </View>
      </Pressable>



      </View>
      
    );
  }
}



export class dash extends Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: 20}}>
        <FlatList 
          keyExtractor = {(item) => item.id}
          numColumns={2}
          data={dashbord}
          renderItem={({item, index}) =>{
          <Pressable
        //   onPress={() => 
        //   if(item.id == 1){
            
        //   }
        //   }
          ></Pressable>
          return(<Flatlistitem item={item} index={index}></Flatlistitem>);
          }}
        />       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column', 
    justifyContent:'space-between',
    width: 250,
    height: 230,
    textAlign:'center',
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

  },

  image: {
    width: 100, 
    height: 100, 
    margin: 25,

  },
  item: {
      padding:4,
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      marginTop: 8,
      marginHorizontal: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },

    flat:{
      
      flexDirection:'column',
      flex: 1,


    },
    text: {
      color: 'orange',
      fontWeight:'bold'
    }


});

export default dash


