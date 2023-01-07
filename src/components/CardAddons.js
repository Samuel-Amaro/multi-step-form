import { useEffect, useState } from "react";

export default function CardAddons({
  name,
  description,
  price,
  planSelectedTime,
  isCheckedP,
  updateFields,
  setAddonsSelecteds,
  addonsSelecteds,
}) {
  const nameAttributerHTML = name.toLowerCase().split(" ").join("-");
  const strFormatTimePlan =
    planSelectedTime.toLowerCase() === "monthly" ? "mo" : "yr";
  const calcPrice =
    strFormatTimePlan === "mo" ? price : parseInt(price) * 10;
  const [isChecked, setIsChecked] = useState(isCheckedP);

  //apos atualizar state local, atualiza o state do form
  useEffect(() => {
    updateFields({ addOns: [...addonsSelecteds] });
  }, [addonsSelecteds]);

  //apos marcar/desmacar checkbox, atualiza state local
  useEffect(() => {
    //marcado - checked true
    if (isChecked) {
      setAddonsSelecteds((a) => {
        //se o addOns não estiver no state
        if (!isAddInState({ name: name, price: calcPrice })) {
          return [
            ...a,
            {
              name: name,
              price: calcPrice,
            },
          ];
        }
        return a;
      });
    } else {
      //desmarcado
      if (isAddInState({ name: name, price: calcPrice })) {
        const removedAddons = removeAddonsDeselected({
          name: name,
          price: calcPrice,
        });
        setAddonsSelecteds([...removedAddons]);
      }
    }
  }, [isChecked]);

  function removeAddonsDeselected(addOns) {
    const filteredAddons = addonsSelecteds.filter((ao) => {
      return (
        addOns.name.toLowerCase() !== ao.name.toLowerCase() 
      );
    });
    return filteredAddons;
  }

  function isAddInState(addOns) {
    return addonsSelecteds.some((element) => {
      return addOns.name.toLowerCase() === element.name.toLowerCase();
    });
  }

  return (
    <div className="card-addons" tabIndex="0">
      <input
        type="checkbox"
        className="card-addons__Input"
        id={nameAttributerHTML}
        name={nameAttributerHTML}
        value={name.toLowerCase()}
        aria-labelledby={`description-${nameAttributerHTML}`}
        checked={isChecked}
        onChange={(event) => {
          setIsChecked(!isChecked);
        }}
        title={description}
      />
      <p className="card-addons__descriptions">
        <label className="card-addons__Label" htmlFor={nameAttributerHTML}>
          {name}
        </label>
        <span
          className="card-addons__description"
          id={`description-${nameAttributerHTML}`}
        >
          {description}
        </span>
      </p>
      <p className="card-addons__price">
        +${calcPrice}/{strFormatTimePlan}
      </p>
    </div>
  );
}
