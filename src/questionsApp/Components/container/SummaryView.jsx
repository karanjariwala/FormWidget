import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnsweredQuestions } from './selector';
import SummaryCard from '../presentational/SummaryCard';

class SummaryView extends Component {
  render() {
    const { answeredQuestions } = this.props;
    let toRender = <span />;
    if (Array.isArray(answeredQuestions)) {
      toRender = (
        <div>
          <div>Claim Submission</div>
          {answeredQuestions.map(question => {
            return <SummaryCard key={question.id} {...question} />;
          })}
        </div>
      );
    }

    return toRender;
  }
}

const mapStateToProps = state => ({
  answeredQuestions: getAnsweredQuestions(state),
});

export default connect(mapStateToProps)(SummaryView);
