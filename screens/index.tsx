import React from 'react';
import {View } from '../components/Themed';

import MusicPlayer from '../components/MusicPlayer';
import styles from './style';

export default function MusicPlayerScreen() {
  return (
    <View style={styles.container}>
      <MusicPlayer />
    </View>
  );
}

