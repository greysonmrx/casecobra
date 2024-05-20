import type { Metadata } from "next";

function constructMetadata(): Metadata {
  const title = "CaseCobra | Premium Custom Phone Cases";
  const description =
    "Design your own premium phone case with CaseCobra. Our easy-to-use platform allows you to create custom, high-quality cases that express your unique style. Start designing today!";
  const image = "/thumbnail.png";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@greyson",
    },
    metadataBase: new URL("https://casecobra-prod.vercel.app/"),
  };
}

export { constructMetadata };
