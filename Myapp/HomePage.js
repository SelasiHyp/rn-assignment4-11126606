import React from 'react';
import { View, Text, StyleSheet,FlatList, ScrollView, SafeAreaView, Image,TouchableOpacity,TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FeaturedJobCard from './featuredJobCard';
import PopularJobCard from './popularJobCard';
import facebook from './assets/facebook.png';

const HomePage = () => {
  const route = useRoute();
  const { username, email } = route.params;
    // Example data (replace with actual job data from your API)
    const featuredJobs = [
      {
        title: 'Software Engineer',
        company: 'Facebook',
        salary: '$180,000',
        location: 'Accra, Ghana',
        logo: require('./assets/facebook.png'),
        color: '#3B5998'
      },
      {
        title: 'Product Manager',
        company: 'google',
        salary: '$160,000',
        location: 'Accra, Ghana',
        logo: require('./assets/google.png'),
        color: '#21BA45' 
      },
      {
        title: 'Senior Software Engineer',
        company: 'Facebook',
        salary: '$160,000',
        location: 'Menlo Park, CA',
        logo: require('./assets/facebook.png'),
        color: '#1976D2'
      },
      {
        title: 'Product Designer',
        company: 'Google',
        salary: '$150,000',
        location: 'Mountain View, CA',
        logo: require('./assets/google.png'),
        color: '#4CAF50'
      },
      {
        title: 'iOS Developer',
        company: 'Apple',
        salary: '$155,000',
        location: 'Cupertino, CA',
        logo: require('./assets/vector.png'),
        color: '#673AB7'
      },
      {
        title: 'Marketing Manager',
        company: 'Facebook',
        salary: '$140,000',
        location: 'London, UK',
        logo: require('./assets/facebook.png'),
        color: '#9C27B0'
      },
      {
        title: 'Data Scientist',
        company: 'Google',
        salary: '$145,000',
        location: 'New York, NY',
        logo: require('./assets/google.png'),
        color: '#FF5722'
      },
      {
        title: 'Software Engineer',
        company: 'Apple',
        salary: '$150,000',
        location: 'Austin, TX',
        logo: require('./assets/vector.png'),
        color: '#673AB7'
      },

      // Add more featured jobs as needed
    ];
  
    const popularJobs = [
      {
        title: 'Marketing Specialist',
        company: 'Burger King',
        salary: '$96,000/y',
        location: 'Los Angeles, CA',
        logo: require('./assets/burger.png'),
      },
      {
        title: 'Product manger',
        company: 'Beats',
        salary: '$70,000/y',
        location: 'Chicago, IL',
        logo: require('./assets/beats.png'), 
      },
      {
        title: 'Graphic Designer',
        company: 'Google',
        salary: '$70,000/y',
        location: 'Chicago, IL',
        logo: require('./assets/google.png'), 
      },
      {
        title: 'Software Engineer',
        company: 'Apple Inc.',
        salary: '$140,000',
        location: 'Cupertino, CA',
        logo: require('./assets/vector.png'),
      },
      {
        title: 'Data Analyst',
        company: 'Facebook',
        salary: '$130,000',
        location: 'Menlo Park, CA',
        logo: require('./assets/facebook.png'),
      },
      {
        title: 'UX Designer',
        company: 'Google',
        salary: '$150,000',
        location: 'Mountain View, CA',
        logo: require('./assets/google.png'),
      },
      {
        title: 'Marketing Manager',
        company: 'Burger King',
        salary: '$96,000/y',
        location: 'Los Angeles, CA',
        logo: require('./assets/burger.png'),
      },
      {
        title: 'Audio Engineer',
        company: 'Beats by Dre',
        salary: '$110,000',
        location: 'Santa Monica, CA',
        logo: require('./assets/beats.png'),
      },
      
    ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profileDetails}>
            <View style={styles.textContainer}>
              <Text style={styles.userName}>{username}</Text>
              <Text style={styles.email}>{email}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image style={styles.profileImage} source={require('./assets/Ellipse.png')} />
              <View style={styles.redDot} />
            </View>
          </View>
        </View>
        <View style={styles.searchBarContainer}>
        <TouchableOpacity style={styles.searchBarContainer} activeOpacity={1} onPress={() => {}}>
            <View style={styles.searchBar}>
              <Image
                style={styles.searchGlass}
                source={require('./assets/Search.png')}
              />
              <TextInput
                style={styles.searchPlaceholder}
                placeholder="Search a job and position"
                placeholderTextColor="#95969D"
                onChangeText={(text) => console.log(text)} 
              />
            </View>
          </TouchableOpacity>
          <View style={styles.sortContainer}>
          <Image
            style={styles.sortImage}
            source={require('./assets/filter.5.png')}
          />
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.featuredJobText}>
            <Text style={styles.featuredJob}>Featured Jobs</Text>
            <Text style={styles.all}>Sell all</Text>
          </View>
            <FlatList
              data={featuredJobs}
              horizontal
              renderItem={({ item }) => <FeaturedJobCard job={item} />}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.featuredJobsList}
            />
          </View>


        <View style={styles.featuredJobText}>
          <Text style={styles.featuredJob}>Popular Jobs</Text>
          <Text style={styles.all}>Sell all</Text>
        </View>
        <View style={styles.section}>
            {popularJobs.map((job, index) => (
              <PopularJobCard key={index} job={job} />
            ))}
          </View>
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
    flex: 1,
    marginTop: 30,
    marginLeft: 24,
  },
  profileDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    letterSpacing: -1.0,
    fontWeight: "700",
    lineHeight: 36,
  },
  email: {
    letterSpacing: -1.5,
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 24,
    color: '#AFB0B6',
  },
  imageContainer: {
    position: 'relative',
    width: 54,
    height: 54,
  },
  profileImage: {
    right:20,
    top:10,
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  redDot: {
    position: 'absolute',
    right:22,
    top:12,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#FC1010',
    borderWidth: 3.5,
    borderColor: 'white',
  },
  searchBarContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical: 20,
   paddingLeft:10,
  },
  searchBar:{
    width: 245,
    height: 48,
    backgroundColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    borderRadius:12,
  },
  searchGlass:{
    opacity: 0.4,
    width:20,
    height:20,
    top:2,
    left:2,
    borderColor:'#0D0D26',
    alignItems: 'center',
  },
  searchPlaceholder:{
    fontSize: 15,
    opacity: 0.8,
    fontWeight:'400',
    lineHeight:22.5,
    color:'#95969D',
    top:2,
    left:12,
    letterSpacing:-1,
  },
  sortContainer:{
    marginRight:20,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor:'#E2E2E3',
    width:48,
    height:48,
    justifyContent:'center',
    borderRadius:12,
  },
  sortImage:{
    width:26,
    height: 26,
  },
  featuredJobText:{
    marginTop:30,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  featuredJob:{
    fontSize: 16,
    fontWeight:'600',
    marginLeft:24,
    lineHeight:21,
    letterSpacing:-1,
    color:'#0D0D26',
  },
  all:{
    fontSize: 14,
    fontWeight:'400',
    marginRight:23,
    color:'#95969D',
    lineHeight:17,
  },
  featuredJobsList: {
    paddingLeft: 4, 
  },

});

export default HomePage;
