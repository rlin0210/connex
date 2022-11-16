import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import React from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  return (
    <div class="overall">
      <div class="left">
          left hand side
      </div>
      <div class="right">
        <div class="top">
          should be top
        </div>
        <div class="middle">
          should be middle
        </div>
        <div class="bottom">
          should be bottom
        </div>
      </div>
    </div>
  );
}
 
export default BlogDetails;