import React from 'react'
import Layout from '../../../components/Layout'
import Tabs from "./components/Tabs";
import styled from '@emotion/styled';

const Tab1 = styled.div`
  padding: 20px;
  background-color: #fee;
`;

const Tab2 = styled.div`
  padding: 20px;
`;

function TabSet() {
  return (
    <Tabs
      activeTab={{
        id: "home"
      }}
    >
      <Tabs.Tab id="home" title="Home">
        <Tab1>This is the text content for tab 1</Tab1>
      </Tabs.Tab>
      <Tabs.Tab id="deuce" title="Tab Too">
        <Tab2>This is tab 2 with <b>BOLD TEXT</b></Tab2>
      </Tabs.Tab>
      <Tabs.Tab id="moar" title="Moar">
        <Tab2>This is teh tird tab 333 wid <b>MOAR BOLD TEXT!!!</b></Tab2>
      </Tabs.Tab>
    </Tabs>
  );
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Welcome to Daphne!</h1>
            </div>
          </div>
          <TabSet />
        </section>
      </Layout>
    )
  }
}
