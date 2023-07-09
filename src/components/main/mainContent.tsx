import "./mainContent.css";
import { useState, useEffect } from "react";
import MyAside from "../Aside/aside";
import UiCard from "../UiCard/uicard";
import MyLoader from "../loader/loader";
import MyHelmet from "../helmet/helmet";

interface ApiDataItem {
  _id: string;
  title: string;
  htmlcode: string;
  csscode: string;
  jscode: string;
  head: string;
  tags: string;
  views: string;
}

function MainContent() {
  const [apiData, setApiData] = useState<ApiDataItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const itemsPerPage = 15;

  useEffect(() => {
    const cachedData = localStorage.getItem("apiData");
    if (cachedData) {
      setApiData(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      fetchData();
    }

    window.addEventListener("beforeunload", clearCache);

    return () => {
      window.removeEventListener("beforeunload", clearCache);
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://uiboxxapi.netlify.app/.netlify/functions/api/webdata"
      );
      const data = await response.json();
      const reversedData = data.reverse();
      setApiData(reversedData);
      localStorage.setItem("apiData", JSON.stringify(reversedData));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching API data:", error);
      setIsLoading(false);
    }
  };

  const clearCache = () => {
    localStorage.removeItem("apiData");
  };

  const handleSearchInputChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.currentTarget.value);
    setCurrentPage(1);
  };

  const filteredData = apiData.filter((item) => {
    const isMatchingTitle = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const isMatchingTag = selectedTag ? item.tags.includes(selectedTag) : true;
    return isMatchingTitle && isMatchingTag;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="page-body">
      <MyHelmet title="Free UI components" des="Enhance your web development projects with our collection of free customizable UI components. From cards and inputs to loaders and backgrounds, our UI components are designed to elevate your website's aesthetics and functionality to the next level." keywords="Free UI components, Customizable UI elements, Web development resources, Card components, Input components, Text components, Loader components, Background components, Form components, Spinner components, Box components, Switch components, Button components, Icon components, Navbar components, Web design elements, User interface enhancements, Website functionality, UI customization options, Front-end development tools"/>
      <div className="main-content">
        <div className="m-right">
          <div className="m-search-box">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
          <MyAside
            tags={apiData.map((item) => item.tags)}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
          {isLoading ? (
            <MyLoader />
          ) : (
            currentItems.map((item) => <UiCard key={item._id} data={item} />)
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
