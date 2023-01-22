import React from "react";
import Question from "./Question";
const Accordion = () => {
  const questions = [
    {
      id: 1,
      title: " What services does your company offer?",
      info: "Our company offers a range of fire protection services, including fire sprinkler installation, inspection and maintenance, fire alarm system installation and inspection, fire extinguisher sales and service, and fire suppression system installation and maintenance.",
    },
    {
      id: 2,
      title: "How often should I have my fire sprinkler system inspected?",
      info: "Most fire sprinkler systems should be inspected at least annually to ensure that they are in good working order and ready to activate in the event of a fire. Some jurisdictions may require more frequent inspections, such as every six months, so it's important to check with your local fire code requirements.",
    },
    {
      id: 3,
      title: "How do I know if my fire extinguisher is still effective?",
      info: "You can check the pressure gauge on the fire extinguisher to see if it is within the proper range. You should also make sure that the extinguisher has not reached its expiration date, which is usually indicated on the label. If you are unsure about the condition of your fire extinguisher, you can have it inspected by a certified professional.",
    },
    {
      id: 4,
      title: "Can you install a fire protection system in an older building?",
      info: "Yes, we can install a fire protection system in an older building. However, it may be more challenging due to the age of the building and the need to retrofit certain components. Our team will assess the building and determine the best approach to installing a fire protection system that meets all necessary codes and regulations.",
    },
    {
      id: 5,
      title: "How much does it cost to install a fire protection system?",
      info: "The cost of installing a fire protection system will depend on a variety of factors, including the size and layout of the building, the type of system being installed, and any additional features or customization. We can provide a detailed quote after conducting a thorough assessment of your building and your fire",
    },
    {
      id: 6,
      title:
        "Can you provide emergency services if my fire protection system goes down?",
      info: "Yes, we offer emergency repair and maintenance services for all of our fire protection systems. If you experience a problem with your system, you can call us 24/7 and we will dispatch a team to assess the issue and make any necessary repairs as quickly as possible.",
    },
    {
      id: 7,
      title:
        "Do you offer training for my employees on how to use fire protection equipment?",
      info: "Yes, we offer training on the proper use of fire protection equipment, including fire extinguishers and other emergency devices. We can customize the training to meet the specific needs of your company and your employees, and we can also provide training on fire safety best practices and evacuation procedures.",
    },
  ];
  return (
    <div>
      {questions.map((question) => {
        return <Question key={question.id} {...question} />;
      })}
    </div>
  );
};

export default Accordion;
