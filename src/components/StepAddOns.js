import CardAddons from "./CardAddons";
import FormWrapper from "./FormWrapper";

export default function StepAddOns(props) {
    const dataAddons = [
      {
        name: "Online service",
        price: 1,
        description: "Access to multiplayer games",
        checkedDefault: true,
      },
      {
        name: "Larger storage",
        price: 2,
        description: "Extra 1TB of cloud save",
        checkedDefault: true,
      },
      {
        name: "Customizable Profile",
        price: 2,
        description: "Custom theme on your profile",
        checkedDefault: false,
      },
    ];
    return (
      <FormWrapper
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      >
        {dataAddons.map((addOns, index) => {
          return (
            <CardAddons
              name={addOns.name}
              description={addOns.description}
              price={addOns.price}
              planSelectedTime="monthly"
              key={index}
              checked={addOns.checkedDefault}
            />
          );
        })}
      </FormWrapper>
    );
}