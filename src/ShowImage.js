import React from "react";
import IconButton from "@material-ui/core/IconButton";
const ShowImage = (props) => {
  return (
    <div className="message-uploaded-pic">
      {props.state.picCount > 0
        ? props.state.pics.map((pic, index) => {
            return (
              <div
                style={{
                  backgroundImage: `url("${URL.createObjectURL(pic)}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "120px",
                  width: "200px",
                }}
              >
                <IconButton
                  aria-label="remove pic"
                  aria-controls="removes pic"
                  aria-haspopup="false"
                  className="upload-pic-remove-btn"
                  onClick={() => {
                    props.setState({
                      ...props.state,
                      picCount: 0,
                      pics: undefined,
                    });
                  }}
                >
                  <svg
                    xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="r-jwli3a r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"
                    width="15"
                    height="15"
                  >
                    <g fill="#FFFFFF">
                      <path
                        d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </svg>
                </IconButton>
              </div>
            );
          })
        : false}
    </div>
  );
};

export default ShowImage;
