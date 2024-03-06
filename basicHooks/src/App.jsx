import React, { useState } from "react";
import Counter1 from "../components/usestate/Counter1";
import "./App.css";
import Counter2 from "../components/usestate/Counter2";
import Counter3 from "../components/usestate/Counter3";
import Counter4 from "../components/usestate/Counter4";
import Effect from "../components/useEffect/Effect";
import Context from "../components/Context";
import Content from "../components/Content";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>

    <Context>
        <Content/>
    </Context>
  </div>
  //   <>
  //     <button
  //       onClick={() => {
  //         setShow(!show);
  //         console.log("show: ", show);
  //       }}
  //     >
  //       C H A N G E
  //     </button>

  //     {show == true ? (
  //       <>
  //         <Counter1 />
  //         <Counter2 />
  //         <Counter3/>
  //         <Counter4 />
  //       </>
  //     ) : (
  //       <><Effect/></>
  //     )}
  //   </>
  );
}

export default App;
