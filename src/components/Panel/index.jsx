import "./Panel.scoped.css"
import arrowRight from "../../img/arrowRight.png"
import arrowLeft from "../../img/arrowLeft.png"
import base from "../../img/base.png"
import brownie from "../../img/brownie.png"
import banana from "../../img/banana.png"
import strawberry from "../../img/strawberry.png"
import cereal from "../../img/cereal.png"
import cash from "../../img/cash.png"
import eBank from "../../img/prompt.png"
import half from "../../img/halfhalf.png"
import sugar from "../../img/sugar.png"


import { useState } from "react"

function Panel() {
  const page = ["size", "topping", "sugar", "pay"]
  const [numPage, setNumPage] = useState(0)

  const SlidePanel = ({ num }) => {
    return (
      <div className={page[num]}>
        {num === 0 && 
        <div className="size">
          <div>เลือกขนาด</div>
          <div className="base">
            <img className="base-s" src={base} alt="Size S" />
            <img className="base-m" src={base} alt="Size M" />
            <img className="base-l" src={base} alt="Size L" />
          </div>
          <div className="sizeDescript">
            <div>เล็ก</div>
            <div>กลาง</div>
            <div>ใหญ่</div>
          </div>
        </div>
        }
        {num === 1 &&
        <div className="topping">
          <div>เลือก Topping (0/3)</div>
          <div className="base">
            <img className="topping12" src={brownie} alt="Brownie" />
            <img className="topping12" src={banana} alt="Banana" />
            <img className="topping34" src={strawberry} alt="Strawberry" />
            <img className="topping34" src={cereal} alt="Cereal" />
          </div>
          <div className="toppingDescript">
            <div>บราวนี่</div>
            <div>กล้วย</div>
            <div>สตอเบอรี่</div>
            <div>คอนเฟลก</div>
          </div>
        </div>
        }
        {num === 2 &&
        <div className="sugar">
          <div>เลือกความหวาน</div>
          <div className="base">
            <img className="lessSugar" src={sugar} alt="Less Sugar" />
            <div className="normalSugar">
              <img src={sugar} alt="Normal Sugar" />
              <img src={sugar} alt="Normal Sugar" />
            </div>
            <div className="moreSugar">
              <img src={sugar} alt="More Sugar" />
              <img src={sugar} alt="More Sugar" />
              <img src={sugar} alt="More Sugar" />
            </div>
          </div>
          <div className="sugarDescript">
            <div>หวานน้อย</div>
            <div>หวานปกติ</div>
            <div>หวานมาก</div>
          </div>
        </div>
        }
        {num === 3 &&
        <div className="pay">
          <div>เลือกวิธีชำระเงิน</div>
          <div className="base">
            <img className="cash" src={cash} alt="Cash" />
            <img className="eBank" src={eBank} alt="E-Bank" />
            <img className="half" src={half} alt="Half-Half" />
          </div>
          <div className="payDescript">
            <div>เงินสด</div>
            <div>พร้อมเพย์/โอน</div>
            <div>คนละครึ่ง</div>
          </div>
        </div>
        }
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
