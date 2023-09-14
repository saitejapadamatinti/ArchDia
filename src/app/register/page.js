"use client"

import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import logo from "public/logo.png";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const router = useRouter();

  const routeLogin = () => {
    router.push("/login");
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setPasswordMatchError(false);

      toast.success("Registration successful!", {
        position: "top-right",
        autoClose: 3000,
      });
    }, 2000);
  };

  return (
    <div className="relative h-screen mx-auto mt-10 overflow-hidden">
      <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div className="w-full">
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
            <div className="g-0 lg:flex lg:flex-wrap">
              <div className="px-4 md:px-0 lg:w-6/12">
                <div className="md:mx-6 md:p-12">
                  <div className="text-center">
                    <Image className="w-28 mx-auto" alt="logo" src={logo} />
                    <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                      Register an Account
                    </h4>
                  </div>

                  <form onSubmit={handleRegistration}>
                    <p className="mb-4">Please fill in the registration form</p>

                    <div className="relative mb-4" data-te-input-wrapper-init>
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none dark:placeholder-text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                      />
                      <label
                        htmlFor="firstName"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        First Name
                      </label>
                    </div>

                    <div className="relative mb-4" data-te-input-wrapper-init>
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none dark:placeholder-text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                      />
                      <label
                        htmlFor="lastName"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Last Name
                      </label>
                    </div>

                    <div className="relative mb-4" data-te-input-wrapper-init>
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none dark:placeholder-text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                      />
                      <label
                        htmlFor="username"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Username
                      </label>
                    </div>

                    <div className="relative mb-4" data-te-input-wrapper-init>
                      <input
                        type="email"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none dark:placeholder-text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                      />
                      <label
                        htmlFor="email"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Email
                      </label>
                    </div>

                    <div className="relative mb-4" data-te-input-wrapper-init>
                      <input
                        type="password"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none dark:placeholder-text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                      />
                      <label
                        htmlFor="password"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Password
                      </label>
                    </div>

                    <div className="relative mb-4" data-te-input-wrapper-init>
                      <input
                        type="password"
                        className={`peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none dark:placeholder-text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0 ${passwordMatchError ? "border-danger" : ""}`}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                      />
                      <label
                        htmlFor="confirmPassword"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Confirm Password
                      </label>
                    </div>

                    {passwordMatchError && (
                      <p className="text-danger">Passwords do not match.</p>
                    )}

                    <div className="mb-12 pb-1 pt-1 text-center">
                      <button
                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="submit"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        style={{
                          background: "linear-gradient(to right, #33b5e5, #0099cc)",
                        }}
                      >
                        Register
                      </button>
                    </div>

                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Already have an account?</p>
                      <button
                        type="button"
                        onClick={routeLogin}
                        className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Log in
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div
                className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-r from-green-400 to-blue-600"
              >
                <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                  <h4 className="mb-6 text-xl font-semibold">
                    Join Our Community
                  </h4>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
