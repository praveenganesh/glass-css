import React, { useState, useEffect, useRef } from "react";
import Head from "../components/Head";
import { Layout, Slider, Result, Skeleton, Input, Checkbox } from "antd";
import { UserSwitchOutlined, UserOutlined } from "@ant-design/icons";
import { BankOutlined, HeartFilled } from "@ant-design/icons";
import Row from "../components/Row";
import Grid from "../components/Grid";
import Container from "../components/Container";
import Section from "../components/Section";
import Span from "../components/Span";
import Heading from "../components/Heading";
import Div from "../components/Div";
import Img from "../components/Img";
import { SketchPicker } from "react-color";

import "antd/dist/antd.css";
import styled from "styled-components";

const { Header, Content, Footer } = Layout;

const StyledBg = styled(Div)`
  background: rgb(235, 101, 158);
  background: linear-gradient(
    227deg,
    rgba(235, 101, 158, 1) 0%,
    rgba(238, 102, 172, 1) 47%,
    rgba(1, 205, 255, 1) 100%
  );
  min-height: 90vh;
`;

const StyledTextArea = styled.textarea`
  padding: 10px;
  background: #021731;
  color: white;
  line-height: 1.3rem;
  font-size: 13px;
`;

const CopyBtn = styled.button`
  border-radius: 4px;
  background-color: #80afe7;
  color: #1f3958;

  font-size: 12px;
  font-weight: 700;

  line-height: 15px;
  text-transform: uppercase;
  padding: 9px 23px;
  border: none;
  cursor: pointer;
`;
const Circle = styled(Div)`
  position: absolute;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    227deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 47%,
    rgba(210, 210, 210, 1) 100%
  );
  ${(props) => props.top && { top: props.top }}
  ${(props) => props.right && { right: props.right }}
${(props) => props.bottom && { bottom: props.bottom }}
${(props) => props.left && { left: props.left }}
z-index: 0;
  ${(props) => props.zIndex && { zIndex: props.zIndex }}
`;

const StyledInput = styled(Input)`
  height: 35px;
  border: none;
  margin-left: 5px;
  border: 1px solid #213a5a;
`;

const CssBox = styled(Div)`
  background: #213a5a;
  width: 90%;
  min-height: 200px;
  border-radius: 10px;
  padding: 10px;
`;

const GlassBox = styled(Div)`
  background: rgba(
    ${(props) => props.hsl || "255,255,255"},
    ${(props) => props.transparency}
  );
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
  backdrop-filter: blur(${(props) => props.blur}px);
  -webkit-backdrop-filter: blur(${(props) => props.blur}px);
  ${(props) =>
    props.showOutline && { border: "1px solid rgba(255, 255, 255, 0.18);" }}
  padding: 10px;
  z-index: 1;
  ${(props) => props.width && { width: props.width || "max-content" }}
  border-radius: ${(props) => props.br || "10px"};
`;

const MobileCard = styled(GlassBox)`
  text-align: center;
  width: 300px;
  height: max-content;
  color: white;
  padding: 0;
  boder-radius: 10px;

  button {
    background: rgb(33, 177, 77);
    background: linear-gradient(
      355deg,
      rgba(33, 177, 77, 1) 0%,
      rgba(132, 246, 98, 1) 100%
    );
    border: none;
    padding: 10px;
    border-radius: 3px;
    font-size: 0.7rem;
    font-weight: bold;
    box-shadow: 0 10px 30px rgb(0 0 0 / 6%), 0 6px 6px rgb(0 0 0 / 10%);

    margin: 0 auto;
  }
`;

const ProductCard = styled(GlassBox)`
  text-align: center;
  width: 200px;
  height: 145px;
  color: white;

  img {
    width: auto;
    height: 100px;
    margin: 0 auto;
  }
  button {
    background: rgb(33, 177, 77);
    background: linear-gradient(
      355deg,
      rgba(33, 177, 77, 1) 0%,
      rgba(132, 246, 98, 1) 100%
    );
    border: none;
    padding: 10px;
    border-radius: 3px;
    font-size: 0.7rem;
    font-weight: bold;
    box-shadow: 0 10px 30px rgb(0 0 0 / 6%), 0 6px 6px rgb(0 0 0 / 10%);

    margin: 0 auto;
  }
`;

function Home() {
  const [blur, setBlur] = useState(3.5);
  const [transparency, setTransparency] = useState(0.25);
  const [color, setColor] = useState("#fff");
  const [showOutline, setShowOutline] = useState(true);
  const [hsl, setHsl] = useState("255,255,255");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const cssRef = useRef(null);
  const [ssr,setSsr] = useState(false)
  // useEffect(()=>{setSsr(true);
  //   const script = document.createElement("script");
  //   script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //   script.async = true;
  //   script['data-payment_button_id'] = 'pl_Hp1MsrAmGJlumZ'
  //   document.body.appendChild(script);
  // },[])

  return (
    <>
      <Head title={"PayPay | Home"} />
      <StyledBg className="box">
        <Container>
          <Row p="1rem 0">
            <Grid>
              <Row alignItems="center">
                <Img mr="5px"  width="auto" height="30px" src="/static/transparency-1.png"/>
              <Heading type="medium" color="white">GLASS-CSS</Heading>
              </Row>
           
            </Grid>
            <Grid>
              <Row jc="flex-end">
                {/* {ssr&&<form ><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_Hp1MsrAmGJlumZ" async> </script> </form>} */}
              
              </Row>
            
            </Grid>
          </Row>
          <Section  p={{xs:'0.5rem',sm:'0.5rem',md:'0.9375rem 5rem',lg:'0.9375rem 5rem'}} >
            <Row jc="center">
              <Circle
                top="0px"
                left="20%"
                width="40px"
                height="40px"
                br="50%"
              />
              <Circle
                top="80%"
                right="60%"
                width="30px"
                height="30px"
                br="50%"
              />
              <Circle
                top="90%"
                left="50%"
                width="80px"
                zIndex="0"
                height="80px"
                br="50%"
              />
              <Circle
                top="80%"
                right="80%"
                width="30px"
                zIndex="0"
                height="30px"
                br="50%"
              />
              <Grid hiddenXs col={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
                {/* <StyledTitle>Glass Effect</StyledTitle> */}
                <Div>
                  {" "}
                  <ProductCard
                    blur={blur}
                    hsl={hsl}
                    transparency={transparency}
                    showOutline={showOutline}
                  >
                    <Row jc="flex-end">
                      <Span color="red">
                        <HeartFilled />
                      </Span>
                    </Row>
                    <Row jc="center">
                      <Span fontWeight="bold" color="white">
                        Coco Cola
                      </Span>
                    </Row>
                    <Row jc="center">
                      <Span fontWeight="normal" fontSize="12px" color="white">
                        Refreshing flavor
                      </Span>
                    </Row>
                    <Row mt="1rem" jc="center">
                      <button>+ ADD TO CART</button>
                    </Row>
                  </ProductCard>
                  <Row hiddenXs mt="20px">
                    <GlassBox
                      blur={blur}
                      hsl={hsl}
                      transparency={transparency}
                      showOutline={showOutline}
                    >
                      <Img
                        m="0 auto"
                        width="auto"
                        height="60px"
                        src="/static/plus.png"
                      />
                    </GlassBox>
                    <Div ml="1rem">
                      <GlassBox
                        blur={blur}
                        hsl={hsl}
                        transparency={transparency}
                        showOutline={showOutline}
                      >
                        <Img
                          m="0 auto"
                          width="auto"
                          height="60px"
                          src="/static/upload.png"
                        />
                      </GlassBox>
                    </Div>
                  </Row>
                </Div>
              </Grid>
              <Grid col={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
                {" "}
                <MobileCard
                  blur={blur}
                  hsl={hsl}
                  transparency={transparency}
                  showOutline={showOutline}
                  br="10px"
                >
                  <Div br="10px 10px 0 0" bg="white" p="15px">
                    <Span fontWeight="bold" fontSize="12px" color="#1245e2">
                      $92,000.34
                    </Span>
                    <Div>
                      <Span fontSize="12px" color="#aba9a9">
                        Account Balance
                      </Span>
                    </Div>
                  </Div>

                  <Row mt="1rem" jc="center">
                    <Div width="250px" bg="white" br="3px">
                      <Row p="10px">
                        <Span fontWeight="600" fontSize="12px" color="#1245e2">
                          {" "}
                          <BankOutlined /> Decentralized Bank
                        </Span>
                      </Row>
                      <Row p="10px">
                        <Span
                          color="#efefef"
                          fontWeight="600"
                          fontSize="1.3rem"
                        >
                          Main
                        </Span>
                      </Row>
                      <Div bg="lightGray1" p="10px">
                        <Row>
                          <Span ls="2px" color="gray">
                            1234 5678 9101 1212
                          </Span>
                        </Row>
                      </Div>
                    </Div>
                  </Row>

                  <Row mb="1rem" mt="1rem" jc="center">
                    <button>MAKE PAYMENT</button>
                  </Row>
                </MobileCard>
              </Grid>
            </Row>
            <Row mt="1rem">
              <Circle
                top="-15%"
                left="10%"
                width="40px"
                zIndex="0"
                height="40px"
                br="50%"
              />
              <Circle
                top="30%"
                left="40%"
                width="10px"
                zIndex="0"
                height="10px"
                br="50%"
              />
              <Grid hiddenXs col={{ xs: 3, sm: 3, md: 3, lg: 3 }}>
                <Row jc="center">
                  <GlassBox
                    blur={blur}
                    hsl={hsl}
                    transparency={transparency}
                    showOutline={showOutline}
                    width="max-content"
                  >
                    <Img
                      m="0 auto"
                      width="auto"
                      height="100px"
                      src="/static/spa-and-relaxation.png"
                    />
                  </GlassBox>
                </Row>
              </Grid>
              <Grid hiddenXs col={{ xs: 3, sm: 3, md: 3, lg: 3 }}>
                <Row jc="center">
                  <GlassBox
                    blur={blur}
                    hsl={hsl}
                    transparency={transparency}
                    showOutline={showOutline}
                    width="max-content"
                  >
                    <Img
                      m="0 auto"
                      width="auto"
                      height="100px"
                      src="/static/cool.png"
                    />
                  </GlassBox>
                </Row>
              </Grid>
            </Row>
            <Row mt="2rem" jc="center">
              <CssBox>
                <Row>
                  <Grid col={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
                    <Row>
                      <Span color="white" fontSize="14px" fontWeight="bold">
                        SETTINGS
                      </Span>
                    </Row>

                    <Row mt="15px">
                      <Span color="white" fontSize="14px">
                        Blur value
                      </Span>
                    </Row>
                    <Row>
                      <Grid>
                        <Slider
                          min={0.0}
                          max={20.0}
                          step={0.5}
                          onChange={(value) => setBlur(value)}
                          disabled={false}
                          defaultValue={blur}
                        />
                      </Grid>
                    </Row>
                    <Row mt="15px">
                      <Span color="white" fontSize="14px">
                        Transparency
                      </Span>
                    </Row>
                    <Row>
                      <Grid>
                        <Slider
                          min={0.0}
                          max={1.0}
                          step={0.01}
                          disabled={false}
                          onChange={(value) => setTransparency(value)}
                          defaultValue={transparency}
                        />
                      </Grid>
                    </Row>
                    {showPicker && (
                      <SketchPicker
                        color="#fff"
                        onChangeComplete={(value) => {
                          let { hex, rgb } = value;
                          setColor(hex);
                          let v = Object.values(rgb);
                          v.pop();
                          setHsl(v.join(","));
                          setShowPicker(false);
                        }}
                      />
                    )}

                    <Row mt="15px">
                      <Span color="white" fontSize="14px">
                        Color
                      </Span>
                    </Row>
                    <Row>
                      <Div
                        mr="10px"
                        onClick={() => setShowPicker(!showPicker)}
                        bg={color}
                        width="45px"
                        height="35px"
                        br="5px"
                      ></Div>
                      <Checkbox
                        checked={showOutline}
                        onChange={() => {
                          setShowOutline(!showOutline);
                        }}
                      >
                        <Span color="white" fontSize="14px">
                          Show outline{" "}
                        </Span>
                      </Checkbox>
                    </Row>
                  </Grid>
                  <Grid p={{xs:'0',sm:'0',md:'0 0 0 15px',lg:'0 0 0 15px'}} col={{ xs: 12, sm: 12, md: 8, lg: 8 }}>
                    <Row>
                      <Span color="white" fontSize="14px" fontWeight="bold">
                        CSS
                      </Span>
                    </Row>
                    <Row>
                      <StyledTextArea
                        ref={cssRef}
                        rows="7"
                        cols="100"
                        value={`background: rgba( ${
                          hsl ? hsl : "255,255,255"
                        }, ${transparency} );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( ${blur}px );
-webkit-backdrop-filter: blur( ${blur}px );
border-radius: 10px;
${showOutline ? "border: 1px solid rgba( 255, 255, 255, 0.18 );" : ""}
`}
                      ></StyledTextArea>
                    </Row>
                    <Row jc="flex-end" mt="1rem">
                      {showSuccess && (
                        <Span color="white" mr="10px">
                          Copied !
                        </Span>
                      )}

                      <CopyBtn
                        onClick={() => {
                          navigator.clipboard.writeText(
                            cssRef.current.props.value
                          );
                          setShowSuccess(true),
                            setTimeout(() => {
                              setShowSuccess(false);
                            }, 1000);
                        }}
                      >
                        COPY CSS{" "}
                      </CopyBtn>
                    </Row>
                  </Grid>
                </Row>
              </CssBox>
            </Row>
            
          </Section>
        </Container>
      </StyledBg>
      <Footer style={{ textAlign: 'center' }}>© Created by <a href="mailto:praveenganesh.theni@gmail.com" target="_blank">PRAVEEN KUMAR </a>❤️
</Footer>
    </>
  );
}

export default Home;
