import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About Us</h2>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.leftInfo}>
            <Image src="/cert.png" alt="certificate" width={80} height={50} />
            <div>
              <p className={styles.subTitle}>Our Vision</p>
              <p className={styles.desc}>
                “We will challenge our skills and abilities, and create a UAVs
                system that’s strong, dependable and intuitive, allowing our
                colleagues to work quickly and effortlessly.”
              </p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.leftInfo}>
            <Image src="/cert.png" alt="certificate" width={80} height={50} />
            <div>
              <p className={styles.subTitle}>Our Mission</p>
              <p className={styles.desc}>
                “Our team goal is to streamline our organisations to serve Drone
                and Robotics products and services within 12 months. We will
                develop a new system that is easy to use, and reduces user
                efforts.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.counter}>
        <div className={styles.exp}>
          <p className={styles.num}>3</p>
          <p className={styles.text}>Years</p>
        </div>
        <div className={styles.exp}>
          <p className={styles.num}>8</p>
          <p className={styles.text}>Expert Technicians</p>
        </div>
        <div className={styles.exp}>
          <p className={styles.num}>200+</p>
          <p className={styles.text}>Satisfied Clients</p>
        </div>
      </div>

      <div className={styles.infoContent}>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="img" fill className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.mainTitle}>
            <span className={styles.span}>Flymore</span> Is The Best Place For
            Your Drone Care
          </h2>

          <p className={styles.aboutDesc}>
            Flymore Drone, headquartere in Pune (India), specialises in design
            and supply of UAV Solutions for variety of applications. Solution
            for Drone, Aerospace and GIS Industry. Flymore Drone is founded in
            2021 with a vision of supporting the Aerospace, Indian Defence and
            Aviation sector in the critical technology solutions. Flymore Drone
            heavily invested in the indigenous development of Unmanned Aerial
            Vehicle and Robotics.
          </p>
          <p className={styles.aboutDesc}>
            We are supplier of UAV and Robotics products. Also provide services
            for Aerial Mapping, Photogrammetric Data Analysis, Surveying,
            Industrial Inspection, Safety and Security Surveillance, Search and
            Rescue Operation, Planning, Agriculture Solutions.
          </p>
          <p className={styles.aboutDesc}>
            Flymore Drone offer various Customized drones for Police, Defence
            Sector, Survey, Surveillance, Food Delivery and high payload
            capacity drones, that can operate in extreme weather conditions. We
            deliver high performant, safe and autonomous unmanned system with
            security for our customers. We believe our expert team. Passionate
            people, well-equipped manufacturing, testing facilities and
            excellent support system make us the trusted partner of our clients.
          </p>
          <p className={styles.aboutDesc}>
            Our wide range of products ranging from smaller educational drones
            to large industrial application drones. Every product can be
            developed according to requirements providing higher efficiency and
            standard ergonomic design. Technologies used in the products like
            Internet of drones, where the end user is capable of remotely
            operating the drone and getting access to the live video feed
            through the 4g internet connection. Drones are completely autonomous
            flight from the takeoff to completing the mission along with
            precision landing system based on computer vision is used. Enabled
            with NPNT system in accordance with DGCA rules.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
