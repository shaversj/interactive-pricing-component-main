import { useState } from "react";
import slider from "/src/assets/images/icon-slider.svg";

function App() {
  const [pageViews, setPageViews] = useState(100);
  const [price, setPrice] = useState(16);

  return (
    <>
      <div className={"grid min-h-screen place-items-center bg-black"}>
        <div className={"bg-temp-bg mx-auto grid w-full max-w-screen-sm px-6 pb-20 font-Manrope"}>
          <header className={"pb-[67px] pt-[94px]"}>
            <h1 className={"text-center text-[20.5px] font-bold text-neutral-dark-desaturated-blue"}>Simple, traffic-based pricing</h1>

            <p className={"text-center text-[13.5px] font-thin leading-6 text-neutral-grayish-blue"}>
              Sign-up for our 30-day trial.
              <br /> No credit card required.
            </p>
          </header>
          <main className={"rounded-md bg-white"}>
            <h2 className={"pt-[37px] text-center text-[12px] font-bold uppercase tracking-[0.16em] text-neutral-grayish-blue"}>{pageViews}k Pageviews</h2>
            <div className={"px-5 py-10"}>
              <input type={"range"} />
              <div className={"rounded-full bg-primary-strong-cyan"}>
                <img src={slider} alt={""} />
              </div>
            </div>
            <div className={"flex items-center justify-center gap-x-2"}>
              <span className={"text-[32px] font-bold text-neutral-dark-desaturated-blue"}>${price}.00</span>
              <div className={""}>
                <span className={"text-sm text-neutral-grayish-blue"}>/ month</span>
              </div>
            </div>

            <div className={"flex justify-center py-8"}>
              <span className={"text-xs font-medium text-neutral-grayish-blue"}>Monthly Billing</span>
              <span className={"text-xs font-medium text-neutral-grayish-blue"}>Yearly Billing</span>
            </div>
            <div className={"bg-neutral-line-color h-[0.1rem]"}></div>
            <ul className={"list-inside list-image-[url(/src/assets/images/icon-check.svg)] space-y-2 py-8 text-center text-xs font-medium text-neutral-grayish-blue"}>
              <li>Unlimited websites</li>
              <li>100% data ownership</li>
              <li>Email reports</li>
            </ul>
            <div className={"flex justify-center pb-5"}>
              <button className={"flex rounded-full bg-neutral-dark-desaturated-blue px-10 py-2 text-primary-pale-blue"}>
                <span className={"text-xs"}>Start my trial</span>
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
