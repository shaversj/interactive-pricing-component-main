import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Switch } from "@headlessui/react";

function App() {
  const [sliderValue, setSliderValue] = useState();
  const [applyDiscount, setApplyDiscount] = useState(false);

  const pageViews = ["10k", "50k", "100K", "500K", "1M"];
  const prices = [8, 12, 16, 24, 36];

  const getPrice = (idx) => {
    return applyDiscount ? prices[idx] - prices[idx] * 0.25 : prices[idx];
  };

  return (
    <>
      <div className={"grid min-h-screen place-items-center bg-black"}>
        <div className={"mx-auto grid w-full max-w-screen-sm bg-temp-bg px-6 pb-20 font-Manrope"}>
          <header className={"pb-[67px] pt-[94px]"}>
            <h1 className={"text-center text-[20.5px] font-bold text-neutral-dark-desaturated-blue"}>Simple, traffic-based pricing</h1>
            <p className={"text-center text-[13.5px] font-thin leading-6 text-neutral-grayish-blue"}>
              Sign-up for our 30-day trial.
              <br /> No credit card required.
            </p>
          </header>

          <main className={"rounded-md bg-white"}>
            <h2 className={"pt-[37px] text-center text-[12px] font-bold uppercase tracking-[0.16em] text-neutral-grayish-blue"}>{sliderValue ? pageViews[sliderValue[1]] : pageViews[0]} Pageviews</h2>
            <div className={"flex items-center justify-center px-6 py-10"}>
              <RangeSlider
                id="range-slider"
                min={0}
                max={4}
                step={1}
                value={sliderValue}
                defaultValue={[0, 0]}
                orientation={"horizontal"}
                thumbsDisabled={[true, false]}
                rangeSlideDisabled={true}
                onInput={setSliderValue}
              />
            </div>
            <div className={"flex items-center justify-center gap-x-2"}>
              <span className={"text-[32px] font-bold text-neutral-dark-desaturated-blue"}>${sliderValue ? getPrice(sliderValue[1]) : getPrice(0)}.00</span>
              <div className={""}>
                <span className={"text-sm text-neutral-grayish-blue"}>/ month</span>
              </div>
            </div>

            <div className={"flex items-center justify-center gap-x-3 py-8"}>
              <span className={"text-xs font-medium text-neutral-grayish-blue"}>Monthly Billing</span>
              <Switch
                checked={applyDiscount}
                onChange={setApplyDiscount}
                className={`${
                  applyDiscount ? "bg-neutral-light-grayish-blue-toggle" : "bg-neutral-light-grayish-blue-toggle"
                } relative inline-flex h-6 w-11 items-center rounded-full hover:bg-primary-soft-cyan`}
              >
                <span className={`${applyDiscount ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
              </Switch>
              <span className={"text-xs font-medium text-neutral-grayish-blue"}>Yearly Billing</span>
              <div className={"flex items-center rounded-2xl bg-primary-light-grayish-red "}>
                <span className={"px-2 py-0.5 text-[10px] text-primary-light-red"}>-25%</span>
              </div>
            </div>

            <div className={"h-[0.1rem] bg-neutral-line-color"}></div>
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
