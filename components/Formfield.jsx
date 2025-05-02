import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const Formfield = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false); 
  
  const icons = {
    eye: require('../assets/images/eye.png'), 
    eyehide: require('../assets/images/eyehide.png'), 
  };

  return (
    <View style={[styles.formFieldContainer, otherStyles]}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.inputContainer, isFocused && styles.inputContainerFocused]}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor="#888"
          secureTextEntry={title === "Password" && !showPassword} 
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {title === 'Password' || title === 'Confirm Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
            <Image source={showPassword ? icons.eye : icons.eyehide} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Formfield;

const styles = StyleSheet.create({
  formFieldContainer: {
    marginBottom: 20, 
    letterSpacing: 2,
  },
  title: {
    fontSize: 18,
    color: "black",
    marginBottom: 5,
  },
  inputContainer: {
    borderWidth: 2,
    height: 55,
    borderColor: "#000000",
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainerFocused: {
    borderColor: "green", 
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 0,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    height: 100
  },
  iconContainer: {
    padding: 10, // Add padding around the icon for better touch area
  },
  icon: {
    width: 24, // Set a fixed width for the icon
    height: 24, // Set a fixed height for the icon
    resizeMode: 'contain', // Ensure the icon maintains its aspect ratio
  },
});