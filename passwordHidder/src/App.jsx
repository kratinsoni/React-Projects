import { useState } from "react";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";

function App() {
  const [pass, setPass] = useState(true);

  const handle = () => {
    setPass(!pass);
  };

  return (
    <>
      <div className="bg-gray-700 flex text-white mx-64 my-8 rounded-xl p-2 w-64">
        <input
          className="text-black rounded-lg p-0.5 mx-2 w-60"
          type={pass ? "password" : "text"}
        />
        <div>
          <button className="py-0.5" onClick={handle}>
            {pass ? <EyeOff /> : <Eye />}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
