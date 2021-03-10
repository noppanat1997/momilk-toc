import "./Display.scoped.css"
import base from "../../img/base.png"
import cover from "../../img/cover.png"
import icecream from "../../img/icecream.png"

import brownie from "../../img/brownie.png"
import banana from "../../img/banana-slice.png"
import strawberry from "../../img/strawberry.png"
import cereal from "../../img/cereal.png"

function Display({ size, toppings = [] }) {
  return (
    <div className="container">
      <div className={`cup ${size}`}>
        <img className="base" src={base} alt="base" />
        <img className="base cover" src={cover} alt="cover" />
        {/* Ice-cream size */}
        {size === "s" && <img className="base icecream-s" src={icecream} alt="icecream" />}
        {size === "ขนาดกลาง" && (
          <>
            <img className="base icecream-m" src={icecream} alt="icecream" />
            <img className="base icecream-m" src={icecream} alt="icecream" />
          </>
        )}
        {size === "ขนาดใหญ่" && (
          <>
            <img className="base icecream-l" src={icecream} alt="icecream" />
            <img className="base icecream-l" src={icecream} alt="icecream" />
            <img className="base icecream-l" src={icecream} alt="icecream" />
          </>
        )}
        {/* Topping */}
        <div className="base topping">
          {toppings.map((t) => (
            <>
              {t === "brownie" && <img className="base" src={brownie} alt="brownie" />}
              {t === "banana" && <img className="base banana" src={banana} alt="banana" />}
              {t === "strawberry" && <img className="base" src={strawberry} alt="strawberry" />}
              {t === "cereal" && <img className="base cereal" src={cereal} alt="cereal" />}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Display
