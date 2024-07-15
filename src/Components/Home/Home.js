import React, { useEffect, useState } from "react";
import { Button } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa";
import "./Home.css";
import { BiX } from "react-icons/bi";
import { BsFilePlayFill, BsFillClockFill } from "react-icons/bs";
import DisclosureComponent from "../common/DisclosureComponent";
import Footer from "../Footer/Footer";
import DictionaryComponent from "../common/DictionaryComponent";
import CountdownTimer from "../common/CountdownTimer";
import PollingSystem from "../PollingSystem";
import { Link } from "react-router-dom";

const onChange = (key) => {
  console.log(key);
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  //  useEffect(() => {
  //    const audio = new Audio("");
  //    audio.volume = 0.5; // Adjust the volume as needed
  //    audio.loop = true; // Loop the audio
  //    audio.play();

  //    return () => {
  //      audio.pause();
  //    };
  //  }, []);

  return (
    <div className="Home">
      <div className="relative flex justify-center items-center">
        <img
          src="https://i.pinimg.com/564x/62/5a/f0/625af00d94c297672e02b7ee3ce8e575.jpg"
          alt="Navratri"
          className="w-400 h-auto mt-[3rem] ml-[52rem] animate-zoom-in-out"
        />

        <div className="absolute mr-[35rem] flex flex-col  px-4 sm:px-0">
          <img
            alt="gif"
            src="https://i.ibb.co/YkTqHSn/Jai-Mata-Di-Festival-GIF-by-Hi-unscreen.gif"
            className="mix-blend-screen w-[150px] sm:w-[235px] transition-all duration-500 sm:ml-[11.5rem] md:ml-[1rem] md:mt-0 mt-[6rem]"
          />
          <span className="text-5xl font-weight: 600 font-Arsenal">
            Today's Theme: Navratri
          </span>
          <p className="text-[12px] md:text-[20px] w-full font-normal leading-[24px] sm:leading-[28px] mt-4 opacity-55">
            Seize the opportunity to win fantastic rewards.
            <br />
            Join the challenge today and be part of the excitement!
          </p>
        </div>
      </div>
      <div className=" w-full md:w-[320px]  md:ml-[40rem] md:mt-[5rem] mx-auto md:block flex-col mb-5">
        <img
          src="https://www.intract.io/assets/reward-info-path-571d6141.svg"
          alt="gif2"
          className=" rotate-180 absolute -ml-[12rem] mt-[8rem]"
        ></img>
        <img
          src="https://www.intract.io/assets/reward-info-path-571d6141.svg"
          alt="gif2"
          className=" scale-x-[-1] rotate-180 absolute ml-[20rem] mt-[8rem]"
        ></img>
        <div className="relative p-3 sm:p-[.75rem] rounded-lg sm:rounded-[12px] border border-solid border-[rgba(255,255,255,.05)] bg-[rgba(255,255,255,.05)] backdrop-filter backdrop-blur-md sm:backdrop-blur-[30px] flex flex-col gap-4 md:mb-[0rem] mb-[0rem]">
          <div>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <BsFillClockFill />
              Challenge ends in
            </div>
          </div>
          <hr className="opacity-100 border-dashed border-[rgba(255,255,255,.1)] w-full" />
          <CountdownTimer />
        </div>
      </div>

      <div className="flex max-w-screen-lg px-4 sm:px-6 lg:px-8 md:top-[95%] top-[40%] gap-[8rem] z-40 mt-[2rem] ml-[4rem]">
        <div
          className="ml-[5rem]"
        >
          <DisclosureComponent
            DisclosureImage="https://img.freepik.com/free-vector/woman-elegant-line-art-style_23-2148628141.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1719878400&semt=ais_user"
            title="Challenge for Female"
            description="The best way to showcase your hidden talent!"
            category="Female"
            xpCount="5000"
          />
        </div>
        <div
            className="ml-[5rem]"
        >
          <DisclosureComponent
            DisclosureImage="https://static.vecteezy.com/system/resources/thumbnails/002/371/723/small/man-model-lifestyle-flat-illustration-vector.jpg"
            title="Challenge for Male"
            description="The best way to showcase your hidden talent!"
            category="Male"
            xpCount="5000"
          />
        </div>
      </div>
      <Link to="/ranking">
        <Button
          className="flex w-[280px] rounded bg-[#6733f4] md:mt-[5rem] mt-[30px] py-5 font-bold font-Outfit sm:px-14 text-md text-white opacity-100 hover:opacity-100 ml-[42rem] 
      transition duration-300 ease-in-out transform hover:scale-105"
        >
          View Leaderboard
          <img
            className="pl-2 sm:pl-3 pt-1"
            src="https://www.intract.io/assets/arrow-right-1c96f4ae.svg"
            alt="Angle Top Icon"
          />
        </Button>
      </Link>
      <section className="bg-white min-h-[1px] max-h-px md:mt-[5rem] mt-[60rem] mb-[3rem] opacity-10 md:my-[4rem]"></section>
      <div class="max-w-[1200px] md:ml-[12rem] ml-[4rem]">
        <div className="flex flex-col justify-center items-center font-[Outfit] not-italic font-normal tracking-[.117px] gap-[8px]">
          <div className="text-[24px] leading-[30px] text-center md:text-center md:w-full w-[80%] md:pb-0 pb-2">
            Last Challenge Winners
          </div>
          <div className="text-[16px] leading-[20px] text-center md:w-full w-[80%]">
            Get Inspired From Them !
          </div>
        </div>
        <div className="mt-[40px] flex flex-wrap gap-[16px] mb-[20px] ml-[1rem]">
          <div className="w-[283px] h-[420px] rounded-[16px] border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.05)] flex flex-col justify-between relative overflow-hidden">
            <div className="hidden">
              <span>
                <BiX style={{ fontSize: "24px" }} />
              </span>
            </div>
            <div className="block w-full h-full relative">
              <div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
                <img
                  className="block align-middle"
                  src="https://www.intract.io/assets/reel-video-ee824737.svg"
                  alt="reel-icon"
                />
              </div>
              <span className="inline-flex justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-2/4 transform -translate-x-1/2 -translate-y-1/2 text-[36px] h-[60px] w-[60px] left-2/4 cursor-pointer opacity-0 transition-transform duration-300 ease-in-out">
                <BsFilePlayFill className="mt-1 ml-1" />
              </span>
              <img
                className="absolute bottom-[-90px] left-0 w-full h-[100px] filter blur-[15px] object-bottom scale-[2]"
                src="https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png"
                alt="How to plan your retirement with crypto?"
              />

              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/LUZqQu5_yQ8"
                title="Wedding outfits from myntra| myntra haul 2022"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="text-shadow-[0px_0px_5px_rgba(0,0,0,.1)] text-[24px] font-normal leading-[30px] tracking-[.117px] absolute bottom-[12px] left-[15px] overflow-hidden overflow-ellipsis">
                Bhanvi Malhotra
              </div>
            </div>
          </div>
          <div className="w-[283px] h-[420px] rounded-[16px] border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.05)] flex flex-col justify-between relative overflow-hidden">
            <div className="hidden">
              <span>
                <BiX style={{ fontSize: "24px" }} />
              </span>
            </div>
            <div className="block w-full h-full relative">
              <div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
                <img
                  className="block align-middle"
                  src="https://www.intract.io/assets/reel-video-ee824737.svg"
                  alt="reel-icon"
                />
              </div>
              <span className="inline-flex justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-2/4 transform -translate-x-1/2 -translate-y-1/2 text-[36px] h-[60px] w-[60px] left-2/4 cursor-pointer opacity-0 transition-transform duration-300 ease-in-out w-full overflow-hidden [aspect-ratio:16/9] pointer-events-none">
                <BsFilePlayFill className="mt-1 ml-1" />
              </span>
              <img
                className="absolute bottom-[-90px] left-0 w-full h-[100px] filter blur-[15px] object-bottom scale-[2]"
                src="https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png"
                alt="Why are there limited Bitcoin?"
              />
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dkweUCysgeQ"
                title="Myntra Haul Kurta Sets | Ethnic wear Salwar suits | Casual kurtas  LATEST Haul"
                frameborder="0"
                allow="accelerometer; replay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="text-shadow-[0px_0px_5px_rgba(0,0,0,.1)] text-[24px] font-normal leading-[30px] tracking-[.117px] absolute bottom-[12px] left-[15px] overflow-hidden overflow-ellipsis">
                Zuola
              </div>
            </div>
          </div>

          <div className="w-[283px] h-[420px] rounded-[16px] border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.05)] flex flex-col justify-between relative overflow-hidden">
            <div className="hidden">
              <span>
                <BiX style={{ fontSize: "24px" }} />
              </span>
            </div>
            <div className="block w-full h-full relative">
              <div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
                <img
                  className="block align-middle"
                  src="https://www.intract.io/assets/reel-video-ee824737.svg"
                  alt="reel-icon"
                />
              </div>
              <span className="inline-flex justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-2/4 transform -translate-x-1/2 -translate-y-1/2 text-[36px] h-[60px] w-[60px] left-2/4 cursor-pointer opacity-0 transition-transform duration-300 ease-in-out">
                <BsFilePlayFill className="mt-1 ml-1" />
              </span>
              <img
                className="absolute bottom-[-90px] left-0 w-full h-[100px] filter blur-[15px] object-bottom scale-[2]"
                src="https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png"
                alt="How does Uniswap actually work?"
              />
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/698NKR8ht2Q"
                title="Wedding Outfit Idea ✨🔥 #style #fashion #shorts #mensfashion #wedding"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="text-shadow-[0px_0px_5px_rgba(0,0,0,.1)] text-[24px] font-normal leading-[30px] tracking-[.117px] absolute bottom-[12px] left-[15px] overflow-hidden overflow-ellipsis">
                Vaibhav Keswani
              </div>
            </div>
          </div>

          <div className="w-[283px] h-[420px] rounded-[16px] border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.05)] flex flex-col justify-between relative overflow-hidden">
            <div className="hidden">
              <span>
                <BiX style={{ fontSize: "24px" }} />
              </span>
            </div>
            <div className="block w-full h-full relative">
              <div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
                <img
                  className="block align-middle"
                  src="https://www.intract.io/assets/reel-video-ee824737.svg"
                  alt="reel-icon"
                />
              </div>
              <span className="inline-flex justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-2/4 transform -translate-x-1/2 -translate-y-1/2 text-[36px] h-[60px] w-[60px] left-2/4 cursor-pointer opacity-0 transition-transform duration-300 ease-in-out">
                <BsFilePlayFill className="mt-1 ml-1" />
              </span>
              <img
                className="absolute bottom-[-90px] left-0 w-full h-[100px] filter blur-[15px] object-bottom scale-[2]"
                src="https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png"
                alt="How to spot crypto projects to invest in?"
              />
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/kd_tnAd0OUw"
                title="hello"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>

              <div className="text-shadow-[0px_0px_5px_rgba(0,0,0,.1)] text-[24px] font-normal leading-[30px] tracking-[.117px] absolute bottom-[12px] left-[15px] overflow-hidden overflow-ellipsis">
                Nitin Gupta
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white min-h-[1px] max-h-px md:mt-[5rem] mt-[60rem] mb-[3rem] opacity-10 md:my-[4rem]"></section>

      <div class="max-w-[1200px] md:ml-[12rem] ml-[4rem]">
        <div className="flex flex-col justify-center items-center font-[Outfit] not-italic font-normal tracking-[.117px] gap-[8px]">
          <div className="text-[24px] leading-[30px] text-center md:text-center md:w-full w-[80%] md:pb-0 pb-2">
            Top Fashion Creators to Follow
          </div>
          <div className="text-[16px] leading-[20px] text-center md:w-full w-[80%]">
            How to style good and win!
          </div>
        </div>
        <div className="mt-[40px] flex flex-wrap gap-[16px] mb-[20px] ml-[1rem]">
          <div className="w-[283px] h-[420px] rounded-[16px] border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.05)] flex flex-col justify-between relative overflow-hidden">
            <div className="hidden">
              <span>
                <BiX style={{ fontSize: "24px" }} />
              </span>
            </div>
            <div className="block w-full h-full relative">
              <div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
                <img
                  className="block align-middle"
                  src="https://www.intract.io/assets/reel-video-ee824737.svg"
                  alt="reel-icon"
                />
              </div>
              <span className="inline-flex justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-2/4 transform -translate-x-1/2 -translate-y-1/2 text-[36px] h-[60px] w-[60px] left-2/4 cursor-pointer opacity-0 transition-transform duration-300 ease-in-out">
                <BsFilePlayFill className="mt-1 ml-1" />
              </span>
              <img
                className="absolute bottom-[-90px] left-0 w-full h-[100px] filter blur-[15px] object-bottom scale-[2]"
                src="https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png"
                alt="How to plan your retirement with crypto?"
              />

              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/qkOHNh3EUcg"
                title="9 Ways To Do Desi Prints❤️"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="text-shadow-[0px_0px_5px_rgba(0,0,0,.1)] text-[24px] font-normal leading-[30px] tracking-[.117px] absolute bottom-[12px] left-[15px] overflow-hidden overflow-ellipsis">
                Komal Pandey
              </div>
            </div>
          </div>
          <div className="w-[283px] h-[420px] rounded-[16px] border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.05)] flex flex-col justify-between relative overflow-hidden">
            <div className="hidden">
              <span>
                <BiX style={{ fontSize: "24px" }} />
              </span>
            </div>
            <div className="block w-full h-full relative">
              <div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
                <img
                  className="block align-middle"
                  src="https://www.intract.io/assets/reel-video-ee824737.svg"
                  alt="reel-icon"
                />
              </div>
              <span className="inline-flex justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-2/4 transform -translate-x-1/2 -translate-y-1/2 text-[36px] h-[60px] w-[60px] left-2/4 cursor-pointer opacity-0 transition-transform duration-300 ease-in-out">
                <BsFilePlayFill className="mt-1 ml-1" />
              </span>
              <img
                className="absolute bottom-[-90px] left-0 w-full h-[100px] filter blur-[15px] object-bottom scale-[2]"
                src="https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png"
                alt="Why are there limited Bitcoin?"
              />
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VrUQpHgQoKI"
                title="Navratri Series Recap!✨"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="text-shadow-[0px_0px_5px_rgba(0,0,0,.1)] text-[24px] font-normal leading-[30px] tracking-[.117px] absolute bottom-[12px] left-[15px] overflow-hidden overflow-ellipsis">
                Kritika Khurana
              </div>
            </div>
          </div>

          <div className="w-[283px] h-[420px] rounded-[16px] border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.05)] flex flex-col justify-between relative overflow-hidden">
            <div className="hidden">
              <span>
                <BiX style={{ fontSize: "24px" }} />
              </span>
            </div>
            <div className="block w-full h-full relative">
              <div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
                <img
                  className="block align-middle"
                  src="https://www.intract.io/assets/reel-video-ee824737.svg"
                  alt="reel-icon"
                />
              </div>
              <span className="inline-flex justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-2/4 transform -translate-x-1/2 -translate-y-1/2 text-[36px] h-[60px] w-[60px] left-2/4 cursor-pointer opacity-0 transition-transform duration-300 ease-in-out">
                <BsFilePlayFill className="mt-1 ml-1" />
              </span>
              <img
                className="absolute bottom-[-90px] left-0 w-full h-[100px] filter blur-[15px] object-bottom scale-[2]"
                src="https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png"
                alt="How does Uniswap actually work?"
              />
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/g9DNJRPBLFc"
                title="How to style traditional outfit"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="text-shadow-[0px_0px_5px_rgba(0,0,0,.1)] text-[24px] font-normal leading-[30px] tracking-[.117px] absolute bottom-[12px] left-[15px] overflow-hidden overflow-ellipsis">
                Vishal Pandey
              </div>
            </div>
          </div>

          <div className="w-[283px] h-[420px] rounded-[16px] border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.05)] flex flex-col justify-between relative overflow-hidden">
            <div className="hidden">
              <span>
                <BiX style={{ fontSize: "24px" }} />
              </span>
            </div>
            <div className="block w-full h-full relative">
              <div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
                <img
                  className="block align-middle"
                  src="https://www.intract.io/assets/reel-video-ee824737.svg"
                  alt="reel-icon"
                />
              </div>
              <span className="inline-flex justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-2/4 transform -translate-x-1/2 -translate-y-1/2 text-[36px] h-[60px] w-[60px] left-2/4 cursor-pointer opacity-0 transition-transform duration-300 ease-in-out">
                <BsFilePlayFill className="mt-1 ml-1" />
              </span>
              <img
                className="absolute bottom-[-90px] left-0 w-full h-[100px] filter blur-[15px] object-bottom scale-[2]"
                src="https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png"
                alt="How to spot crypto projects to invest in?"
              />
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/kmnO0AKlWy0"
                title="Festive Special 🔥 "
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="text-shadow-[0px_0px_5px_rgba(0,0,0,.1)] text-[24px] font-normal leading-[30px] tracking-[.117px] absolute bottom-[12px] left-[15px] overflow-hidden overflow-ellipsis">
                Vaibhav keswani
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white min-h-[1px] max-h-px my-[3rem] opacity-10"></section>
      <DictionaryComponent />
      {/* <StickyButton /> */}
    </div>
  );
};

export default Home;
