import { Course } from "../../types";

const anatomyAndPhysiologyII: Course = {
  courseName: "Anatomy and Physiology II",
  categories: [
    {
      categoryName: "Endocrine System",
      questions: [
        {
          category: "Endocrine System",
          question: "What is the endocrine system?",
          options: {
            "A collection of ductless glands that secrete hormones":
              "Correct. The endocrine system consists of glands that release hormones directly into the bloodstream.",
            "A system of nerves":
              "Incorrect. The nervous system is responsible for transmitting electrical signals throughout the body.",
            "A set of muscles":
              "Incorrect. Muscles are part of the muscular system, which is responsible for movement.",
            "A group of bones":
              "Incorrect. Bones are part of the skeletal system, which supports and protects the body.",
          },
          correctAnswer:
            "A collection of ductless glands that secrete hormones",
        },
        {
          category: "Endocrine System",
          question: "What is the role of the hypothalamus?",
          options: {
            "Controls the pituitary gland":
              "Correct. The hypothalamus regulates the pituitary gland, which in turn controls other endocrine glands.",
            "Regulates digestion":
              "Incorrect. Digestion is primarily controlled by the digestive system, though the hypothalamus does influence hunger.",
            "Manages blood flow":
              "Incorrect. Blood flow is primarily managed by the cardiovascular system.",
            "Controls breathing":
              "Incorrect. Breathing is controlled by the respiratory system, specifically the medulla oblongata in the brainstem.",
          },
          correctAnswer: "Controls the pituitary gland",
        },
        {
          category: "Endocrine System",
          question: "What is the function of the pituitary gland?",
          options: {
            "Regulates other endocrine glands":
              "Correct. The pituitary gland is often called the 'master gland' because it controls other endocrine glands.",
            "Controls digestion":
              "Incorrect. Digestion is primarily regulated by the digestive system.",
            "Manages blood circulation":
              "Incorrect. Blood circulation is managed by the cardiovascular system.",
            "Filters waste from the blood":
              "Incorrect. Waste filtration is primarily the function of the kidneys.",
          },
          correctAnswer: "Regulates other endocrine glands",
        },
        {
          category: "Endocrine System",
          question: "What is the thyroid gland responsible for?",
          options: {
            "Regulating metabolism":
              "Correct. The thyroid gland produces hormones that regulate metabolism, energy levels, and growth.",
            "Controlling blood sugar levels":
              "Incorrect. Blood sugar levels are primarily controlled by the pancreas.",
            "Producing adrenaline":
              "Incorrect. Adrenaline is produced by the adrenal glands.",
            "Regulating breathing rate":
              "Incorrect. Breathing rate is controlled by the respiratory system.",
          },
          correctAnswer: "Regulating metabolism",
        },
        {
          category: "Endocrine System",
          question: "What are the adrenal glands responsible for?",
          options: {
            "Producing adrenaline and cortisol":
              "Correct. The adrenal glands produce hormones like adrenaline and cortisol that help manage stress responses.",
            "Controlling blood pressure":
              "Incorrect. While adrenal hormones can affect blood pressure, the primary control is through the cardiovascular system.",
            "Managing oxygen levels":
              "Incorrect. Oxygen levels are regulated by the respiratory and circulatory systems.",
            "Filtering blood":
              "Incorrect. The kidneys are responsible for filtering blood.",
          },
          correctAnswer: "Producing adrenaline and cortisol",
        },
        {
          category: "Endocrine System",
          question:
            "What hormones are produced by the anterior pituitary gland?",
          options: {
            "TSH, ACTH, GH, LH, FSH, Prolactin":
              "Correct. The anterior pituitary gland produces these hormones which regulate various physiological processes.",
            "Oxytocin and ADH":
              "Incorrect. These hormones are produced by the hypothalamus and stored/released by the posterior pituitary.",
            "Insulin and Glucagon":
              "Incorrect. These hormones are produced by the pancreas.",
            "Cortisol and Aldosterone":
              "Incorrect. These hormones are produced by the adrenal cortex.",
          },
          correctAnswer: "TSH, ACTH, GH, LH, FSH, Prolactin",
        },
        {
          category: "Endocrine System",
          question:
            "What is the function of TSH (Thyroid-Stimulating Hormone)?",
          options: {
            "Stimulates the thyroid gland to produce thyroid hormones":
              "Correct. TSH stimulates the thyroid gland to release T3 and T4 hormones, which regulate metabolism.",
            "Stimulates milk production":
              "Incorrect. Prolactin stimulates milk production.",
            "Regulates blood sugar levels":
              "Incorrect. Blood sugar levels are regulated by insulin and glucagon.",
            "Controls calcium levels in the blood":
              "Incorrect. Calcium levels are regulated by parathyroid hormone (PTH) and calcitonin.",
          },
          correctAnswer:
            "Stimulates the thyroid gland to produce thyroid hormones",
        },
        {
          category: "Endocrine System",
          question:
            "What is the function of ACTH (Adrenocorticotropic Hormone)?",
          options: {
            "Stimulates the adrenal cortex to release cortisol":
              "Correct. ACTH stimulates the adrenal cortex to produce cortisol, a hormone that helps manage stress and metabolism.",
            "Stimulates the production of sex hormones":
              "Incorrect. LH and FSH stimulate the production of sex hormones.",
            "Controls water balance":
              "Incorrect. Water balance is primarily regulated by ADH and aldosterone.",
            "Regulates growth":
              "Incorrect. Growth hormone (GH) regulates growth.",
          },
          correctAnswer: "Stimulates the adrenal cortex to release cortisol",
        },
        {
          category: "Endocrine System",
          question: "What is the function of GH (Growth Hormone)?",
          options: {
            "Promotes growth, cell reproduction, and regeneration":
              "Correct. GH stimulates growth in tissues, especially bones and muscles.",
            "Regulates metabolism":
              "Incorrect. Metabolism is primarily regulated by thyroid hormones.",
            "Stimulates the production of red blood cells":
              "Incorrect. Erythropoietin, produced by the kidneys, stimulates red blood cell production.",
            "Controls calcium levels in the blood":
              "Incorrect. Calcium levels are regulated by parathyroid hormone (PTH) and calcitonin.",
          },
          correctAnswer: "Promotes growth, cell reproduction, and regeneration",
        },
        {
          category: "Endocrine System",
          question:
            "What is the function of LH (Luteinizing Hormone) and FSH (Follicle-Stimulating Hormone)?",
          options: {
            "Regulate reproductive processes":
              "Correct. LH triggers ovulation and stimulates the production of sex hormones, while FSH stimulates the growth of ovarian follicles and sperm production.",
            "Stimulate milk production":
              "Incorrect. Prolactin stimulates milk production.",
            "Regulate blood sugar levels":
              "Incorrect. Blood sugar levels are regulated by insulin and glucagon.",
            "Control water balance":
              "Incorrect. Water balance is primarily regulated by ADH and aldosterone.",
          },
          correctAnswer: "Regulate reproductive processes",
        },
        {
          category: "Endocrine System",
          question: "What is the role of prolactin?",
          options: {
            "Stimulates milk production in the mammary glands":
              "Correct. Prolactin promotes lactation in mammals.",
            "Stimulates the thyroid gland":
              "Incorrect. TSH stimulates the thyroid gland.",
            "Regulates blood sugar levels":
              "Incorrect. Blood sugar levels are regulated by insulin and glucagon.",
            "Controls metabolism":
              "Incorrect. Metabolism is primarily regulated by thyroid hormones.",
          },
          correctAnswer: "Stimulates milk production in the mammary glands",
        },
        {
          category: "Endocrine System",
          question:
            "What hormones are stored and released by the posterior pituitary gland?",
          options: {
            "ADH and Oxytocin":
              "Correct. The posterior pituitary stores and releases ADH and Oxytocin, both produced by the hypothalamus.",
            "TSH and ACTH":
              "Incorrect. These hormones are produced by the anterior pituitary gland.",
            "Insulin and Glucagon":
              "Incorrect. These hormones are produced by the pancreas.",
            "Cortisol and Aldosterone":
              "Incorrect. These hormones are produced by the adrenal cortex.",
          },
          correctAnswer: "ADH and Oxytocin",
        },
        {
          category: "Endocrine System",
          question: "What is the function of ADH (Antidiuretic Hormone)?",
          options: {
            "Promotes water retention by the kidneys":
              "Correct. ADH helps to reduce urine volume and maintain blood pressure by promoting water reabsorption in the kidneys.",
            "Regulates blood sugar levels":
              "Incorrect. Blood sugar levels are regulated by insulin and glucagon.",
            "Stimulates the production of sex hormones":
              "Incorrect. LH and FSH stimulate the production of sex hormones.",
            "Regulates calcium levels in the blood":
              "Incorrect. Calcium levels are regulated by parathyroid hormone (PTH) and calcitonin.",
          },
          correctAnswer: "Promotes water retention by the kidneys",
        },
        {
          category: "Endocrine System",
          question: "What is the function of oxytocin?",
          options: {
            "Triggers uterine contractions during childbirth and milk ejection during breastfeeding":
              "Correct. Oxytocin plays a crucial role in childbirth and lactation.",
            "Regulates the menstrual cycle":
              "Incorrect. The menstrual cycle is regulated by estrogen and progesterone.",
            "Lowers blood glucose levels":
              "Incorrect. Blood glucose levels are regulated by insulin.",
            "Controls metabolism":
              "Incorrect. Metabolism is primarily regulated by thyroid hormones.",
          },
          correctAnswer:
            "Triggers uterine contractions during childbirth and milk ejection during breastfeeding",
        },
        {
          category: "Endocrine System",
          question: "What hormones are produced by the thyroid gland?",
          options: {
            "T3, T4, and Calcitonin":
              "Correct. The thyroid gland produces T3 and T4, which regulate metabolism, and Calcitonin, which lowers blood calcium levels.",
            "TSH and ACTH":
              "Incorrect. These hormones are produced by the anterior pituitary gland.",
            "Insulin and Glucagon":
              "Incorrect. These hormones are produced by the pancreas.",
            "ADH and Oxytocin":
              "Incorrect. These hormones are stored and released by the posterior pituitary gland.",
          },
          correctAnswer: "T3, T4, and Calcitonin",
        },
        {
          category: "Endocrine System",
          question: "What is the function of T3 and T4?",
          options: {
            "Regulate metabolism, heart rate, and body temperature":
              "Correct. T3 and T4 are thyroid hormones that play a crucial role in metabolic processes and thermoregulation.",
            "Regulate blood pressure":
              "Incorrect. Blood pressure is primarily regulated by the cardiovascular system and hormones like aldosterone.",
            "Control water balance":
              "Incorrect. Water balance is primarily regulated by ADH and aldosterone.",
            "Stimulate milk production":
              "Incorrect. Prolactin stimulates milk production.",
          },
          correctAnswer:
            "Regulate metabolism, heart rate, and body temperature",
        },
        {
          category: "Endocrine System",
          question: "What is the function of calcitonin?",
          options: {
            "Lowers blood calcium levels":
              "Correct. Calcitonin inhibits osteoclast activity and promotes calcium deposition in bones.",
            "Raises blood calcium levels":
              "Incorrect. Parathyroid hormone (PTH) raises blood calcium levels.",
            "Regulates metabolism":
              "Incorrect. Metabolism is primarily regulated by thyroid hormones T3 and T4.",
            "Controls blood glucose levels":
              "Incorrect. Blood glucose levels are regulated by insulin and glucagon.",
          },
          correctAnswer: "Lowers blood calcium levels",
        },
        {
          category: "Endocrine System",
          question: "What hormones are produced by the parathyroid glands?",
          options: {
            "PTH (Parathyroid Hormone)":
              "Correct. The parathyroid glands produce PTH, which regulates blood calcium levels.",
            "T3 and T4":
              "Incorrect. These hormones are produced by the thyroid gland.",
            "Insulin and Glucagon":
              "Incorrect. These hormones are produced by the pancreas.",
            "ADH and Oxytocin":
              "Incorrect. These hormones are stored and released by the posterior pituitary gland.",
          },
          correctAnswer: "PTH (Parathyroid Hormone)",
        },
        {
          category: "Endocrine System",
          question: "What is the function of PTH (Parathyroid Hormone)?",
          options: {
            "Raises blood calcium levels":
              "Correct. PTH stimulates osteoclast activity, increases calcium reabsorption in the kidneys, and enhances calcium absorption in the intestines.",
            "Lowers blood calcium levels":
              "Incorrect. Calcitonin lowers blood calcium levels.",
            "Regulates metabolism":
              "Incorrect. Metabolism is primarily regulated by thyroid hormones T3 and T4.",
            "Stimulates the thyroid gland":
              "Incorrect. TSH stimulates the thyroid gland.",
          },
          correctAnswer: "Raises blood calcium levels",
        },
        {
          category: "Endocrine System",
          question: "What hormones are produced by the adrenal cortex?",
          options: {
            "Glucocorticoids, Mineralocorticoids, and Androgens":
              "Correct. The adrenal cortex produces these hormones, which regulate stress response, electrolyte balance, and secondary sexual characteristics.",
            "Adrenaline and Noradrenaline":
              "Incorrect. These hormones are produced by the adrenal medulla.",
            "Insulin and Glucagon":
              "Incorrect. These hormones are produced by the pancreas.",
            "T3, T4, and Calcitonin":
              "Incorrect. These hormones are produced by the thyroid gland.",
          },
          correctAnswer: "Glucocorticoids, Mineralocorticoids, and Androgens",
        },
        {
          category: "Endocrine System",
          question: "What is the function of cortisol?",
          options: {
            "Regulates metabolism, reduces inflammation, and helps the body respond to stress":
              "Correct. Cortisol is a glucocorticoid hormone that plays a key role in the body's stress response.",
            "Lowers blood calcium levels":
              "Incorrect. Calcitonin lowers blood calcium levels.",
            "Regulates blood sugar levels":
              "Incorrect. Blood sugar levels are regulated by insulin and glucagon.",
            "Controls water balance":
              "Incorrect. Water balance is primarily regulated by ADH and aldosterone.",
          },
          correctAnswer:
            "Regulates metabolism, reduces inflammation, and helps the body respond to stress",
        },
        {
          category: "Endocrine System",
          question: "What is the function of aldosterone?",
          options: {
            "Regulates sodium and potassium balance by promoting sodium retention and potassium excretion":
              "Correct. Aldosterone helps maintain fluid and electrolyte balance by acting on the kidneys.",
            "Regulates blood glucose levels":
              "Incorrect. Blood glucose levels are regulated by insulin and glucagon.",
            "Promotes the production of red blood cells":
              "Incorrect. Erythropoietin, produced by the kidneys, stimulates red blood cell production.",
            "Stimulates milk production":
              "Incorrect. Prolactin stimulates milk production.",
          },
          correctAnswer:
            "Regulates sodium and potassium balance by promoting sodium retention and potassium excretion",
        },
        {
          category: "Endocrine System",
          question: "What hormones are produced by the adrenal medulla?",
          options: {
            "Epinephrine and Norepinephrine":
              "Correct. The adrenal medulla produces these catecholamines, which prepare the body for fight-or-flight responses.",
            "Cortisol and Aldosterone":
              "Incorrect. These hormones are produced by the adrenal cortex.",
            "Insulin and Glucagon":
              "Incorrect. These hormones are produced by the pancreas.",
            "T3 and T4":
              "Incorrect. These hormones are produced by the thyroid gland.",
          },
          correctAnswer: "Epinephrine and Norepinephrine",
        },
        {
          category: "Endocrine System",
          question: "What is the function of epinephrine and norepinephrine?",
          options: {
            "Prepare the body for fight-or-flight responses":
              "Correct. Epinephrine and norepinephrine increase heart rate, blood pressure, and blood glucose levels in response to stress.",
            "Regulate blood calcium levels":
              "Incorrect. Blood calcium levels are regulated by parathyroid hormone (PTH) and calcitonin.",
            "Control water balance":
              "Incorrect. Water balance is primarily regulated by ADH and aldosterone.",
            "Regulate metabolism":
              "Incorrect. Metabolism is primarily regulated by thyroid hormones T3 and T4.",
          },
          correctAnswer: "Prepare the body for fight-or-flight responses",
        },
        {
          category: "Endocrine System",
          question: "What hormones are produced by the pancreas?",
          options: {
            "Insulin and Glucagon":
              "Correct. The pancreas produces these hormones, which regulate blood glucose levels.",
            "Cortisol and Aldosterone":
              "Incorrect. These hormones are produced by the adrenal cortex.",
            "Epinephrine and Norepinephrine":
              "Incorrect. These hormones are produced by the adrenal medulla.",
            "T3 and T4":
              "Incorrect. These hormones are produced by the thyroid gland.",
          },
          correctAnswer: "Insulin and Glucagon",
        },
        {
          category: "Endocrine System",
          question: "What is the function of insulin?",
          options: {
            "Lowers blood glucose levels by promoting glucose uptake into cells":
              "Correct. Insulin helps decrease blood sugar levels by facilitating the uptake of glucose by cells.",
            "Raises blood glucose levels":
              "Incorrect. Glucagon raises blood glucose levels.",
            "Regulates sodium and potassium balance":
              "Incorrect. Sodium and potassium balance is regulated by aldosterone.",
            "Promotes water retention by the kidneys":
              "Incorrect. Water retention is promoted by ADH.",
          },
          correctAnswer:
            "Lowers blood glucose levels by promoting glucose uptake into cells",
        },
        {
          category: "Endocrine System",
          question: "What is the function of glucagon?",
          options: {
            "Raises blood glucose levels by promoting glycogen breakdown and glucose release by the liver":
              "Correct. Glucagon increases blood glucose levels by stimulating the liver to convert stored glycogen into glucose.",
            "Lowers blood glucose levels":
              "Incorrect. Insulin lowers blood glucose levels.",
            "Regulates sodium and potassium balance":
              "Incorrect. Sodium and potassium balance is regulated by aldosterone.",
            "Promotes water retention by the kidneys":
              "Incorrect. Water retention is promoted by ADH.",
          },
          correctAnswer:
            "Raises blood glucose levels by promoting glycogen breakdown and glucose release by the liver",
        },
        {
          category: "Endocrine System",
          question: "What hormone is produced by the pineal gland?",
          options: {
            Melatonin:
              "Correct. The pineal gland produces melatonin, which regulates sleep-wake cycles and circadian rhythms.",
            Insulin: "Incorrect. Insulin is produced by the pancreas.",
            Thyroxine: "Incorrect. Thyroxine is produced by the thyroid gland.",
            Cortisol: "Incorrect. Cortisol is produced by the adrenal cortex.",
          },
          correctAnswer: "Melatonin",
        },
        {
          category: "Endocrine System",
          question: "What is the function of melatonin?",
          options: {
            "Regulates sleep-wake cycles and circadian rhythms":
              "Correct. Melatonin production increases in response to darkness, promoting sleep.",
            "Regulates blood glucose levels":
              "Incorrect. Blood glucose levels are regulated by insulin and glucagon.",
            "Controls metabolism":
              "Incorrect. Metabolism is primarily regulated by thyroid hormones T3 and T4.",
            "Promotes the production of red blood cells":
              "Incorrect. Erythropoietin, produced by the kidneys, stimulates red blood cell production.",
          },
          correctAnswer: "Regulates sleep-wake cycles and circadian rhythms",
        },
        {
          category: "Endocrine System",
          question: "What hormones are produced by the ovaries?",
          options: {
            "Estrogen and Progesterone":
              "Correct. The ovaries produce these hormones, which regulate the menstrual cycle and maintain pregnancy.",
            Testosterone:
              "Incorrect. Testosterone and androgens are primarily produced by the testes.",
            "Insulin and Glucagon":
              "Incorrect. These hormones are produced by the pancreas.",
            "Cortisol and Aldosterone":
              "Incorrect. These hormones are produced by the adrenal cortex.",
          },
          correctAnswer: "Estrogen and Progesterone",
        },
        {
          category: "Endocrine System",
          question: "What is the function of estrogen?",
          options: {
            "Regulates the menstrual cycle and promotes secondary sexual characteristics":
              "Correct. Estrogen plays a key role in regulating the menstrual cycle and the development of secondary sexual characteristics.",
            "Stimulates milk production":
              "Incorrect. Prolactin stimulates milk production.",
            "Lowers blood glucose levels":
              "Incorrect. Blood glucose levels are regulated by insulin.",
            "Controls metabolism":
              "Incorrect. Metabolism is primarily regulated by thyroid hormones.",
          },
          correctAnswer:
            "Regulates the menstrual cycle and promotes secondary sexual characteristics",
        },
        {
          category: "Endocrine System",
          question: "What is the function of progesterone?",
          options: {
            "Prepares the uterus for implantation and maintains pregnancy":
              "Correct. Progesterone prepares the uterus for implantation of a fertilized egg and helps maintain pregnancy.",
            "Regulates the menstrual cycle":
              "Incorrect. While progesterone is involved in the menstrual cycle, its primary function is to maintain pregnancy.",
            "Increases blood calcium levels":
              "Incorrect. Blood calcium levels are increased by parathyroid hormone (PTH).",
            "Regulates sleep-wake cycles":
              "Incorrect. Sleep-wake cycles are regulated by melatonin.",
          },
          correctAnswer:
            "Prepares the uterus for implantation and maintains pregnancy",
        },
        {
          category: "Endocrine System",
          question: "What hormone is produced by the testes?",
          options: {
            Testosterone:
              "Correct. The testes produce testosterone, which regulates sperm production and the development of male secondary sexual characteristics.",
            Estrogen:
              "Incorrect. Estrogen is primarily produced by the ovaries.",
            Insulin: "Incorrect. Insulin is produced by the pancreas.",
            Thyroxine: "Incorrect. Thyroxine is produced by the thyroid gland.",
          },
          correctAnswer: "Testosterone",
        },
        {
          category: "Endocrine System",
          question: "What is the function of testosterone?",
          options: {
            "Regulates sperm production and the development of male secondary sexual characteristics":
              "Correct. Testosterone plays a key role in male reproductive function and the development of traits such as facial hair and a deeper voice.",
            "Regulates the menstrual cycle":
              "Incorrect. The menstrual cycle is regulated by estrogen and progesterone.",
            "Lowers blood glucose levels":
              "Incorrect. Blood glucose levels are regulated by insulin.",
            "Controls metabolism":
              "Incorrect. Metabolism is primarily regulated by thyroid hormones.",
          },
          correctAnswer:
            "Regulates sperm production and the development of male secondary sexual characteristics",
        },
      ],
    },
    {
      categoryName: "Cardiovascular System",
      questions: [
        {
          category: "Cardiovascular System",
          question: "What are the main functions of the cardiovascular system?",
          options: {
            "To transport oxygen, nutrients, hormones, and waste products throughout the body, and to help regulate body temperature and pH balance":
              "Correct. The cardiovascular system plays a crucial role in maintaining homeostasis by transporting essential substances and regulating various bodily functions.",
            "To digest food and absorb nutrients":
              "Incorrect. This is the function of the digestive system.",
            "To produce hormones and regulate metabolism":
              "Incorrect. This is the function of the endocrine system.",
            "To protect the body from pathogens":
              "Incorrect. This is the function of the immune system.",
          },
          correctAnswer:
            "To transport oxygen, nutrients, hormones, and waste products throughout the body, and to help regulate body temperature and pH balance",
        },
        {
          category: "Cardiovascular System",
          question: "What are the four chambers of the heart?",
          options: {
            "Right atrium, right ventricle, left atrium, left ventricle":
              "Correct. The heart has four chambers: the right and left atria and the right and left ventricles.",
            "Aorta, pulmonary artery, right atrium, left atrium":
              "Incorrect. The aorta and pulmonary artery are blood vessels, not heart chambers.",
            "Superior vena cava, inferior vena cava, aorta, pulmonary artery":
              "Incorrect. These are major blood vessels, not heart chambers.",
            "Right ventricle, left ventricle, aorta, pulmonary artery":
              "Incorrect. The aorta and pulmonary artery are blood vessels, not heart chambers.",
          },
          correctAnswer:
            "Right atrium, right ventricle, left atrium, left ventricle",
        },
        {
          category: "Cardiovascular System",
          question: "What is the function of the right atrium?",
          options: {
            "Receives deoxygenated blood from the body via the superior and inferior vena cava":
              "Correct. The right atrium receives deoxygenated blood from the body and passes it to the right ventricle.",
            "Pumps oxygenated blood to the body through the aorta":
              "Incorrect. This is the function of the left ventricle.",
            "Receives oxygenated blood from the lungs":
              "Incorrect. This is the function of the left atrium.",
            "Pumps deoxygenated blood to the lungs":
              "Incorrect. This is the function of the right ventricle.",
          },
          correctAnswer:
            "Receives deoxygenated blood from the body via the superior and inferior vena cava",
        },
        {
          category: "Cardiovascular System",
          question: "What is the function of the right ventricle?",
          options: {
            "Pumps deoxygenated blood to the lungs through the pulmonary arteries":
              "Correct. The right ventricle pumps deoxygenated blood to the lungs where gas exchange occurs.",
            "Pumps oxygenated blood to the body through the aorta":
              "Incorrect. This is the function of the left ventricle.",
            "Receives deoxygenated blood from the body":
              "Incorrect. This is the function of the right atrium.",
            "Receives oxygenated blood from the lungs":
              "Incorrect. This is the function of the left atrium.",
          },
          correctAnswer:
            "Pumps deoxygenated blood to the lungs through the pulmonary arteries",
        },
        {
          category: "Cardiovascular System",
          question: "What is the function of the left atrium?",
          options: {
            "Receives oxygenated blood from the lungs via the pulmonary veins":
              "Correct. The left atrium receives oxygenated blood from the lungs and passes it to the left ventricle.",
            "Pumps oxygenated blood to the body through the aorta":
              "Incorrect. This is the function of the left ventricle.",
            "Receives deoxygenated blood from the body":
              "Incorrect. This is the function of the right atrium.",
            "Pumps deoxygenated blood to the lungs":
              "Incorrect. This is the function of the right ventricle.",
          },
          correctAnswer:
            "Receives oxygenated blood from the lungs via the pulmonary veins",
        },
        {
          category: "Cardiovascular System",
          question: "What is the function of the left ventricle?",
          options: {
            "Pumps oxygenated blood to the body through the aorta":
              "Correct. The left ventricle pumps oxygenated blood to the body through the aorta, the largest artery.",
            "Receives deoxygenated blood from the body":
              "Incorrect. This is the function of the right atrium.",
            "Pumps deoxygenated blood to the lungs":
              "Incorrect. This is the function of the right ventricle.",
            "Receives oxygenated blood from the lungs":
              "Incorrect. This is the function of the left atrium.",
          },
          correctAnswer: "Pumps oxygenated blood to the body through the aorta",
        },
        {
          category: "Cardiovascular System",
          question: "What are the atrioventricular (AV) valves?",
          options: {
            "The Tricuspid Valve (right side) and the Mitral/Bicuspid Valve (left side) between the atria and ventricles":
              "Correct. The AV valves prevent backflow of blood into the atria when the ventricles contract.",
            "The Pulmonary Valve and Aortic Valve":
              "Incorrect. These are the semilunar valves.",
            "The Superior and Inferior Vena Cava":
              "Incorrect. These are major veins that return deoxygenated blood to the heart.",
            "The Coronary Arteries and Veins":
              "Incorrect. These are the blood vessels that supply blood to the heart muscle.",
          },
          correctAnswer:
            "The Tricuspid Valve (right side) and the Mitral/Bicuspid Valve (left side) between the atria and ventricles",
        },
        {
          category: "Cardiovascular System",
          question: "What are the semilunar valves?",
          options: {
            "The Pulmonary Valve (between right ventricle and pulmonary artery) and the Aortic Valve (between left ventricle and aorta)":
              "Correct. The semilunar valves prevent backflow of blood into the ventricles after contraction.",
            "The Tricuspid Valve and Mitral Valve":
              "Incorrect. These are the atrioventricular (AV) valves.",
            "The Superior and Inferior Vena Cava":
              "Incorrect. These are major veins that return deoxygenated blood to the heart.",
            "The Coronary Arteries and Veins":
              "Incorrect. These are the blood vessels that supply blood to the heart muscle.",
          },
          correctAnswer:
            "The Pulmonary Valve (between right ventricle and pulmonary artery) and the Aortic Valve (between left ventricle and aorta)",
        },
        {
          category: "Cardiovascular System",
          question: "What is the function of the sinoatrial (SA) node?",
          options: {
            "Acts as the pacemaker of the heart, initiating electrical impulses that cause the heart to beat":
              "Correct. The SA node sets the pace for the heartbeat.",
            "Controls the opening and closing of the heart valves":
              "Incorrect. The heart valves are controlled by pressure changes within the heart chambers.",
            "Coordinates the contraction of the ventricles":
              "Incorrect. The SA node initiates the heartbeat, but the AV node coordinates the contraction of the ventricles.",
            "Regulates blood pressure":
              "Incorrect. Blood pressure is regulated by various factors, including the autonomic nervous system and hormones.",
          },
          correctAnswer:
            "Acts as the pacemaker of the heart, initiating electrical impulses that cause the heart to beat",
        },
        {
          category: "Cardiovascular System",
          question: "What is the pathway of blood through the heart?",
          options: {
            "Right atrium → right ventricle → pulmonary artery → lungs → pulmonary veins → left atrium → left ventricle → aorta":
              "Correct. This pathway describes the flow of blood through the heart, from deoxygenated blood entering the right atrium to oxygenated blood being pumped out of the left ventricle.",
            "Left atrium → left ventricle → aorta → body → vena cava → right atrium":
              "Incorrect. This sequence skips the pulmonary circulation, which is necessary for oxygenating the blood.",
            "Right ventricle → pulmonary artery → lungs → pulmonary veins → left atrium → left ventricle → aorta":
              "Incorrect. This sequence starts in the middle of the pathway, missing the right atrium.",
            "Left ventricle → aorta → body → right atrium → right ventricle → lungs":
              "Incorrect. This sequence incorrectly places the right atrium after the aorta.",
          },
          correctAnswer:
            "Right atrium → right ventricle → pulmonary artery → lungs → pulmonary veins → left atrium → left ventricle → aorta",
        },
        {
          category: "Cardiovascular System",
          question: "What is the cardiac cycle?",
          options: {
            "The sequence of events that occur when the heart beats, including diastole (relaxation) and systole (contraction)":
              "Correct. The cardiac cycle describes the process of the heart filling with blood (diastole) and then pumping it out (systole).",
            "The regulation of blood pressure":
              "Incorrect. While blood pressure is influenced by the cardiac cycle, the cardiac cycle specifically refers to the events within one heartbeat.",
            "The exchange of gases in the lungs":
              "Incorrect. Gas exchange occurs in the lungs, but the cardiac cycle refers to the heartbeat.",
            "The movement of blood through the veins":
              "Incorrect. The cardiac cycle primarily involves the heart, not the veins.",
          },
          correctAnswer:
            "The sequence of events that occur when the heart beats, including diastole (relaxation) and systole (contraction)",
        },
        {
          category: "Cardiovascular System",
          question: "What is the role of the ECG (electrocardiogram)?",
          options: {
            "Measures the electrical activity of the heart, showing the P wave, QRS complex, and T wave":
              "Correct. The ECG records the electrical signals that trigger heartbeats.",
            "Measures blood pressure":
              "Incorrect. Blood pressure is measured using a sphygmomanometer, not an ECG.",
            "Monitors oxygen levels in the blood":
              "Incorrect. Oxygen levels are typically measured with a pulse oximeter.",
            "Assesses lung function":
              "Incorrect. Lung function is assessed with spirometry or similar tests.",
          },
          correctAnswer:
            "Measures the electrical activity of the heart, showing the P wave, QRS complex, and T wave",
        },
        {
          category: "Cardiovascular System",
          question: "What is the function of the arteries?",
          options: {
            "Carry oxygenated blood away from the heart to the tissues of the body (except the pulmonary arteries)":
              "Correct. Arteries transport oxygen-rich blood from the heart to the body's tissues.",
            "Carry deoxygenated blood to the heart":
              "Incorrect. This is the function of veins, except for pulmonary veins.",
            "Exchange gases, nutrients, and waste with tissues":
              "Incorrect. This is the function of capillaries.",
            "Store blood at low pressure":
              "Incorrect. This is not a function of arteries, which operate under high pressure.",
          },
          correctAnswer:
            "Carry oxygenated blood away from the heart to the tissues of the body (except the pulmonary arteries)",
        },
        {
          category: "Cardiovascular System",
          question: "What is the function of the veins?",
          options: {
            "Carry deoxygenated blood back to the heart (except the pulmonary veins)":
              "Correct. Veins return deoxygenated blood to the heart, with the exception of pulmonary veins, which carry oxygenated blood.",
            "Carry oxygenated blood away from the heart":
              "Incorrect. This is the function of arteries.",
            "Exchange gases, nutrients, and waste with tissues":
              "Incorrect. This is the function of capillaries.",
            "Pump blood to the lungs":
              "Incorrect. The right ventricle pumps blood to the lungs, not veins.",
          },
          correctAnswer:
            "Carry deoxygenated blood back to the heart (except the pulmonary veins)",
        },
        {
          category: "Cardiovascular System",
          question: "What is the function of capillaries?",
          options: {
            "Serve as the site of gas, nutrient, and waste exchange between the blood and tissues":
              "Correct. Capillaries allow the exchange of substances between the blood and surrounding tissues.",
            "Carry oxygenated blood away from the heart":
              "Incorrect. This is the function of arteries.",
            "Carry deoxygenated blood to the heart":
              "Incorrect. This is the function of veins.",
            "Store blood at low pressure":
              "Incorrect. Capillaries do not store blood; they facilitate exchange.",
          },
          correctAnswer:
            "Serve as the site of gas, nutrient, and waste exchange between the blood and tissues",
        },
        {
          category: "Cardiovascular System",
          question: "What is blood pressure?",
          options: {
            "The force exerted by circulating blood on the walls of blood vessels, typically measured in systolic/diastolic values":
              "Correct. Blood pressure is the pressure of the blood within the arteries.",
            "The speed of blood flow through the arteries":
              "Incorrect. Blood pressure refers to the force exerted, not the speed of flow.",
            "The amount of blood pumped by the heart per minute":
              "Incorrect. This describes cardiac output, not blood pressure.",
            "The volume of blood in the body":
              "Incorrect. Blood pressure is independent of total blood volume.",
          },
          correctAnswer:
            "The force exerted by circulating blood on the walls of blood vessels, typically measured in systolic/diastolic values",
        },
        {
          category: "Cardiovascular System",
          question: "What regulates blood pressure?",
          options: {
            "The autonomic nervous system (baroreceptors), hormones (RAAS, ADH, ANP), and the kidneys":
              "Correct. These systems and organs play a key role in maintaining blood pressure.",
            "The liver and pancreas":
              "Incorrect. The liver and pancreas do not directly regulate blood pressure.",
            "The muscular system and bones":
              "Incorrect. Muscles and bones do not regulate blood pressure.",
            "The digestive system and endocrine system":
              "Incorrect. While the endocrine system is involved, the digestive system is not a primary regulator of blood pressure.",
          },
          correctAnswer:
            "The autonomic nervous system (baroreceptors), hormones (RAAS, ADH, ANP), and the kidneys",
        },
        {
          category: "Cardiovascular System",
          question: "What is the Renin-Angiotensin-Aldosterone System (RAAS)?",
          options: {
            "A hormone system that regulates blood pressure and fluid balance, involving renin, angiotensin, and aldosterone":
              "Correct. RAAS plays a crucial role in blood pressure regulation and fluid balance.",
            "A system that regulates digestion and absorption of nutrients":
              "Incorrect. This is the function of the digestive system.",
            "A process that regulates body temperature":
              "Incorrect. Body temperature regulation is managed by different systems, including the hypothalamus and skin.",
            "A mechanism that controls muscle contraction":
              "Incorrect. Muscle contraction is regulated by the nervous system and calcium ions.",
          },
          correctAnswer:
            "A hormone system that regulates blood pressure and fluid balance, involving renin, angiotensin, and aldosterone",
        },
        {
          category: "Cardiovascular System",
          question: "What is hypertension?",
          options: {
            "Chronically high blood pressure, which increases the risk of heart disease, stroke, and other complications":
              "Correct. Hypertension is a serious condition that can lead to various cardiovascular diseases.",
            "Low blood pressure that leads to fainting and dizziness":
              "Incorrect. This describes hypotension, not hypertension.",
            "A temporary increase in blood pressure due to stress":
              "Incorrect. Hypertension refers to chronically high blood pressure, not a temporary increase.",
            "A condition where the blood vessels are overly constricted":
              "Incorrect. While vessel constriction can contribute to hypertension, it is not the full definition of the condition.",
          },
          correctAnswer:
            "Chronically high blood pressure, which increases the risk of heart disease, stroke, and other complications",
        },
        {
          category: "Cardiovascular System",
          question: "What is atherosclerosis?",
          options: {
            "The buildup of plaque in the arteries, leading to reduced blood flow and an increased risk of heart attack":
              "Correct. Atherosclerosis is a major risk factor for heart attacks and strokes.",
            "The hardening of the heart muscles":
              "Incorrect. This condition is referred to as cardiomyopathy.",
            "The inflammation of the veins":
              "Incorrect. This condition is known as phlebitis.",
            "The enlargement of the arteries":
              "Incorrect. The enlargement of arteries is known as aneurysm, not atherosclerosis.",
          },
          correctAnswer:
            "The buildup of plaque in the arteries, leading to reduced blood flow and an increased risk of heart attack",
        },
        {
          category: "Cardiovascular System",
          question: "What is a myocardial infarction?",
          options: {
            "Commonly known as a heart attack, it occurs when blood flow to a part of the heart is blocked, causing tissue damage":
              "Correct. A myocardial infarction is a serious condition that requires immediate medical attention.",
            "A condition where the heart beats too fast or too slow":
              "Incorrect. This condition is known as an arrhythmia, not a myocardial infarction.",
            "The weakening of the heart muscle":
              "Incorrect. This describes cardiomyopathy, not myocardial infarction.",
            "The inflammation of the heart lining":
              "Incorrect. This condition is called endocarditis.",
          },
          correctAnswer:
            "Commonly known as a heart attack, it occurs when blood flow to a part of the heart is blocked, causing tissue damage",
        },
        {
          category: "Cardiovascular System",
          question: "What are arrhythmias?",
          options: {
            "Abnormal heart rhythms that can disrupt normal cardiac function, ranging from benign to life-threatening":
              "Correct. Arrhythmias can cause serious complications if not managed properly.",
            "The inability of the heart to pump blood effectively":
              "Incorrect. This describes heart failure, not arrhythmias.",
            "A temporary drop in blood pressure":
              "Incorrect. This is hypotension, not arrhythmias.",
            "The buildup of fluid in the lungs":
              "Incorrect. This condition is known as pulmonary edema, not arrhythmias.",
          },
          correctAnswer:
            "Abnormal heart rhythms that can disrupt normal cardiac function, ranging from benign to life-threatening",
        },
      ],
    },
    {
      categoryName: "Lymphatic and Immune System",
      questions: [
        {
          category: "Lymphatic and Immune System",
          question: "What are the main functions of the lymphatic system?",
          options: {
            "To return excess interstitial fluid to the bloodstream, absorb dietary fats, and provide immune responses":
              "Correct. The lymphatic system plays key roles in fluid balance, fat absorption, and immunity.",
            "To transport oxygen and nutrients throughout the body":
              "Incorrect. This is the function of the cardiovascular system.",
            "To digest and absorb nutrients from food":
              "Incorrect. This is the function of the digestive system.",
            "To produce hormones and regulate metabolism":
              "Incorrect. This is the function of the endocrine system.",
          },
          correctAnswer:
            "To return excess interstitial fluid to the bloodstream, absorb dietary fats, and provide immune responses",
        },
        {
          category: "Lymphatic and Immune System",
          question: "What is lymph?",
          options: {
            "A clear fluid similar to plasma that contains immune cells, proteins, and waste products":
              "Correct. Lymph is the fluid that circulates in the lymphatic system and plays a crucial role in immune function.",
            "A type of blood cell that fights infection":
              "Incorrect. Lymph is a fluid, not a cell; the cells involved in immunity are lymphocytes.",
            "A hormone that regulates immune responses":
              "Incorrect. Lymph is a fluid, not a hormone.",
            "A type of fat absorbed by the digestive system":
              "Incorrect. Lymph absorbs fats in the form of chyle, but it is not a type of fat itself.",
          },
          correctAnswer:
            "A clear fluid similar to plasma that contains immune cells, proteins, and waste products",
        },
        {
          category: "Lymphatic and Immune System",
          question: "What are the primary lymphoid organs?",
          options: {
            "Thymus and bone marrow, where lymphocytes (T cells and B cells) mature":
              "Correct. The thymus and bone marrow are crucial for the development of immune cells.",
            "Spleen and lymph nodes":
              "Incorrect. While important for immune responses, the spleen and lymph nodes are secondary lymphoid organs.",
            "Heart and lungs":
              "Incorrect. These are part of the cardiovascular and respiratory systems, respectively.",
            "Kidneys and liver":
              "Incorrect. These organs are involved in excretion and metabolism, not immune function.",
          },
          correctAnswer:
            "Thymus and bone marrow, where lymphocytes (T cells and B cells) mature",
        },
        {
          category: "Lymphatic and Immune System",
          question: "What is the role of lymph nodes?",
          options: {
            "Filter lymph, trapping pathogens and foreign particles, and house lymphocytes that initiate immune responses":
              "Correct. Lymph nodes are essential in the immune system's ability to detect and fight infections.",
            "Produce red blood cells":
              "Incorrect. Red blood cells are produced in the bone marrow.",
            "Regulate blood pressure":
              "Incorrect. Blood pressure is regulated by the cardiovascular system.",
            "Store and release hormones":
              "Incorrect. Hormone storage and release are functions of the endocrine system.",
          },
          correctAnswer:
            "Filter lymph, trapping pathogens and foreign particles, and house lymphocytes that initiate immune responses",
        },
        {
          category: "Lymphatic and Immune System",
          question: "What is the spleen?",
          options: {
            "The largest lymphoid organ, which filters blood, recycles old red blood cells, and helps fight infection":
              "Correct. The spleen plays a significant role in both filtering blood and mounting immune responses.",
            "A gland that produces hormones":
              "Incorrect. The spleen is not a gland and does not produce hormones.",
            "An organ that stores fat":
              "Incorrect. The spleen does not store fat; this is a function of adipose tissue.",
            "A muscle that aids in breathing":
              "Incorrect. The diaphragm, not the spleen, is the muscle involved in breathing.",
          },
          correctAnswer:
            "The largest lymphoid organ, which filters blood, recycles old red blood cells, and helps fight infection",
        },
        {
          category: "Lymphatic and Immune System",
          question: "What is the function of the thymus?",
          options: {
            "Site of T cell maturation, crucial for the adaptive immune response":
              "Correct. The thymus is essential for the development of T cells, which are critical to the adaptive immune system.",
            "Produces insulin and glucagon":
              "Incorrect. Insulin and glucagon are produced by the pancreas, not the thymus.",
            "Filters blood and lymph":
              "Incorrect. Filtering blood and lymph is the function of the spleen and lymph nodes.",
            "Stores bile":
              "Incorrect. Bile is stored in the gallbladder, not the thymus.",
          },
          correctAnswer:
            "Site of T cell maturation, crucial for the adaptive immune response",
        },
        {
          category: "Lymphatic and Immune System",
          question: "What are B cells?",
          options: {
            "Lymphocytes that produce antibodies, which neutralize or mark pathogens for destruction":
              "Correct. B cells are crucial to the body's humoral immune response.",
            "Cells that produce insulin":
              "Incorrect. Insulin is produced by beta cells in the pancreas, not B cells.",
            "Cells that directly attack infected cells":
              "Incorrect. T cells, specifically cytotoxic T cells, are responsible for directly attacking infected cells.",
            "Cells that carry oxygen":
              "Incorrect. Red blood cells, not B cells, carry oxygen in the blood.",
          },
          correctAnswer:
            "Lymphocytes that produce antibodies, which neutralize or mark pathogens for destruction",
        },
        {
          category: "Lymphatic and Immune System",
          question: "What are T cells?",
          options: {
            "Lymphocytes that directly attack infected cells or regulate other immune responses":
              "Correct. T cells play a central role in the cell-mediated immune response.",
            "Cells that produce antibodies":
              "Incorrect. Antibodies are produced by B cells, not T cells.",
            "Cells that carry oxygen":
              "Incorrect. Red blood cells carry oxygen, not T cells.",
            "Cells that produce insulin":
              "Incorrect. Insulin is produced by beta cells in the pancreas, not T cells.",
          },
          correctAnswer:
            "Lymphocytes that directly attack infected cells or regulate other immune responses",
        },
        {
          category: "Lymphatic and Immune System",
          question:
            "What is the difference between innate and adaptive immunity?",
          options: {
            "Innate immunity is the body's first line of defense against pathogens (non-specific), while adaptive immunity targets specific invaders and has memory":
              "Correct. Innate immunity provides immediate, non-specific defense, while adaptive immunity is specific and has a memory component.",
            "Innate immunity produces antibodies, while adaptive immunity does not":
              "Incorrect. Antibody production is a feature of adaptive immunity, not innate immunity.",
            "Adaptive immunity is always present, while innate immunity develops after exposure to antigens":
              "Incorrect. Innate immunity is always present and immediate, while adaptive immunity develops after exposure to specific antigens.",
            "Innate immunity is only found in humans, while adaptive immunity is present in all animals":
              "Incorrect. Both innate and adaptive immunity are present in many animals, not just humans.",
          },
          correctAnswer:
            "Innate immunity is the body's first line of defense against pathogens (non-specific), while adaptive immunity targets specific invaders and has memory",
        },
        {
          category: "Lymphatic and Immune System",
          question: "What is inflammation?",
          options: {
            "A localized immune response to injury or infection, characterized by redness, heat, swelling, and pain":
              "Correct. Inflammation is a key part of the immune system's response to damage or pathogens.",
            "A process of cell division":
              "Incorrect. Cell division is a separate process, not related to inflammation.",
            "The process of oxygen exchange in the lungs":
              "Incorrect. Oxygen exchange occurs in the lungs, not through inflammation.",
            "A type of muscle contraction":
              "Incorrect. Muscle contraction is not related to inflammation.",
          },
          correctAnswer:
            "A localized immune response to injury or infection, characterized by redness, heat, swelling, and pain",
        },
        {
          category: "Lymphatic and Immune System",
          question: "What is the function of antibodies?",
          options: {
            "Proteins produced by B cells that bind to specific antigens on pathogens, marking them for destruction":
              "Correct. Antibodies are crucial in identifying and neutralizing foreign invaders.",
            "Cells that directly kill infected cells":
              "Incorrect. Cytotoxic T cells, not antibodies, directly kill infected cells.",
            "Molecules that carry oxygen in the blood":
              "Incorrect. Hemoglobin in red blood cells carries oxygen, not antibodies.",
            "Proteins that break down food in the stomach":
              "Incorrect. Enzymes like pepsin break down food, not antibodies.",
          },
          correctAnswer:
            "Proteins produced by B cells that bind to specific antigens on pathogens, marking them for destruction",
        },
        {
          category: "Lymphatic and Immune System",
          question: "What is the complement system?",
          options: {
            "A group of proteins that enhance the immune response by promoting inflammation, opsonization, and lysis of pathogens":
              "Correct. The complement system amplifies the body's ability to fight infections.",
            "A system that transports oxygen in the blood":
              "Incorrect. Oxygen transport is carried out by red blood cells, not the complement system.",
            "A group of hormones that regulate metabolism":
              "Incorrect. The complement system is involved in immunity, not metabolism.",
            "A network of neurons that control muscle movement":
              "Incorrect. The complement system is part of the immune system, not the nervous system.",
          },
          correctAnswer:
            "A group of proteins that enhance the immune response by promoting inflammation, opsonization, and lysis of pathogens",
        },
        {
          category: "Lymphatic and Immune System",
          question: "What is an autoimmune disease?",
          options: {
            "A condition where the immune system mistakenly attacks the body's own tissues (e.g., rheumatoid arthritis, lupus)":
              "Correct. Autoimmune diseases result from the immune system failing to recognize the body’s own cells and tissues.",
            "A condition where the body cannot produce enough antibodies":
              "Incorrect. This describes an immunodeficiency, not an autoimmune disease.",
            "A disease caused by external pathogens like bacteria or viruses":
              "Incorrect. Autoimmune diseases are caused by an internal immune system malfunction, not by external pathogens.",
            "A type of cancer that affects the immune system":
              "Incorrect. While cancers like lymphoma affect the immune system, they are not classified as autoimmune diseases.",
          },
          correctAnswer:
            "A condition where the immune system mistakenly attacks the body's own tissues (e.g., rheumatoid arthritis, lupus)",
        },
        {
          category: "Lymphatic and Immune System",
          question:
            "What is the difference between active and passive immunity?",
          options: {
            "Active immunity involves the body's own production of antibodies (e.g., after infection or vaccination), while passive immunity is provided by antibodies from another source (e.g., mother to baby, antibody injections)":
              "Correct. Active immunity is long-lasting, whereas passive immunity is temporary.",
            "Active immunity is only temporary, while passive immunity is long-lasting":
              "Incorrect. Passive immunity is temporary because it involves antibodies not produced by the individual.",
            "Passive immunity is acquired only through vaccination, while active immunity is acquired through natural infection":
              "Incorrect. Vaccination typically provides active immunity, not passive.",
            "Active immunity can only be acquired from the mother during pregnancy":
              "Incorrect. Active immunity can be acquired through infection or vaccination, not just through maternal antibodies.",
          },
          correctAnswer:
            "Active immunity involves the body's own production of antibodies (e.g., after infection or vaccination), while passive immunity is provided by antibodies from another source (e.g., mother to baby, antibody injections)",
        },
        {
          category: "Lymphatic and Immune System",
          question: "What is lymphedema?",
          options: {
            "Swelling due to blockage or damage to lymphatic vessels, preventing normal lymph drainage":
              "Correct. Lymphedema occurs when lymphatic fluid accumulates in tissues, causing swelling.",
            "An infection of the lymph nodes":
              "Incorrect. An infection of the lymph nodes is called lymphadenitis, not lymphedema.",
            "A condition where the immune system attacks the lymphatic vessels":
              "Incorrect. While autoimmune diseases can affect the lymphatic system, lymphedema is specifically related to fluid accumulation due to blockage or damage.",
            "A disease that affects the production of lymphocytes":
              "Incorrect. Lymphedema affects the lymphatic drainage, not the production of lymphocytes.",
          },
          correctAnswer:
            "Swelling due to blockage or damage to lymphatic vessels, preventing normal lymph drainage",
        },
      ],
    },
    {
      categoryName: "Respiratory System",
      questions: [
        {
          category: "Respiratory System",
          question: "What are the primary functions of the respiratory system?",
          options: {
            "To exchange gases (oxygen and carbon dioxide) between the air and the blood, and to help regulate blood pH":
              "Correct. The respiratory system is crucial for gas exchange and maintaining the acid-base balance in the body.",
            "To digest and absorb nutrients":
              "Incorrect. Digestion and absorption are functions of the digestive system.",
            "To filter blood and produce urine":
              "Incorrect. These functions are carried out by the urinary system.",
            "To transport oxygen and nutrients throughout the body":
              "Incorrect. Transporting oxygen and nutrients is the function of the cardiovascular system.",
          },
          correctAnswer:
            "To exchange gases (oxygen and carbon dioxide) between the air and the blood, and to help regulate blood pH",
        },
        {
          category: "Respiratory System",
          question:
            "What is the pathway of air through the respiratory system?",
          options: {
            "Nose/mouth → pharynx → larynx → trachea → bronchi → bronchioles → alveoli":
              "Correct. This is the correct pathway that air follows through the respiratory system.",
            "Mouth → esophagus → stomach → intestines":
              "Incorrect. This is the pathway of food through the digestive system.",
            "Nose → esophagus → trachea → bronchi":
              "Incorrect. The esophagus is not involved in the respiratory system; it is part of the digestive system.",
            "Mouth → larynx → esophagus → alveoli":
              "Incorrect. The esophagus is part of the digestive system and does not connect to the alveoli.",
          },
          correctAnswer:
            "Nose/mouth → pharynx → larynx → trachea → bronchi → bronchioles → alveoli",
        },
        {
          category: "Respiratory System",
          question: "What is the function of the nasal cavity?",
          options: {
            "Filters, warms, and moistens air as it enters the respiratory system":
              "Correct. The nasal cavity prepares the air before it enters the lower respiratory tract.",
            "Produces digestive enzymes":
              "Incorrect. Digestive enzymes are produced by the digestive system, not the respiratory system.",
            "Pumps blood throughout the body":
              "Incorrect. Pumping blood is the function of the heart in the cardiovascular system.",
            "Absorbs oxygen directly into the bloodstream":
              "Incorrect. Oxygen is absorbed into the bloodstream in the alveoli of the lungs, not the nasal cavity.",
          },
          correctAnswer:
            "Filters, warms, and moistens air as it enters the respiratory system",
        },
        {
          category: "Respiratory System",
          question: "What is the role of the larynx?",
          options: {
            "Contains the vocal cords and routes air and food into the proper channels":
              "Correct. The larynx is involved in voice production and directs air to the trachea and food to the esophagus.",
            "Pumps air into the lungs":
              "Incorrect. The diaphragm and respiratory muscles pump air into the lungs.",
            "Filters dust and particles from the air":
              "Incorrect. The nasal cavity and upper respiratory tract primarily filter dust and particles.",
            "Regulates the pH of the blood":
              "Incorrect. Blood pH is regulated by the respiratory system and kidneys, not specifically by the larynx.",
          },
          correctAnswer:
            "Contains the vocal cords and routes air and food into the proper channels",
        },
        {
          category: "Respiratory System",
          question: "What is the function of the trachea?",
          options: {
            "The windpipe that conducts air from the larynx to the bronchi, reinforced by C-shaped cartilage rings":
              "Correct. The trachea is the main airway leading from the larynx to the bronchi.",
            "A tube that carries food to the stomach":
              "Incorrect. The esophagus carries food to the stomach.",
            "A muscle that assists in breathing":
              "Incorrect. The diaphragm is the primary muscle that assists in breathing.",
            "A passage that allows air to enter the mouth":
              "Incorrect. The trachea is not directly involved in air entering the mouth.",
          },
          correctAnswer:
            "The windpipe that conducts air from the larynx to the bronchi, reinforced by C-shaped cartilage rings",
        },
        {
          category: "Respiratory System",
          question: "What are the bronchi and bronchioles?",
          options: {
            "The bronchi are large airways that branch from the trachea into each lung, and bronchioles are smaller branches that lead to the alveoli":
              "Correct. The bronchi and bronchioles are part of the airway system that conducts air to the alveoli where gas exchange occurs.",
            "The main sites of gas exchange in the lungs":
              "Incorrect. Gas exchange occurs in the alveoli, not the bronchi or bronchioles.",
            "Muscles that assist in breathing":
              "Incorrect. The bronchi and bronchioles are airways, not muscles.",
            "Valves that regulate airflow into the lungs":
              "Incorrect. The bronchi and bronchioles are not valves; they are airways.",
          },
          correctAnswer:
            "The bronchi are large airways that branch from the trachea into each lung, and bronchioles are smaller branches that lead to the alveoli",
        },
        {
          category: "Respiratory System",
          question: "What are the alveoli?",
          options: {
            "Tiny air sacs in the lungs where gas exchange occurs between the air and the blood":
              "Correct. The alveoli are the primary site of gas exchange in the lungs.",
            "Large airways that conduct air to the lungs":
              "Incorrect. The bronchi and bronchioles are large airways; alveoli are small air sacs.",
            "Muscles that move the lungs during breathing":
              "Incorrect. Alveoli are air sacs, not muscles.",
            "Valves that prevent air from escaping the lungs":
              "Incorrect. Alveoli are not valves; they are the sites of gas exchange.",
          },
          correctAnswer:
            "Tiny air sacs in the lungs where gas exchange occurs between the air and the blood",
        },
        {
          category: "Respiratory System",
          question: "What is the process of gas exchange in the alveoli?",
          options: {
            "Oxygen diffuses from the alveoli into the pulmonary capillaries, while carbon dioxide diffuses from the blood into the alveoli to be exhaled":
              "Correct. This is the fundamental process of gas exchange in the lungs.",
            "Air is pumped from the alveoli into the bloodstream":
              "Incorrect. Air is not pumped; gases diffuse based on concentration gradients.",
            "Nutrients are absorbed from the air into the blood":
              "Incorrect. Nutrients are absorbed in the digestive system, not the respiratory system.",
            "Carbon dioxide is absorbed from the alveoli into the bloodstream":
              "Incorrect. Carbon dioxide is removed from the bloodstream and exhaled through the alveoli.",
          },
          correctAnswer:
            "Oxygen diffuses from the alveoli into the pulmonary capillaries, while carbon dioxide diffuses from the blood into the alveoli to be exhaled",
        },
        {
          category: "Respiratory System",
          question: "What muscles are involved in inspiration?",
          options: {
            "The diaphragm and external intercostal muscles contract, expanding the thoracic cavity and drawing air into the lungs":
              "Correct. These muscles are responsible for creating the negative pressure needed for inhalation.",
            "The abdominal muscles contract to force air into the lungs":
              "Incorrect. The abdominal muscles are involved in forced exhalation, not inspiration.",
            "The heart pumps air into the lungs":
              "Incorrect. The heart pumps blood, not air.",
            "The trachea contracts to draw air into the lungs":
              "Incorrect. The trachea is a rigid structure that does not contract to draw air.",
          },
          correctAnswer:
            "The diaphragm and external intercostal muscles contract, expanding the thoracic cavity and drawing air into the lungs",
        },
        {
          category: "Respiratory System",
          question: "What is the role of the diaphragm in breathing?",
          options: {
            "A dome-shaped muscle that contracts to increase the volume of the thoracic cavity during inspiration":
              "Correct. The diaphragm is the primary muscle responsible for the inhalation process.",
            "A muscle that pumps blood to the lungs":
              "Incorrect. The heart is responsible for pumping blood, not the diaphragm.",
            "A structure that filters air entering the lungs":
              "Incorrect. The nasal cavity and respiratory tract filter air, not the diaphragm.",
            "A valve that controls airflow into the lungs":
              "Incorrect. The diaphragm is a muscle, not a valve.",
          },
          correctAnswer:
            "A dome-shaped muscle that contracts to increase the volume of the thoracic cavity during inspiration",
        },
        {
          category: "Respiratory System",
          question: "How is oxygen transported in the blood?",
          options: {
            "Primarily bound to hemoglobin in red blood cells as oxyhemoglobin":
              "Correct. Most oxygen in the blood is carried by hemoglobin in red blood cells.",
            "Dissolved directly in the plasma":
              "Incorrect. Only a small amount of oxygen is dissolved in plasma.",
            "Bound to white blood cells":
              "Incorrect. Oxygen is carried by red blood cells, not white blood cells.",
            "Transported as carbon dioxide":
              "Incorrect. Oxygen and carbon dioxide are different gases with different transport mechanisms.",
          },
          correctAnswer:
            "Primarily bound to hemoglobin in red blood cells as oxyhemoglobin",
        },
        {
          category: "Respiratory System",
          question: "How is carbon dioxide transported in the blood?",
          options: {
            "Dissolved in plasma, bound to hemoglobin as carbaminohemoglobin, or converted to bicarbonate ions in the plasma":
              "Correct. These are the three main ways carbon dioxide is transported in the blood.",
            "Bound to oxygen molecules":
              "Incorrect. Oxygen and carbon dioxide are transported separately in the blood.",
            "Only dissolved in plasma":
              "Incorrect. While some CO2 is dissolved in plasma, it is also transported bound to hemoglobin and as bicarbonate ions.",
            "Primarily carried by red blood cells":
              "Incorrect. CO2 is carried both in plasma and by hemoglobin, but not in the same manner as oxygen.",
          },
          correctAnswer:
            "Dissolved in plasma, bound to hemoglobin as carbaminohemoglobin, or converted to bicarbonate ions in the plasma",
        },
        {
          category: "Respiratory System",
          question: "What is the role of the medulla oblongata in respiration?",
          options: {
            "It controls the basic rhythm of breathing by sending signals to the respiratory muscles":
              "Correct. The medulla oblongata is responsible for regulating the rate and rhythm of breathing.",
            "It filters air before it enters the lungs":
              "Incorrect. The nasal cavity and upper respiratory tract are responsible for filtering air.",
            "It exchanges gases in the alveoli":
              "Incorrect. Gas exchange occurs in the alveoli, not the medulla oblongata.",
            "It increases blood oxygen levels directly":
              "Incorrect. The medulla oblongata regulates breathing, which indirectly affects blood oxygen levels.",
          },
          correctAnswer:
            "It controls the basic rhythm of breathing by sending signals to the respiratory muscles",
        },
        {
          category: "Respiratory System",
          question:
            "What are chemoreceptors and how do they regulate breathing?",
          options: {
            "Sensory receptors that detect changes in blood pH, CO2, and O2 levels, and adjust ventilation to maintain homeostasis":
              "Correct. Chemoreceptors help regulate breathing by monitoring blood chemistry.",
            "Cells in the alveoli that filter air":
              "Incorrect. Alveoli are involved in gas exchange, not in detecting blood chemistry.",
            "Nerves that control muscle contraction during breathing":
              "Incorrect. Nerves control muscle contraction, but chemoreceptors are specifically involved in detecting chemical changes in the blood.",
            "Glands that secrete hormones to regulate breathing":
              "Incorrect. Chemoreceptors are not glands; they are sensory receptors.",
          },
          correctAnswer:
            "Sensory receptors that detect changes in blood pH, CO2, and O2 levels, and adjust ventilation to maintain homeostasis",
        },
        {
          category: "Respiratory System",
          question: "What is asthma?",
          options: {
            "A chronic inflammatory disease of the airways characterized by episodes of wheezing, breathlessness, and coughing":
              "Correct. Asthma is a common respiratory condition affecting the airways.",
            "A bacterial infection of the lungs":
              "Incorrect. Bacterial infections, such as pneumonia, are different from asthma.",
            "A condition where air sacs in the lungs are destroyed":
              "Incorrect. This describes emphysema, not asthma.",
            "A blockage of a pulmonary artery":
              "Incorrect. A pulmonary embolism involves a blockage, not asthma.",
          },
          correctAnswer:
            "A chronic inflammatory disease of the airways characterized by episodes of wheezing, breathlessness, and coughing",
        },
        {
          category: "Respiratory System",
          question: "What is Chronic Obstructive Pulmonary Disease (COPD)?",
          options: {
            "A group of lung diseases, including emphysema and chronic bronchitis, that cause airflow obstruction and breathing difficulties":
              "Correct. COPD is a term that includes multiple chronic respiratory conditions.",
            "A sudden blockage in the lungs":
              "Incorrect. A sudden blockage is typically a pulmonary embolism, not COPD.",
            "A condition caused by bacterial infection":
              "Incorrect. While infections can exacerbate COPD, the condition itself is chronic and not caused by bacteria.",
            "An allergic reaction that narrows the airways":
              "Incorrect. This describes asthma more than COPD.",
          },
          correctAnswer:
            "A group of lung diseases, including emphysema and chronic bronchitis, that cause airflow obstruction and breathing difficulties",
        },
        {
          category: "Respiratory System",
          question: "What is pneumonia?",
          options: {
            "An infection of the lungs that inflames the air sacs, leading to fluid accumulation and impaired gas exchange":
              "Correct. Pneumonia is a serious lung infection that affects breathing.",
            "A chronic disease that narrows the airways":
              "Incorrect. Chronic diseases like asthma and COPD narrow the airways, but pneumonia is an infection.",
            "A condition where the lungs lose elasticity":
              "Incorrect. Loss of elasticity is more characteristic of emphysema.",
            "A disorder that affects the diaphragm":
              "Incorrect. Pneumonia primarily affects the lungs, not the diaphragm.",
          },
          correctAnswer:
            "An infection of the lungs that inflames the air sacs, leading to fluid accumulation and impaired gas exchange",
        },
        {
          category: "Respiratory System",
          question: "What is a pulmonary embolism?",
          options: {
            "A blockage in one of the pulmonary arteries in the lungs, usually caused by a blood clot, leading to decreased oxygenation of blood":
              "Correct. A pulmonary embolism is a serious condition that affects blood flow in the lungs.",
            "A chronic inflammation of the bronchi":
              "Incorrect. Chronic inflammation of the bronchi is more typical of bronchitis.",
            "A condition that causes the airways to spasm":
              "Incorrect. Airway spasms are associated with asthma.",
            "A lung infection that causes fluid buildup":
              "Incorrect. Fluid buildup in the lungs is more typical of pneumonia, not a pulmonary embolism.",
          },
          correctAnswer:
            "A blockage in one of the pulmonary arteries in the lungs, usually caused by a blood clot, leading to decreased oxygenation of blood",
        },
      ],
    },
    {
      categoryName: "Digestive System",
      questions: [
        {
          category: "Digestive System",
          question: "What is the main function of the digestive system?",
          options: {
            "To break down food into nutrients that can be absorbed into the bloodstream and eliminate waste":
              "Correct. The digestive system processes food into absorbable nutrients and disposes of waste.",
            "To circulate blood throughout the body":
              "Incorrect. Circulation is the function of the cardiovascular system.",
            "To regulate hormones in the body":
              "Incorrect. Hormone regulation is managed by the endocrine system.",
            "To filter waste from the blood":
              "Incorrect. Filtering waste from the blood is the function of the kidneys in the urinary system.",
          },
          correctAnswer:
            "To break down food into nutrients that can be absorbed into the bloodstream and eliminate waste",
        },
        {
          category: "Digestive System",
          question: "What are the primary processes of digestion?",
          options: {
            "Ingestion, mechanical digestion, chemical digestion, absorption, and defecation":
              "Correct. These are the key processes involved in the digestive system's function.",
            "Breathing, circulation, excretion, and reproduction":
              "Incorrect. These processes are related to different systems such as respiratory, cardiovascular, and reproductive systems.",
            "Filtration, reabsorption, secretion, and excretion":
              "Incorrect. These processes are part of the urinary system.",
            "Metabolism, detoxification, hormone production, and immune response":
              "Incorrect. These processes involve multiple systems including the endocrine and immune systems.",
          },
          correctAnswer:
            "Ingestion, mechanical digestion, chemical digestion, absorption, and defecation",
        },
        {
          category: "Digestive System",
          question: "What is the role of the mouth in digestion?",
          options: {
            "Begins mechanical digestion through chewing (mastication) and chemical digestion with saliva containing amylase":
              "Correct. The mouth is the starting point for both mechanical and chemical digestion.",
            "Stores bile for fat digestion":
              "Incorrect. The gallbladder stores bile, not the mouth.",
            "Filters toxins from the blood":
              "Incorrect. Filtering toxins is the function of the liver and kidneys.",
            "Produces insulin for blood sugar regulation":
              "Incorrect. Insulin is produced by the pancreas, not the mouth.",
          },
          correctAnswer:
            "Begins mechanical digestion through chewing (mastication) and chemical digestion with saliva containing amylase",
        },
        {
          category: "Digestive System",
          question: "What is the function of the salivary glands?",
          options: {
            "Produce saliva, which contains enzymes (amylase) that begin the breakdown of carbohydrates":
              "Correct. Salivary glands initiate carbohydrate digestion in the mouth.",
            "Secrete hormones that regulate metabolism":
              "Incorrect. Metabolic regulation is a function of the endocrine system, not the salivary glands.",
            "Absorb nutrients from digested food":
              "Incorrect. Nutrient absorption occurs in the small intestine.",
            "Store and release bile for fat digestion":
              "Incorrect. The gallbladder stores and releases bile, not the salivary glands.",
          },
          correctAnswer:
            "Produce saliva, which contains enzymes (amylase) that begin the breakdown of carbohydrates",
        },
        {
          category: "Digestive System",
          question: "What is the esophagus?",
          options: {
            "A muscular tube that transports food from the pharynx to the stomach via peristalsis":
              "Correct. The esophagus uses peristalsis to move food to the stomach.",
            "The organ where most nutrient absorption occurs":
              "Incorrect. Most nutrient absorption takes place in the small intestine, not the esophagus.",
            "A valve that prevents stomach acid from entering the esophagus":
              "Incorrect. The lower esophageal sphincter performs this function, but it is not the esophagus itself.",
            "The tube through which air passes from the larynx to the bronchi":
              "Incorrect. This describes the trachea, not the esophagus.",
          },
          correctAnswer:
            "A muscular tube that transports food from the pharynx to the stomach via peristalsis",
        },
        {
          category: "Digestive System",
          question: "What is peristalsis?",
          options: {
            "Involuntary, wave-like muscle contractions that move food through the digestive tract":
              "Correct. Peristalsis is crucial for moving food along the digestive tract.",
            "The process of chewing and breaking down food":
              "Incorrect. This describes mastication, not peristalsis.",
            "The absorption of nutrients into the bloodstream":
              "Incorrect. Absorption occurs in the intestines, not through peristalsis.",
            "The release of enzymes to digest food":
              "Incorrect. Enzyme release is part of chemical digestion, not peristalsis.",
          },
          correctAnswer:
            "Involuntary, wave-like muscle contractions that move food through the digestive tract",
        },
        {
          category: "Digestive System",
          question: "What is the role of the stomach in digestion?",
          options: {
            "Secretes gastric juices, including HCl and pepsin, to chemically break down proteins and churns food to mix it with digestive enzymes":
              "Correct. The stomach is key for protein digestion and food processing.",
            "Absorbs most of the nutrients from digested food":
              "Incorrect. Most nutrient absorption occurs in the small intestine.",
            "Produces bile for fat digestion":
              "Incorrect. Bile is produced by the liver, not the stomach.",
            "Stores and concentrates digestive enzymes":
              "Incorrect. Digestive enzymes are produced in various organs, but they are not concentrated in the stomach.",
          },
          correctAnswer:
            "Secretes gastric juices, including HCl and pepsin, to chemically break down proteins and churns food to mix it with digestive enzymes",
        },
        {
          category: "Digestive System",
          question: "What is chyme?",
          options: {
            "The semi-liquid mixture of partially digested food and gastric juices that forms in the stomach and moves into the small intestine":
              "Correct. Chyme is the product of stomach digestion ready for further processing in the intestines.",
            "The fluid secreted by the salivary glands":
              "Incorrect. Saliva, not chyme, is secreted by the salivary glands.",
            "The solid waste material excreted by the colon":
              "Incorrect. Solid waste is referred to as feces, not chyme.",
            "The bile stored in the gallbladder":
              "Incorrect. Bile is a digestive fluid, but it is not chyme.",
          },
          correctAnswer:
            "The semi-liquid mixture of partially digested food and gastric juices that forms in the stomach and moves into the small intestine",
        },
        {
          category: "Digestive System",
          question: "What is the small intestine and its function?",
          options: {
            "The primary site of nutrient absorption; consists of three sections: duodenum, jejunum, and ileum":
              "Correct. The small intestine is critical for absorbing nutrients into the bloodstream.",
            "The first part of the digestive system where food is ingested":
              "Incorrect. The mouth is where ingestion occurs, not the small intestine.",
            "The organ that stores and concentrates bile":
              "Incorrect. The gallbladder stores and concentrates bile, not the small intestine.",
            "The tube that transports food from the stomach to the rectum":
              "Incorrect. The small intestine connects the stomach to the large intestine, not the rectum.",
          },
          correctAnswer:
            "The primary site of nutrient absorption; consists of three sections: duodenum, jejunum, and ileum",
        },
        {
          category: "Digestive System",
          question: "What is the role of the duodenum?",
          options: {
            "The first part of the small intestine where most chemical digestion occurs, receiving bile from the liver and pancreatic enzymes":
              "Correct. The duodenum is where chemical digestion intensifies with the help of bile and enzymes.",
            "The part of the large intestine where water is absorbed":
              "Incorrect. Water absorption occurs in the colon, not the duodenum.",
            "The tube that connects the mouth to the stomach":
              "Incorrect. This describes the esophagus, not the duodenum.",
            "The final part of the digestive system where feces are stored":
              "Incorrect. Feces are stored in the rectum, not the duodenum.",
          },
          correctAnswer:
            "The first part of the small intestine where most chemical digestion occurs, receiving bile from the liver and pancreatic enzymes",
        },
        {
          category: "Digestive System",
          question:
            "What is the function of the villi and microvilli in the small intestine?",
          options: {
            "Increase the surface area for absorption of nutrients into the bloodstream":
              "Correct. Villi and microvilli are essential for maximizing nutrient absorption.",
            "Produce digestive enzymes that break down carbohydrates":
              "Incorrect. While they aid absorption, villi and microvilli do not produce enzymes.",
            "Store bile produced by the liver":
              "Incorrect. Bile is stored in the gallbladder, not in the villi or microvilli.",
            "Filter toxins from the blood":
              "Incorrect. The liver and kidneys are responsible for filtering toxins, not the villi and microvilli.",
          },
          correctAnswer:
            "Increase the surface area for absorption of nutrients into the bloodstream",
        },
        {
          category: "Digestive System",
          question: "What is the role of the liver in digestion?",
          options: {
            "Produces bile, which emulsifies fats to aid in their digestion":
              "Correct. The liver's bile production is crucial for fat digestion.",
            "Stores glucose as glycogen for energy":
              "Incorrect. While the liver does store glycogen, this function is related to metabolism, not digestion.",
            "Absorbs water and electrolytes from digested food":
              "Incorrect. Water and electrolyte absorption primarily occurs in the large intestine.",
            "Breaks down proteins into amino acids":
              "Incorrect. Protein digestion begins in the stomach and continues in the small intestine.",
          },
          correctAnswer:
            "Produces bile, which emulsifies fats to aid in their digestion",
        },
        {
          category: "Digestive System",
          question: "What is the function of the gallbladder?",
          options: {
            "Stores and concentrates bile, releasing it into the duodenum when needed for fat digestion":
              "Correct. The gallbladder plays a key role in the digestion of fats by storing and releasing bile.",
            "Produces digestive enzymes":
              "Incorrect. Digestive enzymes are produced by the pancreas and stomach, not the gallbladder.",
            "Absorbs nutrients from digested food":
              "Incorrect. Nutrient absorption occurs in the small intestine, not the gallbladder.",
            "Filters toxins from the blood":
              "Incorrect. The liver is responsible for filtering toxins, not the gallbladder.",
          },
          correctAnswer:
            "Stores and concentrates bile, releasing it into the duodenum when needed for fat digestion",
        },
        {
          category: "Digestive System",
          question: "What are the exocrine functions of the pancreas?",
          options: {
            "Produces digestive enzymes (amylase, lipase, proteases) and bicarbonate to neutralize stomach acid in the duodenum":
              "Correct. The pancreas is vital for producing enzymes and bicarbonate to aid digestion.",
            "Produces insulin to regulate blood sugar levels":
              "Incorrect. Insulin production is an endocrine function of the pancreas.",
            "Stores and releases bile":
              "Incorrect. The gallbladder, not the pancreas, stores and releases bile.",
            "Filters waste from the blood":
              "Incorrect. Waste filtration is performed by the kidneys, not the pancreas.",
          },
          correctAnswer:
            "Produces digestive enzymes (amylase, lipase, proteases) and bicarbonate to neutralize stomach acid in the duodenum",
        },
        {
          category: "Digestive System",
          question: "What is the role of the large intestine?",
          options: {
            "Absorbs water and electrolytes, forming solid feces, and houses gut bacteria that produce vitamins like vitamin K":
              "Correct. The large intestine is key for water absorption, feces formation, and housing beneficial bacteria.",
            "Breaks down proteins into amino acids":
              "Incorrect. Protein digestion occurs in the stomach and small intestine, not the large intestine.",
            "Stores bile produced by the liver":
              "Incorrect. Bile is stored in the gallbladder, not the large intestine.",
            "Filters toxins from the blood":
              "Incorrect. Toxin filtration is performed by the liver and kidneys, not the large intestine.",
          },
          correctAnswer:
            "Absorbs water and electrolytes, forming solid feces, and houses gut bacteria that produce vitamins like vitamin K",
        },
        {
          category: "Digestive System",
          question: "What is the function of the rectum and anus?",
          options: {
            "Store and expel feces during defecation":
              "Correct. The rectum stores feces, and the anus controls their expulsion during defecation.",
            "Absorb nutrients from digested food":
              "Incorrect. Nutrient absorption occurs in the small intestine, not the rectum and anus.",
            "Filter waste from the blood":
              "Incorrect. Waste filtration is performed by the kidneys, not the rectum and anus.",
            "Produce bile for fat digestion":
              "Incorrect. Bile is produced by the liver, not the rectum and anus.",
          },
          correctAnswer: "Store and expel feces during defecation",
        },
        {
          category: "Digestive System",
          question: "What enzymes are involved in protein digestion?",
          options: {
            "Pepsin (stomach), trypsin, and chymotrypsin (pancreas)":
              "Correct. These enzymes are essential for breaking down proteins into amino acids.",
            "Amylase (saliva), lipase, and maltase":
              "Incorrect. Amylase breaks down carbohydrates, and lipase digests fats, not proteins.",
            "Lactase, sucrase, and maltase":
              "Incorrect. These enzymes break down carbohydrates, not proteins.",
            "Insulin, glucagon, and somatostatin":
              "Incorrect. These are hormones related to blood sugar regulation, not digestive enzymes.",
          },
          correctAnswer:
            "Pepsin (stomach), trypsin, and chymotrypsin (pancreas)",
        },
        {
          category: "Digestive System",
          question: "What is the role of bile in fat digestion?",
          options: {
            "Bile emulsifies fats, breaking them into smaller droplets that are more easily digested by enzymes like lipase":
              "Correct. Bile is crucial for the digestion and absorption of fats.",
            "Bile breaks down carbohydrates into simple sugars":
              "Incorrect. Bile is involved in fat digestion, not carbohydrate digestion.",
            "Bile neutralizes stomach acid in the small intestine":
              "Incorrect. Bile's primary role is emulsifying fats, while bicarbonate neutralizes stomach acid.",
            "Bile absorbs water and electrolytes":
              "Incorrect. Water and electrolyte absorption occurs in the large intestine, not through bile.",
          },
          correctAnswer:
            "Bile emulsifies fats, breaking them into smaller droplets that are more easily digested by enzymes like lipase",
        },
        {
          category: "Digestive System",
          question: "What is the role of the enteric nervous system?",
          options: {
            "The 'gut brain,' a local neural network that regulates gastrointestinal motility and secretion independently of the central nervous system":
              "Correct. The enteric nervous system plays a crucial role in controlling digestion.",
            "Controls the release of hormones from the pituitary gland":
              "Incorrect. The pituitary gland is controlled by the hypothalamus, not the enteric nervous system.",
            "Regulates the body's immune response":
              "Incorrect. The immune system, not the enteric nervous system, regulates immune responses.",
            "Manages the filtration of waste products from the blood":
              "Incorrect. Waste filtration is performed by the kidneys, not the enteric nervous system.",
          },
          correctAnswer:
            "The 'gut brain,' a local neural network that regulates gastrointestinal motility and secretion independently of the central nervous system",
        },
        {
          category: "Digestive System",
          question: "What hormones regulate digestive processes?",
          options: {
            "Gastrin (stimulates gastric juice secretion), secretin (stimulates bicarbonate release), and cholecystokinin (CCK, stimulates bile and pancreatic enzyme release)":
              "Correct. These hormones play key roles in regulating digestion.",
            "Insulin (lowers blood sugar), glucagon (raises blood sugar), and cortisol (stress hormone)":
              "Incorrect. These hormones regulate metabolism, not digestion.",
            "Adrenaline (increases heart rate), thyroid hormone (regulates metabolism), and aldosterone (regulates sodium)":
              "Incorrect. These hormones are involved in stress response, metabolism, and blood pressure, not digestion.",
            "Testosterone (male sex hormone), estrogen (female sex hormone), and progesterone (pregnancy hormone)":
              "Incorrect. These hormones are related to reproduction, not digestion.",
          },
          correctAnswer:
            "Gastrin (stimulates gastric juice secretion), secretin (stimulates bicarbonate release), and cholecystokinin (CCK, stimulates bile and pancreatic enzyme release)",
        },
        {
          category: "Digestive System",
          question: "What is GERD (Gastroesophageal Reflux Disease)?",
          options: {
            "A condition where stomach acid flows back into the esophagus, causing heartburn and potential damage to the esophageal lining":
              "Correct. GERD is a common digestive disorder involving acid reflux.",
            "A disorder where the intestines cannot absorb nutrients":
              "Incorrect. This describes malabsorption syndromes, not GERD.",
            "A condition where bile is not properly released into the digestive system":
              "Incorrect. This would relate to biliary disorders, not GERD.",
            "A condition where the stomach produces too much mucus":
              "Incorrect. Excess mucus production is not a defining feature of GERD.",
          },
          correctAnswer:
            "A condition where stomach acid flows back into the esophagus, causing heartburn and potential damage to the esophageal lining",
        },
        {
          category: "Digestive System",
          question: "What is a peptic ulcer?",
          options: {
            "An erosion of the stomach or duodenal lining caused by excess acid or infection with Helicobacter pylori":
              "Correct. Peptic ulcers are often caused by H. pylori infection and excessive stomach acid.",
            "A condition where the liver fails to produce bile":
              "Incorrect. This describes biliary obstruction, not a peptic ulcer.",
            "A blockage in the intestines preventing food passage":
              "Incorrect. This would be an intestinal obstruction, not a peptic ulcer.",
            "An overgrowth of bacteria in the small intestine":
              "Incorrect. Bacterial overgrowth is a different condition, not related to peptic ulcers.",
          },
          correctAnswer:
            "An erosion of the stomach or duodenal lining caused by excess acid or infection with Helicobacter pylori",
        },
        {
          category: "Digestive System",
          question: "What is Irritable Bowel Syndrome (IBS)?",
          options: {
            "A functional disorder characterized by abdominal pain, bloating, and altered bowel habits (diarrhea or constipation)":
              "Correct. IBS is a common gastrointestinal disorder with a variety of symptoms.",
            "A condition where the intestines become inflamed and ulcerated":
              "Incorrect. This describes Inflammatory Bowel Disease (IBD), not IBS.",
            "A condition where stomach acid erodes the esophagus":
              "Incorrect. This describes GERD, not IBS.",
            "A condition where the liver fails to detoxify the blood":
              "Incorrect. This would describe liver failure, not IBS.",
          },
          correctAnswer:
            "A functional disorder characterized by abdominal pain, bloating, and altered bowel habits (diarrhea or constipation)",
        },
        {
          category: "Digestive System",
          question: "What is Inflammatory Bowel Disease (IBD)?",
          options: {
            "Chronic inflammation of the digestive tract, including conditions like Crohn's disease and ulcerative colitis":
              "Correct. IBD is a term used for chronic inflammatory conditions of the GI tract.",
            "A condition where the intestines lose their ability to absorb nutrients":
              "Incorrect. While malabsorption can occur with IBD, the definition focuses on chronic inflammation.",
            "A condition where the stomach fails to produce enough acid":
              "Incorrect. This describes hypochlorhydria, not IBD.",
            "A functional disorder characterized by abdominal pain, bloating, and altered bowel habits":
              "Incorrect. This describes IBS, not IBD.",
          },
          correctAnswer:
            "Chronic inflammation of the digestive tract, including conditions like Crohn's disease and ulcerative colitis",
        },
      ],
    },
    {
      categoryName: "Urinary System",
      questions: [
        {
          category: "Urinary System",
          question: "What are the primary functions of the urinary system?",
          options: {
            "To remove waste products from the blood, regulate blood volume and pressure, balance electrolytes and pH, and detoxify the body":
              "Correct. The urinary system is responsible for these essential functions.",
            "To produce hormones and regulate metabolism":
              "Incorrect. Hormone production and metabolism regulation are functions of the endocrine system.",
            "To break down food and absorb nutrients":
              "Incorrect. These are functions of the digestive system.",
            "To transport oxygen and nutrients throughout the body":
              "Incorrect. This is the function of the cardiovascular system.",
          },
          correctAnswer:
            "To remove waste products from the blood, regulate blood volume and pressure, balance electrolytes and pH, and detoxify the body",
        },
        {
          category: "Urinary System",
          question: "What are the main organs of the urinary system?",
          options: {
            "Kidneys, ureters, bladder, and urethra":
              "Correct. These are the main organs involved in the production, storage, and excretion of urine.",
            "Heart, arteries, veins, and capillaries":
              "Incorrect. These organs are part of the cardiovascular system.",
            "Stomach, intestines, liver, and pancreas":
              "Incorrect. These organs are part of the digestive system.",
            "Lungs, bronchi, trachea, and alveoli":
              "Incorrect. These organs are part of the respiratory system.",
          },
          correctAnswer: "Kidneys, ureters, bladder, and urethra",
        },
        {
          category: "Urinary System",
          question: "What is the structure and function of the kidneys?",
          options: {
            "Bean-shaped organs that filter blood, remove waste, and regulate electrolyte balance; contain nephrons, the functional units":
              "Correct. The kidneys play a crucial role in maintaining homeostasis by filtering blood and forming urine.",
            "Organs that produce digestive enzymes and absorb nutrients":
              "Incorrect. This describes the function of the pancreas and intestines.",
            "Muscles that aid in breathing and oxygen exchange":
              "Incorrect. This describes the function of the diaphragm and lungs.",
            "Glands that secrete hormones into the bloodstream":
              "Incorrect. This describes the function of endocrine glands, not the kidneys.",
          },
          correctAnswer:
            "Bean-shaped organs that filter blood, remove waste, and regulate electrolyte balance; contain nephrons, the functional units",
        },
        {
          category: "Urinary System",
          question: "What is the nephron and its role?",
          options: {
            "The functional unit of the kidney that filters blood, reabsorbs needed substances, and secretes waste into the urine":
              "Correct. Nephrons are the microscopic structures within the kidneys that perform essential functions in urine formation.",
            "A type of blood vessel that carries oxygenated blood":
              "Incorrect. Nephrons are not blood vessels; they are the filtering units of the kidney.",
            "A gland that produces hormones to regulate metabolism":
              "Incorrect. This describes an endocrine gland, not a nephron.",
            "A structure in the heart that regulates blood flow":
              "Incorrect. This describes valves in the heart, not the nephron.",
          },
          correctAnswer:
            "The functional unit of the kidney that filters blood, reabsorbs needed substances, and secretes waste into the urine",
        },
        {
          category: "Urinary System",
          question: "What is the glomerulus?",
          options: {
            "A network of capillaries in the nephron where blood filtration occurs":
              "Correct. The glomerulus is where the initial process of filtering blood to form urine begins.",
            "A structure in the liver that detoxifies blood":
              "Incorrect. The glomerulus is in the kidney, not the liver.",
            "A muscle that pumps blood throughout the body":
              "Incorrect. This describes the heart, not the glomerulus.",
            "A gland that secretes digestive enzymes":
              "Incorrect. Digestive enzyme secretion is performed by the pancreas, not the glomerulus.",
          },
          correctAnswer:
            "A network of capillaries in the nephron where blood filtration occurs",
        },
        {
          category: "Urinary System",
          question: "What is the role of the proximal convoluted tubule (PCT)?",
          options: {
            "Reabsorbs nutrients, ions, and water from the filtrate back into the bloodstream":
              "Correct. The PCT plays a vital role in reclaiming valuable substances from the filtrate.",
            "Secretes hormones into the blood":
              "Incorrect. Hormone secretion is not the function of the PCT.",
            "Filters blood to form urine":
              "Incorrect. Blood filtration occurs in the glomerulus, not the PCT.",
            "Stores and concentrates bile":
              "Incorrect. Bile is stored in the gallbladder, not in the PCT.",
          },
          correctAnswer:
            "Reabsorbs nutrients, ions, and water from the filtrate back into the bloodstream",
        },
        {
          category: "Urinary System",
          question: "What is the loop of Henle and its function?",
          options: {
            "Creates a concentration gradient in the medulla to concentrate urine by reabsorbing water and salts":
              "Correct. The loop of Henle is essential for the kidney's ability to produce concentrated urine.",
            "Filters blood to remove waste products":
              "Incorrect. Blood filtration occurs in the glomerulus, not in the loop of Henle.",
            "Secretes digestive enzymes into the small intestine":
              "Incorrect. The loop of Henle is part of the urinary system, not the digestive system.",
            "Pumps blood through the circulatory system":
              "Incorrect. Pumping blood is the function of the heart, not the loop of Henle.",
          },
          correctAnswer:
            "Creates a concentration gradient in the medulla to concentrate urine by reabsorbing water and salts",
        },
        {
          category: "Urinary System",
          question: "What is the role of the distal convoluted tubule (DCT)?",
          options: {
            "Further reabsorbs ions and water, regulated by hormones like aldosterone":
              "Correct. The DCT is involved in fine-tuning the composition of urine through hormone-regulated processes.",
            "Filters blood to form urine":
              "Incorrect. Blood filtration occurs in the glomerulus, not the DCT.",
            "Secretes hormones into the bloodstream":
              "Incorrect. Hormone secretion is not the function of the DCT.",
            "Stores and releases bile":
              "Incorrect. Bile is stored in the gallbladder, not in the DCT.",
          },
          correctAnswer:
            "Further reabsorbs ions and water, regulated by hormones like aldosterone",
        },
        {
          category: "Urinary System",
          question: "What is the function of the collecting duct?",
          options: {
            "Final adjustments to urine composition; reabsorbs water under the influence of ADH":
              "Correct. The collecting duct is crucial for regulating water balance in the body.",
            "Filters blood to remove waste":
              "Incorrect. Blood filtration occurs in the glomerulus, not the collecting duct.",
            "Secretes digestive enzymes":
              "Incorrect. Digestive enzyme secretion is not the function of the collecting duct.",
            "Pumps blood through the body":
              "Incorrect. Pumping blood is the function of the heart, not the collecting duct.",
          },
          correctAnswer:
            "Final adjustments to urine composition; reabsorbs water under the influence of ADH",
        },
        {
          category: "Urinary System",
          question: "What is glomerular filtration?",
          options: {
            "The process by which blood pressure forces water, ions, and small molecules from the blood into Bowman's capsule, forming the filtrate":
              "Correct. Glomerular filtration is the first step in urine formation.",
            "The absorption of nutrients from food":
              "Incorrect. Nutrient absorption occurs in the digestive system, not through glomerular filtration.",
            "The process of reabsorbing water from the urine":
              "Incorrect. Water reabsorption occurs later in the nephron, not during glomerular filtration.",
            "The secretion of hormones into the blood":
              "Incorrect. Hormone secretion is not related to glomerular filtration.",
          },
          correctAnswer:
            "The process by which blood pressure forces water, ions, and small molecules from the blood into Bowman's capsule, forming the filtrate",
        },
        {
          category: "Urinary System",
          question: "What is tubular reabsorption?",
          options: {
            "The process by which the nephron reclaims valuable substances from the filtrate back into the bloodstream":
              "Correct. Tubular reabsorption is essential for conserving useful materials like glucose and ions.",
            "The release of waste products into the urine":
              "Incorrect. This describes tubular secretion, not reabsorption.",
            "The filtration of blood to form urine":
              "Incorrect. Blood filtration occurs in the glomerulus, not during tubular reabsorption.",
            "The storage of urine in the bladder":
              "Incorrect. Urine storage occurs in the bladder, not during tubular reabsorption.",
          },
          correctAnswer:
            "The process by which the nephron reclaims valuable substances from the filtrate back into the bloodstream",
        },
        {
          category: "Urinary System",
          question: "What is tubular secretion?",
          options: {
            "The active transport of waste products and excess ions from the blood into the filtrate, primarily in the DCT and collecting duct":
              "Correct. Tubular secretion helps rid the body of excess substances and toxins.",
            "The process of filtering blood to remove waste":
              "Incorrect. Blood filtration occurs in the glomerulus, not during tubular secretion.",
            "The reabsorption of nutrients from the filtrate":
              "Incorrect. Nutrient reabsorption occurs earlier in the nephron, not during tubular secretion.",
            "The storage of urine in the bladder":
              "Incorrect. Urine storage occurs in the bladder, not during tubular secretion.",
          },
          correctAnswer:
            "The active transport of waste products and excess ions from the blood into the filtrate, primarily in the DCT and collecting duct",
        },
        {
          category: "Urinary System",
          question: "What is the role of ADH in the kidneys?",
          options: {
            "Increases water reabsorption in the collecting ducts, reducing urine volume and increasing blood volume":
              "Correct. ADH plays a key role in maintaining the body's water balance.",
            "Stimulates the release of bile":
              "Incorrect. Bile release is controlled by cholecystokinin, not ADH.",
            "Promotes the breakdown of glycogen into glucose":
              "Incorrect. This is the function of glucagon, not ADH.",
            "Increases heart rate and blood pressure":
              "Incorrect. ADH regulates water balance, not heart rate and blood pressure.",
          },
          correctAnswer:
            "Increases water reabsorption in the collecting ducts, reducing urine volume and increasing blood volume",
        },
        {
          category: "Urinary System",
          question: "What triggers the release of renin?",
          options: {
            "Low blood pressure or low sodium levels in the blood stimulate renin release from the kidneys":
              "Correct. Renin is released in response to signals indicating low blood pressure or sodium levels.",
            "High blood glucose levels":
              "Incorrect. High blood glucose triggers insulin release, not renin.",
            "Increased heart rate":
              "Incorrect. Heart rate increases are not directly related to renin release.",
            "Elevated blood oxygen levels":
              "Incorrect. Blood oxygen levels do not trigger renin release.",
          },
          correctAnswer:
            "Low blood pressure or low sodium levels in the blood stimulate renin release from the kidneys",
        },
        {
          category: "Urinary System",
          question: "What is the function of aldosterone?",
          options: {
            "Promotes sodium reabsorption and potassium excretion, leading to water retention and increased blood pressure":
              "Correct. Aldosterone helps regulate blood pressure by adjusting sodium and potassium levels.",
            "Regulates blood glucose levels":
              "Incorrect. Insulin and glucagon regulate blood glucose levels, not aldosterone.",
            "Increases heart rate":
              "Incorrect. Aldosterone regulates electrolyte balance, not heart rate.",
            "Stimulates red blood cell production":
              "Incorrect. Erythropoietin stimulates red blood cell production, not aldosterone.",
          },
          correctAnswer:
            "Promotes sodium reabsorption and potassium excretion, leading to water retention and increased blood pressure",
        },
        {
          category: "Urinary System",
          question: "What is the role of the ureters?",
          options: {
            "Transport urine from the kidneys to the bladder via peristalsis":
              "Correct. The ureters are tubes that carry urine from the kidneys to the bladder.",
            "Store and expel urine during urination":
              "Incorrect. The bladder stores urine, not the ureters.",
            "Filter blood to remove waste":
              "Incorrect. Blood filtration occurs in the kidneys, not the ureters.",
            "Reabsorb water and electrolytes":
              "Incorrect. Water and electrolyte reabsorption occur in the nephron, not the ureters.",
          },
          correctAnswer:
            "Transport urine from the kidneys to the bladder via peristalsis",
        },
        {
          category: "Urinary System",
          question: "What is the function of the bladder?",
          options: {
            "Stores urine until it is excreted":
              "Correct. The bladder holds urine until it is ready to be expelled from the body.",
            "Filters blood to remove waste":
              "Incorrect. Blood filtration occurs in the kidneys, not the bladder.",
            "Reabsorbs nutrients and water":
              "Incorrect. Nutrient and water reabsorption occur in the nephron, not the bladder.",
            "Produces urine by filtering blood":
              "Incorrect. Urine production occurs in the kidneys, not the bladder.",
          },
          correctAnswer: "Stores urine until it is excreted",
        },
        {
          category: "Urinary System",
          question: "What is the function of the urethra?",
          options: {
            "Carries urine from the bladder to the outside of the body during urination":
              "Correct. The urethra is the final pathway for urine to leave the body.",
            "Transports urine from the kidneys to the bladder":
              "Incorrect. This function is performed by the ureters, not the urethra.",
            "Stores urine until it is excreted":
              "Incorrect. Urine storage occurs in the bladder, not the urethra.",
            "Filters blood to remove waste":
              "Incorrect. Blood filtration occurs in the kidneys, not the urethra.",
          },
          correctAnswer:
            "Carries urine from the bladder to the outside of the body during urination",
        },
        {
          category: "Urinary System",
          question: "What is micturition?",
          options: {
            "The process of urination, involving the coordinated relaxation of the urethral sphincters and contraction of the bladder muscles":
              "Correct. Micturition is the process of expelling urine from the body.",
            "The process of blood filtration in the kidneys":
              "Incorrect. Blood filtration is part of urine formation, not micturition.",
            "The secretion of digestive enzymes":
              "Incorrect. Digestive enzyme secretion is not related to micturition.",
            "The absorption of nutrients from food":
              "Incorrect. Nutrient absorption occurs in the digestive system, not through micturition.",
          },
          correctAnswer:
            "The process of urination, involving the coordinated relaxation of the urethral sphincters and contraction of the bladder muscles",
        },
        {
          category: "Urinary System",
          question: "What is acid-base balance and how is it regulated?",
          options: {
            "The maintenance of the body's pH within a narrow range; regulated by buffer systems, respiratory compensation, and renal compensation":
              "Correct. The body maintains acid-base balance through multiple mechanisms involving the respiratory and urinary systems.",
            "The regulation of blood pressure through hormone secretion":
              "Incorrect. Blood pressure regulation involves different mechanisms, not directly related to acid-base balance.",
            "The process of filtering blood to remove waste":
              "Incorrect. Blood filtration is related to urine formation, not acid-base balance.",
            "The absorption of nutrients from the digestive tract":
              "Incorrect. Nutrient absorption occurs in the digestive system, not through acid-base balance.",
          },
          correctAnswer:
            "The maintenance of the body's pH within a narrow range; regulated by buffer systems, respiratory compensation, and renal compensation",
        },
        {
          category: "Urinary System",
          question: "What is chronic kidney disease (CKD)?",
          options: {
            "Progressive loss of kidney function over time, potentially leading to end-stage renal disease (ESRD) requiring dialysis or transplantation":
              "Correct. CKD is a serious condition that can result in severe kidney damage over time.",
            "A sudden loss of kidney function that is often reversible":
              "Incorrect. This describes acute kidney injury (AKI), not CKD.",
            "The presence of kidney stones that block urine flow":
              "Incorrect. Kidney stones are a separate condition, not the same as CKD.",
            "An infection of the kidneys caused by bacteria":
              "Incorrect. This describes pyelonephritis, not CKD.",
          },
          correctAnswer:
            "Progressive loss of kidney function over time, potentially leading to end-stage renal disease (ESRD) requiring dialysis or transplantation",
        },
        {
          category: "Urinary System",
          question: "What is acute kidney injury (AKI)?",
          options: {
            "Sudden loss of kidney function, often reversible with prompt treatment":
              "Correct. AKI is a rapid decline in kidney function, typically treatable if addressed quickly.",
            "A chronic condition where kidney function gradually declines":
              "Incorrect. This describes chronic kidney disease (CKD), not AKI.",
            "The formation of kidney stones":
              "Incorrect. Kidney stones are a separate condition from AKI.",
            "A long-term infection of the kidneys":
              "Incorrect. Long-term kidney infections are not the same as AKI.",
          },
          correctAnswer:
            "Sudden loss of kidney function, often reversible with prompt treatment",
        },
        {
          category: "Urinary System",
          question: "What are kidney stones (renal calculi)?",
          options: {
            "Crystallized minerals in the kidney that can obstruct urine flow, causing pain and potential damage to the kidney":
              "Correct. Kidney stones are solid masses that can cause significant pain and complications if not treated.",
            "Inflammation of the kidneys":
              "Incorrect. Inflammation of the kidneys is called nephritis, not kidney stones.",
            "A sudden decline in kidney function":
              "Incorrect. A sudden decline in kidney function is referred to as acute kidney injury (AKI), not kidney stones.",
            "The loss of protein in the urine":
              "Incorrect. Protein loss in the urine is a condition called proteinuria, not kidney stones.",
          },
          correctAnswer:
            "Crystallized minerals in the kidney that can obstruct urine flow, causing pain and potential damage to the kidney",
        },
        {
          category: "Urinary System",
          question: "What is urinalysis?",
          options: {
            "A test that examines the content of urine to detect and diagnose various conditions, including infections, kidney disease, and diabetes":
              "Correct. Urinalysis is a common diagnostic tool used to assess kidney function and detect various disorders.",
            "A surgical procedure to remove kidney stones":
              "Incorrect. Urinalysis is a diagnostic test, not a surgical procedure.",
            "A method of measuring blood pressure":
              "Incorrect. Blood pressure measurement is not related to urinalysis.",
            "A technique to filter waste from the blood":
              "Incorrect. Filtration of blood waste occurs in the kidneys, not through urinalysis.",
          },
          correctAnswer:
            "A test that examines the content of urine to detect and diagnose various conditions, including infections, kidney disease, and diabetes",
        },
      ],
    },
    {
      categoryName: "Reproductive System",
      questions: [
        {
          category: "Reproductive System",
          question:
            "What are the primary functions of the reproductive system?",
          options: {
            "To produce, store, and transport gametes (sperm and eggs) and facilitate fertilization and the development of offspring":
              "Correct. The reproductive system is responsible for producing and supporting the development of offspring.",
            "To filter blood and remove waste products from the body":
              "Incorrect. This is the function of the urinary system.",
            "To regulate metabolism and maintain homeostasis":
              "Incorrect. This is the role of the endocrine system.",
            "To control the body's response to stress":
              "Incorrect. Stress responses are regulated by the endocrine and nervous systems, not the reproductive system.",
          },
          correctAnswer:
            "To produce, store, and transport gametes (sperm and eggs) and facilitate fertilization and the development of offspring",
        },
        {
          category: "Reproductive System",
          question: "What is the structure and function of the testes?",
          options: {
            "Male reproductive organs that produce sperm (spermatogenesis) and secrete testosterone":
              "Correct. The testes are the primary male reproductive organs responsible for producing sperm and hormones.",
            "Glands that produce digestive enzymes":
              "Incorrect. The testes do not produce digestive enzymes; this is the function of the pancreas.",
            "Organs that filter waste from the blood":
              "Incorrect. The kidneys filter waste from the blood, not the testes.",
            "Muscles that contract during ejaculation":
              "Incorrect. The muscles involved in ejaculation are not the testes; they are part of the reproductive tract.",
          },
          correctAnswer:
            "Male reproductive organs that produce sperm (spermatogenesis) and secrete testosterone",
        },
        {
          category: "Reproductive System",
          question: "What is spermatogenesis?",
          options: {
            "The production of sperm through meiosis in the seminiferous tubules of the testes":
              "Correct. Spermatogenesis is the process of sperm production in males.",
            "The fertilization of an egg by sperm":
              "Incorrect. Fertilization is the union of sperm and egg, not the production of sperm.",
            "The production of eggs in females":
              "Incorrect. The production of eggs is called oogenesis, not spermatogenesis.",
            "The secretion of testosterone by the testes":
              "Incorrect. Spermatogenesis refers specifically to sperm production, not hormone secretion.",
          },
          correctAnswer:
            "The production of sperm through meiosis in the seminiferous tubules of the testes",
        },
        {
          category: "Reproductive System",
          question: "What are the components of sperm?",
          options: {
            "Head (contains DNA), midpiece (packed with mitochondria for energy), and tail (flagellum for movement)":
              "Correct. These components enable sperm to move and fertilize an egg.",
            "Nucleus, cytoplasm, and cell membrane":
              "Incorrect. These are general cellular components, not specific to sperm.",
            "Ovary, fallopian tube, and uterus":
              "Incorrect. These are parts of the female reproductive system, not components of sperm.",
            "Egg, zygote, and blastocyst":
              "Incorrect. These are stages in the development of a fertilized egg, not components of sperm.",
          },
          correctAnswer:
            "Head (contains DNA), midpiece (packed with mitochondria for energy), and tail (flagellum for movement)",
        },
        {
          category: "Reproductive System",
          question: "What is the role of the epididymis?",
          options: {
            "Coiled tube where sperm mature and are stored until ejaculation":
              "Correct. The epididymis is crucial for the maturation and storage of sperm.",
            "Structure where eggs are produced":
              "Incorrect. Eggs are produced in the ovaries, not the epididymis.",
            "Gland that secretes seminal fluid":
              "Incorrect. The seminal vesicles secrete seminal fluid, not the epididymis.",
            "Muscle that contracts during ejaculation":
              "Incorrect. The epididymis stores sperm, but it is not a muscle involved in ejaculation.",
          },
          correctAnswer:
            "Coiled tube where sperm mature and are stored until ejaculation",
        },
        {
          category: "Reproductive System",
          question: "What is the function of the vas deferens?",
          options: {
            "Transports sperm from the epididymis to the urethra during ejaculation":
              "Correct. The vas deferens is a key duct in the male reproductive system.",
            "Filters waste products from the blood":
              "Incorrect. The kidneys filter waste, not the vas deferens.",
            "Stores urine until it is excreted":
              "Incorrect. Urine is stored in the bladder, not the vas deferens.",
            "Produces testosterone":
              "Incorrect. Testosterone is produced by the testes, not the vas deferens.",
          },
          correctAnswer:
            "Transports sperm from the epididymis to the urethra during ejaculation",
        },
        {
          category: "Reproductive System",
          question: "What is the role of the seminal vesicles?",
          options: {
            "Produce seminal fluid that contains fructose, providing energy for sperm":
              "Correct. Seminal vesicles contribute to the seminal fluid, which nourishes and supports sperm.",
            "Store and mature sperm":
              "Incorrect. Sperm are stored and mature in the epididymis, not the seminal vesicles.",
            "Produce eggs":
              "Incorrect. Eggs are produced by the ovaries in females, not by seminal vesicles.",
            "Filter blood to remove waste":
              "Incorrect. Blood filtration occurs in the kidneys, not the seminal vesicles.",
          },
          correctAnswer:
            "Produce seminal fluid that contains fructose, providing energy for sperm",
        },
        {
          category: "Reproductive System",
          question: "What is the function of the prostate gland?",
          options: {
            "Produces a slightly alkaline fluid that makes up part of the semen and neutralizes acidity in the female reproductive tract":
              "Correct. The prostate gland's secretions are important for sperm viability.",
            "Stores and releases bile":
              "Incorrect. Bile is stored in the gallbladder, not the prostate gland.",
            "Filters waste products from the blood":
              "Incorrect. Blood filtration is a function of the kidneys, not the prostate gland.",
            "Produces hormones that regulate metabolism":
              "Incorrect. Hormone production for metabolism is mainly a function of the thyroid gland, not the prostate.",
          },
          correctAnswer:
            "Produces a slightly alkaline fluid that makes up part of the semen and neutralizes acidity in the female reproductive tract",
        },
        {
          category: "Reproductive System",
          question: "What is the function of the bulbourethral glands?",
          options: {
            "Secrete mucus that lubricates the urethra during ejaculation":
              "Correct. The bulbourethral glands produce a mucus-like fluid that helps in lubrication during ejaculation.",
            "Produce sperm":
              "Incorrect. Sperm is produced in the testes, not the bulbourethral glands.",
            "Store urine until it is excreted":
              "Incorrect. Urine is stored in the bladder, not in the bulbourethral glands.",
            "Regulate blood pressure":
              "Incorrect. Blood pressure regulation is not a function of the bulbourethral glands.",
          },
          correctAnswer:
            "Secrete mucus that lubricates the urethra during ejaculation",
        },
        {
          category: "Reproductive System",
          question: "What is the structure and function of the ovaries?",
          options: {
            "Female reproductive organs that produce eggs (oogenesis) and secrete estrogen and progesterone":
              "Correct. The ovaries are central to female reproductive function.",
            "Organs that filter blood and remove waste products":
              "Incorrect. Blood filtration occurs in the kidneys, not the ovaries.",
            "Glands that produce digestive enzymes":
              "Incorrect. The pancreas produces digestive enzymes, not the ovaries.",
            "Muscles that contract during childbirth":
              "Incorrect. The uterus contracts during childbirth, not the ovaries.",
          },
          correctAnswer:
            "Female reproductive organs that produce eggs (oogenesis) and secrete estrogen and progesterone",
        },
        {
          category: "Reproductive System",
          question: "What is oogenesis?",
          options: {
            "The production of eggs through meiosis, beginning before birth and resuming during puberty":
              "Correct. Oogenesis is the process of egg development in females.",
            "The production of sperm in males":
              "Incorrect. The production of sperm is called spermatogenesis, not oogenesis.",
            "The process of fertilizing an egg":
              "Incorrect. Fertilization is the union of egg and sperm, not the production of eggs.",
            "The secretion of estrogen by the ovaries":
              "Incorrect. Estrogen secretion is a function of the ovaries, but it is not the same as oogenesis.",
          },
          correctAnswer:
            "The production of eggs through meiosis, beginning before birth and resuming during puberty",
        },
        {
          category: "Reproductive System",
          question: "What occurs during ovulation?",
          options: {
            "The release of a mature egg (secondary oocyte) from the ovary, typically around day 14 of the menstrual cycle":
              "Correct. Ovulation is a key event in the menstrual cycle.",
            "The fertilization of an egg by sperm":
              "Incorrect. Fertilization occurs after ovulation if sperm are present.",
            "The thickening of the uterine lining":
              "Incorrect. The thickening of the uterine lining occurs during the proliferative phase, not ovulation.",
            "The onset of menstruation":
              "Incorrect. Menstruation occurs if the egg is not fertilized, usually after ovulation.",
          },
          correctAnswer:
            "The release of a mature egg (secondary oocyte) from the ovary, typically around day 14 of the menstrual cycle",
        },
        {
          category: "Reproductive System",
          question: "What is the function of the endometrium?",
          options: {
            "The inner lining of the uterus that thickens in preparation for pregnancy and is shed during menstruation if fertilization does not occur":
              "Correct. The endometrium is essential for supporting a potential pregnancy.",
            "The outer layer of the uterus that protects the organ":
              "Incorrect. The outer layer of the uterus is the perimetrium, not the endometrium.",
            "A muscle that contracts during childbirth":
              "Incorrect. The myometrium, not the endometrium, is the muscular layer responsible for contractions during childbirth.",
            "The tissue that produces eggs":
              "Incorrect. Eggs are produced in the ovaries, not in the endometrium.",
          },
          correctAnswer:
            "The inner lining of the uterus that thickens in preparation for pregnancy and is shed during menstruation if fertilization does not occur",
        },
        {
          category: "Reproductive System",
          question: "What is the role of the cervix?",
          options: {
            "The narrow lower portion of the uterus that opens into the vagina and dilates during childbirth":
              "Correct. The cervix plays a crucial role in both protecting the uterus and allowing passage during childbirth.",
            "The site where fertilization occurs":
              "Incorrect. Fertilization typically occurs in the fallopian tubes, not in the cervix.",
            "The organ that produces hormones for the menstrual cycle":
              "Incorrect. Hormones for the menstrual cycle are primarily produced by the ovaries.",
            "The structure that stores and releases eggs":
              "Incorrect. Eggs are stored and released by the ovaries, not the cervix.",
          },
          correctAnswer:
            "The narrow lower portion of the uterus that opens into the vagina and dilates during childbirth",
        },
        {
          category: "Reproductive System",
          question: "What is the menstrual cycle?",
          options: {
            "The monthly cycle of changes in the female reproductive system, including the development and release of an egg and preparation of the uterus for pregnancy":
              "Correct. The menstrual cycle involves several phases that prepare the body for pregnancy.",
            "The process of egg fertilization":
              "Incorrect. Fertilization is a separate process that can occur during the menstrual cycle but is not the cycle itself.",
            "The period of pregnancy":
              "Incorrect. Pregnancy occurs after a successful menstrual cycle but is not part of the menstrual cycle itself.",
            "The time during which a female is fertile":
              "Incorrect. Fertility is related to the menstrual cycle, but the menstrual cycle encompasses more than just the fertile window.",
          },
          correctAnswer:
            "The monthly cycle of changes in the female reproductive system, including the development and release of an egg and preparation of the uterus for pregnancy",
        },
        {
          category: "Reproductive System",
          question: "What are the phases of the menstrual cycle?",
          options: {
            "Follicular phase, ovulation, luteal phase, and menstruation":
              "Correct. These are the four main phases of the menstrual cycle.",
            "Proliferative phase, secretory phase, luteal phase, and ovulation":
              "Incorrect. While the proliferative and secretory phases are part of the cycle, the correct sequence includes menstruation, not these phases.",
            "Maturation phase, fertilization phase, implantation phase, and menstruation":
              "Incorrect. Fertilization and implantation are separate events that may or may not occur during the cycle.",
            "Hormonal phase, egg release phase, pregnancy phase, and menstruation":
              "Incorrect. The menstrual cycle is divided into follicular, ovulation, luteal phases, and menstruation.",
          },
          correctAnswer:
            "Follicular phase, ovulation, luteal phase, and menstruation",
        },
        {
          category: "Reproductive System",
          question: "What is the function of estrogen in the menstrual cycle?",
          options: {
            "Promotes the growth of the endometrium and regulates the menstrual cycle":
              "Correct. Estrogen is crucial for the preparation of the uterus and regulation of the cycle.",
            "Triggers ovulation":
              "Incorrect. While estrogen plays a role, the luteinizing hormone (LH) is the primary trigger for ovulation.",
            "Causes the shedding of the uterine lining":
              "Incorrect. Progesterone withdrawal causes the shedding of the uterine lining, not estrogen.",
            "Prepares the breasts for lactation":
              "Incorrect. While estrogen plays a role in breast development, lactation preparation is primarily driven by prolactin.",
          },
          correctAnswer:
            "Promotes the growth of the endometrium and regulates the menstrual cycle",
        },
        {
          category: "Reproductive System",
          question: "What is the role of progesterone?",
          options: {
            "Maintains the endometrium for potential pregnancy and inhibits uterine contractions":
              "Correct. Progesterone is essential for sustaining the endometrium and preventing premature contractions.",
            "Triggers ovulation":
              "Incorrect. Ovulation is triggered by luteinizing hormone (LH), not progesterone.",
            "Stimulates milk production":
              "Incorrect. Milk production is stimulated by prolactin, not progesterone.",
            "Increases the production of sperm":
              "Incorrect. Progesterone is a female hormone and does not affect sperm production.",
          },
          correctAnswer:
            "Maintains the endometrium for potential pregnancy and inhibits uterine contractions",
        },
        {
          category: "Reproductive System",
          question: "What is fertilization?",
          options: {
            "The union of a sperm cell and an egg cell, typically occurring in the fallopian tube":
              "Correct. Fertilization marks the beginning of a new organism and typically occurs in the fallopian tube.",
            "The release of an egg from the ovary":
              "Incorrect. The release of an egg is called ovulation, not fertilization.",
            "The implantation of a fertilized egg into the uterus":
              "Incorrect. Implantation occurs after fertilization.",
            "The process by which the uterus sheds its lining":
              "Incorrect. Shedding of the uterine lining is menstruation, not fertilization.",
          },
          correctAnswer:
            "The union of a sperm cell and an egg cell, typically occurring in the fallopian tube",
        },
        {
          category: "Reproductive System",
          question: "What is the role of the placenta during pregnancy?",
          options: {
            "An organ that provides oxygen and nutrients to the developing fetus and removes waste products":
              "Correct. The placenta is critical for the exchange of nutrients and waste between mother and fetus.",
            "A muscle that contracts during childbirth":
              "Incorrect. The placenta is not a muscle; the uterus contracts during childbirth.",
            "The site of egg production":
              "Incorrect. Eggs are produced in the ovaries, not in the placenta.",
            "The structure that stores and releases hormones":
              "Incorrect. While the placenta produces hormones, its primary function is nutrient exchange, not hormone storage.",
          },
          correctAnswer:
            "An organ that provides oxygen and nutrients to the developing fetus and removes waste products",
        },
        {
          category: "Reproductive System",
          question: "What are the trimesters of pregnancy?",
          options: {
            "First trimester (organogenesis), second trimester (growth and development), third trimester (final maturation and preparation for birth)":
              "Correct. These are the three trimesters of pregnancy, each with distinct developmental milestones.",
            "First trimester (implantation), second trimester (rapid brain development), third trimester (birth)":
              "Incorrect. While implantation and brain development occur, they are not the defining features of the trimesters.",
            "First trimester (ovulation), second trimester (fertilization), third trimester (labor and delivery)":
              "Incorrect. Ovulation and fertilization occur before pregnancy, not within the trimesters.",
            "First trimester (fertilization), second trimester (organ formation), third trimester (growth and maturation)":
              "Incorrect. While close, the correct terms are organogenesis, growth and development, and final maturation.",
          },
          correctAnswer:
            "First trimester (organogenesis), second trimester (growth and development), third trimester (final maturation and preparation for birth)",
        },
        {
          category: "Reproductive System",
          question: "What is Polycystic Ovary Syndrome (PCOS)?",
          options: {
            "A hormonal disorder causing enlarged ovaries with small cysts, leading to irregular menstrual cycles and infertility":
              "Correct. PCOS is a common endocrine disorder affecting women of reproductive age.",
            "An infection of the fallopian tubes":
              "Incorrect. Infections of the fallopian tubes are called salpingitis, not PCOS.",
            "A condition where endometrial tissue grows outside the uterus":
              "Incorrect. This describes endometriosis, not PCOS.",
            "A type of cancer affecting the ovaries":
              "Incorrect. Ovarian cancer is different from PCOS, which is a hormonal disorder.",
          },
          correctAnswer:
            "A hormonal disorder causing enlarged ovaries with small cysts, leading to irregular menstrual cycles and infertility",
        },
        {
          category: "Reproductive System",
          question: "What is endometriosis?",
          options: {
            "A condition where endometrial tissue grows outside the uterus, causing pain and potential fertility issues":
              "Correct. Endometriosis can cause significant pain and complications, including infertility.",
            "An infection of the uterus":
              "Incorrect. Endometriosis is not an infection; it's a condition involving misplaced tissue.",
            "A form of ovarian cancer":
              "Incorrect. Endometriosis is not cancerous, though it can be severe.",
            "A condition characterized by the absence of menstrual periods":
              "Incorrect. The absence of menstrual periods is called amenorrhea, not endometriosis.",
          },
          correctAnswer:
            "A condition where endometrial tissue grows outside the uterus, causing pain and potential fertility issues",
        },
        {
          category: "Reproductive System",
          question: "What is erectile dysfunction (ED)?",
          options: {
            "The inability to achieve or maintain an erection sufficient for sexual intercourse":
              "Correct. Erectile dysfunction can be caused by physical, psychological, or hormonal factors.",
            "The inability to ejaculate":
              "Incorrect. Inability to ejaculate is a different condition, not necessarily related to erectile dysfunction.",
            "A condition where sperm production is low":
              "Incorrect. Low sperm production is a different issue, known as oligospermia, not ED.",
            "The inability to conceive a child":
              "Incorrect. The inability to conceive is referred to as infertility, not erectile dysfunction.",
          },
          correctAnswer:
            "The inability to achieve or maintain an erection sufficient for sexual intercourse",
        },
        {
          category: "Reproductive System",
          question: "What is infertility?",
          options: {
            "The inability to conceive after one year of unprotected intercourse, which can be due to various factors affecting either the male or female reproductive systems":
              "Correct. Infertility can be due to issues in either partner and may require medical intervention.",
            "The absence of menstruation in women":
              "Incorrect. The absence of menstruation is called amenorrhea, not infertility.",
            "A condition characterized by painful menstruation":
              "Incorrect. Painful menstruation is known as dysmenorrhea, not infertility.",
            "The presence of cysts in the ovaries":
              "Incorrect. Cysts in the ovaries are associated with PCOS, which can contribute to infertility but is not synonymous with it.",
          },
          correctAnswer:
            "The inability to conceive after one year of unprotected intercourse, which can be due to various factors affecting either the male or female reproductive systems",
        },
      ],
    },
    {
      categoryName: "Nervous System",
      questions: [
        {
          category: "Nervous System",
          question: "What is the central nervous system (CNS)?",
          options: {
            "The brain and spinal cord, responsible for processing and transmitting information throughout the body":
              "Correct. The CNS is the control center of the body, processing and sending out signals.",
            "A network of nerves that connect the brain to the rest of the body":
              "Incorrect. This describes the peripheral nervous system (PNS), not the CNS.",
            "A group of glands that secrete hormones into the bloodstream":
              "Incorrect. This describes the endocrine system.",
            "The digestive tract, responsible for breaking down food and absorbing nutrients":
              "Incorrect. This describes the digestive system, not the nervous system.",
          },
          correctAnswer:
            "The brain and spinal cord, responsible for processing and transmitting information throughout the body",
        },
        {
          category: "Nervous System",
          question: "What is the peripheral nervous system (PNS)?",
          options: {
            "The part of the nervous system outside the CNS, consisting of the somatic nervous system (voluntary control) and autonomic nervous system (involuntary control)":
              "Correct. The PNS connects the CNS to the rest of the body and controls both voluntary and involuntary actions.",
            "The control center of the body, processing and sending out signals":
              "Incorrect. This describes the central nervous system (CNS).",
            "A system that regulates hormone secretion":
              "Incorrect. Hormone secretion is regulated by the endocrine system, not the PNS.",
            "A network of muscles responsible for movement":
              "Incorrect. While the PNS does control muscles, it is not the muscles themselves.",
          },
          correctAnswer:
            "The part of the nervous system outside the CNS, consisting of the somatic nervous system (voluntary control) and autonomic nervous system (involuntary control)",
        },
        {
          category: "Nervous System",
          question: "What is the role of neurons in the nervous system?",
          options: {
            "Neurons are the basic building blocks of the nervous system, responsible for transmitting information throughout the body":
              "Correct. Neurons are specialized cells that communicate through electrical and chemical signals.",
            "Neurons secrete hormones into the bloodstream":
              "Incorrect. Hormones are secreted by endocrine glands, not neurons.",
            "Neurons transport oxygen and nutrients to cells":
              "Incorrect. This function is carried out by the blood in the cardiovascular system.",
            "Neurons filter waste products from the blood":
              "Incorrect. This is the function of the kidneys in the urinary system.",
          },
          correctAnswer:
            "Neurons are the basic building blocks of the nervous system, responsible for transmitting information throughout the body",
        },
        {
          category: "Nervous System",
          question: "What are the main parts of a neuron?",
          options: {
            "Dendrites (receive signals), cell body (soma), axon (transmits signals), and synapse (gap between neurons where communication occurs)":
              "Correct. These are the key components of a neuron, each playing a vital role in neural communication.",
            "Heart, lungs, and brain":
              "Incorrect. These are major organs, but not parts of a neuron.",
            "Arteries, veins, and capillaries":
              "Incorrect. These are components of the circulatory system, not parts of a neuron.",
            "Bones, muscles, and joints":
              "Incorrect. These are components of the skeletal and muscular systems, not parts of a neuron.",
          },
          correctAnswer:
            "Dendrites (receive signals), cell body (soma), axon (transmits signals), and synapse (gap between neurons where communication occurs)",
        },
        {
          category: "Nervous System",
          question: "What is the function of neurotransmitters?",
          options: {
            "Chemicals that transmit signals across the synapse from one neuron to another":
              "Correct. Neurotransmitters are crucial for communication between neurons in the nervous system.",
            "Hormones that regulate metabolism":
              "Incorrect. Hormones regulate various body functions, but neurotransmitters specifically transmit signals between neurons.",
            "Proteins that carry oxygen in the blood":
              "Incorrect. Hemoglobin in red blood cells carries oxygen, not neurotransmitters.",
            "Cells that produce antibodies":
              "Incorrect. Antibodies are produced by B cells in the immune system, not neurotransmitters.",
          },
          correctAnswer:
            "Chemicals that transmit signals across the synapse from one neuron to another",
        },
        {
          category: "Nervous System",
          question: "What is the autonomic nervous system (ANS)?",
          options: {
            "The part of the PNS that controls involuntary functions such as heart rate, digestion, and respiration":
              "Correct. The ANS regulates essential involuntary functions that keep the body running smoothly.",
            "The part of the CNS that processes voluntary movements":
              "Incorrect. Voluntary movements are controlled by the somatic nervous system, not the ANS.",
            "A group of glands that produce hormones":
              "Incorrect. Glands produce hormones as part of the endocrine system, not the nervous system.",
            "The system responsible for reflex actions":
              "Incorrect. Reflex actions involve both the CNS and PNS, but the ANS specifically controls involuntary functions.",
          },
          correctAnswer:
            "The part of the PNS that controls involuntary functions such as heart rate, digestion, and respiration",
        },
        {
          category: "Nervous System",
          question:
            "What is the difference between the sympathetic and parasympathetic nervous systems?",
          options: {
            "The sympathetic nervous system prepares the body for fight-or-flight responses, while the parasympathetic nervous system promotes rest-and-digest functions":
              "Correct. These two divisions of the ANS work in opposition to maintain balance in the body.",
            "The sympathetic nervous system controls voluntary actions, while the parasympathetic nervous system controls involuntary actions":
              "Incorrect. Both systems control involuntary actions, but they have different roles.",
            "The sympathetic nervous system secretes hormones, while the parasympathetic nervous system secretes neurotransmitters":
              "Incorrect. Both systems use neurotransmitters for communication, not hormones.",
            "The sympathetic nervous system is part of the CNS, while the parasympathetic nervous system is part of the PNS":
              "Incorrect. Both systems are part of the autonomic nervous system, which is a division of the PNS.",
          },
          correctAnswer:
            "The sympathetic nervous system prepares the body for fight-or-flight responses, while the parasympathetic nervous system promotes rest-and-digest functions",
        },
        {
          category: "Nervous System",
          question: "What is the role of the brainstem?",
          options: {
            "Controls basic life functions such as breathing, heartbeat, and blood pressure":
              "Correct. The brainstem is critical for maintaining essential life functions.",
            "Processes sensory information from the environment":
              "Incorrect. The brainstem does play a role in processing sensory information, but this is primarily managed by the cerebral cortex.",
            "Regulates voluntary muscle movements":
              "Incorrect. Voluntary muscle movements are controlled by the motor cortex in the brain, not the brainstem.",
            "Stores memories and emotions":
              "Incorrect. Memories and emotions are primarily stored and processed in the hippocampus and limbic system.",
          },
          correctAnswer:
            "Controls basic life functions such as breathing, heartbeat, and blood pressure",
        },
        {
          category: "Nervous System",
          question: "What is the function of the cerebellum?",
          options: {
            "Coordinates voluntary movements, balance, and posture":
              "Correct. The cerebellum plays a key role in fine-tuning motor activities and maintaining balance.",
            "Controls hormone secretion":
              "Incorrect. Hormone secretion is controlled by the endocrine system, not the cerebellum.",
            "Processes visual information":
              "Incorrect. Visual information is processed primarily by the occipital lobe of the brain, not the cerebellum.",
            "Regulates blood pressure and heart rate":
              "Incorrect. These functions are primarily managed by the brainstem and autonomic nervous system.",
          },
          correctAnswer:
            "Coordinates voluntary movements, balance, and posture",
        },
        {
          category: "Nervous System",
          question: "What is the role of the hypothalamus?",
          options: {
            "Regulates basic bodily functions like hunger, thirst, temperature, and the release of hormones from the pituitary gland":
              "Correct. The hypothalamus is crucial for maintaining homeostasis in the body.",
            "Processes sensory information and relays it to the cerebral cortex":
              "Incorrect. This is the function of the thalamus, not the hypothalamus.",
            "Controls muscle movements":
              "Incorrect. Muscle movements are controlled by the motor cortex, not the hypothalamus.",
            "Filters blood and produces urine":
              "Incorrect. This is the function of the kidneys, not the hypothalamus.",
          },
          correctAnswer:
            "Regulates basic bodily functions like hunger, thirst, temperature, and the release of hormones from the pituitary gland",
        },
        {
          category: "Nervous System",
          question: "What is the function of the thalamus?",
          options: {
            "Acts as the brain's relay station, directing sensory information to the appropriate areas of the cerebral cortex":
              "Correct. The thalamus is essential for processing and relaying sensory input to the correct regions of the brain.",
            "Regulates emotions and memory":
              "Incorrect. Emotions and memory are primarily regulated by the limbic system, including the amygdala and hippocampus.",
            "Controls muscle coordination and balance":
              "Incorrect. Muscle coordination and balance are controlled by the cerebellum, not the thalamus.",
            "Produces and secretes hormones":
              "Incorrect. Hormone production and secretion are functions of the hypothalamus and endocrine glands, not the thalamus.",
          },
          correctAnswer:
            "Acts as the brain's relay station, directing sensory information to the appropriate areas of the cerebral cortex",
        },
        {
          category: "Nervous System",
          question: "What is the role of the cerebral cortex?",
          options: {
            "Responsible for higher-level functions like thinking, planning, and problem-solving":
              "Correct. The cerebral cortex is involved in complex cognitive processes.",
            "Regulates heart rate and breathing":
              "Incorrect. Heart rate and breathing are regulated by the brainstem and autonomic nervous system.",
            "Controls reflex actions":
              "Incorrect. Reflex actions are typically controlled by the spinal cord.",
            "Processes emotions and drives":
              "Incorrect. Emotions and drives are processed by the limbic system, not the cerebral cortex.",
          },
          correctAnswer:
            "Responsible for higher-level functions like thinking, planning, and problem-solving",
        },
        {
          category: "Nervous System",
          question: "What is the limbic system?",
          options: {
            "A group of interconnected structures in the brain that are involved in emotion, memory, and motivation":
              "Correct. The limbic system includes structures such as the amygdala, hippocampus, and hypothalamus.",
            "The outer layer of the brain involved in complex cognitive functions":
              "Incorrect. This describes the cerebral cortex, not the limbic system.",
            "A network of nerves that controls voluntary muscle movements":
              "Incorrect. Voluntary muscle movements are controlled by the motor cortex and somatic nervous system, not the limbic system.",
            "A series of glands that produce hormones":
              "Incorrect. Glands that produce hormones are part of the endocrine system, not the limbic system.",
          },
          correctAnswer:
            "A group of interconnected structures in the brain that are involved in emotion, memory, and motivation",
        },
        {
          category: "Nervous System",
          question: "What is the function of the hippocampus?",
          options: {
            "Involved in the formation and retrieval of long-term memories":
              "Correct. The hippocampus is crucial for converting short-term memories into long-term memories.",
            "Regulates breathing and heart rate":
              "Incorrect. Breathing and heart rate are regulated by the brainstem, not the hippocampus.",
            "Controls voluntary muscle movements":
              "Incorrect. Voluntary muscle movements are controlled by the motor cortex, not the hippocampus.",
            "Processes visual information":
              "Incorrect. Visual information is processed primarily by the occipital lobe of the cerebral cortex.",
          },
          correctAnswer:
            "Involved in the formation and retrieval of long-term memories",
        },
        {
          category: "Nervous System",
          question: "What is the amygdala responsible for?",
          options: {
            "Processing emotions, especially fear and aggression":
              "Correct. The amygdala plays a key role in emotional processing, particularly in responses related to fear and aggression.",
            "Controlling voluntary muscle movements":
              "Incorrect. Voluntary muscle movements are controlled by the motor cortex, not the amygdala.",
            "Regulating blood pressure and heart rate":
              "Incorrect. These functions are managed by the brainstem and autonomic nervous system.",
            "Storing long-term memories":
              "Incorrect. Long-term memory storage is primarily managed by the hippocampus, not the amygdala.",
          },
          correctAnswer: "Processing emotions, especially fear and aggression",
        },
        {
          category: "Nervous System",
          question: "What is the corpus callosum?",
          options: {
            "A thick band of nerve fibers that connects the left and right hemispheres of the brain, allowing communication between them":
              "Correct. The corpus callosum is essential for interhemispheric communication.",
            "A structure that controls balance and coordination":
              "Incorrect. Balance and coordination are primarily controlled by the cerebellum, not the corpus callosum.",
            "A region of the brain involved in processing visual information":
              "Incorrect. Visual processing occurs in the occipital lobe, not the corpus callosum.",
            "A gland that secretes hormones":
              "Incorrect. The corpus callosum is a bundle of nerve fibers, not a gland.",
          },
          correctAnswer:
            "A thick band of nerve fibers that connects the left and right hemispheres of the brain, allowing communication between them",
        },
        {
          category: "Nervous System",
          question:
            "What is the difference between white matter and gray matter in the brain?",
          options: {
            "White matter consists of myelinated axons, while gray matter consists of neuron cell bodies, dendrites, and unmyelinated axons":
              "Correct. White matter is involved in communication between different brain regions, and gray matter processes information.",
            "White matter is found in the brainstem, while gray matter is found in the cerebellum":
              "Incorrect. Both white and gray matter are found throughout the brain, not limited to specific areas.",
            "White matter is involved in processing emotions, while gray matter controls muscle movements":
              "Incorrect. Processing emotions involves the limbic system, and muscle control involves the motor cortex. Both white and gray matter are involved in various brain functions.",
            "White matter is responsible for sensory perception, while gray matter is responsible for memory storage":
              "Incorrect. Sensory perception and memory storage involve both white and gray matter in different capacities.",
          },
          correctAnswer:
            "White matter consists of myelinated axons, while gray matter consists of neuron cell bodies, dendrites, and unmyelinated axons",
        },
        {
          category: "Nervous System",
          question: "What is neuroplasticity?",
          options: {
            "The brain's ability to reorganize and adapt by forming new neural connections throughout life":
              "Correct. Neuroplasticity allows the brain to recover from injury, adapt to new experiences, and learn new information.",
            "The process by which neurons die and are replaced by new ones":
              "Incorrect. Neuron death and replacement are not related to neuroplasticity; instead, neuroplasticity involves changing existing connections.",
            "A condition where the brain hardens and loses flexibility":
              "Incorrect. Neuroplasticity actually refers to the brain's flexibility and adaptability, not hardening.",
            "The tendency of neurons to only fire in response to specific stimuli":
              "Incorrect. While neurons do respond to specific stimuli, neuroplasticity refers to the brain's ability to change and adapt.",
          },
          correctAnswer:
            "The brain's ability to reorganize and adapt by forming new neural connections throughout life",
        },
        {
          category: "Nervous System",
          question:
            "What is the role of the autonomic nervous system in controlling heart rate?",
          options: {
            "The autonomic nervous system regulates heart rate by balancing the actions of the sympathetic and parasympathetic nervous systems":
              "Correct. The sympathetic nervous system increases heart rate, while the parasympathetic nervous system decreases it.",
            "The autonomic nervous system directly pumps blood through the heart":
              "Incorrect. The heart pumps blood through its muscular contractions, not through the actions of the autonomic nervous system.",
            "The autonomic nervous system only decreases heart rate during sleep":
              "Incorrect. The autonomic nervous system can adjust heart rate in various situations, not just during sleep.",
            "The autonomic nervous system controls voluntary muscle movements in the heart":
              "Incorrect. The heart muscle operates involuntarily, controlled by the autonomic nervous system, not voluntary muscle control.",
          },
          correctAnswer:
            "The autonomic nervous system regulates heart rate by balancing the actions of the sympathetic and parasympathetic nervous systems",
        },
        {
          category: "Nervous System",
          question: "What is the role of the somatic nervous system?",
          options: {
            "The somatic nervous system controls voluntary movements of skeletal muscles":
              "Correct. The somatic nervous system is responsible for voluntary control of body movements through skeletal muscles.",
            "The somatic nervous system regulates involuntary functions like heart rate and digestion":
              "Incorrect. Involuntary functions are regulated by the autonomic nervous system, not the somatic nervous system.",
            "The somatic nervous system produces hormones that control body functions":
              "Incorrect. Hormone production is the role of the endocrine system, not the somatic nervous system.",
            "The somatic nervous system controls the production of red blood cells":
              "Incorrect. Red blood cell production occurs in the bone marrow, not under the control of the somatic nervous system.",
          },
          correctAnswer:
            "The somatic nervous system controls voluntary movements of skeletal muscles",
        },
      ],
    },
  ],
};

export default anatomyAndPhysiologyII;
