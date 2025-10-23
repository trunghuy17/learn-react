import "./App.css";
import ContextApi from "./components/ContextApi";
import { TodoProvider } from "./contexts/TodoContext";
import RefHooks from "./components/RefHooks";
import PerformanceHook from "./components/PerformanceHook";
import CustomHook from "./components/CustomHook";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import JSX from "./components/JSX";
import { useEffect } from "react";
import { usePageTracking } from "./components/hooks/usePageTracking";
import TodoDetail from "./components/leaderboard/TodoDetail";
import AlbumDetail from "./components/leaderboard/AlbumDetail";
import PostBoardDetail from "./components/leaderboard/PostBoardDetail";
import User from "./components/User";
import Profile from "./components/user/Profile";
import PaymentMethod from "./components/user/PaymentMethod";
import Login from "./components/Login";
import AuthRoute from "./routes/AuthRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  usePageTracking();
  const navigate = useNavigate();

  console.log("App location:", usePageTracking);

  useEffect(() => {
    //call google analyztic
    console.log("App google analytic:", location);
  }, [location]);

  function gotoHome() {
    navigate("/");
  }
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <Navbar />
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={gotoHome}
      >
        Navigate to home
      </button>

      <main className="flex-1 p-6 md:p-8 lg:p-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jsx" element={<JSX />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="/performancehook" element={<PerformanceHook />} />
          <Route path="/leaderboard" element={<CustomHook />} />
          <Route path="/leaderboard/todo/:todoId" element={<TodoDetail />} />
          <Route
            path="/leaderboard/albums/:albumId"
            element={<AlbumDetail />}
          />
          <Route
            path="/leaderboard/posts/:postId"
            element={<PostBoardDetail />}
          />

          <Route path="/ref_hooks" element={<RefHooks />} />
          <Route
            path="/context_api"
            element={
              <TodoProvider>
                <ContextApi />
              </TodoProvider>
            }
          />
          <Route
            path="/user"
            element={
              <AuthRoute>
                <User />
              </AuthRoute>
            }
          >
            <Route index element={<div>Please choose tab</div>} />
            <Route path="profile" element={<Profile />} />
            <Route path="payment" element={<PaymentMethod />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
