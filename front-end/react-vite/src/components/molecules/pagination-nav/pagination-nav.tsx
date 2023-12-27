import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Icon from "@/components/atoms/icon/icon";
import { NavUrl } from "./pagination-nav-types";
import { Link } from "@tanstack/react-router";

interface PaginationNavProps {
  currentPage: number;
  totalPages: number;
  navUrl: NavUrl;
}

export const PaginationNav = ({ currentPage, totalPages, navUrl }: PaginationNavProps) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <>
      <Link disabled={isFirstPage} to={navUrl} params={{ page: currentPage - 1 }}>
        <Icon Icon={IoMdArrowDropleftCircle} iconAlt="Go to Previous Page" color={isFirstPage ? "gray" : ""} />
      </Link>
      <div>{`${currentPage} of ${totalPages}`}</div>
      <Link disabled={currentPage === totalPages} to={navUrl} params={{ page: currentPage + 1 }}>
        <Icon Icon={IoMdArrowDroprightCircle} iconAlt="Go to Next Page" color={isLastPage ? "gray" : ""} />
      </Link>
    </>
  );
};
