import { useHistory, useParams } from "react-router-dom";
import { Image } from 'react-native';
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
            <div class="ProfilePic">
              Insert image here
            </div>
            <div class="ContactInfo">
              contact information
            </div>
          </div>
          <div class="OtherGroup">
            <div class="ReferralGroup">
              <div class="ReferralTitle">
                Referrals:
              </div>
              <div class="ReferralBody">
                referral text
              </div>
            </div>
            <div class="AttachmentGroup">
              <div class="AttachmentTitle">
                  Attachments:
              </div>
              <div class="AttachmentBody">
                attachment text
              </div>
            </div>
          </div>
        </div>
        <div className="EssayGroup">
        <div class="Essay1Group">
                Essay 1 Prompt:
        <div class="middle">
          Essay 1 Response Body
        </div>
        </div>
        <div class="Essay2Group">
                Essay 2 Prompt:
        <div class="bottom">
        Essay 2 Response Body
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
 
export default BlogDetails;