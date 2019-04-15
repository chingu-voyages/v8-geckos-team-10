import React from "react";
import "../stylesheets/Donate.scss";

const Donate = () => {
  return (
    <div className="donate-page__container">
      <h1 className="donate__heading--primary">Donate</h1>
      {/* <h2 className="donate__heading--secondary">Measuring Impact</h2> */}
      <p>
        Program evaluations can be costly, requiring time, money, and expertise.
        But, the benefits of these evaluations are tremendous! Through ongoing
        program assessment we can:
      </p>
      <ul className="donate-page__list">
        <li>Quantify the successes and reach of our work</li>
        <li>Perfect our program operations</li>
        <li>Build up our advocacy and community engagement </li>
        <li>Invest in strategic partnerships</li>
        <li>Strengthen our relationships with current and new funders</li>
        <li>Leadership and Program Staff</li>
      </ul>
      <p>
        With a core team of passionate, experienced individuals and community
        engagement, we can:
      </p>
      <ul className="donate-page__list">
        <li>Design more in depth volunteer education and trainings</li>
        <li>
          Increase communication with volunteers, corrections officials, and
          policymakers
        </li>
        <li>
          Provide clients with more effective, innovative, and impactful
          programming
        </li>
      </ul>
      <a
        className="btn--donate"
        href="https://www.omahagives.org/index.php?section=organizations&action=overview&fwID=2008"
        target="_blank noopener noreferrer"
      >
        Donate
      </a>
      <p>
        Thank you for your support! We are actively seeking meetings with
        individuals and Foundations interested in funding our work.{" "}
      </p>
      <p>
        {" "}
        For specific questions please email{" "}
        <a href="mailto:latincbc@gmail.com">latincbc@gmail.com</a>
      </p>
      {/* Or make a donation by postal mail to: Latino Community Betterment
      Corporation 4825 S. 25th St. Suite # 100 Omaha, NE 68107 */}
    </div>
  );
};

export default Donate;
