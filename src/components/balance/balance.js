import "./balance.css";
import BalanceList from "../balance-list/balanceList";
const Balance = (props) => {
  const {
    balanceList,
    fetchGroupBalanceList,
    fetchSettleUpResult,
    bookId,
    userId,
  } = props;

  return (
    <div className="balance">
      <div className="balance-left">
        {balanceList.map((item, idx) => (
          <BalanceList
            bookId={bookId}
            date={item.date}
            details={item.details}
            fetchSettleUpResult={fetchSettleUpResult}
          />
        ))}
        <button
          className="balance-group-balance-btn"
          onClick={() => fetchGroupBalanceList(bookId, userId)}
        >
          Get Group Balance
        </button>
      </div>
      {/* 用頁面判斷(多本or單一)決定要不要顯示右邊 */}
      <div className="balance-right"></div>
    </div>
  );
};

export default Balance;
