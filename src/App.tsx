import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/create-account";
import CreateAccount from "./routes/create-account";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
function App() {
  const [isLoading, setIsLoading] = useState(true);
  //1. isLoading 이라는 true 값이 있다. 
  const init = async () => {
    setTimeout(() => setIsLoading(false), 2000);
  }; //3. init 함수는 2초 뒤 setIsLoading(false)이라는 함수, 즉, isLoading의 상태를 false로 바꾸는 함수를 실행시킨다.
  useEffect(() => {
    init();
  }, []);//2. useEffect의 []에 초기 딱 한번만 init()이라는 함수가 실행된다.
  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
      {/*4. 따라서 isLoading은 초기값이 false이므로 <LoadingScreen/>를 실행하지만 init함수에 의해서 <RouterProvider />가 실행되는 것이다. */}
    </>
  );
}

export default App;
