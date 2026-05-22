import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EmneView from "./views/EmneView";
import HistorieView from "./views/HistorieView";
import IntroSliderView from "./views/IntroSliderView";
import QuizView from "./views/QuizView";
import SplashView from "./views/SplashView";
import TaenkSammenView from "./views/TaenkSammenView";

const router = createBrowserRouter([
    {
    path: "/",
    element: <SplashView />,
    },
    {
    path: "intro",
    element: <IntroSliderView />,
    },
    {
    path: "emne",
    element: <EmneView />,
    },
    {
    path: "historie",
    element: <HistorieView />,
    },
    {
    path: "quiz",
    element: <QuizView />,
    },
    {
    path: "taenk-sammen",
    element: <TaenkSammenView />,
    }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App