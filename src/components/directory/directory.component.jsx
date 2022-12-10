import Job from '../jobs/job.component';
import './directory.styles.scss'

const Directory = ({jobs}) => {

  return (
    <div className="directory-container">
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Directory;
