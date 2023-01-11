import { useState } from "react";
import CardAddons from "./CardAddons";
import FormWrapper from "./FormWrapper";
import "./StepAddOns.css";

export default function StepAddOns(props) {
  
  const [addonsSelecteds, setAddonsSelecteds] = useState(
    props.datas.addOns
  );

  function isCheckedAddOns(addOns) {
    return props.datas.addOns.some((element) => {
      return addOns.name.toLowerCase() === element.name.toLowerCase();
    });
  }

  return (
    <FormWrapper
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
      addOns={true}
    >
      <div className="cards-addons">
        {props.dataAddons.map((addOns, index) => {
          return (
            <CardAddons
              name={addOns.name}
              description={addOns.description}
              price={addOns.price}
              planSelectedTime={props.datas.plan.timePlan}
              key={index}
              isCheckedP={isCheckedAddOns(addOns) ? true : false}
              updateFields={props.updateFields}
              setAddonsSelecteds={setAddonsSelecteds}
              addonsSelecteds={addonsSelecteds}
            />
          );
        })}
      </div>
    </FormWrapper>
  );
}
