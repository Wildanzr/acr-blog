const Description = ({ text, center, color, other }: TextProps) => {
    return (
      <p
        className={`text-sm font-light ${
          center ? "text-center" : ""
        } lg:text-base font-jakarta ${color || "text-whiteprimary"} ${
          other || ""
        }}`}
      >
        {text}
      </p>
    );
  };
  
  export default Description;
  