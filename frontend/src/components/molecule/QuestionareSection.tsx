import { useEffect, useState } from "react";
import type { QuestionnaireData } from "../../types/datatypes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const QuestionnaireSection = () => {
  const [questionnaireData, setQuestionnaireData] =
    useState<QuestionnaireData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/sections/questionnaireSection`)
      .then((res) => setQuestionnaireData(res.data.content))
      .catch((error) => console.log("Error Fetching HeroSection", error));
  }, []);

  if (!questionnaireData) return <div>Loading...</div>;

  return (
    <div
      className="questionare-section"
      onClick={() => {
        navigate("/edit/questionnaireSection");
      }}
    >
      <h2>{questionnaireData.mainTitle}</h2>
      <p className="subtitle">{questionnaireData.subtitle}</p>
      <div className="question-and-answers-section">
        {questionnaireData.questions.map((question) => (
          <div key={question.id} className="questions-wrapper">
            {question.title && <h3>{question.title}</h3>}
            <div className="questionare-flex">
              <p
                className="answers-section"
                dangerouslySetInnerHTML={{ __html: question.content }}
              />
              <button>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="12" cy="12.001" r="2.999"></circle>
                  <circle cx="3" cy="12.001" r="2.999"></circle>
                  <circle cx="21" cy="12.001" r="2.999"></circle>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="call-customer-care-section">
        <h3>{questionnaireData.helpSection.title}</h3>
        <div className="help-center-btn-wrapper">
          <div className="help-center-btn">
            {questionnaireData.helpSection.buttonText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireSection;
