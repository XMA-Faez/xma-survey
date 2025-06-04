"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { surveySchema, SurveyFormData } from "@/lib/survey-schema";
import SectionA from "@/components/survey/SectionA";
import SectionB from "@/components/survey/SectionB";
import SectionC from "@/components/survey/SectionC";
import SectionD from "@/components/survey/SectionD";

export default function SurveyPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<SurveyFormData>({
    resolver: zodResolver(surveySchema),
    mode: "onBlur",
  });

  const sections = [
    { title: "About You", component: SectionA },
    { title: "Your Business", component: SectionB },
    { title: "Goals & Aspirations", component: SectionC },
    { title: "Buying Process", component: SectionD },
  ];

  const handleNext = async () => {
    const fieldsToValidate = getSectionFields(currentSection);
    const isValid = await trigger(fieldsToValidate);

    if (isValid && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo(0, 0);
    }
  };

  const getSectionFields = (section: number): (keyof SurveyFormData)[] => {
    switch (section) {
      case 0:
        return ["ageRange", "gender", "location", "businessStructure", "role"];
      case 1:
        return [
          "revenueBeforeXMA",
          "profitMarginBefore",
          "employeesBefore",
          "churnRateBefore",
          "currentRevenue",
          "currentProfitMargin",
          "monthlyCustomers",
          "customerLifetimeValue",
          "industry",
          "businessDuration",
          "currentChurnRate",
        ];
      case 2:
        return [
          "primaryGoal",
          "specificProblem",
          "revenueGoal12Months",
          "success3Years",
        ];
      case 3:
        return [
          "biggestReasonChoseXMA",
          "triggerEvent",
          "whereHeardAbout",
          "mostInfluentialContent",
          "decisionMakers",
          "almostPrevented",
          "referralLikelihood",
          "advice",
        ];
      default:
        return [];
    }
  };

  const onSubmit = async (data: SurveyFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsComplete(true);
      } else {
        const errorData = await response.json();
        console.error('Survey submission failed:', errorData);
        alert("Error submitting survey. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting survey. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-800 rounded-lg shadow-2xl p-8 text-center border border-gray-700">
            <h1 className="text-3xl font-bold text-green-400 mb-4">
              Thank You!
            </h1>
            <p className="text-lg mb-6 text-gray-300">
              Your survey has been submitted successfully. We appreciate your
              valuable feedback!
            </p>
            <p className="text-gray-300 mb-8">
              You will receive your{" "}
              <strong>Free Marketing Audit ($500 Value)</strong> within 3-5
              business days.
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const CurrentSectionComponent = sections[currentSection].component;

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-800 rounded-lg shadow-2xl p-8 border border-gray-700">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-white">
              XMA Agency Client Survey
            </h1>
            <p className="text-gray-300">
              Help Us Serve You Better - Complete This Survey & Receive a Free
              Marketing Audit ($500 Value)
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center">
              {sections.map((section, index) => (
                <div key={index} className="flex-1">
                  <div className="relative">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                        ${index <= currentSection ? "bg-blue-600 text-white" : "bg-gray-600 text-gray-300"}`}
                    >
                      {index + 1}
                    </div>
                    {index < sections.length - 1 && (
                      <div
                        className={`absolute top-4 left-8 w-full h-0.5 -z-10
                          ${index < currentSection ? "bg-blue-600" : "bg-gray-600"}`}
                      />
                    )}
                  </div>
                  <p className="text-xs mt-2 text-gray-300">{section.title}</p>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <CurrentSectionComponent
              register={register}
              errors={errors}
              watch={watch}
            />

            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentSection === 0}
                className={`px-6 py-2 rounded shadow-lg ${
                  currentSection === 0
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-gray-600 text-white hover:bg-gray-700"
                }`}
              >
                Previous
              </button>

              {currentSection === sections.length - 1 ? (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-2 rounded shadow-lg ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit Survey"}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 shadow-lg"
                >
                  Next
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

