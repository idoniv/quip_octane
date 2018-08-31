import Styles from "./App.less";

export default class App extends React.Component {

    render() {
        let rootRecord = quip.apps.getRootRecord();
        rootRecord.getClient().fetchDefects();
        return <div className={Styles.hello}>Hello, BTF!</div>;
    }
}
