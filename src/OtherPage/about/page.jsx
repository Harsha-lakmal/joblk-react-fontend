import React from 'react';

import AboutSectionOne from '../../comon/components/About/AboutSectionOne'
import  AboutSectionTwo  from '../../comon/components/About/AboutSectionTwo'
import  Breadcrumb  from '../../comon/components/Common/Breadcrumb'

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
