'use client';

import { Disclosure, DisclosureButton, DisclosurePanel, Tab, TabGroup, TabList } from '@headlessui/react'
import allPages from './Pages';
import { usePathname } from 'next/navigation';
import { ChevronDown, Link } from 'react-feather';

function MenuTabs({ orientation }: { orientation: string }) {
  const pathName = usePathname();
  const pathNameAsKey = pathName === "/" ? 'home' : pathName.slice(1);

  return (
    <TabGroup
      vertical={orientation === 'vertical'}
      aria-label="Navigation Tabs"
    >
      <TabList aria-label="Options" className="flex gap-2">
        {allPages().map((page, index) =>
          <Tab className="rounded-full px-3 py-1 text-sm/6 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/5 data-selected:bg-white/10 data-selected:data-hover:bg-white/10" data-selected={pathNameAsKey === page.id} key={page.id}>
            <a href={`/${page.id === 'home' ? '' : page.id}`}>
              {page.display}
            </a>
          </Tab>
        )}
      </TabList>
    </TabGroup>
  );
}

function MenuAccordion() {
  return (
    <div
      aria-label="Navigation Tabs"
      className="flex flex-col items-center gap-2"
    >
      {allPages().map((page, index) =>
        <DisclosurePanel key={page.id}>
          <a className="rounded-full px-3 py-1 font-semibold text-white bg-gray-600" href={`/${page.id === 'home' ? '' : page.id}`}>
            {page.display}
          </a>
        </DisclosurePanel>
      )}
    </div>
  )
}

export default function Nav() {
  return (
    <div className="absolute top-0 left-0 w-full p-2 z-50">
      <div className="hidden md:flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-200">
          Apurav Khare
        </h1>
        <MenuTabs orientation="horizontal" />
      </div>

      <div className="md:hidden flex items-center justify-center cursor-pointer">
        <Disclosure as="div">
          <DisclosureButton className="group flex flex-row items-center justify-center">
            <span className="text-2xl font-bold text-gray-200">
              Apurav Khare
            </span>
            <ChevronDown className="size-5 text-gray-200 group-data-open:rotate-180" />
          </DisclosureButton>
          <MenuAccordion />
        </Disclosure>
      </div>
    </div>
  );
}