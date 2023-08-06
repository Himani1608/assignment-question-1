import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows ,timestamps, onItemClick , currency}) => {

  const currencyValue = (curr) => {
    const exchangeRate = {
      USD: 1,
      GBP: 0.78,
      EUR: 0.91,
      JPY: 141.76,
    };

    const convertedValue = curr * exchangeRate[currency];
    return convertedValue;

  };

  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        { rows.map( (row , index) => {

            const timestampMatch = timestamps.find(
                (item) => item["&id"] === row["&id"]
            );

            return(
              <ListRow key={index} onClick={() => onItemClick(row)}>
                <ListRowCell>{row["&id"]}</ListRowCell>
                <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
                <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
                <ListRowCell>{timestampMatch ? timestampMatch.timestamps.orderSubmitted: "N/A"}</ListRowCell>
                <ListRowCell>{currencyValue(row.bestExecutionData.orderVolume.USD)}</ListRowCell>
              </ListRow>
              )

            }
        )}
      </tbody>
    </table>
  );
};

export default List;
