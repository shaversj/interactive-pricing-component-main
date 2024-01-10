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
        <div id={"page"} className={"mx-auto grid h-[800px] w-full max-w-screen-sm px-6 pb-20 font-Manrope lg:flex lg:max-w-screen-lg lg:flex-col lg:items-center lg:px-0 lg:pb-0"}>
          <header className={"bg-rings bg-center bg-no-repeat pb-[61px] pt-[88px] lg:pb-[88px] lg:pt-[103px]"}>
            <h1 className={"text-center text-[20.5px] font-bold text-neutral-dark-desaturated-blue lg:text-[28.5px]"}>Simple, traffic-based pricing</h1>
            <p className={"text-center text-[13px] font-light leading-6 tracking-wide text-neutral-grayish-blue sm:pt-1 lg:pt-2 lg:text-[14.5px] lg:font-medium"}>
              Sign-up for our 30-day trial.
              <br className={"lg:hidden"} /> No credit card required.
            </p>
          </header>

          <main className={"rounded-md bg-white shadow-[0px_10px_23px_1px_#ebebf5] drop-shadow-sm  lg:w-[542px]"}>
            <div className={"lg:grid lg:grid-cols-2 lg:px-[48px]"}>
              <h2
                className={
                  "pt-[32px] text-center text-[12px] font-bold uppercase tracking-[0.16em] text-neutral-grayish-blue lg:row-start-1 lg:flex lg:items-center lg:justify-start lg:pt-[40px] lg:text-[14.3px] lg:font-medium"
                }
              >
                {sliderValue ? pageViews[sliderValue[1]] : pageViews[2]} Pageviews
              </h2>

              <div className={"px-6 py-10 lg:col-span-full lg:row-start-3 lg:px-0"}>
                <label aria-label={"Slider"}>
                  <RangeSlider
                    aria-label={"Range slider to select price"}
                    id="range-slider"
                    min={0}
                    max={4}
                    step={1}
                    value={sliderValue}
                    defaultValue={[0, 2]}
                    orientation={"horizontal"}
                    thumbsDisabled={[true, false]}
                    rangeSlideDisabled={true}
                    onInput={setSliderValue}
                  />
                </label>
              </div>

              <div className={"flex items-center justify-center sm:gap-x-2 lg:col-start-2 lg:row-start-1 lg:justify-end lg:pt-[40px]"}>
                <span className={" text-[31px] font-bold text-neutral-dark-desaturated-blue lg:text-[39px]"}>${sliderValue ? getPrice(sliderValue[1]) : getPrice(2)}.00</span>
                <div className={""}>
                  <span className={"text-sm text-neutral-grayish-blue lg:text-base"}>/ month</span>
                </div>
              </div>
            </div>

            <div className={"flex items-center justify-end gap-x-3 px-3 pb-[39px] sm:pt-[33px] lg:justify-end lg:gap-x-[16px] lg:px-[65px] lg:pt-[1.05rem]"}>
              <span className={"text-xs font-normal text-neutral-grayish-blue"}>Monthly Billing</span>
              <Switch
                checked={applyDiscount}
                onChange={setApplyDiscount}
                className={`${
                  applyDiscount ? "bg-neutral-light-grayish-blue-toggle" : "bg-neutral-light-grayish-blue-toggle"
                } relative inline-flex h-[22px] w-[43px] items-center rounded-full hover:bg-primary-soft-cyan`}
              >
                <span className="sr-only">Slider</span>
                <span className={`${applyDiscount ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
              </Switch>
              <span className={"text-xs font-normal text-neutral-grayish-blue"}>Yearly Billing</span>
              <div className={"flex items-center rounded-2xl bg-primary-light-grayish-red "}>
                <span className={"px-2 py-0.5 text-[10px] text-primary-light-red"}>
                  <span className={"lg:hidden"}>-</span>
                  <span>25%</span>
                  <span className={"sm:hidden lg:inline-flex"}>&nbsp; discount</span>
                </span>
              </div>
            </div>

            <div className={"h-[0.1rem] bg-neutral-line-color lg:h-[0.05rem]"}></div>

            <div className={"pb-8 lg:col-span-full lg:grid lg:grid-cols-2 lg:justify-start lg:pl-[15px] lg:pt-3"}>
              <ul
                className={
                  "list-inside list-image-[url(/src/assets/images/icon-check.svg)] space-y-2.5 px-[30px] pb-8 pt-6 text-center text-xs font-normal " +
                  "tracking-wide text-neutral-grayish-blue lg:col-start-1 lg:flex-col lg:justify-center lg:pb-0 lg:text-left"
                }
              >
                <li>
                  <span className={"pl-[13.5px]"}>Unlimited websites</span>
                </li>
                <li>
                  <span className={"pl-[13.5px]"}>100% data ownership</span>
                </li>
                <li>
                  <span className={"pl-[13.5px]"}>Email reports</span>
                </li>
              </ul>

              <div className={"flex justify-center lg:col-start-2 lg:items-center lg:pt-5"}>
                <button aria-label={"Button to start trial with selected price"} className={"flex rounded-full bg-neutral-dark-desaturated-blue px-[3rem] py-[.8rem] text-primary-pale-blue"}>
                  <span className={"text-xs font-semibold"}>Start my trial</span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
