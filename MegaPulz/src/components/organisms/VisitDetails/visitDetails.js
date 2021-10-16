import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

import { 
  SafeAreaView,
  View,
  FlatList, 
  StyleSheet, 
  Text, 
  StatusBar,
  Button,
  Alert 
} 
from 'react-native';


const VisitsLists = () => {

  const [visits, setVisits] = useState([]);
  const [visitValues, setVisitValues] = useState('');

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

 
 /* useEffect(() => {
    getTenantID();
});*/

  useEffect(() => {
     // const visitCases = ;
      //getVisits(visitCases, visitValues);
      getVisits();

    });

    const getTenantID = async () => {
      try {
          const value = await AsyncStorage.getItem('X-tenantID')
          if (value !== null) {
              setVisitValues(value);
              console.log("Tenant ID ", value)
          }
      } catch (e) {
          console.log("Error reading Tenant ID from Async Storage");
      }
  }

  ////api/////
  const getVisits = () => {
    
    axios.get('https://aetc9mrrhb.execute-api.us-east-1.amazonaws.com/TESTING/Visit/2',
    
    {
      headers: {
        'Authorization':'Basic aGlzOmhpczEyMzQ1',
        'X-tenantID' : 'D0001'
      }

    })
    .then(function (response){
     
        console.log(response.data);
        setVisits(response.data);
        
        
    
    })
    .catch(function(error){
      console.log(error.message);
    })
    .finally(function(){
    });
    }

    if(!visits) {
      return null;
    }
  
  //////end api//////
  return (
    <View style = {styles.containerm}>

            <View style = {styles.container}>
            
              <Text style = {styles.title}>Visit overview</Text>
            </View>

          <View style = {styles.container2}>

          <Text style = {styles.item}> Details of Visit {visits.id}</Text>
          <Text style = {styles.item}> Date : {moment(visits.visitDate).format('MM.DD.YYYY')} </Text>
          <Text style = {styles.item}> Complaint : {visits.complaint} </Text>
          <Text style = {styles.item}> Doctor ID : {visits.doctor} </Text>
          <Text style = {styles.item}> Time : {moment(visits.visitDate).format('h:mm:ss a')} </Text>

          </View>

          <View style = {styles.btns}>

          <Button title="Prescription" onPress={() => Alert.alert('Simple Button pressed')} />
          <Button title="Examination" onPress={() => Alert.alert('Simple Button pressed')} />
          <Button title="Visit List" onPress={() => Alert.alert('Simple Button pressed')} />
          </View>

          
          

          </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    
    
    marginHorizontal: 10,
         //marginTop: 24,
         padding: 10,
    marginTop: StatusBar.currentHeight || 0,
  },

  container2: {
    backgroundColor: '#BEEEF3',
    marginHorizontal: 10,
         marginTop: 34,
         padding: 10,
   
  },
  containerm: { 
    
    marginBottom:20,
    height:'100%',


  },
  item: {
    backgroundColor: '#BEEEF3',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:25,
    color: '#4FC9D3'
  },
  btns: {
    marginBottom:30,
    flexDirection: "row",
    
    justifyContent: 'space-around',
    padding:10,
    marginTop:150,

  },
  
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#48B1BD'
  },
});

export default VisitsLists;

/*import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '02/02/2021 - Fever',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '02/02/2021 - Headache',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '02/02/2021 - Cough',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e6767',
    title: '02/02/2021 - backache',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e434343',
    title: '02/02/2021 - Nausea',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e121212',
    title: '02/02/2021 - Cold',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e42223333',
    title: '02/02/2021 - Diarrehea',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e1567765',
    title: '02/02/2021 - Fever',
  },

];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const VisitsLists = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#BEEEF3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25,
  },
  title: {
    fontSize: 20,
    color: '#48B1BD'
  },
});

export default VisitsLists;*/