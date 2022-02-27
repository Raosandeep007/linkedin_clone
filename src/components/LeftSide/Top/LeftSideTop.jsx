import React, { useEffect, useState } from "react";
import { Paper, Avatar, Divider } from "@material-ui/core";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import Style from "./Style";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/userSlice";
export const LeftSideTop = () => {
  const user = useSelector(selectUser);
  const classes = Style();
  const [groups, setGroups] = useState(true);

  const [viewed, setViewed] = useState(1);
  const [connections, setConnections] = useState(1);

  useEffect(() => {
    setViewed(Math.floor(Math.random() * 100));
    setConnections(Math.floor(Math.random() * 1000));
  }, []);

  return (
    <Paper className={classes.sidebar}>
      <div
        className={classes.cover}
        style={{
          backgroundImage: `url("https://media-exp1.licdn.com/dms/image/C4D16AQGRDWRtMa4Jhw/profile-displaybackgroundimage-shrink_350_1400/0/1632888002264?e=1651104000&v=beta&t=DSe4CUIPTyaKzJGqqayEnY0fy-N-Tcwc5FAyNxrNWF4")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <Avatar src={user.photoURL} />
      <h4>{user.displayName}</h4>
      <div className={classes.stats}>
        <Divider />
        <div className={classes.stat}>
          <h4>Who viewed your profile</h4>
          <p style={{ margin: 0 }}>{viewed}</p>
        </div>
        <div className={classes.stat}>
          <h4>Connections</h4>
          <p style={{ margin: 0 }}>{connections}</p>
        </div>
        <Divider />
      </div>
      <div className={classes.myItems}>
        <LabelImportantIcon
          style={{ transform: groups ? "rotate(-90deg)" : "" }}
          onClick={() => setGroups(!groups)}
        />
        <h4>My Items</h4>
      </div>
    </Paper>
  );
};
