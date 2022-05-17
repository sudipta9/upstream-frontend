import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import FooterContainer from "../container/footer";
import NavigationContainer from "../container/navigation";
import PlayerContainer from "../container/player";
import WatchDescriptionContainer from "../container/watchDescription";
import {
  clearVideoDataFetchingState,
  getVideoData,
  videoSelector,
} from "../features/video/videoSlice";
import isUserAuthenticated from "../helper/userAuthentication";

const Watch = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    isVideoDataFetching,
    isVideoDataFetchingFailed,
    isVideoDataFetchingSuccess,
    videoDataFetchingErrorMsg,
    videoData,
  } = useSelector(videoSelector);

  const [data, setData] = useState({});
  useEffect(() => {
    dispatch(clearVideoDataFetchingState());
    dispatch(getVideoData(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!isUserAuthenticated()) navigate("/sign-in");
  }, [navigate]);

  useEffect(() => {
    if (isVideoDataFetching) {
      console.log("Video Data Fetching");
    }
    if (isVideoDataFetchingFailed) {
      console.log(videoDataFetchingErrorMsg);
      dispatch(clearVideoDataFetchingState());
      navigate("/not-found");
    }
    if (isVideoDataFetchingSuccess) {
      setData(videoData);
    }
  }, [
    dispatch,
    isVideoDataFetching,
    isVideoDataFetchingFailed,
    isVideoDataFetchingSuccess,
    navigate,
    videoData,
    videoDataFetchingErrorMsg,
  ]);
  return (
    <>
      <NavigationContainer />
      <PlayerContainer videoUrl={data.VideoUrl} />
      <WatchDescriptionContainer
        title={data.title}
        creator={data.creatorsName}
        description={data.summery}
      />
      <FooterContainer />
    </>
  );
};

export default Watch;
