import { Switch } from "@headlessui/react";

interface Props  {
  labelName: string;
  enabled : boolean;
  type : "button" | "reset" | "submit"; 
  setEnabled : React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleButton: React.FC<Props> = (props) => {
  const divTheme = props.enabled ? "bg-indigo-600" : "bg-gray-200";
  const trans = props.enabled ? "translate-x-5" : "translate-x-1";
  const spanTheme = props.enabled ? "bg-white" : "bg-indigo-600";

  return (
    <>
      <Switch.Group as="div">
        <div className="flex flex-wrap items-center">
          <Switch.Label as="h2" className="mr-4" passive>
            {props.labelName}
          </Switch.Label>
          <Switch
            checked={props.enabled}
            onChange={props.setEnabled}
            type={props.type}
            className={
              "relative items-center h-5 rounded-full w-9 transition-colors focus:outline-none flex " +
              divTheme
            }
          >
            <span
              className={
                " w-3 h-3 transform bg-white rounded-full transition-transform duration-300  " +
                trans +
                " " +
                spanTheme
              }
            />
          </Switch>
        </div>
      </Switch.Group>
    </>
  );
};

ToggleButton.defaultProps = {};
export default ToggleButton;
