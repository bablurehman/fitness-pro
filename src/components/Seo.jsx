// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";
import favicon from '../../public/favicon.ico'

export default function Seo({
  title = "FitnessPro | Your Fitness Partner",
  description = "Join FitnessPro — your trusted guide for fitness, nutrition, and lifestyle transformation.",
  image = favicon,
  type = "website",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="FitnessPro" />
      <meta name="robots" content="index, follow" />

      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="FitnessPro" />

    </Helmet>
  );
}
