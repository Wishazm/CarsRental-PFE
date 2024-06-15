const FormButton = ({ bgColor = "", btnText }) => {
  return (
    <div className="form-group">
      <button
        type="submit"
        style={{
          backgroundColor: "#7D2526",
          width: "100%",
          padding: "10px",
          borderRadius: "20px",
          color: "white",
        }}
      >
        {btnText}
      </button>
    </div>
  );
};

export default FormButton;
