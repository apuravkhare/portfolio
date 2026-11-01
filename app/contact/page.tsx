'use client';

import backgroundImage from '../../public/DSCF2171.webp';
import { Check, Copy, ExternalLink, Instagram, Linkedin, Mail } from 'react-feather';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react';

function EmailItem() {
  const [isCopied, setIsCopied] = useState(false);
  const textToCopy = "me@apuravkhare.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text to clipboard: ', err);
    }
  };

  return (
    <div onClick={handleCopy} className="flex flex-row gap-2 cursor-pointer items-center">
      <Mail />
      <div className="flex flex-col">
        <h1 className="text-lg bold">Email</h1>
        <p>me_at_apuravkhare.com</p>
      </div>
      {isCopied ? <Check /> : <Copy />}
    </div>
  )
}

function LinkedInItem() {
  return (
    <div>
      <a href="https://www.linkedin.com/in/apuravkhare" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row gap-2 cursor-pointer items-center">
          <Linkedin />
          <div className="flex flex-col">
            <h1 className="text-lg bold">LinkedIn</h1>
            <p>apuravkhare</p>
          </div>
          <div className="ms-auto">
            <ExternalLink />
          </div>
        </div>
      </a>
    </div>
  )
}

function InstagramItem() {
  return (
    <div>
      <a href="https://www.instagram.com/apurav.khare" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row gap-2 cursor-pointer items-center">
          <Instagram />
          <div className="flex flex-col">
            <h1 className="text-lg bold">Instagram</h1>
            <p>apurav.khare</p>
          </div>
          <div className="ms-auto">
            <ExternalLink />
          </div>
        </div>
      </a>
    </div>
  )
}

export default function Contact() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
      className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-bold p-2">
        Reach out, say hi!
      </h1>
      <div className="flex flex-col rounded-3xl p-6 surface-card gap-3">
        <EmailItem />
        <LinkedInItem />
        <InstagramItem />
      </div>
    </div >
  )
}
