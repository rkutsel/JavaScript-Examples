import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const FirstName = gql`
  query firstNameQuery {
    names {
      id
      firstnames
    }
  }
`;

const LastName = gql`
  query lastNameQuery {
    names {
      id
      lastnames
    }
  }
`;

export default function multyUseQuery() {
  const firstName = useQuery(firstNameQuery);
  const lastName = useQuery(lastNameQuery);

  return (
    <>
      {firstName.data?.firstnames.map((firstname) => (
        <pre key={firstname.id}>{firstname.name}</pre>
      ))}
      {lastName.data?.lastnames.map((lastname) => (
        <pre key={lastname.id}>{lastname.name}</pre>
      ))}
    </>
  );
}
