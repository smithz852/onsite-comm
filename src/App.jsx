import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CategoryPage from "./component/CategoryPage";
import Header from "./component/Header";
import { FetchContextProvider } from './store/fetch-context';

const client = new ApolloClient({
  uri:'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <FetchContextProvider>
      <Header />
      <CategoryPage />
      </FetchContextProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
