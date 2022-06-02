import React from 'react';
import NextLink from 'next/link';
import { Link } from '@material-ui/core';
// import Link from 'next/link';
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource',
    ],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function Footer() {
  return (
    <div className="bg-black mt-[100px] mb-0 p-11">
      <div className="flex mx-auto">
        <NextLink href="http://josephmukiibi.com" passHref>
          <Link>
            <a className="text-lg  text-white">Developer |🤨 Mukiibi Joseph</a>
          </Link>
        </NextLink>
      </div>
      <div className="shadow-md flex  justify-between">
        {footers.map((footer) => (
          <>
            <div className="flex flex-col">
              <h1 className="text-lg text-white">{footer.title}</h1>
              <div>
                <ul>
                  {footer.description.map((desc) => (
                    <li className="text-sm text-white">{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Footer;
