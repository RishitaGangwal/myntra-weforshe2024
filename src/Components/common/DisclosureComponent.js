import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { useState } from "react";
import { Modal, Button, Form, Input, message } from "antd";

const DisclosureComponent = ({
  DisclosureImage,
  title,
  description,
  xpCount,
  category,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [videoUrl, setVideoUrl] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form Values:", values);
        message.success("Form submitted successfully!");
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setVideoUrl("");
  };

  const handleVideoUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const getYouTubeEmbedUrl = (url) => {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2]
      ? `https://www.youtube.com/embed/${match[2]}`
      : null;
  };

  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5 px-5">
      <Disclosure as="div" className="p-6 relative" defaultOpen={false}>
        <DisclosureButton className="group flex items-center justify-between w-[450px]">
          <span className="flex-[0_0_160px] h-[180px] p-[4px] rounded-[16px] border-[1px] border-[solid] border-[rgba(255,255,255,.2)] bg-[var(--White-05,_rgba(255,_255,_255,_.05))] relative">
            <img
              className="object-cover w-full h-full rounded-[12px]"
              src={DisclosureImage}
              alt=""
            />
            <div className="w-max px-[24px] py-[11px] gap-[8px] rounded-[1000px] border-[1px] border-[solid] border-[var(--White-20,rgba(255,255,255,.2))] bg-[var(--Black-40,_rgba(0,_0,_0,_.4))] [box-shadow:0_0_5px_#0000001a] backdrop-filter backdrop-blur-[10px] absolute bottom-[16px] left-2/4 -translate-x-1/2">
              {category}
            </div>
          </span>
          <div className="flex flex-col text-left ml-[15px] backdrop-filter backdrop-blur-[5px]">
            <div className="text-[23px] font-normal leading-[30px] mb-[8px]">
              {title}
            </div>
            <div className="text-[16px] font-normal leading-[20px] mb-[16px] overflow-hidden md:line-clamp-2 line-clamp-1 opacity-50">
              {description}
            </div>
            <hr
              className="relative w-full opacity-20"
              style={{
                borderStyle: "dashed",
                borderWidth: "0.5px",
                borderColor: "currentColor",
                borderImage:
                  "repeating-linear-gradient(to right, currentColor 0, currentColor 4px, transparent 4px, transparent 8px) 40",
              }}
            />
            <div className="mt-[16px] flex">
              <div className="mr-2 h-[32px] px-[12px] py-[8px] justify-center items-start rounded-[1000px] border-[.5px] border-[solid] border-[rgba(255,255,255,.05)] bg-[rgba(255,_255,_255,_.07)] text-[14px] font-normal leading-[16px] flex items-center gap-[4px] w-max">
                <img
                  src="https://www.intract.io/assets/xp-icon-aacd204a.svg"
                  alt=""
                  width="18"
                  height="16"
                />
                {xpCount} XPs
              </div>

              <div
                onClick={showModal}
                className="uppercase h-[32px] px-[12px] py-[8px] justify-center items-start rounded-[1000px] border-[.5px] border-[solid] border-[rgba(255,255,255,.05)] bg-[rgba(255,_255,_255,_.07)] text-[14px] font-normal leading-[16px] flex items-center gap-[4px] w-max"
              >
                <MdOutlineSlowMotionVideo />
                Upload Video
              </div>
            </div>
          </div>
          <FaCaretDown className="size-6 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180 transition-1500 ml-[5px] mb-[170px] opacity-50" />
        </DisclosureButton>

        <Disclosure.Panel className="max-h-[350px] overflow-y-auto pr-4 mt-3 bg-[#111110] md:line-clamp-0 line-clamp-1 ">
          <div className="flex-col rounded-[12px] border-[1px] border-[solid] border-[var(--White-05,rgba(255,255,255,.05))] bg-[var(--White-05,_rgba(255,_255,_255,_.05))] p-[8px] flex items-center gap-[16px] cursor-pointer transition mb-2.5">
            <h3 className="text-lg font-semibold mb-1">Competition Rules</h3>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>
                Participants must be at least 18 years old and reside in India.
              </li>
              <li>
                Reels must be original, no longer than 60 seconds, and submitted
                by deadline.
              </li>
              <li>
                Voting will be open to the public from 16/07/2024 to 20/07/2024.
                Each person can vote once per reel.
              </li>
              <li>
                The reel with the highest number of votes by the end of the
                voting period will be declared the winner.
              </li>
              <li>
                Mynta & StyleFest is not responsible for any technical issues or
                failures during submission or voting.
              </li>
            </ul>
          </div>
          <div></div>
        </Disclosure.Panel>
      </Disclosure>
      <Modal
        title="Upload Video"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        <Form
          form={form}
          layout="vertical"
          name="upload_video_form"
          initialValues={{
            name: "",
            email: "",
            phone: "",
            youtubeLink: "",
          }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please enter your phone number" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="youtubeLink"
            label="YouTube Link"
            rules={[
              { required: true, message: "Please enter a YouTube link" },
              { type: "url", message: "Please enter a valid URL" },
            ]}
          >
            <Input onChange={handleVideoUrlChange} />
          </Form.Item>
        </Form>
        {embedUrl && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <iframe
              width="450"
              height="200"
              src={embedUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
            ></iframe>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DisclosureComponent;
