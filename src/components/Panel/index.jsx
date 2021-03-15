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
import x from "../../img/x.png"
import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"

function Panel({ addInput }) {
  const page = ["size", "topping", "sugar"]
  const [numPage, setNumPage] = useState(0)
  const [state, setState] = useState({})
  const history = useHistory()

  useEffect(() => {
    history.push({
      pathname: "/state",
      search: "?" + new URLSearchParams(state).toString(),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  const SlidePanel = ({ num }) => {
    return (
      <div className={page[num]}>
        {num === 0 && (
          <div className="size">
            <div className="topic">เลือกขนาด</div>
            <div className="base">
              <div className="size-s"
                onClick={() => {
                  addInput("ขนาดเล็ก")
                  setState({ ...state, size: "l_cereal" })
                }}
              >
                <div className="base-s">
                  <img
                    // className="base-s"
                    src={base}
                    alt="Size S"
                    width="110" 
                    height="88"
                  />
                </div>
                <div className="descript"> เล็ก </div>
              </div>

              {/* <img
                className="base-m"
                src={base}
                alt="Size M"
                onClick={() => {
                  addInput("ขนาดกลาง")
                  setState({ ...state, size: "m" })
                }}
              /> */}

              <div className="size-l"
                onClick={() => {
                  addInput("ขนาดใหญ่")
                  setState({ ...state, size: "l" })
                }}
              >
                <img
                  className="base-l"
                  src={base}
                  alt="Size L"
                />
                <div className="descript"> ใหญ่ </div>
              </div>
            </div>
          </div>
        )}
        {num === 1 && (
          <div className="topping">
            <div className="topic">เลือก Topping</div>
            <div className="base">
              <div className="brownie" 
                onClick={() => {
                  addInput("บราวนี่")
                  setState({ ...state, topping1: "brownie" })
                }}
              >
                <div className="toppingBrownie">
                  <img
                    src={brownie}
                    alt="Brownie"
                    width="130" 
                    height="99"
                  />
                </div>
                <div className="descript">บราวนี่</div>
              </div>
              <div className="banana" 
                onClick={() => {
                  addInput("กล้วย")
                  setState({ ...state, topping1: "banana" })
                }}
              >
                <div className="toppingBanana">
                  <img
                    src={banana}
                    alt="Banana"
                    width="130" 
                    height="99"
                  />
                </div>
                <div className="descript">กล้วย</div>
              </div>
              {/* <img
                className="topping34"
                src={strawberry}
                alt="Strawberry"
                onClick={() => setState({ ...state, topping1: "strawberry" })}
              /> */}
              <div className="cereal" 
                onClick={() => {
                  addInput("คอนเฟลก")
                  setState({ ...state, topping1: "cereal" })
                }}
              >
                <div className="toppingCereal">
                  <img
                    src={cereal}
                    alt="Cereal"
                    width="130" 
                    height="99"
                  />
                </div>
                <div className="descript">คอนเฟลก</div>
              </div>
            </div>
          </div>
        )}
        {num === 2 && (
          <div className="sugar">
            <div className="topic">เลือกความหวาน</div>
            <div className="base">
              <div className="normalSugar" 
                onClick={() => {
                  addInput("ใส่นม")
                }}
              >
                <div className="normalPic">
                  <img
                    src={sugar}
                    alt="Sugar"
                    width="130" 
                    height="100"
                  />
                </div>
                <div className="descript">ใส่นมข้น</div>
              </div>
              <div className="noSugar" 
                onClick={() => {
                  addInput("ไม่ใส่นม")
                }}
              >
                <div className="noSugarPic">
                  <img
                    src={sugar}
                    alt="Sugar"
                    width="130" 
                    height="100"
                  />
                  <img src={x} 
                    alt="X"
                    width="100" 
                    height="100"
                  />
                </div>
                <div className="descript">ไม่ใส่นมข้น</div>
              </div>
            </div>
          </div>
        )}
        {/* {num === 3 && (
          <div className="pay">
            <div className="topic">เลือกวิธีชำระเงิน</div>
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
        )} */}
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

      {numPage === 2 ? (
        <div className="boxArrow">
          <img className="arrow SaSp-arrow" src={arrowRight} />
        </div>
      ) : (
        <div
          className="boxArrow"
          onClick={() => {
            if (numPage < 2) {
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
