import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";

const TouchableWithoutFeedbackExample = () => {
 
  const onPress = () => {
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text >Hello Pakistan</Text>
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <button>Click Me</button>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "skyblue",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
   
  },
 
});

export default TouchableWithoutFeedbackExample;