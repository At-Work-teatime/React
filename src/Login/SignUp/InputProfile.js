import React, { useState } from "react";
import { Button, Input } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { UserAddOutlined , RightOutlined } from "@ant-design/icons";

import { ProfileBox } from "../../style/profile";

function InputProfile() {
  const [file, setFile] = useState("");
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const setFileUrl = (e) => {
    if (e.target.files[0]) {
      const img = new FormData();
      img.append("file", e.target.files[0]);
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onload = function () {
        setFile(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      4
      <h3>
        프로필 사진을
        <br /> 등록해주세요!
      </h3>
      <Button
        icon={<UserAddOutlined id="input-file" />}
        onClick={handleClick}
        shape="circle"
       />
      <input
        type="file"
        id="input-file"
        onChange={(e) => setFileUrl(e)}
        style={{ display: "none" }}
        ref={hiddenFileInput}
      />
      <div>
        {file ? (
          <ProfileBox>
            <img
              shape="circle"
              src={file}
              width="100%"
              height="100%"
              object-fit="cover"
             />
          </ProfileBox>
        ) : (
          ""
        )}
      </div>
      <div>
        <Link to="/SignUp/Interest">
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<RightOutlined />}
           />
        </Link>
      </div>
    </div>
  );
}

export default InputProfile;
