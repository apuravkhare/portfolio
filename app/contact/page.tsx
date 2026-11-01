'use client';

import backgroundImage from '../../public/DSCF2171.webp';
import { Description, Label, ListBox, Surface } from '@heroui/react';
import { Check, Copy, ExternalLink, Instagram, Linkedin, Mail } from 'react-feather';
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
    <button onClick={handleCopy}>
      <div className="flex flex-row gap-2 cursor-pointer items-center">
        <Mail />
        <div className="flex flex-col">
          <Label>Email</Label>
          <Description>me_at_apuravkhare.com</Description>
        </div>
        {isCopied ? <Check /> : <Copy />}
      </div>
    </button>
  )
}

function LinkedInItem() {
  return (
    <a href="https://www.linkedin.com/in/apuravkhare" target="_blank" rel="noopener noreferrer">
      <div className="flex flex-row gap-2 cursor-pointer items-center">
        <Linkedin />
        <div className="flex flex-col">
          <Label>LinkedIn</Label>
          <Description>apuravkhare</Description>
        </div>
        <div className="absolute right-2">
          <ExternalLink />
        </div>
      </div>
    </a>
  )
}

function InstagramItem() {
  return (
    <a href="https://www.instagram.com/apurav.khare" target="_blank" rel="noopener noreferrer">
      <div className="flex flex-row gap-2 cursor-pointer items-center">
        <Instagram />
        <div className="flex flex-col">
          <Label>Instagram</Label>
          <Description>apurav.khare</Description>
        </div>
        <div className="absolute right-2">
          <ExternalLink />
        </div>
      </div>
    </a>
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
      <Surface className="rounded-3xl p-6">
        <ListBox aria-label="Contacts" selectionMode="single">
          <ListBox.Item textValue="Email">
            <EmailItem />
          </ListBox.Item>

          <ListBox.Item textValue="LinkedIn">
            <LinkedInItem />
          </ListBox.Item>

          <ListBox.Item textValue="Instagram">
            <InstagramItem />
          </ListBox.Item>
        </ListBox>
      </Surface>
    </div>
  )
}
