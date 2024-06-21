import React, { useState, useEffect } from 'react';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';
import Link from 'next/link';
import { nav } from '../../public/assets/data/data';
import styles from './header.module.css';

const Header = () => {
  const [activeItem, setActiveItem] = useState('');
  const [showMenuButton, setShowMenuButton] = useState(false);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  useEffect(() => {
    const handleResize = () => {
      setShowMenuButton(window.innerWidth <= 768);
    };

    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <section className={styles.nav__bar}>
        <Menu inverted style={{ borderRadius: '0' }}>
          <Menu.Item>
            <Icon className={styles.nav__icon} name='tint' />
            <span className={styles.nav__label}>Bilgewater</span>
          </Menu.Item>

          {showMenuButton ? (
            <Menu.Menu position='right'>
              <Dropdown item >
                <Dropdown.Menu style={{ backgroundColor: '#1b1c1d' }}>
                  {nav.map((item) => (
                    <Dropdown.Item
                      key={item.id}
                      active={activeItem === item.text}
                      onClick={(e) => handleItemClick(e, { name: item.text })}
                      as={Link}
                      href={item.id === 4 ? '/' : `/details/1${item.id}`}
                    >
                      <Icon className={styles.nav__icon} name={item.icon} />
                      <span className={styles.nav__label}>{item.text.charAt(0).toUpperCase() + item.text.slice(1)}</span>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          ) : (
            <Menu.Menu position='right'>
              {nav.map((item) => (
                <Menu.Item
                  key={item.id}
                  name={item.text}
                  active={activeItem === item.text}
                  onClick={handleItemClick}
                  as={Link}
                  href={item.id === 4 ? '/' : `/details/1${item.id}`}
                >
                  <Icon className={styles.nav__icon} name={item.icon} />
                  <span className={styles.nav__label}>{item.text.charAt(0).toUpperCase() + item.text.slice(1)}</span>
                </Menu.Item>
              ))}
            </Menu.Menu>
          )}
        </Menu>
      </section>
    </header>
  );
};

export default Header;