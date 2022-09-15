import React, { FC } from "react";
import styled from "styled-components";
//import NeosObject from "NeosObject";

const BackgroundStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffe9a7;
  opacity: 0.4;
  z-index: -1;
  background: radial-gradient(
      circle,
      transparent 20%,
      #ffe9a7 20%,
      #ffe9a7 80%,
      transparent 80%,
      transparent
    ),
    radial-gradient(
        circle,
        transparent 20%,
        #ffe9a7 20%,
        #ffe9a7 80%,
        transparent 80%,
        transparent
      )
      50px 50px,
    linear-gradient(#ffc107 4px, transparent 4px) 0 -2px,
    linear-gradient(90deg, #ffc107 4px, #ffe9a7 4px) -2px 0;
  background-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px;
`;

const LayoutStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
`;

const TitleStyle = styled.h1`
  position: relative;
  line-height: 1.4;
  display: inline-block;

  :before,
  :after {
    position: relative;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    display: inline-block;
    font-size: 1em;
    color: #ff6a6a;
  }
  :before {
    content: "<";
    padding-right: 0.5em;
  }
  :after {
    content: ">";
    padding-left: 0.5em;
  }
`;

const ButtonStyle = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto auto;
  padding: 1em 2em;
  width: 300px;
  color: #333;
  font-size: 18px;
  font-weight: 700;
  background-color: #ffceb1;
  box-shadow: 0 5px 0 #cd834c;
  transition: 0.1s;
  border-radius: 15px;

  display: flex;
  flex-direction: column;

  text-decoration: none;

  :hover {
    transform: translateY(3px);
    text-decoration: none;
    box-shadow: 0 2px 0 #cd834c;
  }
`;

const BoxStyle = styled.div`
  padding: 0.2em 0.5em;
  margin: 2em 0;
  color: #565656;
  background: #ffeaea;
  box-shadow: 0px 0px 0px 10px #ffeaea;
  border: dashed 2px #ffc3c3;
  border-radius: 8px;

  width: 250px;
  p {
    margin: 0;
    padding: 0;
  }
`;

// const ObjectStyle = styled.div`
//   display: flex;
//   flex-direction: column;
//   children {
//     display: flex;
//     flex-direction: column;
//     margin-left: 30px;
//   }
//   slot {
//     > slotdata {
//       height: 20px;
//       width: 100px;
//       background: gray;
//       color: white;
//       display: flex;
//       flex-direction: column;
//       margin-bottom: 2px;
//       > member[name="Name"]::after {
//         content: attr(value);
//       }
//     }
//     ::hover {
//       > components {
//         display: flex;
//         flex-direction: column;
//         > component::after {
//           content: attr(name);
//         }
//       }
//     }
//   }
// `;

const startedDate = new Date();

const DownloadPage: FC = () => {
  return (
    <>
      <BackgroundStyle />
      <LayoutStyle>
        <TitleStyle>neoscript console</TitleStyle>
        <ButtonStyle href="/api/obj.json" download={"NeosObject.json"}>
          <span>Download NeosObject.json</span>
        </ButtonStyle>
        <BoxStyle>
          <p>{`${startedDate}`}</p>
        </BoxStyle>
        {/* <ObjectStyle>
          <NeosObject />
        </ObjectStyle> */}
      </LayoutStyle>
    </>
  );
};

export default DownloadPage;
