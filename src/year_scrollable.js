import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import ScrollArea from 'react-scrollbar'
import { Scrollbars } from 'react-custom-scrollbars'

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
    const minYear = this.props.minYear ? this.props.minYear : 1900
    const maxYear = this.props.maxYear ? this.props.maxYear : moment().year()

    const years = []
    for (let i = maxYear; i >= minYear; i--) {
      years.push(<a key={i} onClick={() => this.onSelect(i)}>{i}</a>)
    }

    return (
      <div className="popup">
        <div className="react-datepicker__current-month">
          <span>{this.props.title}</span>
          <a onClick={this.props.onClose} className="react-datepicker__navigation react-datepicker__navigation--close"/>
        </div>
        <div className="react-datepicker__yearList">
          <div className="gradient-top"/>
          <Scrollbars style={{width: 300, height: 150}} renderTrackVertical={props => <div {...props} className="track-vertical"/>}>
            <div>{years}</div>
          </Scrollbars>
          <div className="gradient-bottom"/>
        </div>
      </div>
    )
  }

}


