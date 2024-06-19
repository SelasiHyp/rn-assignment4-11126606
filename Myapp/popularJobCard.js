import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PopularJobCard = ({ job }) => {
  return (
    <View style={styles.card}>
      <View style={styles.logoContainer}>
        <Image source={job.logo} style={styles.logo} />
      </View>
      <View style={styles.details}>
        <View style={styles.topDetails}>
          <Text style={styles.title}>{job.title}</Text>
          <Text style={styles.salary}>{job.salary}</Text>
        </View>
        <View style={styles.bottomDetails}>
          <Text style={styles.company}>{job.company}</Text>
          <Text style={styles.location}>{job.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width:340,
    height:74,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 12,
    padding: 12,
    top:20,
    right:10,
    left:10,
  },
  logoContainer: {
    marginRight: 12,
    backgroundColor: '#FFFFFF',
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 12,
  },
  details: {
    flex: 1,
    flexDirection: 'column',
  },
  topDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  bottomDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    letterSpacing:-1,
    fontWeight: '600',
    color: '#0D0D26',
  },
  salary: {
    fontSize: 12,
    fontWeight: '400',
    color: '#0D0D26',
  },
  company: {
    fontSize: 13,
    fontWeight: '400',
    color: '#0D0D26',
    marginRight: 8,
  },
  location: {
    fontSize: 14,
    color: '#0D0D26',
  },
});

export default PopularJobCard;
