import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CategoryPage from "./component/CategoryPage";
import Header from "./component/Header";

const client = new ApolloClient({
  uri:'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Header />
      <CategoryPage />
      </ApolloProvider>
    </>
  );
}

export default App;
