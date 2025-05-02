import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[styles.button, containerStyles, isLoading && { opacity: 0.5 }]}
      disabled={isLoading}
    >
      <Text style={[styles.buttonText, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 85,
    backgroundColor: "green",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    width: "100%",
    textAlign: "center",
  }
});