"use client";
import { useState } from "react";

export const ContactUs = () => {
  const [activeStep, setActiveStep] = useState<"sayHi" | "getQuote">("sayHi");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (name === "email" || name === "message") {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", message: "" };

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    // Message validation
    if (!formData.message) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, submit it
      console.log("Form submitted:", formData);
      // Reset form after submission
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }
  };

  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 space-y-10 w-full">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center justify-center lg:justify-start">
        <div className="px-3 py-1 h-fit bg-[#B9FF66] text-3xl md:text-4xl lg:text-5xl font-bold">
          Contact Us
        </div>
        <p className="max-w-[323px] text-base md:text-lg text-center lg:text-left">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col md:flex-row items-center justify-between">
        {/* Form Container */}
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-full gap-2.5 px-5 lg:px-[100px] pt-[60px] pb-20 rounded-[45px] bg-[#f3f3f3]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 md:gap-10 w-full max-w-[1000px]"
          >
            {/* Form Steps */}
            <div className="flex items-center gap-4 md:gap-[35px]">
              <div
                className={`flex items-center gap-2 cursor-pointer ${
                  activeStep === "sayHi" ? "text-black" : "text-gray-500"
                }`}
                onClick={() => setActiveStep("sayHi")}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center border border-black ${
                    activeStep === "sayHi" ? "bg-white" : "bg-transparent"
                  }`}
                >
                  {activeStep === "sayHi" && (
                    <div className="w-4 h-4 rounded-full bg-[#B9FF66]"></div>
                  )}
                </div>
                <span className="text-lg">Say Hi</span>
              </div>

              <div
                className={`flex items-center gap-2 cursor-pointer ${
                  activeStep === "getQuote" ? "text-black" : "text-gray-500"
                }`}
                onClick={() => setActiveStep("getQuote")}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center border border-black ${
                    activeStep === "getQuote" ? "bg-white" : "bg-transparent"
                  }`}
                >
                  {activeStep === "getQuote" && (
                    <div className="w-4 h-4 rounded-full bg-[#B9FF66]"></div>
                  )}
                </div>
                <span className="text-lg">Get a Quote</span>
              </div>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-6 md:gap-[25px]">
              <div className="flex flex-col gap-[5px]">
                <label htmlFor="name" className="text-base text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full px-[30px] py-[18px] rounded-[14px] bg-white border border-black text-lg placeholder:text-[#898989] focus:outline-none focus:ring-2 focus:ring-[#B9FF66]"
                />
              </div>

              <div className="flex flex-col gap-[5px]">
                <label htmlFor="email" className="text-base text-black">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className={`w-full px-[30px] py-[18px] rounded-[14px] bg-white border ${
                    errors.email ? "border-red-500" : "border-black"
                  } text-lg placeholder:text-[#898989] focus:outline-none focus:ring-2 focus:ring-[#B9FF66]`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col gap-[5px]">
                <label htmlFor="message" className="text-base text-black">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  className={`w-full h-[190px] px-[30px] py-[18px] rounded-[14px] bg-white border ${
                    errors.message ? "border-red-500" : "border-black"
                  } text-lg placeholder:text-[#898989] resize-none focus:outline-none focus:ring-2 focus:ring-[#B9FF66]`}
                  required
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-[35px] py-5 rounded-[14px] bg-[#191a23] text-xl text-white hover:bg-black transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Decorative Star SVG - Hidden on small screens */}
        <div className="hidden md:block absolute -right-96 top-1/2 transform -translate-y-1/2 w-[40%] lg:w-[45%] h-auto z-0">
          <svg
            viewBox="0 0 692 649"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="xMinYMid meet"
          >
            <mask
              id="mask0_341_618"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={41}
              y={0}
              width={651}
              height={649}
            >
              <mask
                id="path-1-outside-1_341_618"
                maskUnits="userSpaceOnUse"
                x="40.7109"
                y="-0.5"
                width={651}
                height={650}
                fill="black"
              >
                <rect
                  fill="white"
                  x="40.7109"
                  y="-0.5"
                  width={651}
                  height={650}
                />
                <path d="M366.641 162.061L387.068 0.5L386.909 163.337L427.445 5.60362L407.017 167.165L467.024 15.6514L426.488 173.545L505.007 30.6432L444.841 182.157L540.756 50.2603L462.077 193.162L573.632 74.343L477.876 206.08L603.475 102.253L491.761 220.913L629.489 133.673L503.73 237.499L651.353 168.122L513.625 255.362L668.749 204.964L521.126 274.341L681.356 243.719L526.233 294.118L689.017 283.751L528.786 314.213L691.57 324.42L528.786 334.628L689.017 365.09L526.233 354.883L681.356 405.121L521.126 374.659L668.749 444.036L513.625 393.638L651.353 480.878L503.73 411.501L629.489 515.328L491.761 427.928L603.475 546.747L477.876 442.76L573.632 574.657L462.077 455.838L540.756 598.58L444.841 466.684L505.007 618.197L426.488 475.455L467.024 633.189L407.017 481.676L427.445 643.396L386.909 485.503L387.068 648.5L366.641 486.779L346.213 648.5L346.213 485.503L305.676 643.396L326.264 481.676L266.257 633.189L306.794 475.455L228.274 618.197L288.44 466.684L192.526 598.58L271.205 455.838L159.49 574.657L255.405 442.76L129.806 546.747L241.52 427.928L103.792 515.328L229.551 411.501L81.9282 480.878L219.656 393.638L64.5326 444.036L212.155 374.659L51.9248 405.121L207.048 354.883L44.2644 365.09L204.495 334.628L41.7109 324.42L204.495 314.213L44.2644 283.751L207.048 294.118L51.9248 243.719L212.155 274.341L64.5326 204.964L219.656 255.362L81.9282 168.122L229.551 237.499L103.792 133.673L241.52 220.913L129.806 102.253L255.405 206.08L159.49 74.343L271.205 193.162L192.526 50.2603L288.44 182.157L228.274 30.6432L306.794 173.545L266.257 15.6514L326.264 167.165L305.676 5.60362L346.213 163.337V0.5L366.641 162.061Z" />
              </mask>
              <path
                d="M366.641 162.061L387.068 0.5L386.909 163.337L427.445 5.60362L407.017 167.165L467.024 15.6514L426.488 173.545L505.007 30.6432L444.841 182.157L540.756 50.2603L462.077 193.162L573.632 74.343L477.876 206.08L603.475 102.253L491.761 220.913L629.489 133.673L503.73 237.499L651.353 168.122L513.625 255.362L668.749 204.964L521.126 274.341L681.356 243.719L526.233 294.118L689.017 283.751L528.786 314.213L691.57 324.42L528.786 334.628L689.017 365.09L526.233 354.883L681.356 405.121L521.126 374.659L668.749 444.036L513.625 393.638L651.353 480.878L503.73 411.501L629.489 515.328L491.761 427.928L603.475 546.747L477.876 442.76L573.632 574.657L462.077 455.838L540.756 598.58L444.841 466.684L505.007 618.197L426.488 475.455L467.024 633.189L407.017 481.676L427.445 643.396L386.909 485.503L387.068 648.5L366.641 486.779L346.213 648.5L346.213 485.503L305.676 643.396L326.264 481.676L266.257 633.189L306.794 475.455L228.274 618.197L288.44 466.684L192.526 598.58L271.205 455.838L159.49 574.657L255.405 442.76L129.806 546.747L241.52 427.928L103.792 515.328L229.551 411.501L81.9282 480.878L219.656 393.638L64.5326 444.036L212.155 374.659L51.9248 405.121L207.048 354.883L44.2644 365.09L204.495 334.628L41.7109 324.42L204.495 314.213L44.2644 283.751L207.048 294.118L51.9248 243.719L212.155 274.341L64.5326 204.964L219.656 255.362L81.9282 168.122L229.551 237.499L103.792 133.673L241.52 220.913L129.806 102.253L255.405 206.08L159.49 74.343L271.205 193.162L192.526 50.2603L288.44 182.157L228.274 30.6432L306.794 173.545L266.257 15.6514L326.264 167.165L305.676 5.60362L346.213 163.337V0.5L366.641 162.061Z"
                stroke="black"
                strokeWidth={2}
                strokeMiterlimit={10}
                mask="url(#path-1-outside-1_341_618)"
              />
            </mask>
            <g mask="url(#mask0_341_618)">
              <rect
                x="-785.721"
                y="-37.6172"
                width="1152.83"
                height="702.852"
                rx={45}
                fill="black"
              />
            </g>
            <path
              d="M95.7147 470.596L141.422 495.5L95.7147 520.604L70.7109 566.21L45.7072 520.604L0.000260592 495.5L45.7072 470.596L70.7109 424.789L95.7147 470.596Z"
              fill="#B9FF66"
            />
            <path
              d="M217.102 244.065L298.777 288.566L217.102 333.425L172.422 414.922L127.742 333.425L46.0666 288.566L127.742 244.065L172.422 162.211L217.102 244.065Z"
              fill="#191A23"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
