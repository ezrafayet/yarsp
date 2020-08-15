export {logout};

export type TLogoutStatus = "success"|"error";

const logout = async(): Promise<TLogoutStatus> => {
  try {
    
    // Fetch logout
    
    return "success";
    
  } catch(error) {
    
    throw error;
  }
}