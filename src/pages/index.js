import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const navbarItems = siteConfig.themeConfig.navbar.items;
  return (
    <div className="container mainDiv">
      <div className="row">
        <div className="col col--2 navbarSide">
          <aside>
            <ul className="navList">
              {navbarItems.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="mainSection" style={{}}>
          {/* <header className={clsx("hero hero--primary", styles.heroBanner)}> */}
          <main className="">
            <h1 className="hero__title">Portfolio Site</h1>
            <p className="hero__subtitle">Software Incubator</p>
            <img
              src="https://www.silive.in/home/ubuntu/Icecream/Assets/static/images/silogo.svg"
              style={{ width: "100px", height: "100px" }}
            />
            <div className={styles.buttons} style={{marginTop:"30px"}}>
              <Link
                className="button button--secondary button--lg"
                to=""
              >
                Love.Peace.Code
              </Link>
            </div>
          </main>
          {/* </header> */}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Portfolio Site`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}