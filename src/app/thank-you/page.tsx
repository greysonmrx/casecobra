import React from "react";

import { ThankYou } from "@/screens/ThankYou";

const ThankYouPage: React.FC = () => {
  return (
    <React.Suspense>
      <ThankYou />
    </React.Suspense>
  );
};

export default ThankYouPage;
