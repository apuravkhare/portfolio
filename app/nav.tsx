'use client';

import { Key, Orientation, Tabs } from '@heroui/react';
import { Pages } from './Pages';
import { usePathname } from 'next/navigation';
import { Accordion } from "@heroui/react";
import { ChevronDown } from 'react-feather';

function MenuTabs({ orientation }: { orientation: Orientation }) {
  const pathName = usePathname();
  const pathNameAsKey = pathName === "/" ? Pages.Home : pathName.slice(1) as Key;
  return (
    <Tabs
      orientation={orientation}
      defaultSelectedKey={Pages.Home}
      selectedKey={pathNameAsKey}
      variant="primary"
      aria-label="Navigation Tabs">
      <Tabs.ListContainer>
        <Tabs.List aria-label="Options">
          <Tabs.Tab id={Pages.Home} href="/">
            Home
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id={Pages.Code} href="/code">
            Code
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id={Pages.Art} href="/art">
            Art
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id={Pages.Music} href="/music">
            Music
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id={Pages.Contact} href="/contact">
            Contact
            <Tabs.Indicator />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
    </Tabs>
  );
}

export default function Nav() {


  return (
    <div className="absolute top-0 left-0 w-full p-2 z-50">
      <div className="hidden md:flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-200 text-shadow-2xs">
          Apurav Khare
        </h1>
        <MenuTabs orientation="horizontal" />
      </div>

      <div className="md:hidden flex items-center justify-center">
        <Accordion className="w-full max-w-md ">
          <Accordion.Item>
            <Accordion.Heading>
              <Accordion.Trigger>
                <h1 className="text-2xl font-bold text-gray-200 text-shadow-2xs">
                  Apurav Khare
                </h1>
                <Accordion.Indicator>
                  <ChevronDown />
                </Accordion.Indicator>
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body>
                <MenuTabs orientation="vertical" />
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}