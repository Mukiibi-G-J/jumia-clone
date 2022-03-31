import React from "react";

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

function Footer() {
  return (
    <div className="bg-black mt-11 p-11">
      <div className="flex mx-auto">
        {" "}
        <h1 className="text-lg  text-white">Developer |🤨 Mukiibi Joseph</h1>
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
