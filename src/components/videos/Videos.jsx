// import { useState } from "react";
import { useGetVideosQuery } from "../../features/api/videoApi";
import Error from "../ui/Error";
import VideoLoader from "../ui/loaders/VideoLoader";
import Video from "./Video";

const Videos = () => {
  // const [fetchVideos, setFetchVideos] = useState(false);
  const {
    data: videos,
    isLoading,
    isError,
  } = useGetVideosQuery();

  // useGetVideosQuery(undefined, {
  //   skip: !fetchVideos,
  // });

  // const handleFetchVideos = () => {
  //   setFetchVideos(true);
  // };

  // if (!fetchVideos) {
  //   return (
  //     <div>
  //       <button
  //         onClick={handleFetchVideos}
  //         className="px-16 py-3 bg-blue-500 text-white rounded"
  //       >
  //         Load Videos
  //       </button>
  //     </div>
  //   );
  // }

  let content = null;
  if (isLoading)
    content = (
      <>
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
      </>
    );
  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }
  if (!isLoading && !isError && videos?.length === 0) {
    content = <Error message="No videos found!" />;
  }

  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => <Video key={video.id} video={video} />);
  }
  return content;
};

export default Videos;
