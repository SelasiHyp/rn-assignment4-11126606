import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FeaturedJobCard = ({ job }) => {
  return (
    <View style={[styles.card, { backgroundColor: job.color }]}>
      <View style={styles.cardSection}> 
      <View style={styles.logoContainer}>
        <Image source={job.logo} style={styles.logo} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.company}>{job.company}</Text>
      </View>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.salary}>{job.salary}</Text>
        <Text style={styles.location}>{job.location}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 186,
    borderRadius: 12,
    marginRight: 16,
    marginTop:30,
    padding: 12,
  },
  cardSection:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    backgroundColor: 'white',
    width: 46,
    height: 46,
    borderRadius: 12,
  },
  logo: {
    width: 22,
    height: 23,
    borderRadius: 12,
  },
  details: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    lineHeight: 21,
    color: '#FFFFFF',
  },
  company: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  salary: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 4,
  },
  locationContainer: {
    color: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top:80,
  },
  location: {
    fontSize: 14,
    right:10,
    color: '#FFFFFF',
  },
});

export default FeaturedJobCard;
