import React from 'react'
import Layout from '../../../components/Layout'
import TabSet from './components/TabSet';
import styled from '@emotion/styled';

export default class Index extends React.Component {
  handleClickTryit = e => {
    // alert('Clicked da buddon');
    const HelloCube = window.HelloCube;
    HelloCube('hello-cube-wrapper');
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Welcome to Daphne!</h1>
              <button className="button is-link" onClick={this.handleClickTryit}>
                Load Hello Cube demo.
              </button>
            </div>
          </div>
          <TabSet />
        </section>
      </Layout>
    )
  }
}
