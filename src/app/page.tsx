import { ReactElement } from "react";

import ApiChapter from "@/chapter/api/api.chapter";
import NetworkChapter from "@/chapter/network/network.chapter";
import RestfulAndHttpChapter from "@/chapter/restful-and-http/restful-and-http.chapter";

import ClosingSlide from "@/slides/closing/closing.slide";
import CoverSlide from "@/slides/cover/cover.slide";
import TableOfContentsSlide from "@/slides/table-of-contents/table-of-contents.slide";

export default function Home(): ReactElement {
  return (
    <>
      <CoverSlide heading="What Is Rest API?" basePath="/rest" />
      <TableOfContentsSlide contents={["RESTful & HTTP"]} />
      <RestfulAndHttpChapter />
      <NetworkChapter />
      <ApiChapter />
      <ClosingSlide />
    </>
  );
}
