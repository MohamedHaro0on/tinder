import ClassNames from './App.module.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useWindowWidth from "./Components/useWindowWidth";

import Header from "./Components/Header/Header.jsx";
import SideBar from "./Components/SideBar/SideBar.jsx";
import TinderCards from "./TinderCards/TinderCards.jsx";
import { PeopleContext } from './Context/Context';
import PervCards from './PervCards/PervCards';
import Footer from './Components/Footer/Footer';

let MainBreakPoint = 768;

const App = () => {
  const Width = useWindowWidth();
  return (
    <Router basename = "/tinder">
      <Switch>
        <PeopleContext>
          <div className={ClassNames.Container}>

            {Width < MainBreakPoint ? <Header /> : <SideBar />}

            <main className={ClassNames.MainContent}>

              <Route exact path="/" component={TinderCards} />
              <Route exact path="/liked" component={PervCards} />
              <Route exact path="/disliked" component={PervCards} />

              {Width > MainBreakPoint && <Footer />}
            </main>
          </div>
        </PeopleContext>
      </Switch>
    </Router>
  );
}

export default App;