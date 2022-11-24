import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import React from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: application, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  return (
    <div class="overall">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { application && (
        <article>
          <div class="left">
            left hand side
          </div>
          <div class="right">
            <div class="top">
              <div class="ProfileGroup">
                <div class="ProfilePic">              
                <img
                    style={{ maxWidth: 250 }}
                    src="https://media.istockphoto.com/id/1262964438/photo/success-happens-the-moment-you-believe-it-will.jpg?s=612x612&w=0&k=20&c=tpjbR4aaaiB43sneEWgatyFIQOmN3E-3nB5CBE5Idyg="
                    alt="Headshot"
                  />
                </div>
                <div class="ContactInfo">
                  Name: {application.firstName} {application.lastName}
                  <br />
                  Major: {application.major}
                  <br />
                  Year: {application.year}
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
              { application.essay1 }
            </div>
            </div>
            <div class="Essay2Group">
              Essay 2 Prompt:
            <div class="bottom">
              { application.essay2 }
            </div>
            </div>
            </div>
          </div>
        </article>
      )}

    
    </div>
  );
}
 
export default BlogDetails;