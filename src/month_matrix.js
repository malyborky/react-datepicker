import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { capitalizeFirstLetter } from './date_utils'
import { createGroupedArray } from './utils'

export default class MonthMatrix extends React.Component {

  static propTypes = {
    locale: PropTypes.string,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  }

  onSelect = (month) => {
    this.props.onChange(month)
    this.props.onClose()
  }

  render () {
    const localeData = moment.localeData(this.props.locale)
    const monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
      (M) => localeData.months(moment({M}))
    )

    let selectedMonth = monthNames[this.props.month]
    let groupedMonths = createGroupedArray(monthNames, 3)

    return (
      <div className="popup">
        <div className="react-datepicker__current-month">
          <span>{this.props.title}</span>
          <a onClick={this.props.onClose} className="react-datepicker__navigation react-datepicker__navigation--close"/>
        </div>
        <div className="react-datepicker__monthMatrix">
          <table>
            <tbody>
            {groupedMonths.map((row, index) => (
              <tr key={index}>
                {row.map((item, itemIndex) => (
                  <td key={itemIndex} onClick={() => this.onSelect(item)} className={selectedMonth === item ? 'active' : ''}><a>{capitalizeFirstLetter(item)}</a></td>
                ))}
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}
