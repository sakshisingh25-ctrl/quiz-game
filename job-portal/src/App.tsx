import JobCard from "./Components/JobCard"
import { useState } from "react"
const jobs = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Remote",
    salary: "₹4-6 LPA",
  },
  {
    title: "Python Developer",
    company: "Code Studio",
    location: "Raipur",
    salary: "₹3-5 LPA",
  },
];
export default function App() {
  const [search, getSearch] = useState("")
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="Start">
      <header>
        <h1 className="deep">👤Jobify</h1>
        <div className="Top">
          <h3>www.jobify-findjobs.com</h3></div>
        <nav>
          <a href="/">Home</a>
          <a href="/jobs">Find Job</a>
          <a href="/Talent">Hire Talent</a>
          <a href="/create Job">Create Job</a>
          <a href="/About">About</a>
        </nav>
      </header>
      <div className="high">
        <input id="load"
          type="text"
          placeholder="tell me what you want to search"
          value={search}
          onChange={(e) => {
            getSearch(e.target.value)
          }} />
        <button className="work" onClick={()=> getSearch(search.trim())}>search</button>
      </div>
      <div className="branch">
        <div className="Technology">
          <h1>💻</h1>
          <h2>Technology</h2>
          <h3>Developer jobs</h3>
        </div>
        <div className="Data">
          <h1>📊</h1>
          <h2>Data & Analytics</h2>
          <h3>Analyst jobs</h3>
        </div>
        <div className="Design">
          <h1>🎨</h1>
          <h2>Design</h2>
          <h3>Creative jobs</h3>
        </div>
        <div className="Marketing">
          <h1>📢</h1>
          <h2>Marketing</h2>
          <h3>Marketing jobs</h3>
        </div>
      </div>
      <div className="latest">
        <h1>Latest Jobs</h1>
        <h3>Explore the latest opportunities</h3>
        {filteredJobs.length >0 ?(
        filteredJobs.map((job) => (
          <JobCard
            key={job.title}
            title={job.title}
            company={job.company}
            location={job.location}
            salary={job.salary}
          />
        ))
      ) :(
        <p>No jobs found.Try another search </p>
      )
}
</div>
</div>
  );
}

