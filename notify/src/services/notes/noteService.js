import axios from "axios";

//ADD A NOTE
export const addNotesService = async (note, user) => {
  try {
    const res = await axios.post(
      "/api/notes",
      { note },
      {
        headers: {
          authorization: user.tokenVal,
        },
      }
    );
    return res;
  } catch (error) {
    console.error("Note add error", error);
  }
};

//getNote
export const getNotesService = async (user) => {
  try {
    const data = await axios.get("/api/notes", {
      headers: {
        authorization: user.tokenVal,
      },
    });
    return data;
  } catch (error) {
    console.error("Notes error", error);
    return;
  }
};

//REMOVE/DELETE FROM NOTE COllection
export const removeFromNotesService = async (id, user) => {
  try {
    const res = await axios.delete(`/api/notes/${id}`, {
      headers: {
        authorization: user.tokenVal,
      },
    });
    return res;
  } catch (error) {
    console.error("note fetch error", error);
  }
};
//UPDATE A NOTE
export const updateNoteService = async (user, note, id) => {
  try {
    const res = await axios.post(
      `/api/notes/${id}`,
      { note },
      {
        headers: {
          authorization: user.tokenVal,
        },
      }
    );
    return res;
  } catch (error) {
    console.error("Note add error", error);
  }
};
