//Import libraries for make the component
import React from 'react';
import { Text, View } from 'react-native';
//Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = style;

return (
  <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
  </View>
);
};
//Add Style
const style = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 5,
    position: 'relative'
  }, 
  textStyle: {
    fontSize: 20,
  }
};

//Make the component available
export { Header };
