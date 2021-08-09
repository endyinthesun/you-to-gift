//modules
import React, {useRef, useEffect} from 'react';
import {Easing, Animated, Pressable} from 'react-native';

//styles
import {generateStyles} from '_atoms/bottom-bar-item/styles';

export default function BottomBarItem({
  isFocused,
  options: {icon, iconActive},
  onPress,
}) {
  const menuItemTranslateY = useRef(new Animated.Value(0)).current;
  const menuItemTranslateYConf = {
    duration: 150,
    toValue: isFocused ? -31 : 0,
    easing: Easing.inOut(Easing.ease),
    useNativeDriver: true,
  };

  useEffect(() => {
    Animated.timing(menuItemTranslateY, menuItemTranslateYConf).start();
  }, [isFocused]);

  const styles = generateStyles(isFocused, menuItemTranslateY);
  return (
    <Animated.View style={styles.tabItemContainer}>
      <Pressable style={styles.tabItem} onPress={onPress}>
        {isFocused ? iconActive : icon}
      </Pressable>
    </Animated.View>
  );
}
