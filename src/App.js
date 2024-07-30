import React, { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Routes, Route, NavLink, useSearchParams, useLocation } from 'react-router-dom';
import MainHeader from './components/MainHeader'
import Home from './Pages/Home';
import TagPage from './Pages/TagPage';
import BlogPage from './Pages/BlogPage'
import CategoryPage from './Pages/CategoryPage';

function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();


  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      //iska matlab tag wala page show krna h 
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);
    }
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    }
    else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen bg-[#F4F4F4]"> {/* Light Gray background */}
      <Routes>
        <Route path="/" element={<MainHeader />}>{/* Don't forget to add Outlet to Parent Element */}
          <Route index element={<Home />} /> {/* Make default Route by using index keyword */}
          <Route path="/blog/:blogId" element={<BlogPage />} />
          <Route path="/tags/:tag" element={<TagPage />} />
          <Route path="/categories/:category" element={<CategoryPage />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
