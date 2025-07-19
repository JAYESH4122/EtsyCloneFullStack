import Section from "../models/Section.js";

export const getSection = async (req, res) => {
  try {
    const section = await Section.findOne({ type: req.params.type });
    if (!section) return res.status(404).json({ message: "Section not found" });
    res.json(section);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateSection = async (req, res) => {
  try{
    const updated =  await Section.findOneAndUpdate(
      {
        type: req.params.type
      },
      {
        content: req.body.content,
      },
      {
        new: true
      }
    );
    if(!updated) return res.status(404).send(" Section not found ");
    res.send(updated);

  } catch (error){
    res.status(500).json( { message: "Update section Server error", error} )
  }
}
  