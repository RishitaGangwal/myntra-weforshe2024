import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BiSearch } from "react-icons/bi";
import { CiHeart, CiUser } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import clsx from "clsx";
import { useState, useRef } from "react";
import "./Navbar.css";

const navigation = [
  { name: "MEN", href: "#", current: false },
  { name: "WOMEN", href: "#", current: false },
  { name: "KIDS", href: "#", current: false },
  { name: "BEAUTY", href: "#", current: false },
  { name: "STUDIO", href: "#", current: true, isNew: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarSearch() {
  const [inputFocused, setInputFocused] = useState(false);
  const inputRef = useRef(null);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    if (inputRef.current && inputRef.current.value.trim() === "") {
      setInputFocused(false);
    }
  };

  return (
    <Disclosure
      as="nav"
      className="bg-white sticky top-0 w-full h-[64px] backdrop-filter backdrop-blur-[5px] border-b-[1px] px-4 sm:px-[100px] z-10 border-[rgba(255,_255,_255,_.15)] z-50"
    >
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white bg-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-50 ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-open:hidden text-white"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-open:block text-white"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Myntra Logo"
                src="https://logolook.net/wp-content/uploads/2023/01/Myntra-Emblem.png"
                className="md:h-6 w-auto h-4 md:mr-0 mr-[10rem]"
              />
            </div>
            <div
              className={clsx("hidden sm:flex relative flex space-x-4 ml-6", {
                "hidden-navigation": inputFocused,
              })}
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "text-white relative block rounded-md px-3 py-2 text-sm font-medium"
                      : "text-black hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                  )}
                >
                  {item.name === "STUDIO" && item.isNew ? (
                    <div className="flex ">
                      <div className="mx-2 text-black">STUDIO</div>
                      <div className="text-[#e733b1] font-bold text-[12px] pb-[4px] px-2 rounded-lg">
                        NEW
                      </div>
                    </div>
                  ) : (
                    item.name
                  )}
                  {item.current && (
                    <span className="absolute bottom-[-11px] left-0 w-full h-[4px] rounded-[2rem] bg-[#e733b1]" />
                  )}
                </a>
              ))}
            </div>
          </div>
          <div
            className={clsx(
              "mr-4 hidden sm:flex w-[32rem] rounded-full border-[1px] border-solid border-[#e5e4e4] bg-[rgba(255,_255,_255,_.07)] h-[42.5px] px-[20px] py-[10px] items-center relative InputExpand",
              { expanded: inputFocused }
            )}
          >
            <BiSearch color="#6d6d6d" />
            <input
              type="text"
              placeholder="Search for proucts,brands and more"
              className={clsx(
                "w-full bg-transparent py-1.5 px-3 text-md text-white outline-none"
              )}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              ref={inputRef}
            />
          </div>
          <div className="flex justify-center mt-4 lg:mt-0 gap-7">
            <div>
              <CiUser className="ml-2 " color="black" size={25} />
              <span className="text-black font-Outfit font-semibold text-sm">
                Profile
              </span>
            </div>
            <div>
              <CiHeart className="ml-4 " color="black" size={25} />
              <span className="text-black font-Outfit font-semibold text-sm">
                Wishlist
              </span>
            </div>
            <div>
              <MdOutlineShoppingBag color="#5d5d5d" size={25} />
              <span className="text-black font-Outfit font-semibold text-sm">
                Bag
              </span>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 md:bg-none bg-black">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name === "Academy" && item.isNew ? (
                <div className="flex">
                  <div className="mx-2">Academy</div>
                  <div className="text-white bg-[#6833e7] text-[12px] px-2 rounded-lg">
                    New
                  </div>
                </div>
              ) : (
                item.name
              )}
            </DisclosureButton>
          ))}
        </div>
        <div className="px-2 pt-2 pb-3">
          <div
            className={clsx(
              "w-full flex rounded-full border-[1px] border-solid border-[rgba(255,255,255,.05)] bg-[rgba(255,_255,_255,_.07)] h-[42.5px] px-[20px] py-[10px] items-center relative InputExpand",
              { expanded: inputFocused }
            )}
          >
            <BiSearch />
            <input
              type="text"
              placeholder="Search for ecosystems, trending quests etc,."
              className={clsx(
                "w-full bg-transparent py-1.5 px-3  text-sm text-white outline-none"
              )}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              ref={inputRef}
            />
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
