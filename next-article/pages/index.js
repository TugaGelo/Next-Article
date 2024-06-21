import React from 'react';
import Layout from '../components/Layout';
import BlogCard from '../components/blog/Card';
import MainArticle from '../components/mainArticle/MainArticle';

const Home = () => {
  return (
    <Layout>
      <MainArticle />
      <BlogCard />
    </Layout>
  );
};

export default Home;
