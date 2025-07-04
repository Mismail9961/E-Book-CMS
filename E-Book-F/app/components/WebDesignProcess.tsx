import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react"; // optional icons

const processSteps = [
  {
    id: "04",
    title: "Let's Meet",
    desc: "We want to dig deep, and find out what makes you tick. Your values, expertise and company history are behind everything we do, so let us really get to know you.",
    icon: <ChevronLeft className="text-blue-400 w-6 h-6" />,
  },
  {
    id: "05",
    title: "Let's Meet",
    desc: "We want to dig deep, and find out what makes you tick. Your values, expertise and company history are behind everything we do, so let us really get to know you.",
  },
  {
    id: "01",
    title: "Let's Meet",
    desc: "We want to dig deep, and find out what makes you tick. Your values, expertise and company history are behind everything we do, so let us really get to know you.",
    icon: <ChevronRight className="text-blue-400 w-6 h-6" />,
  },
];

const WebDesignProcess = () => {
  return (
    <section className="bg-gradient-to-br from-[#f7f8fc] via-white to-[#eaf1ff] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-[#281D75] font-bold text-[27px]">How it works</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d0d0d]">
          Our Web Design Process
        </h2>
        <p className="mt-4 text-[#333] text-[17px] max-w-2xl mx-auto">
          We’ve refined our process as a web design agency through designing &
          developing websites for years.
        </p>
      </div>

      {/* Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md relative"
          >
            {/* Icon */}
            {step.icon && (
              <div className={`absolute top-1/2 -translate-y-1/2 ${step.id === "01" ? "right-4" : "left-4"}`}>
                {step.icon}
              </div>
            )}

            <p className="text-4xl font-bold text-cyan-400 mb-2">{step.id}</p>
            <h3 className="text-xl font-semibold text-[#1c1c1c] mb-2">
              {step.title}
            </h3>
            <p className="text-[#333] text-[15px]">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebDesignProcess;
