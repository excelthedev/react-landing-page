import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../Component/Button";
import pics from "../../../Assets/Image/slack.svg";
import pics2 from "../../../Assets/Image/discord.svg";
import pics3 from "../../../Assets/Image/stripe.svg";
import pics4 from "../../../Assets/Image/figma.svg";
import pics5 from "../../../Assets/Image/openai.svg";
import pics6 from "../../../Assets/Image/retoo.svg";
// import Primarybutton from '../../../Component/Primarybutton'
// import ArrowRight from '../../../Assets/Image/getstart.svg'

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const image = useRef(null);
  const d = useRef(window.scrollX);

  useEffect(() => {
    const g = d.current?.children
    
    console.log(g[0]);
  }, [])

  return (
    <header className="h-[100svh]">
      <nav className="flex items-center justify-between px-20 h-[7%]">
        <div>
          <h1 className="font-[neuton-800] text-[1.5rem]">Compound</h1>
        </div>

        {/* you use the navlink when working with the navigation bar */}
        <ul className="flex items-center gap-5">
          <NavLink to="#">Membership</NavLink>
          <NavLink to="#">Resources</NavLink>
          <NavLink to="#">Company</NavLink>
        </ul>

        <div className="flex items-center gap-5">
          <button>Sign in</button>

          <Button type="primary">Get started</Button>
        </div>
      </nav>

      <section className="p-36 h-[93%] grid justify-between">
        <div>
          <h1
            className={`text-[4rem] ${
              !isHovered ? "blur-sm " : "blur-0"
            } hover:transition-all`}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(true)}
          >
            We focus on your finances
          </h1>

          <h1
            className={`text-[4rem] ${
              isHovered ? "blur-sm " : "blur-0"
            } hover:transition-all`}
            onMouseOver={() => setIsHovered(false)}
            onMouseLeave={() => setIsHovered(false)}
          >
            You focus on what matters the most.
          </h1>
          <div className="flex gap-6 mt-5">
            <Button type="primary">Get started</Button>
            <Button type="default">Learn more</Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[1.5rem] w-[20rem]">
              Wealth management for people from leading tech companies
            </h3>
          </div>

          <div ref={d} className="flex items-center wraper gap-[8rem] justify-between">
            <img className="container" ref={image} src={pics} alt="" />
            <img className="container" ref={image} src={pics2} alt="" />
            <img className="container" ref={image} src={pics3} alt="" />
            <img className="container" ref={image} src={pics4} alt="" />
            <img className="container" ref={image} src={pics5} alt="" />
            <img className="container" ref={image} src={pics6} alt="" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
