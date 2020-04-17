import React from 'react'
import Layout from '../../../components/Layout'

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
              <p>
              blah blah...
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
