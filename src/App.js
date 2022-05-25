import Home from "./pages/Home";
import { SocialContext } from "./context/SocialContext";

function App() {
  return (
    <SocialContext>
      <div className="bg-gray-100 ">
        <div className="">
          <Home />
        </div>
      </div>
    </SocialContext>
  );
}

export default App;
