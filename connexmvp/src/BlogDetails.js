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
          <div class="ProfileGroup">
            profile
            <div class="ProfilePic">

            </div>
            <div class="ContactInfo">

            </div>
          </div>
          <div class="OtherGroup">
            <div class="ReferralGroup">
              <div class="ReferralTitle">
                Referrals:
              </div>
              <div class="ReferralBody">
                Chris Bernard<br></br>
                Thought they were very engaging
                <br></br>
                <br></br>
                Richard Lin<br></br>
                They were incredibly social and genuinely interested in the club
              </div>
            </div>
            <div class="AttachmentGroup">
            <div class="ReferralTitle">
                Attachments:
              </div>
              <div class="ReferralBody">
                LinkedIn: linkedin.com/sfasdf
                <br></br>
                Other: mypersonalwebsite.com
                <br></br>
                Video: link
              </div>
            </div>

          </div>
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