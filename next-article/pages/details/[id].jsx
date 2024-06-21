import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { blog } from '../../public/assets/data/data';
import Layout from '../../components/Layout';
import {
  CommentText,
  CommentMetadata,
  CommentGroup,
  CommentContent,
  CommentAvatar,
  CommentActions,
  CommentAction,
  CommentAuthor,
  Comment,
  Divider,
} from 'semantic-ui-react';
import styles from './details.module.css';

const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const selectedBlog = blog.find((item) => item.id === parseInt(id));
    if (selectedBlog) {
      setBlogs(selectedBlog);
    }
  }, [id]);

  return (
    <Layout>
      {blogs ? (
        <section className={styles.singlePost}> 
          <img className={styles.detail__img} src={blogs.cover} alt="" /> 
          <div className={styles.container__content}> 
            <div className={styles.content}> 
              {blogs.desc}
              <br />
              <h2 style={{ fontFamily: 'Source Serif' }}>Comments</h2>
              <Divider />
              <CommentGroup>
                <Comment>
                  <CommentAvatar src='/assets/images/gp_sq.webp' />
                  <CommentContent>
                    <CommentAuthor as='a'>Citrus McPeel</CommentAuthor>
                    <CommentMetadata>
                      <div>Today at 5:42PM</div>
                    </CommentMetadata>
                    <CommentText>Neither the flames nor the depths could claim me.</CommentText>
                    <CommentActions>
                      <CommentAction>Reply</CommentAction>
                    </CommentActions>
                  </CommentContent>
                </Comment>

                <Comment>
                  <CommentAvatar src='/assets/images/mf_sq.webp' />
                  <CommentContent>
                    <CommentAuthor as='a'>Sarah Fortune</CommentAuthor>
                    <CommentMetadata>
                      <div>Yesterday at 12:30AM</div>
                    </CommentMetadata>
                    <CommentText>Fortune doesn't favor fools.</CommentText>
                    <CommentActions>
                      <CommentAction>Reply</CommentAction>
                    </CommentActions>
                  </CommentContent>
                  <CommentGroup>
                    <Comment>
                      <CommentAvatar src='/assets/images/tf_sq.webp' />
                      <CommentContent>
                        <CommentAuthor as='a'>Tobias Fate</CommentAuthor>
                        <CommentMetadata>
                          <div>Just now</div>
                        </CommentMetadata>
                        <CommentText>Lady Luck is smilin'.</CommentText>
                        <CommentActions>
                          <CommentAction>Reply</CommentAction>
                        </CommentActions>
                      </CommentContent>
                    </Comment>
                  </CommentGroup>
                </Comment>

                <Comment>
                  <CommentAvatar src='/assets/images/gv_sq.webp' />
                  <CommentContent>
                    <CommentAuthor as='a'>Malcolm Graves</CommentAuthor>
                    <CommentMetadata>
                      <div>5 days ago</div>
                    </CommentMetadata>
                    <CommentText>Dead man walkin'.</CommentText>
                    <CommentActions>
                      <CommentAction>Reply</CommentAction>
                    </CommentActions>
                  </CommentContent>
                </Comment>
              </CommentGroup>     
            </div>
          </div>
        </section>
      ) : null}
    </Layout>
  );
};

export default Details;
