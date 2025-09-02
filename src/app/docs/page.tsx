const page = () => {
  return (
    <div className="flex items-center justify-center">
      <iframe
        src="https://codesandbox.io/p/github/Rajan66/playground-dummy/main?import=true&embed=1"
        style={{
          width: "100%",
          height: "500px",
          border: 0,
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title="Rajan66/playground-dummy/draft/gallant-bird"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
};

export default page;
