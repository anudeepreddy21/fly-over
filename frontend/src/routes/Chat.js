import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Navigator from "../Components/Navigator";
import Header from "../Components/Header";
import ChatComponent from "../Components/Chat/ChatComponent";
import { CometChat } from "@cometchat-pro/chat";

const drawerWidth = 240;

class App extends React.Component {
  constructor() {
    super();
    this.login("002"); //TODO change to existing uid in props
  }

  login(uid_str) {
    const authKey = "c934d47dacb3ef42944602149fb3af0fa6ba0865";
    const uid = uid_str;

    CometChat.login(uid, authKey).then(
      (user) => {
        console.log("Login Successful:", { user });
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      }
    );
  }

  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { window } = this.props;
    const container =
      window !== undefined ? () => window().document.body : undefined;

    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header handleDrawerToggle={this.handleDrawerToggle}></Header>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Navigator />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <Navigator></Navigator>
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
          // style={{ backgroundColor: "rgb(233, 237, 243)" }}
        >
          <Toolbar />
          <ChatComponent></ChatComponent>
          {/* <Projects></Projects> */}
        </Box>
      </Box>
    );
  }
}

export default App;
