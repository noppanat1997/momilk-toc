import "./Display.scoped.css"
import base from "../../img/base.png"
import cover from "../../img/cover.png"
import icecream from "../../img/icecream.png"

import brownie from "../../img/brownie.png"
import banana from "../../img/banana-slice.png"
import cereal from "../../img/cereal.png"

function Display({ size, topping }) {
  const SIZE_PROPS = [undefined, "s", "l"]
  const TOPPING_PROPS = [undefined, "brownie", "banana", "cereal"]

  if (!SIZE_PROPS.includes(size))
    throw new Error(`<Display /> props "size" can only be "${SIZE_PROPS}"`)

  if (!TOPPING_PROPS.includes(topping))
    throw new Error(`<Display /> props "topping" can only be "${TOPPING_PROPS}"`)

  return (
    <div className="container">
      <div className={`cup ${size}`}>
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
          {topping === "brownie" && (
            <>
              <img className="base" src={brownie} alt="brownie" />
              <img className="base" src={brownie} alt="brownie" />
            </>
          )}
          {topping === "banana" && (
            <>
              <img className="base banana" src={banana} alt="banana" />
              <img className="base banana" src={banana} alt="banana" />
            </>
          )}
          {topping === "cereal" && (
            <>
              <img className="base cereal" src={cereal} alt="cereal" />
              <img className="base cereal" src={cereal} alt="cereal" />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Display
