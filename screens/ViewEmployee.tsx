import * as React from "react";
import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useGetEmployeeQuery } from "../graphql";
import { RootTabScreenProps } from "../types";

export default function ViewEmployee({
  route,
  navigation,
}: RootTabScreenProps<"AddEmployee">) {
  const { id } = route.params!;

  const { data, loading, error } = useGetEmployeeQuery({
    variables: {
      getEmployeeEmployeeId: id,
    },
  });

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

  return (
    <View style={styles.container}>
      <Text>Employee ID: {data?.getEmployee.employeeID}</Text>
      <Text>First Name: {data?.getEmployee.firstName}</Text>
      <Text>Last Name: {data?.getEmployee.lastName}</Text>
      <Text>Email: {data?.getEmployee.email}</Text>
      <Text>Number: {data?.getEmployee.number}</Text>
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
  employeeList: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
