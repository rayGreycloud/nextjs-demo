import Link from 'next/link';
import Layout from '../components/MyLayout';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`} as={`/p/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
    </ul>
  </Layout>
);

export default Index;
