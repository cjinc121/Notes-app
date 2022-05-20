import axios from "axios";

//ADD to Archive
export const addToArchiveService = async (note, id, user) => {
  try {
    const data = await axios.post(
      `/api/notes/archives/${id}`,
      { note },
      {
        headers: {
          authorization: user.tokenVal,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Note add error", error);
  }
};

//delete from Archived Notes
export const deleteFromArchivesService = async (id, user) => {
  try {
    const data = await axios.delete(`/api/archives/delete/${id}`, {
      headers: {
        authorization: user.tokenVal,
      },
    });
    return data;
  } catch (error) {
    console.error("delete ArchivedNotes error", error);
    return;
  }
};
//Archived Notes
export const getArchivedNotesService = async (user) => {
  try {
    const data = await axios.get("api/archives", {
      headers: {
        authorization: user.tokenVal,
      },
    });
    return data;
  } catch (error) {
    console.error("ArchivedNotes error", error);
    return;
  }
};
//RESTORE A NOTE
export const restoreFromArchivesService = async (note, id, user) => {
  try {
    const data = await axios.post(
      `/api/archives/restore/${id}`,
      { note },
      {
        headers: {
          authorization: user.tokenVal,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Note restore error", error);
  }
};
