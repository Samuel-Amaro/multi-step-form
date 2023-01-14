import { useEffect, useState } from "react";
import Input from "./Input";
import Label from "./Label";
import "./CardAddons.css";

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
  const calcPrice = strFormatTimePlan === "mo" ? price : parseInt(price) * 10;
  const [isChecked, setIsChecked] = useState(isCheckedP);

  useEffect(() => {
    updateFields({ addOns: [...addonsSelecteds] });
  }, [addonsSelecteds]);

  useEffect(() => {
    if (isChecked) {
      setAddonsSelecteds((a) => {
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
      return addOns.name.toLowerCase() !== ao.name.toLowerCase();
    });
    return filteredAddons;
  }

  function isAddInState(addOns) {
    return addonsSelecteds.some((element) => {
      return addOns.name.toLowerCase() === element.name.toLowerCase();
    });
  }

  function handleOnChange(event) {
    event.preventDefault();
    setIsChecked(!isChecked);
  }

  return (
    <div
      className={
        isCheckedP ? "card-addons card-addons--selected" : "card-addons"
      }
      tabIndex="0"
      title="tick the checkbox that corresponds to the add-on services you want"
    >
      <Input
        className="card-addons__input"
        type="checkbox"
        id={nameAttributerHTML}
        name={nameAttributerHTML}
        placeholder={undefined}
        value={name.toLowerCase()}
        onHandle={handleOnChange}
        required={false}
        min={undefined}
        pattern={undefined}
        title={description}
        checked={isChecked}
        onKeyDown={handleOnChange}
      />
      <p className="card-addons__descriptions">
        <Label className="card-addons__label" for={nameAttributerHTML}>
          {name}
        </Label>
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
