import React, { useState } from "react";
import Modal2 from "./Modal2";

export default function Modal({ showModal, setShowModal }) {
  const [Show, setShow] = useState(false);
  const handleRegister = () => {
    setShowModal(false);
    setShow(true);
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Welcome to Travel Website
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex">
                  <div className="flex">
                    <img src="log 1.png"></img>
                  </div>
                  <div>
                    <form
                      class="form-horizontal w-3/4 mx-auto"
                      method="POST"
                      action="#"
                    >
                      <div>
                        <h1>Let's get started</h1>
                      </div>
                      <div className="flex flex-col mt-4">
                        <input
                          id="email"
                          type="text"
                          class="flex-grow h-8 px-2 border rounded border-grey-400"
                          name="email"
                          value=""
                          placeholder="Email"
                        />
                      </div>
                      <div className="flex flex-col mt-4">
                        <input
                          id="password"
                          type="password"
                          class="flex-grow h-8 px-2 rounded border border-grey-400"
                          name="password"
                          required
                          placeholder="Password"
                        />
                      </div>
                      <div className="flex items-center mt-4">
                        <input
                          type="checkbox"
                          name="remember"
                          id="remember"
                          class="mr-2"
                        />{" "}
                        <label for="remember" class="text-sm text-grey-dark">
                          Remember Me
                        </label>
                      </div>
                      <div class="flex flex-col mt-8">
                        <button
                          type="submit"
                          class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                    <div class="flex flex-col mt-8">
                      <button
                        onClick={handleRegister}
                        type="button"
                        class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <Modal2 Show={Show} setShow={setShow} />
    </>
  );
}
