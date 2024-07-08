import Image from "next/image";
import styles from "./contact.module.css";
import CustomBtn from "@/components/customBtn/CustomBtn";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.leftInfo}>
            <p className={styles.subTitle}> Phone</p>
            <p className={styles.info}>+91 9960585253</p>
          </div>
        </div>

        <div className={styles.middle}>
          <div className={styles.leftInfo}>
            <p className={styles.subTitle}>Email</p>
            <p className={styles.info}>info@flymoredrone.in</p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.leftInfo}>
            <p className={styles.subTitle}>Address</p>
            <p className={styles.info}>
              Hingane Home colony Karvenagar, Pune 411052
            </p>
          </div>
        </div>
      </div>
      <div className={styles.mapSec}>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9581917056335!2d73.8120401746514!3d18.485552870243946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf4f8fe5bf51%3A0x69625f69c23aae3c!2sFlymore%20Drone!5e0!3m2!1sen!2sin!4v1720444152944!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className={styles.iframe}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.form}>
          <h2 className={styles.title}>Contact For Any Query</h2>
          <form>
            <input type="text" placeholder="Name" className={styles.input} />
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="text" placeholder="Subject" className={styles.input} />
            <textarea
              placeholder="Message"
              className={styles.textArea}
            ></textarea>
            <CustomBtn className={styles.btn} type="submit">
              Submit
            </CustomBtn>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
