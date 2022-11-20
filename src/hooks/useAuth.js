import axios from "axios";
import { useState } from "react";

const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async (data) => {
    setLoading(true);
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_ENTRYPOINT}/login_check`,
        data,
        {
          withCredentials: true,
        }
      );
      setLoading(false);
      return result;
    } catch (e) {
      setLoading(false);
      throw e;
    }
  };

  return { loading, login };
};

export default useAuth;
