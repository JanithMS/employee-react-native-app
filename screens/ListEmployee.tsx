import * as React from "react";
import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import {
  refetchGetAllEmployeesQuery,
  useDeleteEmployeeMutation,
  useGetAllEmployeesQuery,
} from "../graphql";
import { RootTabScreenProps } from "../types";

export default function ListEmployee({
  navigation,
}: RootTabScreenProps<"AddEmployee">) {
  const { data, loading: getQueryLoading } = useGetAllEmployeesQuery();
  const [deleteEmployeeMutation, { loading }] = useDeleteEmployeeMutation({
    refetchQueries: [refetchGetAllEmployeesQuery()],
  });
  if (loading || getQueryLoading)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate("AddEmployee")}
        title="Add Employee"
      />
      {data?.getAllEmployees.map((employee: any) => {
        return (
          <View key={employee.id} style={styles.employeeList}>
            <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-evenly" }}>
              <Text>{employee.firstName}</Text>
              <Text>{employee.lastName}</Text>
              <Text>{employee.email}</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-evenly" }}>
              <Button
                onPress={() =>
                  navigation.navigate("ViewEmployee", { id: employee.id })
                }
                title="View"
              />
              <Button
                onPress={() =>
                  navigation.navigate("EditEmployee", { id: employee.id })
                }
                title="Edit"
              />
              <Button
                onPress={async () => {
                  try {
                    await deleteEmployeeMutation({
                      variables: {
                        employeeId: employee.id,
                      },
                    });
                  } catch (e) {
                    console.log(e);
                  }
                }}
                title="Delete"
              />
            </View>
          </View>
        );
      })}
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
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
