import React from 'react';
import Card from './components/Card';
import './index.css';

const App =()=>{

    const jobOpenings = [
  {
    brandLogo: "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQInFFC4VqxSmT8p0iPkhJq023X1SMiXY2KSTNxfE_Ong&s=10",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPd6pKSGfqhrwmLLsOBldVxbIe11zF38ZpM6Zlyvl3w&s=10",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://www.citypng.com/public/uploads/preview/facebook-meta-logo-icon-hd-png-701751694777703xqxtpvbu9q.png?v=2026060106",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Menlo Park, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW-Kq9gfty56z8kGjFSbD8c4qkG3HmSul4stGRc3jig&s=10",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$46/hr",
    location: "Seattle, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsoKyHWXyJiRi4X_xVvdhCAy8PLNzBL3nJ0Vv6z34Iw&s=10",
    companyName: "Netflix",
    datePosted: "2 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Los Gatos, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjjJzht9IZNpRjvIRDcB4Efht5zif2GakdJRyfJpT5lw&s=10",
    companyName: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Santa Clara, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uY4d5TNjC1yRM2j7ceVjX12P1GR7UpNHNSvuQp_xPQ&s=10",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkFHlLjYnU42xf_QBPuZuPJVHYq-xegC5NgaHeZyrZ2w&s=10",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Software Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Austin, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaEifGC0ccN8OIrNieADdKrYbPk0N91HQb2N8jx5eyWQ&s=10",
    companyName: "OpenAI",
    datePosted: "1 day ago",
    post: "JavaScript Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "San Francisco, USA",
  },
];


  return(
    <div className='parent'>
      {jobOpenings.map(function(elem){
        return <Card company={elem.companyName} post={elem.post}tag1={elem.tag1}datePosted={elem.datePosted}brandLogo={elem.brandLogo} pay={elem.pay}tag2={elem.tag2}/>
      })}
     
      
     </div>
     
     
     
  )
}

export default App