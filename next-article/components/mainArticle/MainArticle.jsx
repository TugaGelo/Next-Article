import React from 'react';
import styles from './mainArticle.module.css';
import { Divider, Image } from 'semantic-ui-react';

const MainArticle = () => {
  return (
    <>
    <div className={styles.header__container}>
      <div className={`${styles.header__title} ${styles.head}`}>
        <span className={styles.header__maintitle}>BILGEWATER</span>
        <span className={styles.header__subtitle}>Lawless Port City</span>
      </div>
      <Image className={styles.header__img} src="/assets/images/category-heading.png" alt="Category Image"fluid />
    </div>

    <div className={`${styles.main__article} ${styles.content}`}>
        <h2 style={{ fontFamily: "Source Serif" }}>The Lawless Port City</h2>
        <Divider />
        <p style={{ fontFamily: "Yaldevi" }}>Bilgewater is a haven for smugglers, marauders, and the unscrupulous, where fortunes are made and ambitions shattered in the blink of an eye. For those fleeing justice, debt, or persecution, it is a city of new beginnings; no one on the twisted streets of Bilgewater cares about your past. It's a melting pot of cultures, races, and creeds, alive with activity at all hours.</p>
        <Image src="/assets/images/lore_01.jpg" alt="Image 1" size='medium' floated='left' bordered rounded fluid />
        <p style={{ fontFamily: "Yaldevi" }}>While incredibly dangerous, Bilgewater is also ripe with opportunity, free from the shackles of government, regulation, and moral constraints. If you have the coin, almost anything can be purchased in Bilgewater, from outlawed hextech to the favor of local crime lords. Nevertheless, come daybreak, the unwary are found floating in the harbor, their purses empty and their throats slit.</p>
        <Image src="/assets/images/lore_03.jpg" alt="Image 2" size='medium' floated='right' bordered rounded fluid />
        <p style={{ fontFamily: "Yaldevi" }}>Bilgewater is a port city like no other - home to monster hunters, dock-gangs, indigenous peoples, and traders from across the known world. Over time becoming a vital stop for trade ships traveling near the Serpent Isles. Almost anything can be purchased here, from outlawed hextech to the favor of local crime lords. There is no better place to seek fame and fortune, though death lurks in every alleyway, and the law is almost non-existent.</p>
        
        <p style={{ fontFamily: "Yaldevi" }}>Surrounded by treacherous straits and towering cliffs, Bilgewater Bay is as dangerous as those who call it home. Visitors are often seduced by seemingly limitless opportunity, and become permanent residents—realizing that the longer they stay, the more they can exploit others for power and wealth.</p>
        
        <p style={{ fontFamily: "Yaldevi" }}>Slaughter Docks' massive sea monsters are a const threat in the waters around Bilgewater. Fleets leave port at sunset every night to hunt these mighty beasts. If successful, they return to the Slaughter Docks to render the once-great creatures down to meat, bones, and armored hides. The Slaughter Docks are located next to Rat Town, beneath Butcher's Bridge. The sea around the Slaughter-docks is often darkened by the blood of slain sea monsters. The chum draws sharks and other predators into the many harbors, stirring up a violent froth. Slaughter fleets leave port at sunset every night to hunt mighty sea monsters.</p>
        <p style={{ fontFamily: "Yaldevi" }}>Located near the Slaughter Docks, Bilgewater's White Wharf earned its name thanks to the layer of bird waste covering it from end to end, which was only to be expected at a resting place for the dead. In Bilgewater, the dead are not buried, but given back to the ocean, and this is where it all happens. A grave of the sunken dead hangs suspended in the cold depths, marked by hundreds of bobbing grave-buoys. The graves of poor residents have merely name posts, tied en masse to old anchors beneath waterlogged barrels. The wealthy have lavish bobbing tombstones with carvings resembling rearing krakens or buxom sea wenches, and are interred within expensive caskets below the surface. The Boatman ferries the bodies of the departed to the various graveyards scattered about the straits surrounding the city.</p>
        <p style={{ fontFamily: "Yaldevi" }}>The isle of Buhru are one of the isles of the Serpent Isles island chain,. Here battle isn't considered a test of strength but of will. These Isles are the location from which the religion of Nagakabouros and its priestess originate from.</p>
        <Image src="/assets/images/lore_04.jpg" alt="Image 3" size='huge' centered bordered rounded fluid/>
        
      </div> 
    </>
  )
}

export default MainArticle