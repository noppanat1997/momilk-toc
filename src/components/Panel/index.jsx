import "./Panel.scoped.css"
import arrowRight from "../../img/arrowRight.png"
import arrowLeft from "../../img/arrowLeft.png"
import { useState } from "react"

function Panel() {
  const page = ["red", "blue", "green", "purple"]
  const [numPage, setNumPage] = useState(0)

  const SlidePanel = ({ num }) => {
    return (
      <div className={page[num]}>
        {num === 0 && "1"}
        {num === 1 && "2"}
        {num === 2 && "3"}
        {num === 3 && "4"}
      </div>
    )
  }

  return (
    <div className="box">
      {numPage === 0 ? (
        <div className="boxArrow">
          <img className="arrow SaSp-arrow" src={arrowLeft} />
        </div>
      ) : (
        <div
          className="boxArrow"
          onClick={() => {
            if (numPage > 0) {
              setNumPage(numPage - 1)
            } else {
              setNumPage(0)
            }
          }}
        >
          <img className="arrow" src={arrowLeft} />
        </div>
      )}

      <div className="center">
        <SlidePanel num={numPage} />
      </div>

      {numPage === 3 ? (
        <div className="boxArrow">
          <img className="arrow SaSp-arrow" src={arrowRight} />
        </div>
      ) : (
        <div
          className="boxArrow"
          onClick={() => {
            if (numPage < 3) {
              setNumPage(numPage + 1)
            }
          }}
        >
          <img className="arrow" src={arrowRight} />
        </div>
      )}
    </div>
  )
}
export default Panel
