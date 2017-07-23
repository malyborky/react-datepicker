import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import ScrollArea from 'react-scrollbar'

export default class YearScrollable extends React.Component {

  static propTypes = {
    locale: PropTypes.string,
    year: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    minYear: PropTypes.number,
    maxYear: PropTypes.number
  }

  onSelect = (year) => {
    this.props.onChange(year)
    this.props.onClose()
  }

  render () {
    const minYear = this.props.minYear ? this.props.minYear : 1990
    const maxYear = this.props.maxYear ? this.props.maxYear : moment().year()

    const years = []
    for (let i = maxYear; i >= minYear; i--) {
      years.push(<a key={i} onClick={() => this.onSelect(i)}>{i}</a>)
    }

    return (
      <div>
        <div className="react-datepicker__current-month">
          <span>{this.props.title}</span>
          <a onClick={this.props.onClose} className="react-datepicker__navigation react-datepicker__navigation--close"/>
        </div>
        <div className="react-datepicker__yearList">
          <ScrollArea
              speed={0.8}
              className="area"
              contentClassName="content"
              horizontal={false}>
            <div>{years}</div>
          </ScrollArea>
        </div>
      </div>
    )
  }

}
