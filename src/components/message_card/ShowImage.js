import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const MessageImage = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 259px;
  height: 150px;
  background: var(--white);
  border-bottom: 1px solid #8f8c8c;
  cursor: pointer;
`;

const MessageImageRemoveIcon = styled.div`
  background: var(--primary-color) !important;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-65%, 10%);
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 5px;
`;

const ShowImage = (props) => {
  return (
    <MessageImage>
      {props.state.picCount > 0
        ? props.state.pics.map((pic, index) => {
            return (
              <div
                key={index * 100}
                style={{
                  backgroundImage: `url("${props.image_url}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "120px",
                  width: "200px",
                }}
              >
                <MessageImageRemoveIcon
                  aria-label="remove pic"
                  aria-controls="removes pic"
                  aria-haspopup="false"
                  onClick={() => {
                    props.setState((prev) => {
                      return {
                        ...prev,
                        picCount: 0,
                        pics: undefined,
                      };
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
                </MessageImageRemoveIcon>
              </div>
            );
          })
        : false}
    </MessageImage>
  );
};

export default ShowImage;
