import "./Button.css";

interface IconContent {
  imgSrc: string;
}

interface SpanContent {
  icon?: IconContent;
}

interface LabelContainer {
  text: string;
  suffix?: SpanContent;
  prefix?: SpanContent;
}

interface ButtonProps {
  color?: string;
  mode?: "default" | "btn-outline" | "filled-text-only" | "text-only-outline";
  size?: "small" | "medium";
  label: LabelContainer;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  color = "primary",
  size = "medium",
  mode = "default",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={["button", mode, color, size, mode].join(" ")}
      {...props}
    >
      {label.prefix && (
        <span className="prefix">
          <span className="icon">
            <img src={label.prefix.icon?.imgSrc} />
          </span>
        </span>
      )}
      {<span className="mx-2">{label.text}</span>}
      {label.suffix && (
        <span className="suffix">
          <span className="icon">
            <img src={label.suffix.icon?.imgSrc} />
          </span>
        </span>
      )}
    </button>
  );
};
