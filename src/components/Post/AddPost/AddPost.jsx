import styled from "styled-components";
import React, { useState } from "react";
import { Paper, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import firebase from "firebase/compat/app";
import { db } from "../../../firebase";
import Styles from "./Style";

export function AddPost() {
  const classes = Styles();
  const [URL, setURL] = useState("");
  const [enterpost, setEnterpost] = useState("");

  const submitPost = (e) => {
    e.preventDefault();
    db.collection("enterpost").add({
      name: "Sandeep Yadav",
      message: enterpost,
      photoUrl:
        "https://media-exp1.licdn.com/dms/image/C4D03AQHkOOrvaumGKg/profile-displayphoto-shrink_800_800/0/1632887487394?e=1651104000&v=beta&t=bXD1T5wux94Tdi-GrI6Zm7L45JoNTRK5dNpksXpFndo",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setEnterpost("");
  };

  return (
    <Paper className={classes.upload}>
      <div className={classes.upload__header}>
        <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQHkOOrvaumGKg/profile-displayphoto-shrink_800_800/0/1632887487394?e=1651104000&v=beta&t=bXD1T5wux94Tdi-GrI6Zm7L45JoNTRK5dNpksXpFndo" />
        <form className={classes.header__form} onSubmit={submitPost}>
          <input
            placeholder="Start a Add"
            value={enterpost}
            onChange={(e) => setEnterpost(e.target.value)}
          />
          <input id="upload-image" type="file" accept="image/*" hidden />
          <input id="upload-video" type="file" accept="video/*" hidden />
          {/* <button type="submit">Post</button> */}
        </form>
      </div>
      <div className={classes.upload__media}>
        <label
          htmlFor={URL === "" ? "upload-image" : ""}
          className={classes.media__options}
        >
          <PhotoSizeSelectActualIcon
            style={{
              color: "#70b5f9",
            }}
          />
          <h4>Photo</h4>
        </label>
        <label
          htmlFor={URL === "" ? "upload-video" : ""}
          className={classes.media__options}
        >
          <YouTubeIcon style={{ color: "green" }} />
          <h4>Video</h4>
        </label>
        <div className={classes.media__options}>
          <EventNoteIcon style={{ color: "orange", fontSize: 30 }} />
          <h4>URL</h4>
        </div>
        <div className={classes.media__options}>
          <CalendarViewDayIcon style={{ color: "#f5987e" }} />
          <h4>Write article</h4>
        </div>
      </div>
    </Paper>
  );
}
