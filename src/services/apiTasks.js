import { supabase, supabaseUrl } from "../supabase/supabase";

// const uid = "79bfb0f6-fa88-4506-9ac8-691e58634ed1";

export async function getTasks() {
  let { data: taskManager, error } = await supabase
    .from("taskManager")
    .select("*")
    // .eq("uid", uid)
    .single();
  // await supabase.auth;

  if (error) throw new Error(error.message);

  return taskManager;
}

export async function addTasks({ updateTasks, id }) {
  const { data, error } = await supabase
    .from("taskManager")
    .update({ userTasks: updateTasks })
    .eq("id", id)
    .select()
    .single();


  // const { data, error } = await supabase.from("taskManager").update({
  // userTasks: updateTasks, // تأكد أن newTasks مصفوفة تحتوي على البيانات الجديدة
  // });
  // .eq("uid", uid) // ✅ تحديث بناءً على uid
  // .select("userTasks")
  // .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function insertRow(uid) {
  const { data, error } = await supabase
    .from("taskManager")
    .insert([{ userTasks: [], uid }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function updateUser({ username, image }) {
  const hasImagePath =
    image?.startsWith?.(supabaseUrl) || typeof image === "string";


  const imageName = `${image.name}-${Math.random()}`;

  const imagePath = hasImagePath
    ? image
    : `${supabaseUrl}/storage/v1/object/public/avatars/${imageName}`;

  if (!hasImagePath) {
    const { data, error } = await supabase.auth.updateUser({
      data: { username, avatar: imagePath },
    });

    if (error) throw new Error(error.message);

    if (hasImagePath) return data;

    const { error: storageError } = await supabase.storage
      .from("avatars")
      .upload(imageName, image);

    if (storageError) throw new Error("Failed to upload image");

    return data;
  } else {
    const { data, error } = await supabase.auth.updateUser({
      data: { username },
    });

    if (error) throw new Error(error.message);

    return data;
  }
}

export async function updatePassword({ password }) {
  const { data, error } = await supabase.auth.updateUser({
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}
