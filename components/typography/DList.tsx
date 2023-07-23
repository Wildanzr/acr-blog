const DList = ({ text, center, color, other }: TextProps) => {
    return (
      <p
        className={`text-xs font-light ${
          center ? "text-center" : ""
        } lg:text-sm font-jakarta ${color || "text-whiteprimary"} ${
          other || ""
        }}`}
      >
        {text}
      </p>
    );
  };
  
  export default DList;
  