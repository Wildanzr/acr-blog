const TList = ({ text, center, color, other }: TextProps) => {
    return (
      <p
        className={`text-base font-semibold ${
          center ? "text-center" : ""
        } lg:text-lg font-jakarta ${color || "text-whiteprimary"} ${
          other || ""
        }}`}
      >
        {text}
      </p>
    );
  };
  
  export default TList;
  