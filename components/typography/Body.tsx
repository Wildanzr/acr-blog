const Body = ({ text, center, color, other }: TextProps) => {
    return (
      <p
        className={`text-lg font-semibold ${
          center ? "text-center" : ""
        } lg:text-xl font-jakarta ${color || "text-whiteprimary"} ${
          other || ""
        }}`}
      >
        {text}
      </p>
    );
  };
  
  export default Body;
  