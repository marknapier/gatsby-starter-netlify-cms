import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClickTryit = e => {
    navigate('/designer/daphne');
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Garden Designer</h1>

              <div className="columns">
                <div className="column is-7">
                  <h3
                    className="has-text-weight-semibold is-size-4"
                    style={{
                      fontSize: '1.3em',
                      fontWeight: '100',
                      lineHeight: '1.5',
                    }}
                  >
                    We'll create a custom design for your garden
                  </h3>
                  <p>
                  Answer a few questions about your garden area, and we'll create a garden design
                  optimized for the conditions in your yard. We'll show you a blueprint and a
                  visualization of the garden, as well as an inventory of the plants that you'll
                  need.
                  </p>
                  <button className="button is-link" onClick={this.handleClickTryit}>
                    Try it out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
