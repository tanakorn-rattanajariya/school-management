import stylesheet from "./index.less";
import { connect } from "react-redux";
import WebLayout from "components/WebLayout";
import Home from "./index";
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    reducer: {
      auth: state.auth
    }
  };
};
import actions from "../redux/actions";
const mapDispatchToProps = dispatch => ({
  action: {
    auth: (api, doc, item, id, props) =>
      dispatch(actions.auth.call(api, doc, item, id, props))
  }
});
function App(props) {
  return (
    <WebLayout style={{ height: "100vh" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: stylesheet
        }}
      />
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, {
          action: props.action,
          reducer: props.reducer
        });
      })}
    </WebLayout>
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
