import * as React from "react";
import { Button, StyleSheet, TextInput } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import {
  refetchGetAllEmployeesQuery,
  useCreateEmployeeMutation,
} from "../graphql";
import { RootTabScreenProps } from "../types";

export default function AddEmployee({
  navigation,
}: RootTabScreenProps<"AddEmployee">) {
  const emailExpresion =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [errorMessage, setErrorMesage] = React.useState("");

  const [createEmployeeMutation, { data, loading, error }] =
    useCreateEmployeeMutation({
      variables: {
        createEmployeeInput: {
          firstName,
          lastName,
          email,
          number,
        },
      },
      refetchQueries: [refetchGetAllEmployeesQuery()],
    });

  if (data?.createEmployee)
    return (
      <View>
        <Button
          onPress={() => navigation.navigate("Root")}
          title="Data Added! Go back to home"
        />
      </View>
    );
  if (loading)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  if (error)
    return (
      <View>
        <Text>Some error occured</Text>
      </View>
    );

  // React.useEffect(() => {
  //   if (!emailExpresion.test(email)) setErrorMesage("Invalid Email");
  //   if (number.length !== 10) setErrorMesage("Invalid Phone");
  // }, [email, number]);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contact Number"
        keyboardType="phone-pad"
        maxLength={10}
        value={number}
        onChangeText={(text) => setNumber(text)}
      />
      {/* {errorMessage && <Text>{errorMessage}</Text>} */}
      <Button
        onPress={async (e) => {
          e.preventDefault();
          try {
            await createEmployeeMutation();
          } catch (e) {
            console.log(e);
          }
        }}
        title="SUBMIT"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
