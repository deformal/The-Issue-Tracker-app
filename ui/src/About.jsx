import React from "react";
import Store from "../src/Store.js";
import graphQLFetch from "./graphQLFetch.js";

export default class About extends React.Component {
  static async fetchData() {
    const data = await graphQLFetch("query{about}");
    return data;
  }
  constructor(props) {
    super(props);
    const apiAbout = Store.initialData ? Store.initialData.about : null;
    delete Store.initialData;
    this.state = { apiAbout };
  }
  async componentDidMount() {
    const { apiAbout } = this.state;
    if (apiAbout == null) {
      const data = await About.fetchData();
      this.setState({ apiAbout: data.about });
    }
  }
  render() {
    const { apiAbout } = this.state;
    return (
      <div className="text-center">
        <h3>Issue Tracker Version 0.9</h3>
        <h4>{apiAbout}</h4>
      </div>
    );
  }
}
