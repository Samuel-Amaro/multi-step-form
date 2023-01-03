import iconTankYou from "../assets/images/icon-thank-you.svg";

export default function TankYou() {
    return (
      <section className="form__Content">
        <img
          className="form__Ilustration"
          src={iconTankYou}
          aria-hidden="true"
          alt=""
        />
        <h2 className="form__subtitle">Thank you!</h2>
        <p className="description">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </section>
    );
}