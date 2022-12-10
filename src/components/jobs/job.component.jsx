import "./job.styles.scss";

const Job = ({ job }) => {
  const {imageURL, title} = job;

  return (
    <div className="job-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      />
      <div className="job-body-container">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Job;
