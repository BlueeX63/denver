import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  keywords, 
  name, 
  type, 
  url, 
  image 
}) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      
      {/* OpenGraph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* End OpenGraph tags */}
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* End Twitter tags */}
    </Helmet>
  );
}

SEO.defaultProps = {
  title: "Synergy Systems | High Quality Power Electronics",
  description: "Synergy Systems provides cutting-edge power electronics including Solar UPS, Panels, and Battery Chargers tailored for industrial and commercial needs.",
  keywords: "Synergy Systems, Solar UPS, Power Panels, Battery Chargers, Industrial Power",
  name: "Synergy Systems",
  type: "website",
  url: "https://www.denver.com/",
  image: "https://www.denver.com/vite.svg"
};
