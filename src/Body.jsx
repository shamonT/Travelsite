import React, { useState } from "react";

const Body = () => {
  return (
    <div className="">
      {/* first part */}
      <div className=" first w-full  bg-cover w-max bg-black  ">
        <h1 className="text-center text-white  text-6xl italic pt-44 font-extrabold">
          {" "}
          Let's go new
        </h1>
        <h1 className="text-center content-start text-white font-extrabold text-8xl ">
          Explore and travel
        </h1>
        <div className="card rounded-lg	pr-8 pl-8">
          <div className="flex pt-3 ">
            <h3 className="pr-3">Flights</h3>
            <input className="pr-3" type="radio"></input>
            <h3 className="pr-3">Round-trip</h3>
            <input className="pr-3" type="radio"></input>
            <h3 className="pr-3">One-way</h3>
            <input className="pr-3" type="radio"></input>
            <h3 className="pr-3">Multi-way</h3>
            <h3 className="pr-3">Economy</h3>
            <h3 className="pr-3">Adult</h3>
          </div>
          <div className="flex space-x-2 pt-3  ">
            <button className=" border border-black pr-8 rounded-lg	 ">
              COK cochin airport
            </button>
            <button className=" border border-black pr-8 rounded-lg	">
              COK cochin airport
            </button>
            <button className=" border border-black pr-8 rounded-lg	">
              Sat nov
            </button>
            <button className="border border-black pr-8 rounded-lg	">
              sat nov
            </button>
            <button className="border border-black bg-blue-900 pr-8 rounded-lg	">
              search
            </button>
          </div>
        </div>
      </div>
      {/* second parrt */}
      <div className="container">
        <h1 className="italic text-center pt-24 text-2xl font-bold">
          Choose your
        </h1>
        <br></br>
        <h1 className=" text-center text-blue-900 text-5xl font-extrabold">
          perfect holiday
        </h1>
        <p className="text-center">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="  grid justify-between grid-cols-6 space-x-2 space-y-2">
        <div></div>
        <div>
          <div class="w-fit max-w-sm bg-white border border-white rounded-lg shadow dark:bg-white dark:border-white">
            <a
              href="/"
              class="relative smallCard1 block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
            >
              <div class="absolute inset-0 bg-black/25"></div>

              <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                  <h3 class="text-xl font-bold sm:text-2xl">Rome</h3>

                  <p class="text-sm">Italy</p>
                </div>

              </div>
            </a>
          </div>
        </div>
        <div>
          <div class="w-fit max-w-sm bg-white border border-white rounded-lg shadow dark:border-white dark:border-white">
            <a
              href="#"
              class="relative smallCard1 block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
            >
              <div class="absolute inset-0 bg-black/25"></div>

              <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                  <h3 class="text-xl font-bold sm:text-2xl">Rome</h3>

                  <p class="text-sm">Italy</p>
                </div>

                
              </div>
            </a>
          </div>
        </div>
        <div>
          <div class="w-fit max-w-sm bg-white border border-white rounded-lg shadow dark:border-white dark:border-white">
            <a
              href="#"
              class="relative smallCard1 block overflow-hidden rounded-xl  bg-cover bg-center bg-no-repeat"
            >
              <div class="absolute inset-0 bg-black/25"></div>

              <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                  <h3 class="text-xl font-bold sm:text-2xl">Rome</h3>

                  <p class="text-sm">Italy</p>
                </div>

               
              </div>
            </a>
          </div>
        </div>
        <div>
          <div class="w-fit max-w-sm bg-white border border-white rounded-lg shadow dark:border-white dark:border-white">
            <a
              href="#"
              class=" smallCard1 relative block overflow-hidden rounded-xl  bg-cover bg-center bg-no-repeat"
            >
              <div class="absolute inset-0 bg-black/25"></div>

              <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                  <h3 class="text-xl font-bold sm:text-2xl">Rome</h3>

                  <p class="text-sm">Italy</p>
                </div>

               
              </div>
            </a>
          </div>
        </div>
        <div></div>
        <div></div>
        <div>
          <div class="w-fit max-w-sm bg-white border border-white rounded-lg shadow dark:border-white dark:border-white">
            <a
              href="#"
              class=" smallCard1 relative block overflow-hidden rounded-xl  bg-cover bg-center bg-no-repeat"
            >
              <div class="absolute inset-0 bg-black/25"></div>

              <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                  <h3 class="text-xl font-bold sm:text-2xl">Rome</h3>

                  <p class="text-sm">Italy</p>
                </div>

                
              </div>
            </a>
          </div>
        </div>
        <div>
          <div class="w-fit max-w-sm bg-white border border-white rounded-lg shadow dark:border-white dark:border-white">
            <a
              href="#"
              class=" smallCard1 relative block overflow-hidden rounded-xl  bg-cover bg-center bg-no-repeat"
            >
              <div class="absolute inset-0 bg-black/25"></div>

              <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                  <h3 class="text-xl font-bold sm:text-2xl">Rome</h3>

                  <p class="text-sm">Italy</p>
                </div>

              </div>
            </a>
          </div>
        </div>
        <div>
          <div class="w-fit max-w-sm bg-white border border-white rounded-lg shadow dark:border-white dark:border-white">
            <a
              href="#"
              class="relative smallCard1 block overflow-hidden rounded-xl  bg-cover bg-center bg-no-repeat"
            >
              <div class="absolute inset-0 bg-black/25"></div>

              <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                  <h3 class="text-xl font-bold sm:text-2xl">Rome</h3>

                  <p class="text-sm">Italy</p>
                </div>

               
              </div>
            </a>
          </div>
        </div>
        <div>
          <div class="w-fit max-w-sm bg-white border border-white rounded-lg shadow dark:border-white dark:border-white">
            <a
              href="#"
              class="relative smallCard1 block overflow-hidden rounded-xl  bg-cover bg-center bg-no-repeat"
            >
              <div class="absolute inset-0 bg-black/25"></div>

              <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                  <h3 class="text-xl font-bold sm:text-2xl">Rome</h3>

                  <p class="text-sm">Italy</p>
                </div>

              </div>
            </a>
          </div>
        </div>
        <div></div>
      </div>
      {/* third part */}
      <div className=" second  w-full   bg-cover w-max bg-black  ">
        <h1 className="text-center   text-white  text-xl italic pt-8 font-extrabold">
          go & Discover
        </h1>
        <h1 className="text-center text-white font-extrabold text-5xl ">
          Breathtaking Cities
        </h1>
        <p className="text-white text-center">
          {" "}
          orem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <a>
          <img className="image" src="Rectangle 34.png"></img>
        </a>
      </div>
      {/* 4thpart */}
      <div>
        <h1 className=" pt-8 text-center text-black font-bold text-xl italic">
          Choose your
        </h1>
        <h1 className="text-center text-blue-900 text-4xl font-extrabold">
          Popular Flight Near You
        </h1>
        <p className="text-center pt-3 ">
          find deals on domestic and international flights
        </p>
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            International
          </button>

          <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full border-black">
            domestic
          </button>
        </div>
        <div className="grid grid-cols-6 space-x-1 pt-3">
          <div>
            <img src="Rectangle 64.png" />
          </div>
          <div>
            <img src="Rectangle 64.png" />
          </div>
          <div>
            <img src="Rectangle 64.png" />
          </div>
          <div>
            <img src="Rectangle 64.png" />
          </div>
          <div>
            <img src="Rectangle 64.png" />
          </div>
          <div>
            <img src="Rectangle 64.png" />
          </div>
        </div>
      </div>
      <div>
        <h1 className=" pt-8 text-center text-black font-bold text-xl italic ">
          Choose your
        </h1>
        <h1 className="text-center text-blue-900 text-4xl font-extrabold">
          Best Flight Booking Offers
        </h1>
        <p className="text-center">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      {/* 5th part */}
      <div className="grid grid-cols-4 space-x-0 pl-36 border rounded-lg">
        <div className="">
          <img src="cashback 1.png" alt=""></img>
          <h1 className="font-extrabold">Get 8% CashBack</h1>
          <p>on flights with travelsite</p>
        </div>
        <div>
          <img src="discount 1.png"></img>
          <h1 className="font-extrabold">Flat 12% off on</h1>
          <p>Flights via mobiwik</p>
        </div>
        <div>
          <img src="travel-1 1.png"></img>
          <h1 className="font-extrabold">International</h1>
          <p>Travel guidelines</p>
        </div>
        <div>
          <img src="voucher 1.png"></img>
          <h1 className="font-extrabold">Book a Flight </h1>
          <p>Get valuable vouchers</p>
        </div>
      </div>
      {/* sixth part */}
      <div className="third">
        <div>
          <h1 className=" pt-8 text-center text-white font-bold text-xl italic">
            Read the top
          </h1>
          <h1 className="text-center text-white text-4xl font-extrabold">
            Travel Reviews
          </h1>
          <p className="text-center text-white">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="grid grid-cols-3 space-x-1 pl-8 items-center">
          <div className="bg-white w-96 ">
            <a
              href="#"
              class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div class="sm:flex sm:justify-between sm:gap-4">
                <div>
                  <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    Johny
                  </h3>
                </div>

                <div class="hidden sm:block sm:shrink-0">
                  <img
                    alt="Paul Clapton"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    class="h-16 w-16 rounded-lg object-cover shadow-sm"
                  />
                </div>
              </div>

              <div class="mt-4">
                <p class="max-w-[40ch] text-sm text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </a>
          </div>
          <div className="bg-white w-96">
            <a
              href="#"
              class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div class="sm:flex sm:justify-between sm:gap-4">
                <div>
                  <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    John
                  </h3>
                </div>

                <div class="hidden sm:block sm:shrink-0">
                  <img
                    alt="Paul Clapton"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    class="h-16 w-16 rounded-lg object-cover shadow-sm"
                  />
                </div>
              </div>

              <div class="mt-4">
                <p class="max-w-[40ch] text-sm text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </a>
          </div>
          <div className="bg-white w-96 ">
            <a
              href="#"
              class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div class="sm:flex sm:justify-between sm:gap-4">
                <div>
                  <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    Ruben
                  </h3>
                </div>

                <div class="hidden sm:block sm:shrink-0">
                  <img
                    alt="Paul Clapton"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    class="h-16 w-16 rounded-lg object-cover shadow-sm"
                  />
                </div>
              </div>

              <div class="mt-4">
                <p class="max-w-[40ch] text-sm text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </a>
          </div>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
      {/* footer */}
      <div className="bg-black grid grid-cols-4 space-x-1 pl-8">
        <div>
          <h1 className="italic mt-2 p-2 flex text-white font-extrabold text-3xl">
            Travel site
          </h1>
          <a>
            <img src="Travelsite.png" />
          </a>
        </div>
        <div className="pt-12 pl-8">
          <a>
            <img src="our.png"></img>
          </a>
        </div>
        <div className="pt-12">
          <a>
            <img src="best.png" />
          </a>
        </div>
        <div className="pt-12">
          <a>
            <img src="Subscribe to our Newsletter Do you want to receive our latest news and promotions_ Name Email.png"></img>
            <div className="pt-3 ">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 pl-48  ">
                submit
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
