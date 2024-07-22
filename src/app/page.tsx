"use client";

import Image from "next/image";
import { Shine } from "./_components.tsx/shine";
import { useState } from "react";
import ShineControls from "./_components.tsx/shine-controls";

export default function Home() {
  const [shineProps, setShineProps] = useState({
    surfaceScale: 2,
    specularConstant: 1.25,
    specularExponent: 300,
    lightingColor: "#222222",
  });

  return (
    <main className="mt-20 min-h-screen">
      <ShineControls onChange={setShineProps} />
      <div className="relative mx-auto w-full max-w-[1440px] md:px-[34px] md:px-unset z-20 px-0 md:pb-[32px]">
        <footer className="bg-[#141414] overflow-hidden font-matter rounded-3xl h-full px-6 py-14 text-gray-50 lg:px-11 lg:pb-[68px] lg:pt-11">
          <div>
            <div className="flex gap-20 flex-nowrap">
              <div className="my-4 flex flex-col pr-2 text-sm">
                <div className="flex pb-2 lg:pb-7">
                  <div className="flex">
                    <a href="/">
                      <svg
                        width="42"
                        height="23"
                        viewBox="0 0 42 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Cal logo</title>
                        <path
                          d="M10.0582 20.817C4.32115 20.817 0 16.2763 0 10.6704C0 5.04589 4.1005 0.467773 10.0582 0.467773C13.2209 0.467773 15.409 1.43945 17.1191 3.66311L14.3609 5.96151C13.2025 4.72822 11.805 4.11158 10.0582 4.11158C6.17833 4.11158 4.04533 7.08268 4.04533 10.6704C4.04533 14.2582 6.38059 17.1732 10.0582 17.1732C11.7866 17.1732 13.2577 16.5566 14.4161 15.3233L17.1375 17.7151C15.501 19.8453 13.2577 20.817 10.0582 20.817Z"
                          fill="#ffffff"
                        ></path>
                        <path
                          d="M29.0159 5.88577H32.7302V20.461H29.0159V18.3308C28.2436 19.8444 26.9564 20.8534 24.4925 20.8534C20.5575 20.8534 17.4131 17.4339 17.4131 13.2295C17.4131 9.02504 20.5575 5.60547 24.4925 5.60547C26.9381 5.60547 28.2436 6.61453 29.0159 8.12811V5.88577ZM29.1262 13.2295C29.1262 10.9498 27.5632 9.06242 25.0993 9.06242C22.7272 9.06242 21.1826 10.9684 21.1826 13.2295C21.1826 15.4344 22.7272 17.3965 25.0993 17.3965C27.5449 17.3965 29.1262 15.4905 29.1262 13.2295Z"
                          fill="#ffffff"
                        ></path>
                        <path
                          d="M35.3604 0H39.0746V20.4427H35.3604V0Z"
                          fill="#ffffff"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <span className="-mt-1.5 text-xs">®</span>
                </div>
                <p className="max-w-[250px] lg:block">
                  Cal.com® and Cal® are a registered trademark by Cal.com, Inc.
                  All rights reserved.
                </p>
                <div className="mt-6 flex h-12 w-[300px] place-items-center gap-3">
                  <a className="block" href="/security">
                    <img
                      alt="EU-US Privacy Shield"
                      loading="lazy"
                      width="500"
                      height="500"
                      decoding="async"
                      data-nimg="1"
                      className="min-w-11 h-12 w-full opacity-80 grayscale hover:opacity-100 hover:grayscale-0"
                      src="https://cal.com/home/footer/eu-us.svg"
                      style={{ color: "transparent;" }}
                    />
                  </a>
                  <a className="block" href="/security">
                    <img
                      alt="ISO 27001"
                      loading="lazy"
                      width="500"
                      height="500"
                      decoding="async"
                      data-nimg="1"
                      className="min-w-11 h-12 w-full opacity-80 grayscale hover:opacity-100 hover:grayscale-0"
                      src="https://cal.com/home/footer/iso.svg"
                      style={{ color: "transparent;" }}
                    />
                  </a>
                  <a className="block" href="/security">
                    <img
                      alt="SOC2"
                      loading="lazy"
                      width="500"
                      height="500"
                      decoding="async"
                      data-nimg="1"
                      className="min-w-11 h-12 w-full opacity-80 grayscale hover:opacity-100 hover:grayscale-0"
                      src="https://cal.com/home/footer/soc2.svg"
                      style={{ color: "transparent;" }}
                    />
                  </a>
                  <a className="block" href="/security">
                    <img
                      alt="CCPA"
                      loading="lazy"
                      width="500"
                      height="500"
                      decoding="async"
                      data-nimg="1"
                      className="min-w-11 h-12 w-full opacity-80 grayscale hover:opacity-100 hover:grayscale-0"
                      src="https://cal.com/home/footer/ccpa.svg"
                      style={{ color: "transparent;" }}
                    />
                  </a>
                  <a className="block" href="/security">
                    <img
                      alt="GDPR"
                      loading="lazy"
                      width="500"
                      height="500"
                      decoding="async"
                      data-nimg="1"
                      className="min-w-11 h-12 w-full opacity-80 grayscale hover:opacity-100 hover:grayscale-0"
                      src="https://cal.com/home/footer/gdpr.svg"
                      style={{ color: "transparent;" }}
                    />
                  </a>
                  <a className="block" href="/security">
                    <img
                      alt="HIPAA"
                      loading="lazy"
                      width="500"
                      height="500"
                      decoding="async"
                      data-nimg="1"
                      className="min-w-11 h-12 w-full opacity-80 grayscale hover:opacity-100 hover:grayscale-0"
                      src="https://cal.com/home/footer/hipaa.svg"
                      style={{ color: "transparent;" }}
                    />
                  </a>
                </div>
                <div className="mt-6 flex gap-4">
                  <div className="-mt-px">
                    <span>
                      <span></span>
                    </span>
                  </div>
                  <a
                    className="[&>svg]:fill-primary-300 [&>svg]:transition-fill [&>svg]:duration-150 [&>svg]:hover:fill-white"
                    aria-label="Discord"
                    target="_blank"
                    rel="noopener"
                    href="https://go.cal.com/discord"
                  >
                    <svg
                      className="mt-0.5"
                      width="22"
                      height="22"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 127.14 96.36"
                    >
                      <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z"></path>
                    </svg>
                  </a>
                  <a
                    className="[&>svg]:fill-primary-300 [&>svg]:transition-fill [&>svg]:duration-150 [&>svg]:hover:fill-white"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/calcom"
                  >
                    <svg
                      className="mt-1"
                      width="22"
                      height="22"
                      viewBox="0 0 26 26"
                      aria-label="X formerly known as Twitter"
                      fill="currentColor"
                    >
                      <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"></path>
                    </svg>
                  </a>
                  <a
                    className="[&>svg]:fill-primary-300 [&>svg]:transition-fill [&>svg]:duration-150 [&>svg]:hover:fill-white"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/calcom"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017C2 16.442 4.865 20.197 8.839 21.521C9.339 21.613 9.521 21.304 9.521 21.038C9.521 20.801 9.513 20.17 9.508 19.335C6.726 19.94 6.139 17.992 6.139 17.992C5.685 16.834 5.029 16.526 5.029 16.526C4.121 15.906 5.098 15.918 5.098 15.918C6.101 15.988 6.629 16.95 6.629 16.95C7.521 18.48 8.97 18.038 9.539 17.782C9.631 17.135 9.889 16.694 10.175 16.444C7.955 16.191 5.62 15.331 5.62 11.493C5.62 10.4 6.01 9.505 6.649 8.805C6.546 8.552 6.203 7.533 6.747 6.155C6.747 6.155 7.587 5.885 9.497 7.181C10.3128 6.95851 11.1544 6.84519 12 6.844C12.85 6.848 13.705 6.959 14.504 7.181C16.413 5.885 17.251 6.154 17.251 6.154C17.797 7.533 17.453 8.552 17.351 8.805C17.991 9.505 18.379 10.4 18.379 11.493C18.379 15.341 16.04 16.188 13.813 16.436C14.172 16.745 14.491 17.356 14.491 18.291C14.491 19.629 14.479 20.71 14.479 21.038C14.479 21.306 14.659 21.618 15.167 21.52C17.1583 20.8521 18.8893 19.5753 20.1155 17.87C21.3416 16.1648 22.0009 14.1173 22 12.017C22 6.484 17.522 2 12 2Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="[&>svg]:fill-primary-300 [&>svg]:transition-fill [&>svg]:duration-150 [&>svg]:hover:fill-white"
                    aria-label="Product Hunt"
                    target="_blank"
                    rel="noopener"
                    href="https://go.cal.com/producthunt"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 59 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M58.48 29.24C58.48 45.388 45.388 58.48 29.24 58.48C13.09 58.48 0 45.388 0 29.24C0 13.09 13.091 0 29.24 0C45.388 0 58.48 13.091 58.48 29.24Z"></path>
                      <path
                        d="M33.138 29.24H24.854V20.468H33.138C33.714 20.468 34.2843 20.5815 34.8164 20.8019C35.3486 21.0223 35.8321 21.3454 36.2394 21.7526C36.6467 22.1599 36.9697 22.6434 37.1901 23.1756C37.4106 23.7077 37.524 24.278 37.524 24.854C37.524 25.43 37.4106 26.0003 37.1901 26.5325C36.9697 27.0646 36.6467 27.5481 36.2394 27.9554C35.8321 28.3627 35.3486 28.6857 34.8164 28.9061C34.2843 29.1266 33.714 29.24 33.138 29.24ZM33.138 14.62H19.006V43.86H24.854V35.088H33.138C38.79 35.088 43.372 30.506 43.372 24.854C43.372 19.202 38.79 14.62 33.138 14.62Z"
                        fill="black"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="[&>svg]:fill-primary-300 [&>svg]:transition-fill [&>svg]:duration-150 [&>svg]:hover:fill-white"
                    aria-label="Hacker News"
                    target="_blank"
                    rel="noopener"
                    href="https://go.cal.com/hackernews"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="24"
                      height="24"
                    >
                      <path d="M4,4v42h42V4H4z M44,44H6V6h38V44z M42,8H8v34h34V8z M27,28v8h-4v-8l-7-13h3.18L25,25.19L30.82,15H34L27,28z"></path>
                    </svg>
                  </a>
                </div>
                <p className="mt-2 max-w-[350px] pr-4 text-base opacity-50 transition-opacity ease-in-out hover:opacity-100">
                  Our mission is to connect a billion people by 2031 through
                  calendar scheduling.
                </p>
                <div className="mt-8">
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 text-sm leading-4 font-medium relative border border-[transparent] dark:text-black dark:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-neutral-900 min-w-32 radix-state-open:text-white radix-state-open:bg-neutral-600 radix-state-open:hover:text-zinc-200 rounded-md bg-transparent text-white transition-colors hover:bg-neutral-700 hover:text-white"
                    id="radix-:rs:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                    va-auto-track="1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-languages inline -ml-1 mr-2 h-5 w-5"
                    >
                      <path d="m5 8 6 6"></path>
                      <path d="m4 14 6-6 2-3"></path>
                      <path d="M2 5h12"></path>
                      <path d="M7 2h1"></path>
                      <path d="m22 22-5-10-5 10"></path>
                      <path d="M14 18h6"></path>
                    </svg>
                    <span className="truncate font-normal">English</span>
                  </button>
                </div>
              </div>
              <Shine {...shineProps}>
                <a href="/" className="">
                  <svg
                    viewBox="0 0 42 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="py-4 w-[45rem] ml-16 "
                  >
                    <path
                      d="M10.0582 20.817C4.32115 20.817 0 16.2763 0 10.6704C0 5.04589 4.1005 0.467773 10.0582 0.467773C13.2209 0.467773 15.409 1.43945 17.1191 3.66311L14.3609 5.96151C13.2025 4.72822 11.805 4.11158 10.0582 4.11158C6.17833 4.11158 4.04533 7.08268 4.04533 10.6704C4.04533 14.2582 6.38059 17.1732 10.0582 17.1732C11.7866 17.1732 13.2577 16.5566 14.4161 15.3233L17.1375 17.7151C15.501 19.8453 13.2577 20.817 10.0582 20.817Z"
                      fill="#171717"
                    ></path>
                    <path
                      d="M29.0159 5.88577H32.7302V20.461H29.0159V18.3308C28.2436 19.8444 26.9564 20.8534 24.4925 20.8534C20.5575 20.8534 17.4131 17.4339 17.4131 13.2295C17.4131 9.02504 20.5575 5.60547 24.4925 5.60547C26.9381 5.60547 28.2436 6.61453 29.0159 8.12811V5.88577ZM29.1262 13.2295C29.1262 10.9498 27.5632 9.06242 25.0993 9.06242C22.7272 9.06242 21.1826 10.9684 21.1826 13.2295C21.1826 15.4344 22.7272 17.3965 25.0993 17.3965C27.5449 17.3965 29.1262 15.4905 29.1262 13.2295Z"
                      fill="#171717"
                    ></path>
                    <path
                      d="M35.3604 0H39.0746V20.4427H35.3604V0Z"
                      fill="#171717"
                    ></path>
                  </svg>
                </a>
              </Shine>
            </div>
            <div>
              <nav className="mt-6 grid w-full grid-cols-1 gap-x-4 gap-y-10 leading-[125%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <ul>
                  <li className="text-lg font-semibold uppercase">Solutions</li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="https://github.com/calcom/cal.com"
                    >
                      Self-hosted
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/pricing"
                    >
                      SaaS Hosting
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="https://cal.com/docs"
                    >
                      Docs
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/ai"
                    >
                      Cal.ai – AI Phone Agent
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/enterprise"
                    >
                      Enterprise
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/platform"
                    >
                      Platform
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/platform"
                    >
                      Cal.com Atoms
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/unified"
                    >
                      Unified Calendar API
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/download"
                    >
                      Desktop App
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/faq"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="https://cal.com/docs/enterprise-features/api"
                    >
                      Enterprise API
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="https://github.com/calcom/cal.com"
                    >
                      Github
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="https://cal.com/docs/introduction/quick-start/self-hosting/docker"
                    >
                      Docker
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="text-lg font-semibold uppercase">Use Cases</li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/sales-teams"
                    >
                      Sales
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/marketing"
                    >
                      Marketing
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/talent-acquisition-teams"
                    >
                      Talent Acquisition
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/customer-support"
                    >
                      Customer Support
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/higher-education"
                    >
                      Higher Education
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/resources/usecases/telehealth"
                    >
                      Telehealth
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/professional-services"
                    >
                      Professional Services
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/resources/usecases/hiring-marketplace"
                    >
                      Hiring Marketplace
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/people-operations"
                    >
                      Human Resources
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/resources/usecases/education"
                    >
                      Tutoring
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/c-suite"
                    >
                      C-suite
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/law"
                    >
                      Law
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="text-lg font-semibold uppercase">Resources</li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/blog"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/merch"
                    >
                      Merch Store
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/open"
                    >
                      Open Startup
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/resources/feature/teams"
                    >
                      Teams
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/resources/feature/embed"
                    >
                      Embed
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/resources/feature/recurring-events"
                    >
                      Recurring events
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/resources/feature/developers"
                    >
                      Developers
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/resources/feature/routing-forms"
                    >
                      Routing Forms
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/resources/feature/workflows"
                    >
                      Workflows
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/resources/feature/app-store"
                    >
                      App Store
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/resources/feature/opt-in"
                    >
                      Requires confirmation
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/resources/feature/payments"
                    >
                      Payments
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/resources/feature/cal-video"
                    >
                      Video Conferencing
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="text-lg font-semibold uppercase">Company</li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/jobs"
                    >
                      Jobs
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/about"
                    >
                      About
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="https://app.cal.com/support"
                    >
                      Support
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/privacy"
                    >
                      Privacy
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/terms"
                    >
                      Terms
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="https://github.com/calcom/cal.com/blob/main/LICENSE"
                    >
                      License
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/security"
                    >
                      Security
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/subscribe"
                    >
                      Changelog
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="text-lg font-semibold uppercase">
                    Compare to
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/calendly-alternative"
                    >
                      Calendly
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/chilipiper-alternative"
                    >
                      ChiliPiper
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/acuity-alternative"
                    >
                      Acuity
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/nylas-alternative"
                    >
                      Nylas
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/savvycal-alternative"
                    >
                      Savvycal
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/cronofy-alternative"
                    >
                      Cronofy
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/timekit-alternative"
                    >
                      Timekit
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/youcanbookme-alternative"
                    >
                      YouCanBook.Me
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/meetingbird-alternative"
                    >
                      Meetingbird
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/hubspot-alternative"
                    >
                      Hubspot Scheduler
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/doodle-alternative"
                    >
                      Doodle
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/woven-alternative"
                    >
                      Woven
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/harmonizely-alternative"
                    >
                      Harmonizely
                    </a>
                  </li>
                  <li className="pt-4 text-lg">
                    <a
                      className="hover:text-zinc-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                      href="/scheduling/tidycal-alternative"
                    >
                      TidyCal
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
