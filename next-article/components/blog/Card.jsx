import React, { useState } from 'react';
import { Card, Image, Button, ButtonGroup, Divider } from 'semantic-ui-react';
import { blog } from '../../public/assets/data/data';
import Link from 'next/link';
import styles from "./blog.module.css";

const BlogCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const playAudio = (audioSrc) => {
    const newAudio = new Audio(audioSrc);
    setAudio(newAudio);
    newAudio.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={styles.blog}>
      <div className={styles.card__title}>
        <h2 style={{ fontFamily: "Source Serif" }}>Champions of Bilgewater</h2>
        <Divider />
      </div>
      <div className={`${styles.container} ${styles.grid3}`} style={{ margin: '0 2rem', display: 'flex', flexWrap: 'wrap' }}>
        {blog.map((item) => (
          <div key={item.id} style={{ margin: '1.5rem', flex: '1 0 30%' }}>
            <Card fluid className={`${styles.box} ${styles.boxItems}`} style={{ backgroundColor: '#1B1C1D' }}>
              <Link href={`/details/${item.id}`} className={styles.cardLink} style={{ textDecoration: 'none' }}>
                <Image src={item.cover} className={styles.cardImage} style={{ marginBottom: '0' }} />
                <Card.Content className={styles.cardContent} >
                  <Card.Header style={{ color: '#C89B3C', padding: '0 1.25rem' }}>
                    <h2>
                      {item.title}
                    </h2>
                  </Card.Header>
                  <Card.Meta style={{ color: '#F0E6D2', padding: '0 1.25rem', fontSize: '1rem' }}>{item.subtitle}</Card.Meta>
                  <Card.Description style={{ color: '#F0E6D2', padding: '0 1.25rem', fontSize: '.75rem' }}>{item.quote}</Card.Description>
                </Card.Content>
              </Link>
              <Card.Content extra>
                <ButtonGroup fluid>
                  <Button inverted icon='play' content='Play' onClick={() => playAudio(item.audioSrc)} disabled={isPlaying} />
                  <Button inverted icon='pause' content='Pause' onClick={pauseAudio} />
                </ButtonGroup>
              </Card.Content>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogCard;