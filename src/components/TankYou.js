import iconTankYou from "../assets/images/icon-thank-you.svg";
import "./TankYou.css";

export default function TankYou() {
    return (
      <section className="tank-you">
        <img
          className="tank-you__ilustration"
          src={iconTankYou}
          aria-hidden="true"
          alt=""
        />
        <h2 className="tank-you__title">Thank you!</h2>
        <p className="tank-you__description">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </section>
    );
}