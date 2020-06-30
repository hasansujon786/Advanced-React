import App from 'next/app'
import Page from '../components/Page'
import {ApolloProvider} from 'react-apollo'
import withData from '../lib/withData'

class MyApp extends App {
  // TODO: Vid-15 - didn't got it correctly
  // static getInitialProps({Component, ctx}) {
  //   console.log(ctx);
  // }

  render() {
    const {Component, apollo} = this.props
    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component />
        </Page>
      </ApolloProvider>
    )
  }
}

export default withData(MyApp)
