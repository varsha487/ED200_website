import "./Transparency.css";

function Transparency() {
  return (
    <div className="transparency-container">
      <article className="transparency-content">
        <h1>Financial Transparency</h1>

        <p>
          Edgemont Academy is committed to transparency and accountability in the
          allocation of school funds. Below is an overview of the annual operating
          budget and a breakdown of how resources are distributed to support
          students, staff, and the broader school community.
        </p>

        <section className="budget-summary">
          <h2>Total Annual Budget</h2>
          <p className="total-budget">$8,450,000</p>
        </section>

        <section className="budget-breakdown">
          <h2>Budget Breakdown</h2>

          <ul>
            <li>
              <span>Staff</span>
              <strong>$4,900,000</strong>
            </li>
            <li>
              <span>School Safety</span>
              <strong>$820,000</strong>
            </li>
            <li>
              <span>Student Groups</span>
              <strong>$640,000</strong>
            </li>
            <li>
              <span>Food & Wellness</span>
              <strong>$510,000</strong>
            </li>
            <li>
              <span>Technology</span>
              <strong>$1,580,000</strong>
            </li>
          </ul>
        </section>

        {/* NEW: Charts */}
        <section className="budget-charts">
          <h2>Budget Allocation</h2>

          <div className="chart-row">
            <span>Staff</span>
            <div className="bar">
              <div className="bar-fill staff"></div>
            </div>
            <span>58%</span>
          </div>

          <div className="chart-row">
            <span>Technology</span>
            <div className="bar">
              <div className="bar-fill tech"></div>
            </div>
            <span>19%</span>
          </div>

          <div className="chart-row">
            <span>School Safety</span>
            <div className="bar">
              <div className="bar-fill safety"></div>
            </div>
            <span>10%</span>
          </div>

          <div className="chart-row">
            <span>Student Groups</span>
            <div className="bar">
              <div className="bar-fill students"></div>
            </div>
            <span>8%</span>
          </div>

          <div className="chart-row">
            <span>Food & Wellness</span>
            <div className="bar">
              <div className="bar-fill food"></div>
            </div>
            <span>6%</span>
          </div>
        </section>

        <p className="budget-updated">
          Last updated: <strong>December 12, 2025</strong>
        </p>
      </article>
    </div>
  );
}

export default Transparency;
