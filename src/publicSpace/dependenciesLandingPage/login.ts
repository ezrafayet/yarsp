
export {login};

export type TLoginStatus = "success"|"wrongId"|"wrongPassword"|"tokenExpired"|"error";

const login = async(id: string, password: string): Promise<TLoginStatus> => {
  try {

    return "success";

  } catch(error) {
    throw error;
  }
}
