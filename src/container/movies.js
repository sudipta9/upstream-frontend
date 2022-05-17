import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Movie, Movies } from "../components";
import {
  clearVideoFetchingState,
  getVideosList,
  videoSelector,
} from "../features/video/videoSlice";

const MoviesContainer = () => {
  const {
    isVideoListFetching,
    isVideoListFetchingFailed,
    isVideoListFetchingSuccess,
    videoListFetchingErrorMsg,
    videosData,
  } = useSelector(videoSelector);
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    dispatch(clearVideoFetchingState());
    dispatch(getVideosList());
    console.log("mounting");
  }, [dispatch]);

  useEffect(() => {
    if (isVideoListFetching) {
      console.log("Videos List fetching");
    }
    if (isVideoListFetchingFailed) {
      console.log(videoListFetchingErrorMsg);
      dispatch(clearVideoFetchingState());
    }
    if (isVideoListFetchingSuccess) {
      setVideos(videosData);
      dispatch(clearVideoFetchingState());
    }
  }, [
    dispatch,
    isVideoListFetching,
    isVideoListFetchingFailed,
    isVideoListFetchingSuccess,
    videoListFetchingErrorMsg,
    videosData,
  ]);

  const navigate = useNavigate();
  return (
    <Movies.Container>
      <Movies>
        {videos.map((movie) => {
          return (
            <Movie
              key={movie._id}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/watch/${movie._id}`);
              }}
            >
              <Movie.Thumbnail src={movie.thumbnailUrl} />
              <Movie.Title>{movie.title}</Movie.Title>
              <Movie.Creator>{movie.creatorsName}</Movie.Creator>
              <Movie.Summary>
                {movie.summery.substring(0, 80) + " ..."}
              </Movie.Summary>
            </Movie>
          );
        })}
      </Movies>
    </Movies.Container>
  );
};

export default MoviesContainer;
