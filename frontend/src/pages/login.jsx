import { useState } from "react";

const Login = () => {
  const [preview, setPreview] = useState();

  const imageHandle = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input type="file" onChange={imageHandle} />
      {preview && <img src={preview} alt="Preview" />}
    </div>
  );
};

export default Login;
