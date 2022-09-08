import { func } from "prop-types";
import React from "react";
import { async } from "regenerator-runtime";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function Homepage(props) {
  return <MeetupList meetups={props.meetups} />;
}
//runs for every incomeing request
//getServerSideProps for frequent data changes or if you need req,res
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
    //page will generate after 10sec when data changes as data is fetched at build time(if the request are coming)
  };
}
export default Homepage;
//in next for better seo getStaticProps will run the code inside at the side and/or during the build cycle
// this getStaticProps will never execute at browser side

// so whrn pagr reaches the client side it already has prefetched data for better seo
