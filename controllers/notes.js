const db = require("../config/db");

module.exports = {

  addNotes: async (req, res) => {
    const {title,datetime,note} = req.body;
    try {
      const add = await db.query(
        "INSERT INTO notes(title,datetime,note) VALUES(?,?,?)",
        [title,datetime,note]
      );
      return res
      .status(201)
      .json(
        { 
            message: "notes berhasil tersimpan"
         }
        );
    } catch (error) {
      return res
        .status(500)
        .json({ message: "internal server error", err: error });
    }
  },
  getAll:async(req,res)=>{
    try {
        const notes = await db.query(
            "SELECT * FROM notes"
        )
        return res.status(500).json({notes:notes[0]})
    } catch (error) {
        return res.status(500).json({message:"internal server error"})
    }
  },
  byId:async(req,res)=>{
    const {id} = req.params
    try {
        const notes = await db.query(
            "SELECT * FROM notes WHERE id=?",
        [id]
        )
        return res.status(200).json(notes[0])
    } catch (error) {
        return res.status(500).json({message:"internal server error"})
    }
  },
  edit:async(req,res)=>{
    const {id} = req.params
    const {title,datetime,note} = req.body
    try {
        let query = "UPDATE notes SET ";
        const values = [];
    
        if (title !== "") {
          query += "title = ?";
          values.push(title);
        }
    
        if (datetime !== "") {
          if (values.length > 0) {
            query += ", ";
          }
          query += "datetime = ?";
          values.push(datetime);
        }
    
        if (note !== "") {
          if (values.length > 0) {
            query += ", ";
          }
          query += "note = ?";
          values.push(note);
        }
    
        query += " WHERE id = ?";
        values.push(id);
    
        // Jalankan query update
        const result = await db.query(query, values);
        return res.status(200).json({message:"berhasil update"})
    } catch (error) {
        return res.status(500).json({message:"internal server error"})
    }
  },
  delete:async(req,res)=>{
    const {id}=req.params
    try {
        const notes = await db.query(
            "DELETE FROM notes WHERE id=?",
            [id]
        )
        return res.status(200).json({message:"berhasil terhapus"})
    } catch (error) {
        return res.status(500).json({message:"internal server error"})
    }
  }
};
