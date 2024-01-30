import React from "react";
import { getBlogs, getBlogById } from "../../../hooks/useGetBlogs";
import Navbar from "@/app/components/navbar/navbar";
import BloxFooter from "@/app/components/bloxfooter/bloxfooter";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Link from "next/link";

function formatDate(inputDate) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(inputDate);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
}

const renderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
    [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
    [MARKS.CODE]: (text) => <code className="font-mono">{text}</code>,
    [MARKS.UNDERLINE]: (text) => (
      <span className="underline underline-offset-1">{text}</span>
    ),
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <div className="relative h-[18rem] 2xl:h-[28rem] md:h-[24rem] w-[80%] md:w-[70%] 2xl:w-[80%] self-center">
          <Image
            src={node.data.target.fields.file.url}
            height={node.data.target.fields.file.details.height}
            width={node.data.target.fields.file.details.width}
            fill
            alt="Content Image"
            className="rounded-[2.53281rem]"
          />
        </div>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="">{children}</p>;
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1 className="text-4xl 2xl:text-7xl font-bold">{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <h2 className="text-2xl md:text-3xl 2xl:text-5xl font-semibold">
          {children}
        </h2>
      );
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className="text-2xl font-medium">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h4 className="text-xl  font-medium">{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return <h5 className="text-base font-medium">{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return <h6 className="text-base  font-medium">{children}</h6>;
    },
    [BLOCKS.QUOTE]: (node, children) => {
      return (
        <div className="flex flex-row gap-2 p-4 bg-[#F6F6F7] rounded-[1.44275rem]">
          <div className="relative w-16 h-8">
            <Image src={quote} alt="quote" className="h-auto w-full" fill />
          </div>
          <blockquote className="text-lg md:text-2xl 2xl:text-3xl font-normal uppercase tracking-[0.03931rem]">
            {children}
          </blockquote>
        </div>
      );
    },
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="mb-4 flex list-disc flex-col gap-0.5 pl-8 md:pl-14">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="mb-4 flex list-decimal flex-col gap-0.5 pl-8 md:pl-14">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <Link
          href={node.data.uri}
          target="_blank"
          className="text-[#4479D9] underline underline-offset-1"
        >
          {children}
        </Link>
      );
    },
  },
};

export const generateStaticParams = async () => {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    id: blog.id,
  }));
};

const Blogs = async ({ params }) => {
  const blogId = params.id;
  const blog = await getBlogById(blogId);
  return (
    <div className="relative">
      <div className="absolute z-50 w-full">
        <Navbar />
      </div>

      <div className="flex flex-col gap-8 mb-8">
        <div className="relative w-[100%] flex items-center md:h-full h-[20rem]">
          <Image
            src={blog.thumbnail.fields.file.url}
            alt={`Background Image`}
            height={700}
            width={700}
            priority
            className={`w-[100%] h-[28rem] 2xl:h-[35rem] object-cover object-center hidden md:block `}
            style={{
              filter: "brightness(25%)",
            }}
          />

          <Image
            src={blog.thumbnail.fields.file.url}
            alt={`Background Image`}
            priority
            fill
            className={`w-[100%] h-auto object-cover md:hidden block`}
            style={{
              filter: "brightness(25%)",
            }}
          />

          <div className="absolute flex flex-col gap-2 md:gap-6 w-full justify-center mt-10 md:p-8 p-2">
            <p className="text-[#F5F5F5] font-medium text-5xl md:text-6xl 2xl:text-7xl text-left tracking-[-0.08781rem]">
              {blog.title}
            </p>
            <p className="text-[#4479D9] font-normal text-sm md:text-lg 2xl:text-2xl w-full text-left tracking-[-0.04806rem]">
              Posted By {blog.subtitle} - Posted On {formatDate(blog.dateAdded)}{" "}
              - Last Updated On {formatDate(blog.dateUpdated)}
            </p>
          </div>
        </div>

        <div className="md:p-8 p-2 flex flex-col gap-6 w-full text-[#232323] whitespace-pre-wrap">
          {documentToReactComponents(blog.content, renderOptions)}
        </div>
      </div>

      <BloxFooter />
    </div>
  );
};

export default Blogs;
