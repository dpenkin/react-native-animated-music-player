import React, { useState } from "react";
import { ProgressBar } from "react-native-paper";
import { TouchableOpacity, Animated, Easing } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import {
  Image,
  DiskCenter,
  Playing,
  Column,
  Container,
  Row,
  Artist,
  Title,
} from '../StyledComponent';
import Colors from "../../constants/Colors";
import styles from "./styles";

const translateY = new Animated.Value(0);
const scale = new Animated.Value(1);
const rotation = new Animated.Value(0);
const opacity = new Animated.Value(0);

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedDiskCenter = Animated.createAnimatedComponent(DiskCenter);
const AnimatedPlaying = Animated.createAnimatedComponent(Playing);
const AnimatedColumn = Animated.createAnimatedComponent(Column);

const MusicPlayer = () => {
  const [toggled, setToggled] = useState(true);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const opacityInterpolate = opacity.interpolate({
    inputRange: [0, 0.85, 1],
    outputRange: [0, 0, 1],
  });

  const rotationLoop = (): any => {
    return Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 2500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const onPress = () => {
    setToggled(!toggled);
    if (toggled) {
      Animated.parallel([
        Animated.timing(translateY, { toValue: -70, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 1.2, useNativeDriver: true }),
        rotationLoop(),
        Animated.timing(opacity, { toValue: 1, useNativeDriver: true }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateY, { toValue: 0, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 1, useNativeDriver: true }),
        Animated.timing(rotation, { toValue: 0, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0, useNativeDriver: true }),
      ]).start();
    }
  };

  return (
    <Container>
      <AnimatedImage
        source={require("../../assets/images/m1000x1000.jpg")}
        style={{ transform: [{ scale }, { rotate: spin }] }}
      />
      <AnimatedDiskCenter style={{ transform: [{ scale }] }} />
      <Row>
        <AntDesign name="banckward" size={24} color={Colors.light.black} />
        <TouchableOpacity onPress={onPress}>
          {toggled ? (
            <AntDesign name="caretright" size={24} color={Colors.light.black} />
          ) : (
            <FontAwesome name="stop" size={24} color={Colors.light.black} />
          )}
        </TouchableOpacity>
        <AntDesign name="forward" size={24} color={Colors.light.black} />
      </Row>
      <AnimatedPlaying style={{ transform: [{ translateY }] }}>
        <AnimatedColumn style={{ opacity: opacityInterpolate }}>
          <Artist>Frozen XCII</Artist>
          <Title>Joyner Lucas feat Logic</Title>
          <ProgressBar
            progress={0.5}
            color={Colors.light.grey}
            style={styles.progress}
          />
        </AnimatedColumn>
      </AnimatedPlaying>
    </Container>
  );
};

export default MusicPlayer;
