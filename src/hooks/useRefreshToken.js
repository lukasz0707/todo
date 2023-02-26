import axios from "../api/axios"
import useAuth from "./useAuth"

const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    })
    setAuth((prev) => {
      console.log(JSON.stringify(prev))
      console.log(response.data.accessToken)
      return { ...prev, access_token: response.data.access_token }
    })
    return response.data.accessToken
  }
  return refresh
}

export default useRefreshToken
