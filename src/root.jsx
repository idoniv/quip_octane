import quip from "quip";
import App from "./App.jsx";
import { OctaneClient } from "./client.js";

//export class Root extends React.Component {
//    static propTypes = {
//        auth: React.PropTypes.instanceOf(quip.apps.Auth).isRequired
//    };
//    constructor(props) {
//        super(props);
//        this.state = {
//            error: null
//        };
//    }
//    render() {
//        const { auth } = this.props;
//        const { error } = this.state;
//        return (
//            <div>
//                {<button onClick={this.onLoginClick}>
//                        Login
//                    </button>}
//            </div>
//        );
//    }
//    onLoginClick = () => {
//        this.props.auth
//            .login({
//                access_type: "offline",
//                prompt: "consent"
//            })
//            .then(
//                () => {
//                    this.setState({
//                        isLoggedIn: this.props.auth.isLoggedIn(),
//                        error: null
//                    });
//                },
//                error => {
//                    this.setState({ error });
//                }
//            );
//    };
//    forceLogin = () => {
//        this.setState({ isLoggedIn: false });
//    };
//}

class OctaneRoot extends quip.apps.RootRecord {
    static getProperties() {
        return {
        };
    }
    
    setClient(client) {
        this.octaneClient_ = client;
    }
    
    getClient() {
        return this.octaneClient_;
    }
}
quip.apps.registerClass(OctaneRoot, "root");

quip.apps.initialize( {
    initializationCallback: function( rootNode, params ) {
        let rootRecord = quip.apps.getRootRecord();
        const octaneClient = new OctaneClient();
        rootRecord.setClient(octaneClient);
        
                
        ReactDOM.render( <App />, rootNode );
        
    },
} );
