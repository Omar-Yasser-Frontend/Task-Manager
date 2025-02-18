import { supabase } from "../supabase/supabase";

export async function signup({ firstName, secondName, email, password }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: `${firstName} ${secondName}`,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}
