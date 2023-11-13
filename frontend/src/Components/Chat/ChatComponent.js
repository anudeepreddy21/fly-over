import * as React from "react";
import { CometChatUI } from "../../cometchat-pro-react-ui-kit/CometChatWorkspace/src";

class ChatComponent extends React.Component {
  render() {
    return (
      <div style={{ height: "650px" }}>
        <CometChatUI />
      </div>
    );
  }
}

export default ChatComponent;
