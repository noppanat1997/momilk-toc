import "./Panel.scoped.css"
import { useState } from "react"
import arrowRight from "../../img/arrowRight.png"
import arrowLeft from "../../img/arrowLeft.png"
import base from "../../img/base.png"
import brownie from "../../img/brownie.png"
import banana from "../../img/banana.png"
import cereal from "../../img/cereal.png"
import sugar from "../../img/sugar.png"

import check from "../../img/check.png"
import x from "../../img/x.png"

function Panel({ addInput, display, setDisplay }) {
  const page = ["size", "topping", "sugar"]
  const [numPage, setNumPage] = useState(0)

  const setSize = (size) => setDisplay((d) => ({ ...d, size }))
  const setTopping = (topping) => setDisplay((d) => ({ ...d, topping }))
  const setMilk = (milk) => setDisplay((d) => ({ ...d, milk }))

  const SlidePanel = ({ num }) => {
    return (
      <div className={page[num]}>
        {num === 0 && (
          <div className="size">
            <div className="topic">เลือกขนาด</div>
            <div className="base">
              <div
                className="size-s pointer"
                onClick={() => {
                  addInput("ขนาดเล็ก")
                  setSize("s")
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
                  {display.size === "s" && <img className="check" src={check} alt="check" />}
                </div>
                <div className="descript"> เล็ก </div>
              </div>
              <div
                className="size-l pointer"
                onClick={() => {
                  addInput("ขนาดใหญ่")
                  setSize("l")
                }}
              >
                <div className="base-l">
                  <img className="base-l" src={base} alt="Size L" />
                  {display.size === "l" && <img className="check" src={check} alt="check" />}
                </div>
                <div className="descript"> ใหญ่ </div>
              </div>
            </div>
          </div>
        )}
        {num === 1 && (
          <div className="topping">
            <div className="topic">เลือก Topping</div>
            <div className="base">
              <div
                className="brownie pointer"
                onClick={() => {
                  addInput("บราวนี่")
                  setTopping("brownie")
                }}
              >
                <div className="toppingBrownie">
                  <img src={brownie} alt="Brownie" width="130" height="99" />
                  {display.topping === "brownie" && (
                    <img className="check" src={check} alt="check" />
                  )}
                </div>
                <div className="descript">บราวนี่</div>
              </div>
              <div
                className="banana pointer"
                onClick={() => {
                  addInput("กล้วย")
                  setTopping("banana")
                }}
              >
                <div className="toppingBanana">
                  <img src={banana} alt="Banana" width="130" height="99" />
                  {display.topping === "banana" && (
                    <img className="check" src={check} alt="check" />
                  )}
                </div>
                <div className="descript">กล้วย</div>
              </div>
              <div
                className="cereal pointer"
                onClick={() => {
                  addInput("คอนเฟลก")
                  setTopping("cereal")
                }}
              >
                <div className="toppingCereal">
                  <img src={cereal} alt="Cereal" width="130" height="99" />
                  {display.topping === "cereal" && (
                    <img className="check" src={check} alt="check" />
                  )}
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
              <div
                className="normalSugar pointer"
                onClick={() => {
                  addInput("ใส่นม")
                  setMilk(true)
                }}
              >
                <div className="normalPic">
                  <img src={sugar} alt="Sugar" width="130" height="100" />
                  {display.milk && <img className="check" src={check} alt="check" />}
                </div>
                <div className="descript">ใส่นมข้น</div>
              </div>
              <div
                className="noSugar pointer"
                onClick={() => {
                  addInput("ไม่ใส่นม")
                  setMilk(false)
                }}
              >
                <div className="noSugarPic">
                  <img src={sugar} alt="Sugar" width="130" height="100" />
                  <img src={x} alt="X" width="100" height="100" />
                  {!display.milk && <img className="check" src={check} alt="check" />}
                </div>
                <div className="descript">ไม่ใส่นมข้น</div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="box">
      {numPage === 0 ? (
        <div className="boxArrow">
          <img className="arrow SaSp-arrow" src={arrowLeft} alt="left" />
        </div>
      ) : (
        <div
          className="boxArrow pointer pointer-big"
          onClick={() => {
            if (numPage > 0) {
              setNumPage(numPage - 1)
            } else {
              setNumPage(0)
            }
          }}
        >
          <img className="arrow" src={arrowLeft} alt="left" />
        </div>
      )}

      <div className="center">
        <SlidePanel num={numPage} />
      </div>

      {numPage === 2 ? (
        <div className="boxArrow complete pointer">
          <img className="arrow SaSp-arrow finish-arrow" src={arrowRight} alt="right" />
          สั่งซื้อ
        </div>
      ) : (
        <div
          className="boxArrow ba-right pointer pointer-big"
          onClick={() => {
            if (numPage < 2) {
              setNumPage(numPage + 1)
            }
          }}
        >
          <img className="arrow" src={arrowRight} alt="right" />
        </div>
      )}
    </div>
  )
}
export default Panel
