import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Padding, {APP_PADDING} from '../../components/Padding';
import Header from '../../components/Header';
import {windowWidth} from '../../utils/dimensions';

const DATA = [
  {
    id: 1,
    title: 'How to make your personal brand stand out online',
    description: '',
    created_on: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Building a beautiful weather app UI with concepts',
    description: '',
    created_on: new Date().toISOString(),
  },
  {
    id: 3,
    title: '10 excellent font pairing tools for designers',
    description: '',
    created_on: new Date().toISOString(),
  },
  {
    id: 4,
    title: 'Spotify clone made using react native',
    description: '',
    created_on: new Date().toISOString(),
  },
  {
    id: 5,
    title:
      'Design for Good: Join the Mark Rasmond newsletter for more information about the trending tools used',
    description: '',
    created_on: new Date().toISOString(),
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Header
        leftContent={<Text style={styles.leftHeaderText}>Notes</Text>}
        rightContent={<Text>Right</Text>}
      />
      <ScrollView>
        <Padding style={styles.boxContainer}>
          {DATA.map((note, i) => {
            return (
              <View key={i} style={styles.box}>
                <Text style={styles.titleText}>{note.title}</Text>
              </View>
            );
          })}
        </Padding>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: APP_PADDING / 2,
  },
  box: {
    // app padding for left and right side, needs to be multiplied by 2
    width: (windowWidth - APP_PADDING * 2) / 2,
    height: 200,
    backgroundColor: 'blue',
    margin: APP_PADDING / 4,
    borderRadius: 6,
    padding: APP_PADDING,
  },
  titleText: {
    color: 'white',
    fontSize: 20,
  },
  leftHeaderText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
