import { signIn } from "@/app/auth.js";


export const authenticate = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
      if (err.message.includes("CredentialsSignin")) {
        return "Wrong Credentials";
      }
      throw err;
    }
  };