import logo from "./logo.svg";
import "./css/App.css";
import { useRoutes, Outlet, useNavigate } from "react-router-dom";
import BBsMain from "./comps/BBsMain";
import { Button } from "./styled/BBsStyled";

/**
 * react-routed-dom 의 useNavigate() hook 함수
 * 보통 react-router-dom 에서 다른 페이지를 열고자 할때 NavLink 를 사용하여
 * a tag 를 생성하고 페이지 전환을 한다
 *
 * 하지만 button 등 tag를  사용할때에는 onClick 을 캡춰하여 페이지를 전환해야 하는데 이때는 NavLink 를 사용하기가 다소 불편햐진다
 *  이럴때 useNavigate() hooks 함수를 통하여 객체를 생성하고 생성한 객체에 URL(requesPath)을 설정하면 JS  document.location.href 와 같은
 * 코드를 사용하는 것과 같다
 *
 * V5 에서는 useHistory, Link,UserRedirect 등 여러가지 함수와 객체들이 있었는데 v5 에서는 대부분이 useNavigate() Hooks 를 통하여 생성된 객체로 통합되었다
 *
 * 특히 useRedirect 의 경우 별도로 Navigate component 를 통하여 실행할수도 있다
 *
 */

/**
 * App Component 를
 * react-router-dom v6 에서 useRoutes() Hook 함수를 생성하고
 * router 를 return 하는 구조로 변경한다
 */
function App() {
  // useNavigate hooks 함수를 사용하여 navigate 객체 생성

  const navigate = useNavigate();
  // App Component 내에 inner Component 를 생성하기
  const AppBody = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Outlet />
      </div>
    );
  }; // end AppBody
  // App.js Component 를 화면에 표현하면, react-router-dom 에 의해서 path 를 감지하고
  // AppBody Component 를 화면에 렌더링 한다
  const appRouter = useRoutes([
    {
      path: "/",
      element: (
        <>
          <AppBody />
        </>
      ),
      children: [
        {
          path: "",
          element: (
            <Button
              bgColor="rgb(255, 90, 90)"
              color="black"
              onClick={() => navigate("/bbs")}
            >
              게시판 열기
            </Button>
          ),
        },
        { path: "bbs/*", element: <BBsMain /> },
      ],
    },
  ]);
  return appRouter;
}

export default App;
