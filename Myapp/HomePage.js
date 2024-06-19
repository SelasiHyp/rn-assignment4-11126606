import React from 'react';
import { View, Text, StyleSheet, ScrollView,SafeAreaView} from 'react-native';
import { useRoute } from '@react-navigation/native';

const HomePage = () => {
  const route = useRoute();
  const { username, email } = route.params;

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <SafeAreaView style={styles.safeArea}>
    <View style={styles.profile}>
      <Text style={styles.userName}>{username}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
    </SafeAreaView>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  profile: {
    width:254,
    height:55,
    marginLeft:24,
    flex: 1,
    top: 30,
    flexDirection: 'column',
  },
  userName:{
    fontSize:24,
    fontWeight:"700",
    lineHeight:36,
  
  }
});

export default HomePage;
