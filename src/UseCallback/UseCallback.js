import { useCallback, useState } from "react";
import Child from "./Child";

export default function Memo() {
  const [data, setData] = useState('Hello World');
  const [toggle, setToggle] = useState(false);

  const returnComment = useCallback((name) => {
    return data + ' ' + name;
  },[data]);

  return (
    <div>
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {""}
        Toggle
      </button>
      {toggle && <h1> toggle</h1>}
    </div>
  );
}
