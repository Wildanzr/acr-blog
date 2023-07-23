const H2 = ({ text, center, color, other }: TextProps) => {
  return (
    <h2
      className={`text-2xl font-semibold ${
        center ? "text-center" : ""
      } lg:text-3xl font-jakarta ${color || "text-whiteprimary"} ${
        other || ""
      }}`}
    >
      {text}
    </h2>
  );
};

export default H2;
