import "./mainContent.css";
import { useState, useEffect } from "react";
import MyAside from "../Aside/aside";
import UiCard from "../UiCard/uicard";
import MyLoader from "../loader/loader";

interface ApiDataItem {
  _id: string;
  title: string;
  htmlcode: string;
  csscode: string;
  jscode: string;
  head: string;
  tags: string;
}

function MainContent() {
const [apiData, setApiData] = useState<ApiDataItem[]>([]);
const [isLoading, setIsLoading] = useState(true);
const [searchQuery, setSearchQuery] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const [selectedTag, setSelectedTag] = useState<string | null>(null);
const itemsPerPage = 12;


  useEffect(() => {
    // Fetch data from API
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://uiboxxapi.netlify.app/.netlify/functions/api/webdata"
      ); // Replace with your API URL
      const data = await response.json();
      const reversedData = data.reverse(); // Reverse the data array
      setApiData(reversedData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching API data:", error);
      setIsLoading(false);
    }
  }

  

  const handleSearchInputChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.currentTarget.value);
    setCurrentPage(1);
  };

  // Filter the apiData based on the searchQuery and selectedTag
  const filteredData = apiData.filter((item) => {
    const isMatchingTitle = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const isMatchingTag = selectedTag ? item.tags.includes(selectedTag) : true;
    return isMatchingTitle && isMatchingTag;
  });

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="page-body">
      <div className="main-content">
        <div className="m-left">
          <MyAside
            tags={apiData.map((item) => item.tags)}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        </div>
        <div className="m-right">
          <div className="m-search-box">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
          {isLoading ? (
            <MyLoader />
          ) : (
            currentItems.map((item) => <UiCard key={item._id} data={item}/>)
          )}
          <div className="m-propagation">
            <div className="pagination">
              {Array.from(Array(totalPages).keys()).map((page) => (
                <button
                  key={page + 1}
                  onClick={() => handlePageChange(page + 1)}
                  className={currentPage === page + 1 ? "active" : ""}
                >
                  {page + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
