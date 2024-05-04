import React from "react";
import Navigation from "../components/navigation.jsx";
import Profile from "../assets/profile.png";
import About from "../assets/about.jpg";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineWorkHistory } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import Portfolio from "../assets/portfolio.png";
import Portfolio2 from "../assets/portfolio2.png";
import Portfolio3 from "../assets/portfolio3.jpg";
import { Analytics } from '@vercel/analytics/react';

function Main() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="body-font font-nunito w-screen h-full">
      <Analytics />
      <Navigation />
      <div className="flex justify-center" id="home">
        <div className="flex justify-between pt-24 space-x-[280px] ">
          <div className="content-center mt-36 ml-[-60px]">
            <h1 className="font-semibold text-primary text-xl w-max">
              Halo Semua 👋, saya
              <span className="mt-1 block text-5xl font-bold text-dark">
                Aniec Anafisah Pratiwi
              </span>
            </h1>
            <h2 className="mb-5 text-lg font-medium text-secondary lg:text-2xl">
              Designer & <span className="text-dark"> Web Developer</span>
            </h2>
            <p className="mb-10 font-medium leading-relaxed text-secondary">
              Motto Hidup : "Bahagiakan orang tuamu dengan keberhasilanmu."
            </p>
            <a
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg cursor-pointer"
            >
              Hubungi Saya
            </a>
          </div>

          <div className="relative">
            <img
              src={Profile}
              alt="Aniec Anafisah"
              className="relative z-10 w-[350px]"
            />
            <span className="absolute bottom-[-100px] left-[160px] -translate-x-1/2 scale-12">
              <svg
                width="470"
                height="470"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#14b8a6"
                  d="M47.4,-51C59.2,-35.6,65.1,-17.8,63.4,-1.7C61.7,14.5,52.6,28.9,40.8,36.6C28.9,44.2,14.5,45,-2,47C-18.4,49,-36.8,52.1,-45.4,44.5C-53.9,36.8,-52.5,18.4,-51.2,1.3C-49.9,-15.8,-48.7,-31.7,-40.2,-47.1C-31.7,-62.4,-15.8,-77.3,1,-78.3C17.8,-79.2,35.6,-66.3,47.4,-51Z"
                  transform="translate(100 100) scale(1.1)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className=" pt-24 w-screen pb-20" id="about">
        <div className="flex justify-center pt-4 pb-14">
          <h2 className="text-3xl text-primary font-bold relative">
            Tentang Saya
            <span className="absolute bottom-[-10px] left-6 w-3/4 h-1 bg-primary"></span>
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="mr-32 ml-12">
            <img
              src={About}
              alt="Aniec Anafisah"
              className="border rounded-lg w-[300px] h-[400px] "
            />
          </div>
          <div className="content-center">
            <h2 className="text-2xl text-slate-900 font-bold pb-4">
              Saya Aniec
            </h2>
            <p className="text-xl text-slate-600 w-[500px]">
            Saya adalah seorang mahasiswi berusia 21 tahun di Universitas Amikom Puwokerto Jurusan Sistem Informasi yang memiliki minat pada desain dan web developer. Saya suka mempelajari hal baru dan mudah bergaul. Saya memiliki hobi bermain bulu tangkis dan mendengarkan musik.
            </p>
            <div className="flex items-center pt-4">
              <a
                href="https://github.com/aniecc"
                target="_blank"
                className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaGithub fontSize="20px" />
              </a>

              <a
                href="https://www.instagram.com/aniecanafisaaa/"
                target="_blank"
                className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaInstagram fontSize="20px" />
              </a>

              <a
                href="https://twitter.com/aniecanafisaa"
                target="_blank"
                className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaTwitter fontSize="20px" />
              </a>

              <a
                href="https://www.linkedin.com/in/aniec-10ba70230/"
                target="_blank"
                className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaLinkedin fontSize="20px" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen pt-24 pb-24" id="resume">
        <div className="flex justify-center pt-4 pb-14">
          <h2 className="text-3xl text-primary font-bold relative">
            Resume
            <span className="absolute bottom-[-10px] left-4 w-3/4 h-1 bg-primary"></span>
          </h2>
        </div>
        <div className="flex justify-center px-4">
          <div className="flex justify-between space-x-60">
            <div>
              <div className="inline-flex items-center">
                <div className="relative bg-white w-12 h-12 border-[1px] border-primary rounded-lg flex justify-center items-center text-primary shadow-lg">
                  <IoBookOutline fontSize="20px" />
                </div>
                <h3 className="ml-4 font-bold text-xl text-slate-800">
                  Pendidikan
                </h3>
              </div>
              <div className="h-12 w-[2px] bg-primary ml-6 mt-1"></div>
              <div className="inline-flex">
                <p className="flex h-5 w-5 items-center justify-center ml-3.5 mt-1 rounded-full border-2 border-primary text-primary">
                  <GoDotFill fontSize="14px" />
                </p>
                <div className="block">
                  <p className="ml-4 text-md font-bold">
                    Universitas Amikom Purwokerto
                  </p>
                  <p className="ml-4 text-md font-semibold text-primary">
                    2021 - 2024
                  </p>
                </div>
              </div>
              <div className="h-14 w-[2px] bg-primary ml-6 mt-[-18px]"></div>
              <div className="inline-flex">
                <p className="flex h-5 w-5 items-center justify-center ml-3.5 mt-1 rounded-full border-2 border-primary text-primary">
                  <GoDotFill fontSize="14px" />
                </p>
                <div className="block">
                  <p className="ml-4 text-md font-bold">
                    SMK Negeri 1 Banyumas
                  </p>
                  <p className="ml-4 text-md font-semibold text-primary">
                    2017 - 2020
                  </p>
                </div>
              </div>
              <div className="h-14 w-[2px] bg-primary ml-6 mt-[-18px]"></div>
              <div className="inline-flex">
                <p className="flex h-5 w-5 items-center justify-center ml-3.5 mt-1 rounded-full border-2 border-primary text-primary">
                  <GoDotFill fontSize="14px" />
                </p>
                <div className="block">
                  <p className="ml-4 text-md font-bold">SMP Negeri 1 Kroya</p>
                  <p className="ml-4 text-md font-semibold text-primary">
                    2014 - 2017
                  </p>
                </div>
              </div>
              <div className="h-14 w-[2px] bg-primary ml-6 mt-[-18px]"></div>
              <div className="inline-flex">
                <p className="flex h-5 w-5 items-center justify-center ml-3.5 mt-1 rounded-full border-2 border-primary text-primary">
                  <GoDotFill fontSize="14px" />
                </p>
                <div className="block">
                  <p className="ml-4 text-md font-bold">MI Negeri Pekuncen</p>
                  <p className="ml-4 text-md font-semibold text-primary">
                    2008 - 2014
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center">
                <div className="relative bg-white w-12 h-12 border-[1px] border-primary rounded-lg flex justify-center items-center text-primary shadow-lg">
                  <MdOutlineWorkHistory fontSize="20px" />
                </div>
                <h3 className="ml-4 font-bold text-xl text-slate-800">
                  Pengalaman
                </h3>
              </div>
              <div className="h-12 w-[2px] bg-primary ml-6 mt-1"></div>
              <div className="inline-flex">
                <p className="flex h-5 w-5 items-center justify-center ml-3.5 mt-1 rounded-full border-2 border-primary text-primary">
                  <GoDotFill fontSize="14px" />
                </p>
                <div className="block">
                  <p className="ml-4 text-md font-bold">Lorem Ipsum</p>
                  <p className="ml-4 text-md font-semibold text-primary">
                    2021 - 2024
                  </p>
                </div>
              </div>
              <div className="h-14 w-[2px] bg-primary ml-6 mt-[-18px]"></div>
              <div className="inline-flex">
                <p className="flex h-5 w-5 items-center justify-center ml-3.5 mt-1 rounded-full border-2 border-primary text-primary">
                  <GoDotFill fontSize="14px" />
                </p>
                <div className="block">
                  <p className="ml-4 text-md font-bold">Lorem Ipsum</p>
                  <p className="ml-4 text-md font-semibold text-primary">
                    2017 - 2020
                  </p>
                </div>
              </div>
              <div className="h-14 w-[2px] bg-primary ml-6 mt-[-18px]"></div>
              <div className="inline-flex">
                <p className="flex h-5 w-5 items-center justify-center ml-3.5 mt-1 rounded-full border-2 border-primary text-primary">
                  <GoDotFill fontSize="14px" />
                </p>
                <div className="block">
                  <p className="ml-4 text-md font-bold">Lorem Ipsum</p>
                  <p className="ml-4 text-md font-semibold text-primary">
                    2014 - 2017
                  </p>
                </div>
              </div>
              <div className="h-14 w-[2px] bg-primary ml-6 mt-[-18px]"></div>
              <div className="inline-flex">
                <p className="flex h-5 w-5 items-center justify-center ml-3.5 mt-1 rounded-full border-2 border-primary text-primary">
                  <GoDotFill fontSize="14px" />
                </p>
                <div className="block">
                  <p className="ml-4 text-md font-bold">Lorem Ipsum</p>
                  <p className="ml-4 text-md font-semibold text-primary">
                    2008 - 2014
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen pt-24 pb-24" id="portfolio">
        <div className="flex justify-center pt-4 pb-14">
          <h2 className="text-3xl text-primary font-bold relative">
            Portfolio
            <span className="absolute bottom-[-10px] left-4 w-3/4 h-1 bg-primary"></span>
          </h2>
        </div>
        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img
                src={Portfolio}
                alt="Final Project Pemrograman Visual"
                className="h-[300px] w-full"
              />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark ">
              Aplikasi Administrasi Sekolah
            </h3>
            <p className="text-base font-medium text-secondary">
            Aplikasi sederhana administrasi sekolah dibuat untuk memenuhi tugas matakuliah pemrograman visual.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img
                src={Portfolio2}
                alt="Web Portfolio"
                className="h-[300px] w-full"
              />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark ">
              Web Portfolio
            </h3>
            <p className="text-base font-medium text-secondary">
            Website portofolio dibuat untuk memenuhi tugas studi independent program web development di Infinite Learning.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img
                src={Portfolio3}
                alt="Technical Documentation"
                className="h-[300px] w-full"
              />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark ">
              Web Bimbingan Belajar
            </h3>
            <p className="text-base font-medium text-secondary">
            Website bimbel dibuat untuk memenuhi tugas matakuliah sistem terdistribusi.
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen pt-24 pb-24" id="contact">
        <div className="flex justify-center pt-4 pb-14">
          <h2 className="text-3xl text-primary font-bold relative">
            Kontak
            <span className="absolute bottom-[-10px] left-4 w-3/4 h-1 bg-primary"></span>
          </h2>
        </div>
        <form>
          <div className="w-full lg:mx-auto lg:w-2/3">
            <div className="mb-8 w-full px-4">
              <label
                htmlFor="name"
                className="text-base font-bold text-primary"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="mb-8 w-full px-4">
              <label
                htmlFor="email"
                className="text-base font-bold text-primary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="mb-8 w-full px-4">
              <label
                htmlFor="message"
                className="text-base font-bold text-primary"
              >
                Pesan
              </label>
              <textarea
                type="email"
                id="email"
                className="h-32 w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button className="w-full rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg">
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Main;
