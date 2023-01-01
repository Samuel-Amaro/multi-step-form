import { useState } from "react";

export default function CardAddons(props) {
  const nameAttributerHTML = props.name.toLowerCase().split(" ").join("-");
  const strFormatTimePlan =
    props.planSelectedTime.toLowerCase() === "monthly" ? "mo" : "yr";
  const calcPrice =
    strFormatTimePlan === "mo" ? props.price : parseInt(props.price) * 10;
  const [isChecked, setIsChecked] = useState(props.isChecked);

  //TODO: PROBLEMA E ASSICRONIDADE ENTRE OS STATES
  //TODO: LOGICA ESTA ERRADA AQUI, PARA TER CONTROLE DOS ADD ONS SELECIONADOS E DESMARADOS, PENSAR EM UMA FORMA DE ARRUMAR ISSO

  function removeAddonsDeselected(addOns) {
    const filteredAddons = props.addonsSelecteds.filter((ao) => {
      return (
        ao.name.toLowerCase() !== addOns.name.toLowerCase() &&
        ao.price !== addOns.price
      );
    });
    console.log(filteredAddons);
    return filteredAddons;
  }

  function isAddInState(addOns) {
    return props.addonsSelecteds.some((element) => {
      return (
        element.name.toLowerCase() === addOns.name.toLowerCase() &&
        element.price === addOns.price
      );
    });
  }

  return (
    <div className="form__Card-Addons" tabIndex="0">
      <input
        type="checkbox"
        className="form__Input"
        id={nameAttributerHTML}
        name={nameAttributerHTML}
        value={props.name.toLowerCase()}
        aria-labelledby={`description-${nameAttributerHTML}`}
        checked={isChecked}
        onChange={(event) => {
          const currentState = !isChecked;
          setIsChecked(currentState);
          //marcado
          if (currentState) {
            props.setAddonsSelecteds((a) => {
              console.log(a);
              if (!isAddInState({ name: props.name, price: calcPrice })) {
                console.log([
                  ...a,
                  {
                    name: props.name,
                    price: calcPrice,
                  },
                ]);
                return [
                  ...a,
                  {
                    name: props.name,
                    price: calcPrice,
                  },
                ];
              }
            });
          } else {
            //desmarcado
            //console.log(isAddInState({ name: props.name, price: calcPrice }));
            if (isAddInState({ name: props.name, price: calcPrice })) {
              const removedAddons = removeAddonsDeselected({
                name: props.name,
                price: calcPrice,
              });
              console.log(removedAddons);
              props.setAddonsSelecteds([...removedAddons]);
              props.setDatas((d) => {
                return {
                  ...d,
                  ...{ addOns: [...removedAddons] },
                };
              });
            }
          }
        }}
      />
      <p className="form__Container-Description-Addons">
        <label className="form__Label" htmlFor={nameAttributerHTML}>
          {props.name}
        </label>
        <span
          className="form__Description"
          id={`description-${nameAttributerHTML}`}
        >
          {props.description}
        </span>
      </p>
      <p className="form__Price-Addons">
        +${calcPrice}/{strFormatTimePlan}
      </p>
    </div>
  );
}
