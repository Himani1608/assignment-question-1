import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("USD");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  const secondary = mockData.results.length;


  const handleOrderClick = (order) => {
    setSelectedOrderDetails({
      buySellIndicator: order.executionDetails.buySellIndicator,
      orderStatus: order.executionDetails.orderStatus,
      orderType: order.executionDetails.orderType,
    });

    const timestampMatch = timestamps.results.find(
      (item) => item["&id"] === order["&id"]
    );

    if (timestampMatch) {
      setSelectedOrderTimeStamps({
        orderReceived: timestampMatch.timestamps.orderReceived,
        orderStatusUpdated: timestampMatch.timestamps.orderStatusUpdated,
        orderSubmitted: timestampMatch.timestamps.orderSubmitted,
      });
    } else {
      setSelectedOrderTimeStamps({});
    }
  };

  const searchRow = mockData.results.filter((row) =>
    row["&id"].toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle = {secondary + " orders" } />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={searchRow} timestamps={timestamps.results} onItemClick={handleOrderClick} currency = {currency}/>
      </div>
    </div>
  );
};

export default Dashboard;
