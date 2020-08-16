import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../components/navbar';

export default ({ children, tab }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="Description"
          content="Robert Rayer - Software Engineer at Quality Distribution, B.S. ISDS from Louisiana State University (LSU)"
        ></meta>
        <title>Robert Rayer</title>
        <html lang="en" />
      </Helmet>
      <NavBar current={tab} />
      <div className="container container-fluid py-5">{children}</div>
    </>
  );
};
