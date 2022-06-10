import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";

type GenericPageLayoutProps = {
  children: React.ReactNode;
};
function GenericPageLayout(props: GenericPageLayoutProps) {
  const { children } = props;
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default GenericPageLayout;
