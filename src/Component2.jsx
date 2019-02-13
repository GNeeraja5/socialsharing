import React from "react";
import { Helmet } from "react-helmet";

export default class Component2 extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>second component</title>
          <meta property="og:title" content="About Our Company" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="http://www.mysite.com/article/" />
          <meta
            property="og:image"
            content="http://www.mysite.com/articleimage.jpg"
          />
          <meta property="og:site_name" content="My Company Name" />
          <meta property="fb:app_id" content="1234567890987654321" />
          <meta
            property="og:description"
            content="A description of our services and company profile."
          />
        </Helmet>
        <div>I am from Component2</div>
      </div>
    );
  }
}
