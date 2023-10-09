"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        id: "skills",
        title: "Skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        )
    },
    {
        id: "education",
        title: "Education",
        content: (
            <ul className="list-disc pl-2">
                <li>Fullstack Acadcemy of Code</li>
                <li>Universiti of California, Santa cruz</li>
            </ul>
        )
    },
    {
        id: "certification",
        title: "Certification",
        content: (
            <ul className="list-disc pl-2">
                <li>AWS CLoud Pratictioner</li>
                <li>Google professional developer </li>
            </ul>
        )
    },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt=" " src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
            iste. Reiciendis vitae architecto, repellat veritatis tempore quod
            expedita debitis sed at, dolores excepturi libero magnam quos in,
            quam corrupti doloremque!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certification{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
