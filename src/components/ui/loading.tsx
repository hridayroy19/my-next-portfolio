import "../../app/loading.css";

const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="ring-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
