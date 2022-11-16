import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();


  return (
    <div className='IndividualView'>
			<div className='OverallBackground'>
			</div>
			<div className='Essay2Group'>
				<div className='Essay2Box'/>
				<span className='Essay2Texts'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
				<span className='Essay2Title'>Essay 2</span>
			</div>
			<div className='Essay1Group'>
				<div className='Essay1Box'/>
				<span className='Essay1Text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
				<span className='Essay1Title'>Essay 1</span>
			</div>
			<div className='AttachmentsGroup'>
				<div className='AttachmentsBox'/>
				<span className='AttachmentsText'>LinkedIn: linkedin.com/sfasdf<br/>Other: mypersonalwebsite.com<br/>Video: link</span>
				<span className='AttachmentsTitle'>Attachments:</span>
			</div>
			<div className='ReferralsGroup'>
				<div className='ReferralsBox'/>
				<span className='ReferralsText'>Chris Bernard<br/>Thought they were very engaging<br/><br/>Richard Lin<br/>They were incredibly social and genuinely interested in the club<br/></span>
				<span className='ReferralsTitle'>Referrals:</span>
			</div>
			<div className='ProfileGroup'>
				{/* <img className='ProfilePicture' src = {ImgAsset.ApplicationsClubApplicants_image6} /> */}
				<span className='ContactInfo'>James Chong<br/>jameschong@berkeley.edu<br/>+1 (510) 999 4356</span>
			</div>
			{/* <img className='MiddleLine' src = {ImgAsset.IndividualView_1_MiddleLine} />
			<img className='Resume' src = {ImgAsset.IndividualView_JamesChongResumeFall20221} /> */}
		</div>
  );
}
 
export default BlogDetails;