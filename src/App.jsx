import { useState, useEffect } from "react";
import { Tablero } from "./components/Tablero/Tablero";
const emojiList = [..."💀👻🧛🌮🎱🍬🍕🦖"];

function App() {
  const [memobloquesbarajeados, setMemobloquesbarajeados] = useState([]);
  useEffect(() => {
    const barajadoEmojiLista = barajarArray([...emojiList, ...emojiList]);
    setMemobloquesbarajeados(
      barajadoEmojiLista.map((emoji, i) => ({
        index: i,
        emoji,
        flipped: false,
      }))
    );
  }, []);

  const barajarArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i],a[j]] = [a[j],a[i]];
      console.log(a)
    }
    return a;
  };
  return (
    <div>
      <Tablero 
      memoBlocks={memobloquesbarajeados}
      />
    </div>
  );
}

export default App;
