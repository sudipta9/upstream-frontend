import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import isUserAuthenticated from "../helper/userAuthentication";
import { Form, FormInput } from "../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProgressBar } from "react-bootstrap";
import {
  creatorSelector,
  clearUploadingState,
  uploadVideo,
} from "../features/creators/creatorsSlice";
import { useDispatch, useSelector } from "react-redux";

const CreatorHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserAuthenticated()) navigate("/creator/sign-in");
  }, [navigate]);

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [videoFileName, setVideoFileName] = useState("");

  const dispatch = useDispatch();
  const { isUploading, isUploadFailed, isUploadSuccess, uploadingError } =
    useSelector(creatorSelector);

  const fileChangeHandler = (e) => {
    const files = e.target.files;
    if (files.length > 1) {
      toast.error("Good to go", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      e.target.files = null;
    } else {
      if (files.length) {
        setVideoFile(files[0]);
        setVideoFileName(files[0].name);
      }
    }
  };

  const [uploaded, setUploaded] = useState(undefined);

  useEffect(() => {
    if (isUploading) {
      console.log("uploading in progress");
    }
    if (isUploadFailed) {
      console.log(uploadingError);
      toast.error("some error occurred", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(clearUploadingState());
    }
    if (isUploadSuccess) {
      console.log("Success");
      dispatch(clearUploadingState());
    }
  }, [
    dispatch,
    isUploadFailed,
    isUploadSuccess,
    isUploading,
    uploaded,
    uploadingError,
  ]);

  const fromSubmitHandler = (e) => {
    e.preventDefault();
    const data = { title: title, summary: summary };
    const formdata = new FormData();
    formdata.append("file", videoFile);
    // formdata.append("title", title);
    // formdata.append("summary", summary);
    formdata.append("data", JSON.stringify(data));
    dispatch(uploadVideo({ data: formdata, setUploaded }));
  };

  return (
    <Form.Container backgroundImage="/images/misc/background.jpg">
      <Form onSubmit={fromSubmitHandler}>
        <Form.Heading>Upload Video</Form.Heading>
        <FormInput.Container required>
          <FormInput.Label>Title</FormInput.Label>
          <FormInput
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
          />
          {!title && <FormInput.Message>Cannot be empty</FormInput.Message>}
        </FormInput.Container>
        <FormInput.Container required>
          <FormInput.Label>Summary</FormInput.Label>
          <FormInput.Textarea
            value={summary}
            onChange={(e) => {
              e.preventDefault();
              setSummary(e.target.value);
            }}
          />
          {!summary && <FormInput.Message>Cannot be empty</FormInput.Message>}
        </FormInput.Container>
        <FormInput.Container upload>
          <FormInput.Label>
            Select File
            <FormInput
              type="file"
              name="file"
              accept="video/*"
              files={videoFile}
              onChange={(e) => {
                fileChangeHandler(e);
              }}
            />
          </FormInput.Label>
          {videoFileName && (
            <FormInput.Message>{videoFileName}</FormInput.Message>
          )}
        </FormInput.Container>
        {uploaded && <ProgressBar now={uploaded} label={`${uploaded}%`} />}
        <Form.SubmitButton
          type="submit"
          disabled={title && summary && videoFile ? false : true}
        >
          Submit
        </Form.SubmitButton>
      </Form>
      <ToastContainer />
    </Form.Container>
  );
};

export default CreatorHome;
