import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EmneView from "./views/EmneView";
import HistorieView from "./views/HistorieView";
import VaelgEmneView from "./views/VaelgEmneSliderView";
import OnboardingView from "./views/OnboardingView";
import QuizIntroView from "./views/QuizIntroView";
import QuizView from "./views/QuizView";
import QuizResultatView from "./views/QuizResultatView";
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
    element: <QuizIntroView />,
    },
    {
    path: "quiz/start",
    element: <QuizView />,
    },
    {
    path: "quiz/resultat",
    element: <QuizResultatView />,
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