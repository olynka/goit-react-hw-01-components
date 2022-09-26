import PropTypes from "prop-types"
import { Th,TableRow  }from "components/TransitionHistory/TransitionHistory.styled"
export const TransitionHistoryList = ({ items }) => {
  return (items.map(({ id, type, amount, currency }) => (
    <tbody key={id}>
<TableRow >
      <Th>{type}</Th>
      <Th>{amount}</Th>
      <Th>{currency}</Th>
      </TableRow>
      </tbody>
  )))
}
TransitionHistoryList.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
}

