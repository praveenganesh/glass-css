import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

import globalStyles from "../../theme/globalStyle";

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{'GLASS-CSS | simple glassmorphism CSS generator'}</title>
    <meta property="og:image" content="/static/glass-hero.jpeg" />
    <meta name="keywords" content="Glassmorphism, design, design trends, CSS generator, glasmorphism generator" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="title" content={'GLASS-CSS | simple CSS generator'} />
    <meta name="description" content={'GLASS-CSS is a unified name for the popular Frosted Glass aesthetic.'} />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
