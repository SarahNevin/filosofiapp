import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EmneView from "./views/EmneView";
import HistorieView from "./views/HistorieView";
import VaelgEmneView from "./views/VaelgEmneSliderView";
import OnboardingView from "./views/OnboardingView";
import QuizView from "./views/QuizView";
import SplashView from "./views/SplashView";
import TaenkSammenView from "./views/TaenkSammenView";

const router = createBrowserRouter([
    {
    path: "/",
    element: <SplashView />,
    },
    {
      path: "onboarding",
      element: <OnboardingView />,
    },
    {
    path: "intro",
    element: <VaelgEmneView />,
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