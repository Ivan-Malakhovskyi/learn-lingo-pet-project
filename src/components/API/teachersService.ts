import axios from "axios";

const BASE_URL =
  "https://learn-lingo-pet-project-default-rtdb.europe-west1.firebasedatabase.app/teachers.json";

type TProps = {
  startAt: number;
};

export const getTeachers = async ({ startAt }: TProps) => {
  try {
    const res = await axios.get(
      `${BASE_URL}?orderBy="id"&limitToFirst=${startAt}`
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
