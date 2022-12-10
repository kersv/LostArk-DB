import Directory from "../../components/directory/directory.component";
const Home = () => {
  const jobs = [
    {
      id: 1,
      title: "Gunslinger",
      imageURL:
        "https://cdnportal.mobalytics.gg/production/2022/04/387886f0-gunslinger-leveling-guide-splash.jpg",
    },
    {
      id: 2,
      title: "Wardancer",
      imageURL:
        "https://static.invenglobal.com/upload/image/2022/02/07/r1644269699623572.png",
    },
    {
      id: 3,
      title: "Bard",
      imageURL:
        "https://thenerdstash.com/wp-content/uploads/2022/05/bard-lostark-01.jpg.webp",
    },
    {
      id: 4,
      title: "Artist",
      imageURL:
        "https://lostarkive.com/wp-content/uploads/2022/01/artist4-980x500.jpg",
    },
    {
      id: 5,
      title: "Deathblade",
      imageURL:
        "https://i.blogs.es/63b488/lost-ark-actualizacion-marzo/1366_2000.webp",
    },
    {
      id: 6,
      title: "Berserker",
      imageURL:
        "https://cdn1.dotesports.com/wp-content/uploads/2022/02/22121900/image_2022-02-22_181858.png",
    },
  ];

  return (
    <Directory jobs={jobs}/>
  );
};

export default Home;
