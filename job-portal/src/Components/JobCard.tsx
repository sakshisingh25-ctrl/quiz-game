type JobCardsProps={
    title:string;
    company:string;
    location : string;
    salary :string;
}
export default function JobCard({title,company,location,salary}:JobCardsProps){
return(
    <div className="job-card">
        <h2>{title}</h2>
        <h2>{company}</h2>
        <h2>{location}</h2>
        <h2>{salary}</h2> 
    </div>
)
}