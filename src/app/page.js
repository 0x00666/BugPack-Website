'use client'

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import './globals.css';
import { mods } from './mods';

export default function Home() {
  const [isHidingModList, setIsHidingModList] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [svgHovered, setSvgHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const modListRef = useRef(null);

  const handleShowModListClick = () => {
    setIsHidingModList(!isHidingModList);
    setTimeout(() => {
      if (!isHidingModList && modListRef.current) {
        modListRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      {!isHidingModList && (
        <>
          <div className={`relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-blue-500 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] 
          ${'animate-in-out'}`}>
            <Image
              src="/bugpack-logo.png"
              alt="Bugpack Logo"
              width={150}
              height={24}
              priority
              className={`transition-all duration-300 transform`}
            />
          </div>

          <div className={`relative text-4xl text-center mt-8 ${'animate-in-out'}`}>
            <h1 className="font-bold">Welcome to BugPack 3.0!</h1>
            <p className="mt-3 text-lg text-center">
              If you want to download the modpack{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ptb.discord.com/channels/1070043863902851143/1219696980775669810"
                className={`transition-colors duration-300 ${linkHovered ? 'text-blue-400' : 'text-white'}`}
                onMouseEnter={() => setLinkHovered(true)}
                onMouseLeave={() => setLinkHovered(false)}
              >
                <u>
                  <strong>click here</strong>
                </u>
              </a>
            </p>
          </div>
        </>
      )}

      <div id="modList"
        ref={modListRef}
        className={`relative flex before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-blue-500 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] text-2xl font-bold text-center mb-4 flex flex-col items-center justify-center mt-8 ${isHidingModList ? 'animate-in-out' : 'hidden'
          }`}>
        <h2>MOD LIST</h2>
        <p>IP: <u>bugpack.hasted.me</u></p>
        <p>1.20.1</p>
      </div>

      <section
        id="modList"
        ref={modListRef}
        className={`flex flex-col items-center justify-center mt-8 ${isHidingModList ? 'animate-in-out' : 'hidden'
          }`}
      >
        <div className="mt-8 max-h-80 overflow-y-scroll">
          <ul className="list-disc list-inside">
            {mods.map((mod, index) => {
              const [isHovered, setIsHovered] = useState(false);
              return (
                <li key={index}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={mod.url}
                    className={`transition-colors duration-300 ${isHovered ? 'text-blue-400' : 'text-white'}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <u>
                      <strong>{mod.name}</strong>
                    </u>
                  </a>{' '}
                  by {mod.author}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <button
        style={{ marginTop: '20px' }}
        className={`bg-white text-black font-bold px-4 py-2 rounded-md mt-4 transition-all duration-300 ease-in-out ${buttonHovered ? 'hover:scale-105' : ''
          } animate-in-out`}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
        onClick={handleShowModListClick}
      >
        {isHidingModList ? 'Hide Modlist' : 'Show Modlist'}
      </button>
      {!isHidingModList && (
        <>
            <a
              className={`ease-in-out ${svgHovered ? 'hover:scale-105' : ''
                } animate-in-out`}
              style={{ padding: '10px' }}
              target="_blank"
              href="https://discord.gg/2zmhGjbBdp"
              onMouseEnter={() => setSvgHovered(true)}
              onMouseLeave={() => setSvgHovered(false)}
            >
              {isHidingModList}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                height={30}
                width={30}
                className={`transition-all duration-300 fill-blue ${svgHovered ? 'hover:scale-105' : ''
                  } ${svgHovered ? 'rotate-animation' : ''}`}
              >
                <path
                  fill="currentColor"
                  d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                />
              </svg>
            </a>
        </>
      )}
      <div className={`flex animate-in-out`}>
          <a><i>Powered By HasteD</i></a>
        </div>
    </main>
  );
}
