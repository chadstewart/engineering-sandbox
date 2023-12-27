import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Icon from "@/components/atoms/icon/icon";

interface PaginationNavProps {
  currentPage: number;
  totalPages: number;
  handleClick: (newPage: string) => void;
}

export const PaginationNav = ({ currentPage, totalPages, handleClick }: PaginationNavProps) => {
  return (
    <>
      <button disabled={currentPage === 1} onClick={() => handleClick(`${currentPage - 1}`)}>
        <Icon Icon={IoMdArrowDropleftCircle} iconAlt="Go to Previous Page" />
      </button>
      <div>{`${currentPage} of ${totalPages}`}</div>
      <button disabled={currentPage === totalPages} onClick={() => handleClick(`${currentPage + 1}`)}>
        <Icon Icon={IoMdArrowDroprightCircle} iconAlt="Go to Next Page" />
      </button>
    </>
  );
};
