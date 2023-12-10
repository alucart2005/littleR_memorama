import "./MemoBlock.css"

export function MemoBlock({memoBlock}) {
  return (
    <div className="memo-block">
      <div>
        <div className="memo-block-front">

        </div>
        <div className="memo-block-back">
          {memoBlock.emoji}
        </div>
      </div>
    </div>
  )
}