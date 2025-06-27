import slid1 from "../../assets/slid1.png";
import slid2 from "../../assets/slid2.png";
import slid3 from "../../assets/slid3.png";
import slid4 from "../../assets/slid4.png";
import arrowleft from "../../assets/Forward.svg";
import arrowrigth from "../../assets/Back.svg";
import { useState } from "react";
import { Button } from "../button";

export function Slid() {
  const img = [slid1, slid2, slid3, slid4];
  const [slid, setslid] = useState(0);

  function next() {
    setslid((slid) => (slid < img.length - 1 ? slid + 1 : slid));
  }
  function prev() {
    setslid((slid) => (slid === 0 ? slid : slid - 1));
  }

  return (
    <div>
      <div className="w-full relative">
        <img src={img[slid]} alt="" className="w-full object-cover" />
        <Button
          onClick={prev}
           disabled={slid === 0}
          colorVariant="bg"
          variant="icon"
          className="absolute top-1/2 -translate-y-1/2 left-4 z-10"
        >
          <img src={arrowrigth} alt="" />
        </Button>

        <Button
         disabled={slid === 3}
          colorVariant="bg"
          variant="icon"
          onClick={next}
          className="absolute top-1/2 -translate-y-1/2 right-4 z-10"
        >
          <img src={arrowleft} alt="" />
        </Button>
      </div>
    </div>
  );
}
