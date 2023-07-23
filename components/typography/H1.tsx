const H1 = ({ text, center, color, other }: TextProps) => {
  return (
    <h2
      className={`text-3xl font-bold ${
        center ? "text-center" : ""
      } lg:text-4xl font-jakarta ${color || "text-whiteprimary"} ${
        other || ""
      }}`}
    >
      {text}
    </h2>
  );
};

export default H1;
