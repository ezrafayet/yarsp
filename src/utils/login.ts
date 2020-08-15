export {login};

export type {ILoginAnswer}

type TLoginStatus = "success" | "wrongId" | "wrongPassword" | "tokenExpired" | "error";

interface ILoginAnswer {
  status: TLoginStatus;
  data?: {
    session?: any
  };
}

const login = async(id: string, password: string): Promise<ILoginAnswer> => {
  try {
    
    // Login here
    
    return ({
      status: "success",
      data: {
        session: {
          userStatus: 'identified',
        }
      }
    });
    
  } catch (error) {
    throw error;
  }
}
