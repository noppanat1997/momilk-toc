import "./InputTape.scoped.css"
import { useHorizontalScroll } from "./useHorizontalScroll"

function InputTape({ data, setData }) {
  const scrollef = useHorizontalScroll()

  return (
    <>
      <div className="scrollable-tape" id="scrollable-tape" ref={scrollef}>
        {data.map((item, index) => {
          return (
            <div className="tag" key={index}>
              {item.text}
              <svg
                className="remove"
                onClick={() => {
                  setData((prev) => {
                    return prev.filter((ele) => ele.id !== item.id)
                  })
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )
        })}
      </div>
      <button
        className="clear"
        onClick={() => {
          setData([])
        }}
        disabled={data.length === 0 && true}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        รีเซ็ต
      </button>
    </>
  )
}

export default InputTape
