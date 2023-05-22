import { connect } from "react-redux";
import Body from "./body.jsx";

const mapStateToProps = ({
  array,
  currentBubbleTwo,
  currentQuickTwo,
  pivot,
  currentSwappers,
  currentHeapThree,
  currentSorted,
  currentMergeX,
}) => ({
  array,
  currentBubbleTwo,
  currentQuickTwo,
  pivot,
  currentSwappers,
  currentHeapThree,
  currentSorted,
  currentMergeX,
});

const mapDispatchToProps = () => dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
