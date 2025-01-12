import { useState } from "react";
import Blogs from "./components/Blogs";
import News from "./components/News";

const App = () => {
  const [showNews, setShowNews] = useState(true);
  const [showBlogs, setShowBlogs] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const handleCreateBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  const handleShowBlogs = () => {
    setShowNews(false);
    setShowBlogs(true);
  };

  const handleBackToNews = () => {
    setShowNews(true);
    setShowBlogs(false);
  };

  return (
    <div className="container">
      <div className="insights-app">
        {showNews && <News onShowBlogs={handleShowBlogs} blogs={blogs} />}
        {showBlogs && (
          <Blogs onBack={handleBackToNews} onCreateBlog={handleCreateBlog} />
        )}
      </div>
    </div>
  );
};

export default App;
