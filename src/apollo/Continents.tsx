import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_CONTINENTS = gql`
    query {
        continents {
            code
            name
        }
    }
`;

type DataType = {
    code: number;
    name: string;
};

function Continents() {
    return (
        <>
            <h2>Continents</h2>
            <Query query={GET_CONTINENTS}>
                {({ loading, error, data }: any) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error!(</p>;
                    return (
                        <ul>
                            {data.continents.map(({ code, name }: DataType) => (
                                <li key={code}>{name}</li>
                            ))}
                        </ul>
                    );
                }}
            </Query>
        </>
    );
}

export default Continents;
