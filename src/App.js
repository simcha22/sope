import "./App.css";
import AppContext from "./context_redux/appContext";
import AppMarket from "./market_comps/appMarket";

function App() {
  return (
    <div className="">
      {/*<AppMarket />*/}
      <AppContext/>
    </div>
  );
}

export default App;
