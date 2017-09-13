// IOS code

// Import library to create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// Create component
const App = () => {
  return (
    // flex 1 expand component to fill all area
    <View style={{ flex: 1}}>
      <Header headerText='Albums!'/>
      <AlbumList />
    </View>
  );
};



// Render
AppRegistry.registerComponent('albums', () => App);