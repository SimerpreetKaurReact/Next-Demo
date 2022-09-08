import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function index() {
  return (
    <>
      <MeetupDetail
        image={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
        }
        title={"A first meetup"}
        address={"some street 4, some street"}
        description={"The meetup description"}
      />
    </>
  );
}
//below code wont run browser side/client side
// required only while using getStaticPaths
export function getStaticPaths() {
  return {
    fallback: false, // contains all paths dont create a page dynamically
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
      title: "A first meetup",
      id: meetupId,
      address: "some street 4, some street",
      description: "The meetup description",
    },
  };
}
export default index;
