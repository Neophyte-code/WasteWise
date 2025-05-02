import { Text, View, Image, StyleSheet, StatusBar } from "react-native";
import Image1 from '@/assets/images/tree2.png';
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton.jsx";
import { Redirect, router } from 'expo-router'; 


export default function Index() {

  return (

    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={"black"}/>
        <Image style={styles.image} source={ Image1 } />
        <Text style={styles.subTitle}>Streamlining Waste Reporting for a Cleaner Environment</Text>
        <CustomButton title={"Get Started"} handlePress={() => router.push("/sign-in")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  subTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 85,
    backgroundColor: "green",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
  }
});