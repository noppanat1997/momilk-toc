import "./Display.scoped.css"
import base from "../../img/base.png"
import cover from "../../img/cover.png"
import icecream from "../../img/icecream.png"

import brownie from "../../img/brownie.png"
import banana from "../../img/banana-slice.png"
import cereal from "../../img/cereal.png"

import cow from "../../img/cow.png"

function Display({ size, topping, milk }) {
  return (
    <div className="container">
      <div className={`cup ${size || "s"}`}>
        <img className="base" src={base} alt="base" />
        <img className="base cover" src={cover} alt="cover" />
        {/* Ice-cream size */}
        {size === "s" && <img className="base icecream-s" src={icecream} alt="icecream" />}
        {size === "l" && (
          <>
            <img className="base icecream-l" src={icecream} alt="icecream" />
            <img className="base icecream-l" src={icecream} alt="icecream" />
            <img className="base icecream-l" src={icecream} alt="icecream" />
          </>
        )}
        {/* Topping */}
        <div className="base topping">
          {topping.includes("brownie") && (
            <>
              <img className="base" src={brownie} alt="brownie" />
              <img className="base" src={brownie} alt="brownie" />
            </>
          )}
          {topping.includes("banana") && (
            <>
              <img className="base banana" src={banana} alt="banana" />
              <img className="base banana" src={banana} alt="banana" />
            </>
          )}
          {topping.includes("cereal") && (
            <>
              <img className="base cereal" src={cereal} alt="cereal" />
              <img className="base cereal" src={cereal} alt="cereal" />
            </>
          )}
        </div>
        {/* Cow */}
        {milk && <img className="base cow" src={cow} alt="cow" />}
      </div>
    </div>
  )
}

export default Display
