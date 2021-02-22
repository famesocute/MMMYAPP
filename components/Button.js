import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';


export const Button = ({
  text,
  bg,
  fontSize,
  rounded,
  onPress,
  width,
  mx,
  my,
  px,
  py,
}) => {
  const [btnBg, setType] = useState('transparent');
  const [textSize, setSize] = useState(18);
  const [btnWidth, setBtnWidth] = useState(null);
  const [paddingX, setPx] = useState(25);
  const [paddingY, setPy] = useState(5);
  useEffect(() => {
    bg ? setType(bg) : null;
    fontSize ? setSize(fontSize) : null;
    width ? setBtnWidth(width) : null;
    px >= 0 ? setPx(px) : null;
    py >= 0 ? setPy(py) : null;
  }, [bg, fontSize, width, px, py]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        rounded ? {borderRadius: 20} : null,
        width ? {width: btnWidth} : null,
        mx ? {marginHorizontal: mx} : null,
        my ? {marginVertical: my} : null,
        {paddingHorizontal: paddingX, paddingVertical: paddingY},
      ]}>
      <Text
        style={[
          styles.btnText,
          { fontSize: textSize, textAlign: 'center',color:'#fff5ee'},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    margin: 5,
  },
  btnText: {
    fontFamily: 'Cochin',
  },
});