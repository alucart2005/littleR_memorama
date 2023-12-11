import { useState, useEffect } from "react";
import { Tablero } from "./components/Tablero/Tablero";
const emojiList = [..."💀💕🍾☕😎🙈🐴🤣"];

function App() {
  const [memobloquesbarajeados, setMemobloquesbarajeados] = useState([]);
  const [animating, setAnimating] = useState(false);
  const [selectMemoBlock, setSelectMemoBlock] = useState(null);

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
      [a[i], a[j]] = [a[j], a[i]];
      console.log(a);
    }
    return a;
  };

  const handleMemoClick = (memoBlock) => {
    const memoBlockInvertido = { ...memoBlock, flipped: true };
    let memobloquesbarajeadosCopy = [...memobloquesbarajeados];
    memobloquesbarajeadosCopy.splice(memoBlock.index, 1, memoBlockInvertido);
    setMemobloquesbarajeados(memobloquesbarajeadosCopy);
    if (selectMemoBlock === null) {
      setSelectMemoBlock(memoBlock);
    } else if (selectMemoBlock.emoji === memoBlock.emoji) {
      setSelectMemoBlock(null);
    } else {
      setAnimating(true);
      setTimeout(() => {
        memobloquesbarajeadosCopy.splice(memoBlock.index, 1, memoBlock);
        memobloquesbarajeadosCopy.splice(
          selectMemoBlock.index,
          1,
          selectMemoBlock
        );
        setMemobloquesbarajeados(memobloquesbarajeadosCopy);
        setSelectMemoBlock(null);
        setAnimating(false);
      }, 1000);
    }
  };
  return (
    <Tablero
      memoBlocks={memobloquesbarajeados}
      handleMemoClick={handleMemoClick}
      animating={animating}
    />
  );
}

export default App;
