import React from "react";

export interface CallToActionProps {
  title: string;
  link: {
    text: string;
    url: string;
  };
}

export default function CallToAction(props: CallToActionProps) {
  return (
    <section
      style={{ width: "100%", height: "20rem", backgroundColor: "yellow" }}
    >
      <h2>Test call to action component</h2>
      <a href="www.google.com.br">Go to google</a>
    </section>
  );
}
