import React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Continents from "./apollo/Continents";

const client = new ApolloClient({
    uri: "https://countries.trevorblades.com",
});

function App() {
    return (
        <ApolloProvider client={client}>
            <h1>React + Apollo Client</h1>
            <Continents />
        </ApolloProvider>
    );
}

export default App;
