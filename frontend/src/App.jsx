import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/react";
import PageLoader from "./components/PageLoader";
import Layout from "./components/Layout";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import CheckoutReturnPage from "./pages/CheckoutReturnPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SentryDemoPage from "./pages/SentryDemoPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import OrderChatPage from "./pages/OrderChatPage";
import OrderSummaryPage from "./pages/OrderSummaryPage";
import OrderVideoPage from "./pages/OrderVideoPage";

function App() {
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) return <PageLoader />;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/product/:slug" element={<ProductDetailsPage />}></Route>

        <Route
          path="/orders"
          element={isSignedIn ? <OrdersPage /> : <Navigate to={"/"} replace />}
        ></Route>
        <Route path="/checkout/return" element={<CheckoutReturnPage />}></Route>
        <Route path="/demo-sentry" element={<SentryDemoPage />}></Route>
        <Route
          path="/orders/:id/call"
          element={
            isSignedIn ? <OrderVideoPage /> : <Navigate to={"/"} replace />
          }
        ></Route>
        {/* Nested routes */}
        <Route path="/orders/:id" element={<OrderDetailPage />}>
          <Route index element={<OrderSummaryPage />} />
          <Route path="chat" element={<OrderChatPage />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
