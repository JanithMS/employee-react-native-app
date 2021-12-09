import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateEmployeeInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  number: Scalars['String'];
};

export type Employee = {
  email: Scalars['String'];
  employeeID: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  number: Scalars['String'];
};

export type Mutation = {
  createEmployee: Scalars['Boolean'];
  deleteEmployee: Scalars['Boolean'];
  updateEmployee: Scalars['Boolean'];
};


export type MutationCreateEmployeeArgs = {
  CreateEmployeeInput: CreateEmployeeInput;
};


export type MutationDeleteEmployeeArgs = {
  EmployeeID: Scalars['String'];
};


export type MutationUpdateEmployeeArgs = {
  EmployeeID: Scalars['String'];
  UpdateEmployeeInput: UpdateEmployeeInput;
};

export type Query = {
  getAllEmployees: Array<Employee>;
  getEmployee: Employee;
};


export type QueryGetEmployeeArgs = {
  EmployeeID: Scalars['String'];
};

export type UpdateEmployeeInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
};

export type CreateEmployeeMutationVariables = Exact<{
  createEmployeeInput: CreateEmployeeInput;
}>;


export type CreateEmployeeMutation = { createEmployee: boolean };

export type DeleteEmployeeMutationVariables = Exact<{
  employeeId: Scalars['String'];
}>;


export type DeleteEmployeeMutation = { deleteEmployee: boolean };

export type GetAllEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEmployeesQuery = { getAllEmployees: Array<{ id: string, firstName: string, lastName: string, email: string }> };

export type GetEmployeeQueryVariables = Exact<{
  getEmployeeEmployeeId: Scalars['String'];
}>;


export type GetEmployeeQuery = { getEmployee: { id: string, firstName: string, lastName: string, employeeID: string, email: string, number: string } };

export type UpdateEmployeeMutationVariables = Exact<{
  updateEmployeeInput: UpdateEmployeeInput;
  updateEmployeeEmployeeId: Scalars['String'];
}>;


export type UpdateEmployeeMutation = { updateEmployee: boolean };


export const CreateEmployeeDocument = gql`
    mutation CreateEmployee($createEmployeeInput: CreateEmployeeInput!) {
  createEmployee(CreateEmployeeInput: $createEmployeeInput)
}
    `;
export type CreateEmployeeMutationFn = ApolloReactCommon.MutationFunction<CreateEmployeeMutation, CreateEmployeeMutationVariables>;

/**
 * __useCreateEmployeeMutation__
 *
 * To run a mutation, you first call `useCreateEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmployeeMutation, { data, loading, error }] = useCreateEmployeeMutation({
 *   variables: {
 *      createEmployeeInput: // value for 'createEmployeeInput'
 *   },
 * });
 */
export function useCreateEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateEmployeeMutation, CreateEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateEmployeeMutation, CreateEmployeeMutationVariables>(CreateEmployeeDocument, options);
      }
export type CreateEmployeeMutationHookResult = ReturnType<typeof useCreateEmployeeMutation>;
export type CreateEmployeeMutationResult = ApolloReactCommon.MutationResult<CreateEmployeeMutation>;
export type CreateEmployeeMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateEmployeeMutation, CreateEmployeeMutationVariables>;
export const DeleteEmployeeDocument = gql`
    mutation DeleteEmployee($employeeId: String!) {
  deleteEmployee(EmployeeID: $employeeId)
}
    `;
export type DeleteEmployeeMutationFn = ApolloReactCommon.MutationFunction<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>;

/**
 * __useDeleteEmployeeMutation__
 *
 * To run a mutation, you first call `useDeleteEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEmployeeMutation, { data, loading, error }] = useDeleteEmployeeMutation({
 *   variables: {
 *      employeeId: // value for 'employeeId'
 *   },
 * });
 */
export function useDeleteEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>(DeleteEmployeeDocument, options);
      }
export type DeleteEmployeeMutationHookResult = ReturnType<typeof useDeleteEmployeeMutation>;
export type DeleteEmployeeMutationResult = ApolloReactCommon.MutationResult<DeleteEmployeeMutation>;
export type DeleteEmployeeMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>;
export const GetAllEmployeesDocument = gql`
    query GetAllEmployees {
  getAllEmployees {
    id
    firstName
    lastName
    email
  }
}
    `;

/**
 * __useGetAllEmployeesQuery__
 *
 * To run a query within a React component, call `useGetAllEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllEmployeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllEmployeesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllEmployeesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllEmployeesQuery, GetAllEmployeesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAllEmployeesQuery, GetAllEmployeesQueryVariables>(GetAllEmployeesDocument, options);
      }
export function useGetAllEmployeesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllEmployeesQuery, GetAllEmployeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAllEmployeesQuery, GetAllEmployeesQueryVariables>(GetAllEmployeesDocument, options);
        }
export type GetAllEmployeesQueryHookResult = ReturnType<typeof useGetAllEmployeesQuery>;
export type GetAllEmployeesLazyQueryHookResult = ReturnType<typeof useGetAllEmployeesLazyQuery>;
export type GetAllEmployeesQueryResult = ApolloReactCommon.QueryResult<GetAllEmployeesQuery, GetAllEmployeesQueryVariables>;
export function refetchGetAllEmployeesQuery(variables?: GetAllEmployeesQueryVariables) {
      return { query: GetAllEmployeesDocument, variables: variables }
    }
export const GetEmployeeDocument = gql`
    query GetEmployee($getEmployeeEmployeeId: String!) {
  getEmployee(EmployeeID: $getEmployeeEmployeeId) {
    id
    firstName
    lastName
    employeeID
    email
    number
  }
}
    `;

/**
 * __useGetEmployeeQuery__
 *
 * To run a query within a React component, call `useGetEmployeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmployeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmployeeQuery({
 *   variables: {
 *      getEmployeeEmployeeId: // value for 'getEmployeeEmployeeId'
 *   },
 * });
 */
export function useGetEmployeeQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetEmployeeQuery, GetEmployeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetEmployeeQuery, GetEmployeeQueryVariables>(GetEmployeeDocument, options);
      }
export function useGetEmployeeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEmployeeQuery, GetEmployeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetEmployeeQuery, GetEmployeeQueryVariables>(GetEmployeeDocument, options);
        }
export type GetEmployeeQueryHookResult = ReturnType<typeof useGetEmployeeQuery>;
export type GetEmployeeLazyQueryHookResult = ReturnType<typeof useGetEmployeeLazyQuery>;
export type GetEmployeeQueryResult = ApolloReactCommon.QueryResult<GetEmployeeQuery, GetEmployeeQueryVariables>;
export function refetchGetEmployeeQuery(variables: GetEmployeeQueryVariables) {
      return { query: GetEmployeeDocument, variables: variables }
    }
export const UpdateEmployeeDocument = gql`
    mutation UpdateEmployee($updateEmployeeInput: UpdateEmployeeInput!, $updateEmployeeEmployeeId: String!) {
  updateEmployee(
    UpdateEmployeeInput: $updateEmployeeInput
    EmployeeID: $updateEmployeeEmployeeId
  )
}
    `;
export type UpdateEmployeeMutationFn = ApolloReactCommon.MutationFunction<UpdateEmployeeMutation, UpdateEmployeeMutationVariables>;

/**
 * __useUpdateEmployeeMutation__
 *
 * To run a mutation, you first call `useUpdateEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmployeeMutation, { data, loading, error }] = useUpdateEmployeeMutation({
 *   variables: {
 *      updateEmployeeInput: // value for 'updateEmployeeInput'
 *      updateEmployeeEmployeeId: // value for 'updateEmployeeEmployeeId'
 *   },
 * });
 */
export function useUpdateEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateEmployeeMutation, UpdateEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateEmployeeMutation, UpdateEmployeeMutationVariables>(UpdateEmployeeDocument, options);
      }
export type UpdateEmployeeMutationHookResult = ReturnType<typeof useUpdateEmployeeMutation>;
export type UpdateEmployeeMutationResult = ApolloReactCommon.MutationResult<UpdateEmployeeMutation>;
export type UpdateEmployeeMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateEmployeeMutation, UpdateEmployeeMutationVariables>;