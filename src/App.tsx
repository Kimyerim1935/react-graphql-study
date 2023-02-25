import "./App.css";

function DisplayLocations() {
    let { graphql, buildSchema } = require("graphql");

    let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

    let rootValue = { hello: () => "Hello world!" };

    let source = "{ hello }";

    graphql({ schema, source, rootValue }).then((response: any) => {
        console.log(response);
    });
    return <span>rootValue</span>;
}

function App() {
    return (
        <div>
            <h2>My first Apollo app 🚀</h2>
            <br />
            <DisplayLocations />
        </div>
    );
}
export default App;
