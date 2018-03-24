import React, { Component } from 'react';
import { connect } from 'react-redux';
import { QuestionActionCreators } from './Actions/questionsActions';
import SingleQuestionView from './Components/container/SingleQuestionView';
import SummaryView from './Components/container/SummaryView.jsx';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getActions();
  }
  render() {
    const { summaryView } = this.props;
    const Component = summaryView ? SummaryView : SingleQuestionView;

    return (
      <div className="App">
        <Component />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  summaryView: state.questions.summaryView,
});

const mapDispatchToProps = dispatch => ({
  getActions: () => dispatch(QuestionActionCreators.fetchQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
