import Layout from '../components/MyLayout';

export default () => (
  <Layout>
    <p>ABOUT - This is the about page</p>
  </Layout>
);

// Other methods to create a Layout component
// import withLayout from '../lib/layout'
//
// const AboutPage = () => (
//   <p>This is the about page</p>
// )
//
// export default withLayout(AboutPage)
//
//
// const AboutPage = () => (
//   <p>This is the about page</p>
// )
//
// export default () => (<Layout page={AboutPage}/>)
//
//
// const AboutPage = (<p>This is the about page</p>)
//
// export default () => (<Layout content={AboutPage}/>)
