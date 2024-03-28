import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref, query } from "firebase/database";
import { db } from "src/firebaseConfig";
import { Teacher } from "src/types";

interface MyKnownError {
  message: string;
}

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (_, thunkApi) => {
    const teachersRef = query(ref(db, "teachers"));

    try {
      const data = await get(teachersRef);
      if (data.exists()) {
        const teachersData = Object.entries(data.val()).map(([id, data]) => ({
          id,
          ...(data as Teacher[]),
        }));
        return teachersData;
      } else {
        console.log("No data");
        return [];
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error as MyKnownError);
    }
  }
);
