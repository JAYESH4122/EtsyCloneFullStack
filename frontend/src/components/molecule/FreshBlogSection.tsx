import { useEffect, useState } from "react";
import type { BlogSectionData, SectionProps } from "../../types/datatypes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const FreshBlogSection = ( { onLoaded }: SectionProps ) => {
  const [blogData, setBlogData] = useState<BlogSectionData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/sections/blogSection`)
      .then((res) => {setBlogData(res.data.content);
        onLoaded();
      })
      .catch((error) => console.log("Error Fetching BlogData", error));
  }, [onLoaded]);

  if (!blogData) return null;

  return (
    <div
      className="fresh-blog-section-container"
      onClick={() => {
        navigate("/edit/blogSection");
      }}
    >
      <div className="fresh-blog-title">
        <h2>{blogData.sectionTitle}</h2>
        <div className="fresh-blog-title-arrow"></div>
      </div>
      <ul className="fresh-from-blog-list">
        {blogData.posts.map((post) => (
          <li key={post.id} className="fresh-from-blog-list-item">
            <div className="blog-wrapper">
              <div className="blog-image-container">
                <img
                  loading="lazy"
                  src={post.imageUrl}
                  alt={post.altText || ""}
                />
              </div>
              <div className="blog-content-wrapper">
                <p>{post.category}</p>
                <p>{post.title}</p>
                <p>
                  <span>{post.description}</span>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreshBlogSection;
