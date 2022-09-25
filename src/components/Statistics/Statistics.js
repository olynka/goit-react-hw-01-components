import { StatisticTitle } from "./Title"
import PropTypes from "prop-types"
import { Item,Span,Percentage,StatSection,Statslist} from "./Statistics.styled"
export const Statistics = ({ stats, title }) => {
    return (
        <StatSection>
        <StatisticTitle title={title}></StatisticTitle>
       <Statslist>
       {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Span>{label}</Span>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}

            </Statslist>
            </StatSection>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
}

    // <section class="statistics">
    //     <h2 class="title">Upload stats</h2>

    //     <ul class="stat-list">
    //         <li class="item">
    //             <span class="label">.docx</span>
    //             <span class="percentage">4%</span>
    //         </li>
    //         <li class="item">
    //             <span class="label">.mp3</span>
    //             <span class="percentage">14%</span>
    //         </li>
    //         <li class="item">
    //             <span class="label">.pdf</span>
    //             <span class="percentage">41%</span>
    //         </li>
    //         <li class="item">
    //             <span class="label">.mp4</span>
    //             <span class="percentage">12%</span>
    //         </li>
    //     </ul>
    // </section>
