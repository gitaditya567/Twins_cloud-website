export default function Template({ children }) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
