import React from "react";
import {
  BiLogoTwitter,
  BiLogoDiscord,
  BiLogoTelegram,
  BiLogoSpotify,
  BiLogoPlayStore,
} from "react-icons/bi";
import { FaApple, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="opacity-1">
      <section className="bg-white min-h-[1px] max-h-px my-[8rem] opacity-10"></section>
      <div className="max-w-[1200px] mx-auto p-4 lg:p-[2em]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:pr-[120px]">
          <a
            href="/"
            className="max-w-[300px] gap-y-[18px] flex-col items-start flex mb-4 lg:mb-0"
          >
            <div>
              <a
                className="float-left text-[#333] no-underline relative"
                href="/"
              >
                <div className="d-none d-md-block">
                  <div className="text-white h3 mb-0 text-2xl">MYNTRA</div>
                </div>
              </a>
            </div>
            <div className="footer-paragraph-holder">
              <p className="text-[#7d7d7d] mb-[10px] font-normal leading-[1.3] w-[250px] mr-[5rem]">
                Join us to showcase your styling skills and win exciting
                rewards!
              </p>
            </div>
          </a>
          <div className="flex flex-wrap gap-8 lg:gap-x-[60px]">
            <FooterColumn title="ONLINE SHOPPING">
              <FooterLink href="/men">MEN</FooterLink>
              <FooterLink href="/women">WOMEN</FooterLink>
              <FooterLink href="/kids">KIDS</FooterLink>
              <FooterLink href="/beauty">BEAUTY</FooterLink>
              <FooterLink href="/studio">STUDIO</FooterLink>
            </FooterColumn>
            <FooterColumn title="CUSTOMER POLICIES">
              <FooterLink href="/contact">Contact Us </FooterLink>
              <FooterLink href="/FAQ">FAQ</FooterLink>
              <FooterLink href="/T&C">T&C</FooterLink>
              <FooterLink href="/terms">Terms of Use</FooterLink>
            </FooterColumn>
            <FooterColumn title="EXPERIENCE MYNTRA APP ON MOBILE">
              <img
                width="150px"
                src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
              />
              <img
                width="150px"
                src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
              />
            </FooterColumn>

            <FooterColumn title="KEEP IN TOUCH">
              <div className="flex items-center space-x-4 mt-4 lg:mt-0 ">
                <FooterIcon icon={<FaFacebookSquare color="gray-800" />} />
                <FooterIcon icon={<BiLogoTwitter color="gray-800" />} />
                <FooterIcon icon={<FaYoutube color="gra-800" />} />
                <FooterIcon icon={<TiSocialInstagram color="gra-800" />} />
              </div>
            </FooterColumn>
            {/* <FooterColumn title="">
              <FooterLink
                href="https://stylefest-io.notion.site/stylefest-Quests-Campaigns-FAQ-6ac66e1a71374f0b9d1f90fe92c7928f?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Help Center
              </FooterLink>
              <FooterLink
                href="https://app.stylefest.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Create your quest
              </FooterLink>
              <FooterLink
                href="https://stylefest.gitbook.io/website-policies/stylefest-terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </FooterLink>
              <FooterLink
                href="https://stylefest.gitbook.io/website-policies/stylefest-privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </FooterLink>
              <FooterLink
                href="https://stylefest.gitbook.io/website-policies/stylefest-community-guidelines"
                target="_blank"
                rel="noopener noreferrer"
              >
                Community Guidelines
              </FooterLink>
            </FooterColumn> */}
          </div>
        </div>
        <div className="w-full border-t border-[#2b2b2b] flex flex-col lg:flex-row justify-between items-center mt-[40px] pt-[40px]">
          <p className="max-w-[1200px] text-sm lg:text-base opacity-50">
            <span className="text-white font-bold">Disclaimer: </span>
            StyleFest themes and challenges are subject to change without prior
            notice. While we strive to provide up-to-date and accurate
            information, unforeseen circumstances may result in changes or
            cancellations of scheduled challenges.
          </p>
        </div>
        <div className="w-full border-t border-[#2b2b2b] mt-[40px] pt-[40px] flex flex-col lg:flex-row justify-between items-center">
          <div className="uppercase text-sm lg:text-base font-normal">
            Organized by StyleFest
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <FooterIcon icon={<BiLogoTwitter color="1D9BF0" />} />
            <FooterIcon icon={<BiLogoDiscord color="5865F2" />} />
            <FooterIcon icon={<BiLogoTelegram color="32ABE2" />} />
            <FooterIcon icon={<BiLogoSpotify color="1ED760" />} />
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterColumn = ({ title, children }) => (
  <div className="gap-y-[10px] flex-col justify-start items-start flex">
    <div className="tracking-[0] uppercase font-normal leading-[1.2]">
      {title}
    </div>
    {children}
  </div>
);

const FooterLink = ({ href, target, children }) => (
  <a
    className="text-[#7d7d7d] leading-[1.2] no-underline transition-colors duration-[0.475s]"
    href={href}
    target={target}
  >
    {children}
  </a>
);

const FooterIcon = ({ icon }) => (
  <div className="bg-gray-900 rounded pointer p-2">{icon}</div>
);

export default Footer;
