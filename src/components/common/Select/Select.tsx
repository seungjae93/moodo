import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import ReactDOM from "react-dom";

interface SelectProps {
  children?: ReactNode;
  value?: string;
}

interface OptionItem {
  value: string;
  label: string;
}
const SelectContext = createContext<{
  open: boolean;
  selected: string;
  options: OptionItem[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setOptions: React.Dispatch<React.SetStateAction<OptionItem[]>>;
}>({
  open: false,
  selected: "0",
  options: [],
  setOpen: () => {},
  setSelected: () => {},
  setOptions: () => {},
});

//Select Root

const SelectRoot = ({ children }: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("0");
  const [options, setOptions] = useState<OptionItem[]>([]);

  return (
    <SelectContext.Provider
      value={{
        open,
        selected,
        options,
        setOpen,
        setSelected,
        setOptions,
      }}
    >
      <div style={{ position: "relative" }}>{children}</div>
    </SelectContext.Provider>
  );
};

//Select Trigger
const SelectTrigger = ({ children, ...rest }: SelectProps) => {
  const { open, setOpen, selected, options } = useContext(SelectContext);
  const [value] = options.filter((o) => o.value === selected);

  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 28px",
      }}
      {...rest}
      onBlur={() => setOpen(false)}
      onClick={() => setOpen((pre) => !pre)}
    >
      <div>{value?.label ? value?.label : children}</div>
      <div>{open ? "▲" : "▼"}</div>
    </button>
  );
};

//Select List
const SelectList = ({ children, ...rest }: SelectProps) => {
  const { open, setOptions } = useContext(SelectContext);
  useEffect(() => {
    const options: OptionItem[] = [];
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        const { value, children: label } = child.props;
        options.push({ value, label });
      }
    });

    setOptions(options);
  }, [children, setOptions]);
  return open ? <div {...rest}>{children}</div> : <></>;
};

//Select Option
const SelectOption = ({ children, value, ...rest }: SelectProps) => {
  const { setSelected } = useContext(SelectContext);
  return (
    <div {...rest} onMouseDown={(e) => setSelected(value!)}>
      {children}
    </div>
  );
};

// //Select Portal
// const SelectPortal = ({ children }: SelectProps) => {
//   const portalTarget = document.getElementById("portal-target");

//   if (!portalTarget) {
//     return null;
//   }

//   return ReactDOM.createPortal(children, portalTarget);
// };

const Root = SelectRoot;
const Trigger = SelectTrigger;
const List = SelectList;
const Option = SelectOption;
// const Portal = SelectPortal;

export { Root, Trigger, List, Option };
