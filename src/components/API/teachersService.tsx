import { get, limitToFirst, query, ref } from "firebase/database";
import { db } from "../../firebaseConfig";

export const getTeachers = async () => {
  const teachersRef = query(ref(db, "teachers"), limitToFirst(4));
  try {
    const res = await get(teachersRef);

    return { res };
  } catch (error) {
    console.log(error);
  }
};
