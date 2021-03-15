import "./Panel.scoped.css"
import { useState } from "react"
import { Modal } from "../Modal"
import { INITIAL_STATE_DATA } from "../../constants/stateData"
import arrowRight from "../../img/arrowRight.png"
import arrowLeft from "../../img/arrowLeft.png"
import base from "../../img/base.png"
import brownie from "../../img/brownie.png"
import banana from "../../img/banana.png"
import cereal from "../../img/cereal.png"
import sugar from "../../img/sugar.png"

import check from "../../img/check.png"
import x from "../../img/x.png"
import Display from "../Display"

function Panel({ addInput, display, setDisplay, updateQueryString }) {
  const page = ["size", "topping", "sugar"]
  const [numPage, setNumPage] = useState(0)
  const modal = Modal.useModal()

  const setSize = (size) => {
    if (display.end) return
    setDisplay((d) => ({ ...d, size }))
  }
  const setTopping = (topping) => {
    if (display.end) return
    setDisplay((d) => ({ ...d, topping }))
  }
  const setMilk = (milk) => {
    if (display.end) return
    setDisplay((d) => ({ ...d, milk }))
  }

  const menuResult = () => {
    const { size, topping, milk } = display
    const queryArray = [size, topping, milk]
    const query = queryArray.filter((q) => q.length).join("_")
    const node = INITIAL_STATE_DATA.nodeDataArray.find((n) => n.value === query) || {}
    return node.text?.replaceAll("\n", "") || ""
  }

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
                  updateQueryString("size", "s")
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
                  updateQueryString("size", "l")
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
                  if (display.size) {
                    setTopping("brownie")
                    updateQueryString("topping", "brownie")
                  }
                }}
              >
                <div className="toppingBrownie">
                  <img src={brownie} alt="Brownie" width="130" height="99" />
                  {display.topping.includes("brownie") && (
                    <img className="check" src={check} alt="check" />
                  )}
                </div>
                <div className="descript">บราวนี่</div>
              </div>
              <div
                className="banana pointer"
                onClick={() => {
                  addInput("กล้วย")
                  if (display.size) {
                    setTopping("banana")
                    updateQueryString("topping", "banana")
                  }
                }}
              >
                <div className="toppingBanana">
                  <img src={banana} alt="Banana" width="130" height="99" />
                  {display.topping.includes("banana") && (
                    <img className="check" src={check} alt="check" />
                  )}
                </div>
                <div className="descript">กล้วย</div>
              </div>
              <div
                className="cereal pointer"
                onClick={() => {
                  addInput("คอนเฟลก")
                  if (display.size) {
                    setTopping("cereal")
                    updateQueryString("topping", "cereal")
                  }
                }}
              >
                <div className="toppingCereal">
                  <img src={cereal} alt="Cereal" width="130" height="99" />
                  {display.topping.includes("cereal") && (
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
                  if (display.topping) {
                    setMilk("milk")
                    updateQueryString("milk", "milk")
                  }
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
                  if (display.topping) {
                    setMilk("")
                    updateQueryString("milk", "")
                  }
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
    <>
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
          <div
            className="boxArrow complete pointer"
            onClick={() => {
              addInput("สั่งซื้อ")
              if (display.size && display.topping) {
                updateQueryString("end", "end")
                setDisplay((d) => ({ ...d, end: true }))
                modal.open()
              }
            }}
          >
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
      <Modal modal={modal}>
        <div className="modal-text">
          <div>
            <Display {...display} />
          </div>
          <div style={{ fontSize: "1.5rem", marginTop: "2rem" }}>เมนูของคุณคือ</div>
          <h1>ไอติม{menuResult()}</h1>
        </div>
      </Modal>
    </>
  )
}
export default Panel
