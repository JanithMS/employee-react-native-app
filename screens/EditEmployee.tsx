import * as React from "react";
import { Button, StyleSheet, TextInput } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import {
  refetchGetAllEmployeesQuery,
  refetchGetEmployeeQuery,
  useGetEmployeeQuery,
  useUpdateEmployeeMutation,
} from "../graphql";
import { RootTabScreenProps } from "../types";

export default function EditEmployee({
  route,
  navigation,
}: RootTabScreenProps<"AddEmployee">) {
  const { id } = route.params!;

  const { data } = useGetEmployeeQuery({
    variables: {
      getEmployeeEmployeeId: id,
    },
  });

  const [firstName, setFirstName] = React.useState(data?.getEmployee.firstName);
  const [lastName, setLastName] = React.useState(data?.getEmployee.lastName);
  const [email, setEmail] = React.useState(data?.getEmployee.email);
  const [number, setNumber] = React.useState(data?.getEmployee.number);

  React.useEffect(() => {
    setFirstName(data?.getEmployee.firstName);
    setLastName(data?.getEmployee.lastName);
    setEmail(data?.getEmployee.email);
    setNumber(data?.getEmployee.number);
  }, [data]);

  const [
    updateEmployeeMutation,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useUpdateEmployeeMutation({
    refetchQueries: [
      refetchGetAllEmployeesQuery(),
      refetchGetEmployeeQuery({ getEmployeeEmployeeId: id }),
    ],
  });

  if (updateData?.updateEmployee)
    return (
      <View>
        <Button
          onPress={() => navigation.navigate("Root")}
          title="Data Updated! Go back to home"
        />
      </View>
    );
  if (updateLoading)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  if (updateError)
    return (
      <View>
        <Text>Some error occured</Text>
      </View>
    );
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
      <Button
        onPress={async () => {
          try {
            await updateEmployeeMutation({
              variables: {
                updateEmployeeInput: {
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  number: number,
                },
                updateEmployeeEmployeeId: id,
              },
            });
          } catch (e) {
            console.log(e);
          }
        }}
        title="UPDATE"
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
