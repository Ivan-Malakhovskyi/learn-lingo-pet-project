import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, limitToFirst, query, ref } from "firebase/database";
import { db } from "src/firebaseConfig";
import { Teacher } from "src/types";

// const BASE_URL =
//   "https://learn-lingo-pet-project-default-rtdb.europe-west1.firebasedatabase.app/teachers.json";

interface MyKnownError {
  errorMessage: string;
}

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (_, thunkAPI) => {
    const teachersRef = query(ref(db, "teachers"), limitToFirst(4));

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
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error as MyKnownError);
    }
  }
);
