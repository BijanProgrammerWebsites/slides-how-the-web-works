import { ReactElement } from "react";

import ApiChapter from "@/chapter/api/api.chapter";
import HttpChapter from "@/chapter/http/http.chapter";
import NetworkChapter from "@/chapter/network/network.chapter";

import ClosingSlide from "@/slides/closing/closing.slide";
import CoverSlide from "@/slides/cover/cover.slide";
import TableOfContentsSlide from "@/slides/table-of-contents/table-of-contents.slide";

export default function Home(): ReactElement {
  return (
    <>
      <CoverSlide heading="What Is Rest API?" basePath="/rest" />
      <TableOfContentsSlide contents={["Network", "API", "HTTP"]} />
      <NetworkChapter />
      <ApiChapter />
      <HttpChapter />
      <ClosingSlide />
    </>
  );
}
