import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import "./content.css";
import Content_left from "./Content_left/Content_left";

import Content_right from "./Content_right/Content_right";
const category = {
  noiBat: "Nổi bật",
  danhMuc: "Danh mục",
};

const url_noiBat = "http://localhost:8000/noiBat";
const url_danhMuc = "http://localhost:8000/danhMuc";

function Content({getDataContent}) {
  const [height, setHeight] = useState(135);

  // console.log("content re-render");

  const listenToScroll = function () {
    let miniHeight = height;
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // console.log("winScroll ," + winScroll);
    if (winScroll > 135) winScroll = 135;
    if (winScroll > 39) {
      miniHeight = 135 - winScroll;
      document.getElementById("big").style.marginTop = `${miniHeight}px`;
      // console.log(document.getElementById("big").style.marginTop);
    } else {
      document.getElementById("big").style.marginTop = `135px`;
    }
  };

  // console.log("re-render");

  useLayoutEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [height]);

  const getData = (data, check) => {
    if(check) {
        getDataContent(data,check)
    }
  }

  return (
    <div id="content">
      <div id="content-container">
        <div id="big">
          <div className="wrapper">
            <Content_left category={category.noiBat} urlApi={url_noiBat} />

            <Content_left category={category.danhMuc} urlApi={url_danhMuc} />
            <div className="banHang-container">
              <button className="banHang">
                <img
                  src="https://salt.tikicdn.com/cache/100x100/ts/upload/08/2f/14/fd9d34a8f9c4a76902649d04ccd9bbc5.png.webp"
                  alt=""
                  width={32}
                  height={32}
                />
                <span>Bán hàng cùng Tiki</span>
              </button>
            </div>
          </div>
        </div>

        <Content_right 
          getDataContentRight = {getData}
        />
      </div>
    </div>
  );
}

export default Content;