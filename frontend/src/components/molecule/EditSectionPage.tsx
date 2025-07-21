import axios from "axios";
import { useEffect, useState, type JSX } from "react";
import { useParams } from "react-router-dom";
	const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const EditSectionPage = () => {
  const { type } = useParams();
  const [formData, setFormData] = useState<Record<string, unknown> | null>(
    null
  );

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/sections/${type}`)
      .then((res) => setFormData(res.data.content))
      .catch((err) => console.error("Failed to fetch section", err));
  }, [type]);

	  const handleChange = (path: string[], value: string) => {
    setFormData((prevData) => {
      if (!prevData) return prevData;

      const updated = { ...prevData };
      let current: Record<string, unknown> = updated;

      for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];
        if (typeof current[key] !== "object" || current[key] === null) {
          current[key] = {};
        }
        current = current[key] as Record<string, unknown>;
      }

      current[path[path.length - 1]] = value;

      return updated;
    });
  };

  const renderFields = (
    obj: Record<string, unknown>,
    path: string[] = []
  ): JSX.Element[] => {
    return Object.entries(obj).flatMap(([key, value]) => {
      const currentPath = [...path, key];

      if (typeof value === "string" || typeof value === "number") {
        return (
          <div key={currentPath.join(".")} className="field">
            <label>{currentPath.join(" > ")}</label>	
            <input
              type="text"
              value={String(value)}
              onChange={(e) => handleChange(currentPath, e.target.value)}
            />
          </div>
        );
      } else if (Array.isArray(value)) {
        return (
          <fieldset key={currentPath.join(".")}>
            	<legend>{currentPath.join(" > ")}</legend>
            {value.map((item, index) => (
              <div
                key={index}
                className="arrayfields"
              >
                {typeof item === "object" && item !== null ? (
                  renderFields(item, [...currentPath, String(index)])
                ) : (
                  <input
                    type="text"	
                    value={String(item)}
                    onChange={(e) =>
                      handleChange(
                        [...currentPath, String(index)],
                        e.target.value
                      )
                    }
                  />
                )}
              </div>
            ))}
          </fieldset>
        );
      } else if (typeof value === "object" && value !== null) {
        return (
          <fieldset key={currentPath.join(".")}>
            <legend>{key}</legend>
            {renderFields(value as Record<string, unknown>, currentPath)}
          </fieldset>
        );
      }

      return [];
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    axios
      .put(`${BASE_URL}/api/sections/${type}`, {
        content: formData,
      })
      .then(() => alert("Section updated successfully!"))
      .catch((err) => console.error("Update failed", err));
  };

  if (!formData) return <div>Loading...</div>;

  return (
    <div className="edit-section-page">
      <h1>Edit Section: {type}</h1>
      <form onSubmit={handleSubmit}>
        {renderFields(formData)}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditSectionPage;
