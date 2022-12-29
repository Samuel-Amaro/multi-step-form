import StepIndicator from "./StepIndicator";

export default function Sidebar(props) {
  const data = [
    { numberStep: 1, info: "Step 1", summary: "Your info" },
    { numberStep: 2, info: "Step 2", summary: "Select plan" },
    { numberStep: 3, info: "Step 3", summary: "Add-ons" },
    { numberStep: 4, info: "Step 4", summary: "Summary" },
  ];
  return (
    <aside className="Sidebar">
     {
        data.map((dataStep, index) => {
            return <StepIndicator number={dataStep.numberStep} info={dataStep.info} summary={dataStep.summary} key={index}/>
        })
     }
    </aside>
  );
}
