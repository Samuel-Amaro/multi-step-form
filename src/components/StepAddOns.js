import CardAddons from "./CardAddons";

export default function StepAddOns(props) {
    //TODO: obter o plan selected do step plan dinamicamente, para realizar calculos sobre o valor final dos serviços add
    const dataAddons = [
      {
        name: "Online service",
        price: "1",
        description: "Access to multiplayer games",
      },
      {
        name: "Larger storage",
        price: "2",
        description: "Extra 1TB of cloud save",
      },
      {
        name: "Customizable Profile",
        price: "2",
        description: "Custom theme on your profile",
      },
    ];
    return (
      <>
        {
            dataAddons.map((addOns, index) => {
                return (
                  <CardAddons
                    name={addOns.name}
                    description={addOns.description}
                    price={addOns.price}
                    planSelectedTime="monthly"
                    key={index}
                  />
                );
            })
        }
        
      </>
    );
}