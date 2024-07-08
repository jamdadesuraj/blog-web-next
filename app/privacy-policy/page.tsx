import styles from "./privacy.module.css";

const Privacy = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy for Flymore Drone</h1>
      <div className={styles.content}>
        <div className={styles.data}>
          <h2 className={styles.subTitle}>*Last Updated: 20 /08/2023</h2>
          <h2 className={styles.subTitle}>*1. Introduction*</h2>
          <p className={styles.desc}>
            Welcome to Flymore Drones Privacy Policy. This document outlines how
            we collect, use, disclose, and protect your personal information. By
            using our products and services, you agree to the terms outlined
            here.
          </p>
          <h2 className={styles.subTitle}>*2. Information We Collect*</h2>
          <p className={styles.desc}>
            We may collect personal information such as name, contact details,
            and billing information. We also collect flight data, usage
            information, and technical data from your interactions with our
            drones and website.
          </p>
          <h2 className={styles.subTitle}>*3. Use of Collected Information*</h2>
          <p className={styles.desc}>
            We use the collected information to provide and improve our drone
            services, process transactions, and communicate with you. We may
            also use aggregated data for analysis and marketing purposes.
          </p>
          <h2 className={styles.subTitle}>*4. Data Sharing*</h2>
          <p className={styles.desc}>
            We may share your information with third-party service providers for
            operational purposes. Your data may also be shared in compliance
            with legal obligations or to protect our rights.
          </p>
          <h2 className={styles.subTitle}>*5. Data Security*</h2>
          <p className={styles.desc}>
            We implement industry-standard security measures to safeguard your
            information from unauthorized access, loss, or misuse.
          </p>
          <h2 className={styles.subTitle}>*6. Your Choices*</h2>
          <p className={styles.desc}>
            You have the right to access, modify, or delete your personal
            information. You can also manage your communication preferences and
            cookie settings.
          </p>
          <h2 className={styles.subTitle}>
            *7. Cookies and Tracking Technologies*
          </h2>
          <p className={styles.desc}>
            We use cookies and similar technologies to enhance your browsing
            experience and analyze usage patterns on our website.
          </p>
          <h2 className={styles.subTitle}>*8. Changes to Privacy Policy*</h2>
          <p className={styles.desc}>
            We may update this policy from time to time. Any changes will be
            posted on our website, and you will be notified of significant
            updates.
          </p>
          <h2 className={styles.subTitle}>*9. Contact Us*</h2>
          <p className={styles.desc}>
            If you have questions or concerns about our privacy practices,
            please contact us at
          </p>

          <h2 className={styles.subTitle}>+91 9960585253</h2>
          <h2 className={styles.subTitle}>info@flymoredrone.in</h2>

          <p className={styles.desc}>
            Please note that this template is a starting point. Its important to
            tailor it to your companys specific practices and consult legal
            counsel to ensure compliance with relevant laws and regulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
