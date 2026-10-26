import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/react";
import PageLoader from "./components/PageLoader";
import Layout from "./components/Layout";

function App() {
  const { isLoaded } = useAuth();
  if (!isLoaded) return <PageLoader />;

  return (
    <Layout>
      <header></header>
    </Layout>
  );
}

export default App;
