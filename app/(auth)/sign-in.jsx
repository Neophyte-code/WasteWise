import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Formfield from '../../components/Formfield';
import {Link} from "expo-router";
import { useState } from 'react';
import CustomButton from "../../components/CustomButton"

const SignIn = () => {

  // for show and hide password feature
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // for loading listener when submitting the form
  const [isSubmitting, setIsSubmitting] = useState(false);

  // for submittting the log in credentals
  const submit = () => {

  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.signInContent}>
          <Text style={styles.title}>WasteWise</Text>
          <Text style={styles.subTitle}>Log in to Wastewise</Text>
          <Formfield title="Email" value={form.email} handleChangeText={(e) => setForm({ ...form, email: e })} keyboardType="email-address" otherStyles={{marginTop: 50}} />
          <Formfield title="Password" value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} otherStyles={{marginTop: 10}} />
          
          <CustomButton 
          title="Log In"
          handlePress={submit}
          containerStyles={{marginTop: 50}}
          isLoading={isSubmitting}
          />

          <View style={styles.linkContainer}>
            <Text style={styles.linkText}>Don't have an account? </Text>
            <Link href="/sign-up" style={styles.link}>Sign up</Link>
          </View>
          <Link href="/members" style={styles.members}>CLick to view Members </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1, 
    justifyContent: 'center', 
    padding: 10,
  },
    signInContent: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginBottom: 10,
  },
  subTitle: {
    fontWeight: "600", 
    fontSize: 15,
    textAlign: "center",
  },
  linkContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  linkText: {
    fontSize: 15,
  },
  link: {
    fontSize: 15,
    color: "green",
  },
  members: {
    fontSize: 15,
    color: "green",
    textAlign: "center"
  }

});