import { makeStyles } from "@material-ui/styles";
import React from "react";
import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     // alignItems: "center",
//     "&:hover": {
//       color: "#E4811C",
//     },
//     // justifyContent: "spacearound",
//   },
//   icon: {
//     marginRight: "20px",
//   },
// }));

export default function SideBar({ Icon, title }) {
  // const classes = useStyles();
  return (
    <div className="flex align-center hover:text-[#E4811C]">
      <Icon className="mr-2 ml-2 mb-3" />
      <span className="text-[12px]">{title}</span>
    </div>
  );
}
