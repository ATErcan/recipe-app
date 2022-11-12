import { ArrowContainer, ArrowsBtn } from "../styles/Arrows.styled";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Arrows = ({ apiData, pages, setPages, firstPage, setNewSearch }) => {
  const handleNext = () => {
    setNewSearch(false);
    setPages((prevPages) => {
      return {
        urlArray: [...prevPages.urlArray, apiData._links.next.href],
        page: prevPages.page + 1,
        first: false,
      };
    });
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    setNewSearch(false);
    if (pages.page === 1) {
      setPages({ urlArray: [firstPage], page: 0, first: false });
    } else {
      pages.urlArray.pop();
      setPages((prevPages) => {
        return {
          ...prevPages,
          page: prevPages.page - 1,
          first: false,
        };
      });
    }
    window.scrollTo(0, 0);
  };

  return (
    <ArrowContainer>
      {apiData.from !== 1 && (
        <ArrowsBtn onClick={handlePrevious}>
          <AiOutlineArrowLeft /> Previous
        </ArrowsBtn>
      )}
      {apiData.to < apiData.count && (
        <ArrowsBtn onClick={handleNext}>
          Next <AiOutlineArrowRight />
        </ArrowsBtn>
      )}
    </ArrowContainer>
  );
};

export default Arrows;
