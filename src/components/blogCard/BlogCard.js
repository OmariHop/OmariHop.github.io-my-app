import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <div>
      <div class="container">
        <div class="square">
          <div class="blog-card-title">{blog.title}</div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
