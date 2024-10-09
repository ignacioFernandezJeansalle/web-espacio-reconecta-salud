import { useState } from "react";
import "./Tabs.scss";

const Tabs = (props) => {
  const TABS = props.tabs;
  const [selectedTab, setSelectedTab] = useState(TABS[0].name);

  return (
    <>
      <div className="select">
        <label htmlFor="Tab" className="sr-only">
          Sesiones
        </label>

        <select id="Tab" className="select-input" value={selectedTab} onChange={(e) => setSelectedTab(e.target.value)}>
          {TABS.map((tab) => (
            <option key={tab.slot} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>

      <div className="tabs">
        <div className="tabs-border">
          <nav className="tabs-nav" aria-label="Tabs">
            {TABS.map((tab) => (
              <button
                key={tab.slot}
                className={"tab-button " + (tab.name === selectedTab ? "active" : "")}
                onClick={() => setSelectedTab(tab.name)}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {TABS.map((tab) => {
        return (
          <article key={tab.slot} className={"tab-content " + (tab.name === selectedTab ? "active" : "")}>
            {props[tab.slot]}
          </article>
        );
      })}
    </>
  );
};

export default Tabs;
