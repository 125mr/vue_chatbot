import axios from "axios";
import { ref } from 'vue'

const error = ref(null)

    
const validate = async () => {
  error.value = null;

  // ローカルストレージから値を取得
  const uid = window.localStorage.getItem("uid");
  const client = window.localStorage.getItem("client");
  const accessToken = window.localStorage.getItem("access-token");

  try {
    // url : .../auth/validate_token/に遷移
    const res = await axios.get("http://localhost:3000/auth/validate_token", {
      // 引数として「uid, accessToken, client」を渡す
      headers: {
        uid: uid,
        "access-token": accessToken,
        client: client,
      },
    });

    if (!res) {
      throw new Error("認証に失敗しました");
    }

    return res;
  } catch (err) {
    error.value = '認証に失敗しました'

    window.localStorage.removeItem('uid')
    window.localStorage.removeItem('access-token')
    window.localStorage.removeItem('client')
    window.localStorage.removeItem('name')
  }
};

const useValidate = () => {
    return { error, validate }
};

export default useValidate;
