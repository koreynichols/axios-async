// src/App.js

import React from "react";

import API from "./utils/API";
import User from "./components/User";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      name: null,
      avatar: null,
      email: null
    };
  }

  render() {
    const { isLoading, name, avatar, email } = this.state;

    return (
      <User isLoading={isLoading} name={name} avatar={avatar} email={email} />
    );
  }

  async componentDidMount() {
     let userData = await API.get('/', {
          params: {
            results: 1,
            inc: 'name,email,picture'
          }
        });

            // Parse the results for ease of use.
        userData = userData.data.results[0];

        // Update state with new data and re-render our component.
        const name = `${userData.name.first} ${userData.name.last}`;
        const avatar = userData.picture.large;
        const email = userData.email;

        this.setState({
          ...this.state, ...{
            isLoading: false,
            name,
            avatar,
            email
          }
        });
  }
}

export default App;
