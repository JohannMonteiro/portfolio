import React from "react";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nisi
          temporibus ea consectetur quidem! Sed, delectus. Veniam fugit ea
          placeat quisquam delectus, quidem rerum voluptatibus repellendus. Sunt
          cum mollitia expedita?
        </p>
        <div className=" socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
        <form className="flex flex-col gap-4">
          <label htmlFor="email" type="email" className="text-white block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            type="email"
            id="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray text-sm rounded-lg block w-full p-2.5"
            placeholder="jacob.google.com"
          />
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
