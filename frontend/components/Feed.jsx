import React from "react";
import { Grid, Container, Typography, Card } from "@material-ui/core";
import ReactPlayer from "react-player";
// import { purple } from "material-ui-colors";
import {
  ChildCare,
  FitnessCenter,
  HomeWork,
  Laptop,
  LiveTv,
  MoreHoriz,
  PhoneIphone,
  SportsEsports,
  Storefront,
} from "@material-ui/icons";
import SideBar from "./SideBar";
import { makeStyles } from "@material-ui/styles";
import Swipper from "./Swipper";
import SmallCards from "./SmallCards";
import Category from "./Category";
import Advertises from "./Advertises";
import Footer from "./Footer";
// import { purple } from "@material-ui/core/colors";
// const useStyles = makeStyles((theme) => ({
//   center: {
//     display: "flex",
//     flexDirection: "coloumn",
//     backgroundColor: "red",
//   },
//   container_main: {
//     backgroundColor: "#EAEDED",
//     maxWidth: "auto",
//   },
//   // container: {
//   //   marginTop: "20px",
//   //   // height: "320px",
//   },
// }));
function Feed() {
  // const classes = useStyles();
  return (
    <div className="bg-[#EAEDED]">
      <Container className="pt-10" maxWidth="lg">
        <Grid container className="mt-20" spacing={4}>
          <Grid item xs={4} md={3} elevation={2}>
            <Card>
              <SideBar Icon={Storefront} title="Supermarket" />

              <SideBar Icon={PhoneIphone} title="Phone $ Tablets" />
              <SideBar Icon={HomeWork} title="Home & Office" />
              <SideBar Icon={LiveTv} title="Electronics" />
              {/* <SideBar Icon={PhoneIphone} title=""/> */}
              {/* <SideBar Icon={Checkroom} title="Fashion" /> */}
              <SideBar Icon={Laptop} title="Computing" />
              <SideBar Icon={FitnessCenter} title="Sporting Goods" />
              <SideBar Icon={ChildCare} title="Baby Products" />
              <SideBar Icon={SportsEsports} title="Gaming" />
              {/* <SideBar Icon={Yard}  title=""/> */}
              <SideBar Icon={MoreHoriz} title="Others" />
            </Card>
          </Grid>
          <Grid item xs={8} md={6}>
            <Card className="h-[320px]">
              <Swipper />
            </Card>
          </Grid>
          <Grid
            className="xs:hidden sm:hidden lg:inline-block"
            sx={{ height: 320, display: "none" }}
            item
            md={2}
          >
            <Card>
              <div className="flex  p-2 algin-center">
                <img
                  className="object-contain"
                  height={30}
                  width={30}
                  src="/images/jumia_images/help_center.png"
                  alt=""
                />
                <div className="flex ml-2 flex-col">
                  <span className="md:text-[12px] lg:text-[14px] ">
                    HELP CENTER
                  </span>
                  <span className="md:text-[10px] lg:text-[12px] ">
                    Guide to customer Care
                  </span>
                </div>
              </div>
              <div className="flex  p-2 algin-center">
                <img
                  className="object-contain"
                  height={30}
                  width={30}
                  src="/images/jumia_images/returns-refunds.png"
                  alt=""
                />
                <div className="flex ml-2 flex-col algin-center">
                  <span className="md:text-[12px] lg:text-[14px]">
                    EASY RETURN
                  </span>
                  <span className="sm:text-[10px] lg:text-[12px] ">
                    Quick Refund
                  </span>
                </div>
              </div>

              <div className="flex  p-2 algin-center">
                <img
                  className="object-contain"
                  height={30}
                  width={30}
                  src="/images/jumia_images/sell-on-jumia.png"
                  alt=""
                />
                <div className="flex ml-2 flex-col">
                  <span className="md:text-[12px] lg:text-[14px] ">SELL</span>
                  <span className="sm:text-[10px] lg:text-[12px]  flex-inline">
                    Millions of Customers
                  </span>
                </div>
              </div>
            </Card>
            <Card className="mt-4 h-[130px]">
              <div>
                <ReactPlayer
                  playing="true"
                  muted
                  loop="true"
                  width="320"
                  height="20"
                  url={["/images/video/jumia.mp4", "/images/video/ad.mp4"]}
                  type="video/mp4"
                />
              </div>
            </Card>
          </Grid>
        </Grid>

        <SmallCards />
        <Category />
        <Advertises />
      </Container>
      <Footer />
    </div>
  );
}

export default Feed;
