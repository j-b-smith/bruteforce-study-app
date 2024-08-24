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
          options: [
    {
      answerText: "A collection of ductless glands that secrete hormones",
      explanationText: "Correct. The endocrine system consists of glands that release hormones directly into the bloodstream.",
      isCorrect: true
    },
    {
      answerText: "A system of nerves",
      explanationText: "Incorrect. The nervous system is responsible for transmitting electrical signals throughout the body.",
      isCorrect: false
    },
    {
      answerText: "A set of muscles",
      explanationText: "Incorrect. Muscles are part of the muscular system, which is responsible for movement.",
      isCorrect: false
    },
    {
      answerText: "A group of bones",
      explanationText: "Incorrect. Bones are part of the skeletal system, which supports and protects the body.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the role of the hypothalamus?",
          options: [
    {
      answerText: "Controls the pituitary gland",
      explanationText: "Correct. The hypothalamus regulates the pituitary gland, which in turn controls other endocrine glands.",
      isCorrect: true
    },
    {
      answerText: "Regulates digestion",
      explanationText: "Incorrect. Digestion is primarily controlled by the digestive system, though the hypothalamus does influence hunger.",
      isCorrect: false
    },
    {
      answerText: "Manages blood flow",
      explanationText: "Incorrect. Blood flow is primarily managed by the cardiovascular system.",
      isCorrect: false
    },
    {
      answerText: "Controls breathing",
      explanationText: "Incorrect. Breathing is controlled by the respiratory system, specifically the medulla oblongata in the brainstem.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the function of the pituitary gland?",
          options: [
    {
      answerText: "Regulates other endocrine glands",
      explanationText: "Correct. The pituitary gland is often called the 'master gland' because it controls other endocrine glands.",
      isCorrect: true
    },
    {
      answerText: "Controls digestion",
      explanationText: "Incorrect. Digestion is primarily regulated by the digestive system.",
      isCorrect: false
    },
    {
      answerText: "Manages blood circulation",
      explanationText: "Incorrect. Blood circulation is managed by the cardiovascular system.",
      isCorrect: false
    },
    {
      answerText: "Filters waste from the blood",
      explanationText: "Incorrect. Waste filtration is primarily the function of the kidneys.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the thyroid gland responsible for?",
          options: [
    {
      answerText: "Regulating metabolism",
      explanationText: "Correct. The thyroid gland produces hormones that regulate metabolism, energy levels, and growth.",
      isCorrect: true
    },
    {
      answerText: "Controlling blood sugar levels",
      explanationText: "Incorrect. Blood sugar levels are primarily controlled by the pancreas.",
      isCorrect: false
    },
    {
      answerText: "Producing adrenaline",
      explanationText: "Incorrect. Adrenaline is produced by the adrenal glands.",
      isCorrect: false
    },
    {
      answerText: "Regulating breathing rate",
      explanationText: "Incorrect. Breathing rate is controlled by the respiratory system.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What are the adrenal glands responsible for?",
          options: [
    {
      answerText: "Producing adrenaline and cortisol",
      explanationText: "Correct. The adrenal glands produce hormones like adrenaline and cortisol that help manage stress responses.",
      isCorrect: true
    },
    {
      answerText: "Controlling blood pressure",
      explanationText: "Incorrect. While adrenal hormones can affect blood pressure, the primary control is through the cardiovascular system.",
      isCorrect: false
    },
    {
      answerText: "Managing oxygen levels",
      explanationText: "Incorrect. Oxygen levels are regulated by the respiratory and circulatory systems.",
      isCorrect: false
    },
    {
      answerText: "Filtering blood",
      explanationText: "Incorrect. The kidneys are responsible for filtering blood.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question:
            "What hormones are produced by the anterior pituitary gland?",
          options: [
    {
      answerText: "TSH, ACTH, GH, LH, FSH, Prolactin",
      explanationText: "Correct. The anterior pituitary gland produces these hormones which regulate various physiological processes.",
      isCorrect: true
    },
    {
      answerText: "Oxytocin and ADH",
      explanationText: "Incorrect. These hormones are produced by the hypothalamus and stored/released by the posterior pituitary.",
      isCorrect: false
    },
    {
      answerText: "Insulin and Glucagon",
      explanationText: "Incorrect. These hormones are produced by the pancreas.",
      isCorrect: false
    },
    {
      answerText: "Cortisol and Aldosterone",
      explanationText: "Incorrect. These hormones are produced by the adrenal cortex.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question:
            "What is the function of TSH (Thyroid-Stimulating Hormone)?",
          options: [
    {
      answerText: "Stimulates the thyroid gland to produce thyroid hormones",
      explanationText: "Correct. TSH stimulates the thyroid gland to release T3 and T4 hormones, which regulate metabolism.",
      isCorrect: true
    },
    {
      answerText: "Stimulates milk production",
      explanationText: "Incorrect. Prolactin stimulates milk production.",
      isCorrect: false
    },
    {
      answerText: "Regulates blood sugar levels",
      explanationText: "Incorrect. Blood sugar levels are regulated by insulin and glucagon.",
      isCorrect: false
    },
    {
      answerText: "Controls calcium levels in the blood",
      explanationText: "Incorrect. Calcium levels are regulated by parathyroid hormone (PTH) and calcitonin.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question:
            "What is the function of ACTH (Adrenocorticotropic Hormone)?",
          options: [
    {
      answerText: "Stimulates the adrenal cortex to release cortisol",
      explanationText: "Correct. ACTH stimulates the adrenal cortex to produce cortisol, a hormone that helps manage stress and metabolism.",
      isCorrect: true
    },
    {
      answerText: "Stimulates the production of sex hormones",
      explanationText: "Incorrect. LH and FSH stimulate the production of sex hormones.",
      isCorrect: false
    },
    {
      answerText: "Controls water balance",
      explanationText: "Incorrect. Water balance is primarily regulated by ADH and aldosterone.",
      isCorrect: false
    },
    {
      answerText: "Regulates growth",
      explanationText: "Incorrect. Growth hormone (GH) regulates growth.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the function of GH (Growth Hormone)?",
          options: [
    {
      answerText: "Promotes growth, cell reproduction, and regeneration",
      explanationText: "Correct. GH stimulates growth in tissues, especially bones and muscles.",
      isCorrect: true
    },
    {
      answerText: "Regulates metabolism",
      explanationText: "Incorrect. Metabolism is primarily regulated by thyroid hormones.",
      isCorrect: false
    },
    {
      answerText: "Stimulates the production of red blood cells",
      explanationText: "Incorrect. Erythropoietin, produced by the kidneys, stimulates red blood cell production.",
      isCorrect: false
    },
    {
      answerText: "Controls calcium levels in the blood",
      explanationText: "Incorrect. Calcium levels are regulated by parathyroid hormone (PTH) and calcitonin.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question:
            "What is the function of LH (Luteinizing Hormone) and FSH (Follicle-Stimulating Hormone)?",
          options: [
    {
      answerText: "Regulate reproductive processes",
      explanationText: "Correct. LH triggers ovulation and stimulates the production of sex hormones, while FSH stimulates the growth of ovarian follicles and sperm production.",
      isCorrect: true
    },
    {
      answerText: "Stimulate milk production",
      explanationText: "Incorrect. Prolactin stimulates milk production.",
      isCorrect: false
    },
    {
      answerText: "Regulate blood sugar levels",
      explanationText: "Incorrect. Blood sugar levels are regulated by insulin and glucagon.",
      isCorrect: false
    },
    {
      answerText: "Control water balance",
      explanationText: "Incorrect. Water balance is primarily regulated by ADH and aldosterone.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the role of prolactin?",
          options: [
    {
      answerText: "Stimulates milk production in the mammary glands",
      explanationText: "Correct. Prolactin promotes lactation in mammals.",
      isCorrect: true
    },
    {
      answerText: "Stimulates the thyroid gland",
      explanationText: "Incorrect. TSH stimulates the thyroid gland.",
      isCorrect: false
    },
    {
      answerText: "Regulates blood sugar levels",
      explanationText: "Incorrect. Blood sugar levels are regulated by insulin and glucagon.",
      isCorrect: false
    },
    {
      answerText: "Controls metabolism",
      explanationText: "Incorrect. Metabolism is primarily regulated by thyroid hormones.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question:
            "What hormones are stored and released by the posterior pituitary gland?",
          options: [
    {
      answerText: "ADH and Oxytocin",
      explanationText: "Correct. The posterior pituitary stores and releases ADH and Oxytocin, both produced by the hypothalamus.",
      isCorrect: true
    },
    {
      answerText: "TSH and ACTH",
      explanationText: "Incorrect. These hormones are produced by the anterior pituitary gland.",
      isCorrect: false
    },
    {
      answerText: "Insulin and Glucagon",
      explanationText: "Incorrect. These hormones are produced by the pancreas.",
      isCorrect: false
    },
    {
      answerText: "Cortisol and Aldosterone",
      explanationText: "Incorrect. These hormones are produced by the adrenal cortex.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the function of ADH (Antidiuretic Hormone)?",
          options: [
    {
      answerText: "Promotes water retention by the kidneys",
      explanationText: "Correct. ADH helps to reduce urine volume and maintain blood pressure by promoting water reabsorption in the kidneys.",
      isCorrect: true
    },
    {
      answerText: "Regulates blood sugar levels",
      explanationText: "Incorrect. Blood sugar levels are regulated by insulin and glucagon.",
      isCorrect: false
    },
    {
      answerText: "Stimulates the production of sex hormones",
      explanationText: "Incorrect. LH and FSH stimulate the production of sex hormones.",
      isCorrect: false
    },
    {
      answerText: "Regulates calcium levels in the blood",
      explanationText: "Incorrect. Calcium levels are regulated by parathyroid hormone (PTH) and calcitonin.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the function of oxytocin?",
          options: [
    {
      answerText: "Triggers uterine contractions during childbirth and milk ejection during breastfeeding",
      explanationText: "Correct. Oxytocin plays a crucial role in childbirth and lactation.",
      isCorrect: true
    },
    {
      answerText: "Regulates the menstrual cycle",
      explanationText: "Incorrect. The menstrual cycle is regulated by estrogen and progesterone.",
      isCorrect: false
    },
    {
      answerText: "Lowers blood glucose levels",
      explanationText: "Incorrect. Blood glucose levels are regulated by insulin.",
      isCorrect: false
    },
    {
      answerText: "Controls metabolism",
      explanationText: "Incorrect. Metabolism is primarily regulated by thyroid hormones.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What hormones are produced by the thyroid gland?",
          options: [
    {
      answerText: "T3, T4, and Calcitonin",
      explanationText: "Correct. The thyroid gland produces T3 and T4, which regulate metabolism, and Calcitonin, which lowers blood calcium levels.",
      isCorrect: true
    },
    {
      answerText: "TSH and ACTH",
      explanationText: "Incorrect. These hormones are produced by the anterior pituitary gland.",
      isCorrect: false
    },
    {
      answerText: "Insulin and Glucagon",
      explanationText: "Incorrect. These hormones are produced by the pancreas.",
      isCorrect: false
    },
    {
      answerText: "ADH and Oxytocin",
      explanationText: "Incorrect. These hormones are stored and released by the posterior pituitary gland.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the function of T3 and T4?",
          options: [
    {
      answerText: "Regulate metabolism, heart rate, and body temperature",
      explanationText: "Correct. T3 and T4 are thyroid hormones that play a crucial role in metabolic processes and thermoregulation.",
      isCorrect: true
    },
    {
      answerText: "Regulate blood pressure",
      explanationText: "Incorrect. Blood pressure is primarily regulated by the cardiovascular system and hormones like aldosterone.",
      isCorrect: false
    },
    {
      answerText: "Control water balance",
      explanationText: "Incorrect. Water balance is primarily regulated by ADH and aldosterone.",
      isCorrect: false
    },
    {
      answerText: "Stimulate milk production",
      explanationText: "Incorrect. Prolactin stimulates milk production.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the function of calcitonin?",
          options: [
    {
      answerText: "Lowers blood calcium levels",
      explanationText: "Correct. Calcitonin inhibits osteoclast activity and promotes calcium deposition in bones.",
      isCorrect: true
    },
    {
      answerText: "Raises blood calcium levels",
      explanationText: "Incorrect. Parathyroid hormone (PTH) raises blood calcium levels.",
      isCorrect: false
    },
    {
      answerText: "Regulates metabolism",
      explanationText: "Incorrect. Metabolism is primarily regulated by thyroid hormones T3 and T4.",
      isCorrect: false
    },
    {
      answerText: "Controls blood glucose levels",
      explanationText: "Incorrect. Blood glucose levels are regulated by insulin and glucagon.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What hormones are produced by the parathyroid glands?",
          options: [
    {
      answerText: "PTH (Parathyroid Hormone)",
      explanationText: "Correct. The parathyroid glands produce PTH, which regulates blood calcium levels.",
      isCorrect: true
    },
    {
      answerText: "T3 and T4",
      explanationText: "Incorrect. These hormones are produced by the thyroid gland.",
      isCorrect: false
    },
    {
      answerText: "Insulin and Glucagon",
      explanationText: "Incorrect. These hormones are produced by the pancreas.",
      isCorrect: false
    },
    {
      answerText: "ADH and Oxytocin",
      explanationText: "Incorrect. These hormones are stored and released by the posterior pituitary gland.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the function of PTH (Parathyroid Hormone)?",
          options: [
    {
      answerText: "Raises blood calcium levels",
      explanationText: "Correct. PTH stimulates osteoclast activity, increases calcium reabsorption in the kidneys, and enhances calcium absorption in the intestines.",
      isCorrect: true
    },
    {
      answerText: "Lowers blood calcium levels",
      explanationText: "Incorrect. Calcitonin lowers blood calcium levels.",
      isCorrect: false
    },
    {
      answerText: "Regulates metabolism",
      explanationText: "Incorrect. Metabolism is primarily regulated by thyroid hormones T3 and T4.",
      isCorrect: false
    },
    {
      answerText: "Stimulates the thyroid gland",
      explanationText: "Incorrect. TSH stimulates the thyroid gland.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What hormones are produced by the adrenal cortex?",
          options: [
    {
      answerText: "Glucocorticoids, Mineralocorticoids, and Androgens",
      explanationText: "Correct. The adrenal cortex produces these hormones, which regulate stress response, electrolyte balance, and secondary sexual characteristics.",
      isCorrect: true
    },
    {
      answerText: "Adrenaline and Noradrenaline",
      explanationText: "Incorrect. These hormones are produced by the adrenal medulla.",
      isCorrect: false
    },
    {
      answerText: "Insulin and Glucagon",
      explanationText: "Incorrect. These hormones are produced by the pancreas.",
      isCorrect: false
    },
    {
      answerText: "T3, T4, and Calcitonin",
      explanationText: "Incorrect. These hormones are produced by the thyroid gland.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the function of cortisol?",
          options: [
    {
      answerText: "Regulates metabolism, reduces inflammation, and helps the body respond to stress",
      explanationText: "Correct. Cortisol is a glucocorticoid hormone that plays a key role in the body's stress response.",
      isCorrect: true
    },
    {
      answerText: "Lowers blood calcium levels",
      explanationText: "Incorrect. Calcitonin lowers blood calcium levels.",
      isCorrect: false
    },
    {
      answerText: "Regulates blood sugar levels",
      explanationText: "Incorrect. Blood sugar levels are regulated by insulin and glucagon.",
      isCorrect: false
    },
    {
      answerText: "Controls water balance",
      explanationText: "Incorrect. Water balance is primarily regulated by ADH and aldosterone.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the function of aldosterone?",
          options: [
    {
      answerText: "Regulates sodium and potassium balance by promoting sodium retention and potassium excretion",
      explanationText: "Correct. Aldosterone helps maintain fluid and electrolyte balance by acting on the kidneys.",
      isCorrect: true
    },
    {
      answerText: "Regulates blood glucose levels",
      explanationText: "Incorrect. Blood glucose levels are regulated by insulin and glucagon.",
      isCorrect: false
    },
    {
      answerText: "Promotes the production of red blood cells",
      explanationText: "Incorrect. Erythropoietin, produced by the kidneys, stimulates red blood cell production.",
      isCorrect: false
    },
    {
      answerText: "Stimulates milk production",
      explanationText: "Incorrect. Prolactin stimulates milk production.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What hormones are produced by the adrenal medulla?",
          options: [
    {
      answerText: "Epinephrine and Norepinephrine",
      explanationText: "Correct. The adrenal medulla produces these catecholamines, which prepare the body for fight-or-flight responses.",
      isCorrect: true
    },
    {
      answerText: "Cortisol and Aldosterone",
      explanationText: "Incorrect. These hormones are produced by the adrenal cortex.",
      isCorrect: false
    },
    {
      answerText: "Insulin and Glucagon",
      explanationText: "Incorrect. These hormones are produced by the pancreas.",
      isCorrect: false
    },
    {
      answerText: "T3 and T4",
      explanationText: "Incorrect. These hormones are produced by the thyroid gland.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the function of epinephrine and norepinephrine?",
          options: [
    {
      answerText: "Prepare the body for fight-or-flight responses",
      explanationText: "Correct. Epinephrine and norepinephrine increase heart rate, blood pressure, and blood glucose levels in response to stress.",
      isCorrect: true
    },
    {
      answerText: "Regulate blood calcium levels",
      explanationText: "Incorrect. Blood calcium levels are regulated by parathyroid hormone (PTH) and calcitonin.",
      isCorrect: false
    },
    {
      answerText: "Control water balance",
      explanationText: "Incorrect. Water balance is primarily regulated by ADH and aldosterone.",
      isCorrect: false
    },
    {
      answerText: "Regulate metabolism",
      explanationText: "Incorrect. Metabolism is primarily regulated by thyroid hormones T3 and T4.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What hormones are produced by the pancreas?",
          options: [
    {
      answerText: "Insulin and Glucagon",
      explanationText: "Correct. The pancreas produces these hormones, which regulate blood glucose levels.",
      isCorrect: true
    },
    {
      answerText: "Cortisol and Aldosterone",
      explanationText: "Incorrect. These hormones are produced by the adrenal cortex.",
      isCorrect: false
    },
    {
      answerText: "Epinephrine and Norepinephrine",
      explanationText: "Incorrect. These hormones are produced by the adrenal medulla.",
      isCorrect: false
    },
    {
      answerText: "T3 and T4",
      explanationText: "Incorrect. These hormones are produced by the thyroid gland.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the function of insulin?",
          options: [
    {
      answerText: "Lowers blood glucose levels by promoting glucose uptake into cells",
      explanationText: "Correct. Insulin helps decrease blood sugar levels by facilitating the uptake of glucose by cells.",
      isCorrect: true
    },
    {
      answerText: "Raises blood glucose levels",
      explanationText: "Incorrect. Glucagon raises blood glucose levels.",
      isCorrect: false
    },
    {
      answerText: "Regulates sodium and potassium balance",
      explanationText: "Incorrect. Sodium and potassium balance is regulated by aldosterone.",
      isCorrect: false
    },
    {
      answerText: "Promotes water retention by the kidneys",
      explanationText: "Incorrect. Water retention is promoted by ADH.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the function of glucagon?",
          options: [
    {
      answerText: "Raises blood glucose levels by promoting glycogen breakdown and glucose release by the liver",
      explanationText: "Correct. Glucagon increases blood glucose levels by stimulating the liver to convert stored glycogen into glucose.",
      isCorrect: true
    },
    {
      answerText: "Lowers blood glucose levels",
      explanationText: "Incorrect. Insulin lowers blood glucose levels.",
      isCorrect: false
    },
    {
      answerText: "Regulates sodium and potassium balance",
      explanationText: "Incorrect. Sodium and potassium balance is regulated by aldosterone.",
      isCorrect: false
    },
    {
      answerText: "Promotes water retention by the kidneys",
      explanationText: "Incorrect. Water retention is promoted by ADH.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What hormone is produced by the pineal gland?",
          options: [
    
  ]},
        {
          category: "Endocrine System",
          question: "What is the function of melatonin?",
          options: [
    {
      answerText: "Regulates sleep-wake cycles and circadian rhythms",
      explanationText: "Correct. Melatonin production increases in response to darkness, promoting sleep.",
      isCorrect: true
    },
    {
      answerText: "Regulates blood glucose levels",
      explanationText: "Incorrect. Blood glucose levels are regulated by insulin and glucagon.",
      isCorrect: false
    },
    {
      answerText: "Controls metabolism",
      explanationText: "Incorrect. Metabolism is primarily regulated by thyroid hormones T3 and T4.",
      isCorrect: false
    },
    {
      answerText: "Promotes the production of red blood cells",
      explanationText: "Incorrect. Erythropoietin, produced by the kidneys, stimulates red blood cell production.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What hormones are produced by the ovaries?",
          options: [
    {
      answerText: "Estrogen and Progesterone",
      explanationText: "Correct. The ovaries produce these hormones, which regulate the menstrual cycle and maintain pregnancy.",
      isCorrect: true
    },
    {
      answerText: "Incorrect. Testosterone and androgens are primarily produced by the testes.",
      explanationText: "Incorrect. These hormones are produced by the pancreas.",
      isCorrect: false
    },
    {
      answerText: "Cortisol and Aldosterone",
      explanationText: "Incorrect. These hormones are produced by the adrenal cortex.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the function of estrogen?",
          options: [
    {
      answerText: "Regulates the menstrual cycle and promotes secondary sexual characteristics",
      explanationText: "Correct. Estrogen plays a key role in regulating the menstrual cycle and the development of secondary sexual characteristics.",
      isCorrect: true
    },
    {
      answerText: "Stimulates milk production",
      explanationText: "Incorrect. Prolactin stimulates milk production.",
      isCorrect: false
    },
    {
      answerText: "Lowers blood glucose levels",
      explanationText: "Incorrect. Blood glucose levels are regulated by insulin.",
      isCorrect: false
    },
    {
      answerText: "Controls metabolism",
      explanationText: "Incorrect. Metabolism is primarily regulated by thyroid hormones.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What is the function of progesterone?",
          options: [
    {
      answerText: "Prepares the uterus for implantation and maintains pregnancy",
      explanationText: "Correct. Progesterone prepares the uterus for implantation of a fertilized egg and helps maintain pregnancy.",
      isCorrect: true
    },
    {
      answerText: "Regulates the menstrual cycle",
      explanationText: "Incorrect. While progesterone is involved in the menstrual cycle, its primary function is to maintain pregnancy.",
      isCorrect: false
    },
    {
      answerText: "Increases blood calcium levels",
      explanationText: "Incorrect. Blood calcium levels are increased by parathyroid hormone (PTH).",
      isCorrect: false
    },
    {
      answerText: "Regulates sleep-wake cycles",
      explanationText: "Incorrect. Sleep-wake cycles are regulated by melatonin.",
      isCorrect: false
    }
  ]},
        {
          category: "Endocrine System",
          question: "What hormone is produced by the testes?",
          options: [
    
  ]},
        {
          category: "Endocrine System",
          question: "What is the function of testosterone?",
          options: [
    {
      answerText: "Regulates sperm production and the development of male secondary sexual characteristics",
      explanationText: "Correct. Testosterone plays a key role in male reproductive function and the development of traits such as facial hair and a deeper voice.",
      isCorrect: true
    },
    {
      answerText: "Regulates the menstrual cycle",
      explanationText: "Incorrect. The menstrual cycle is regulated by estrogen and progesterone.",
      isCorrect: false
    },
    {
      answerText: "Lowers blood glucose levels",
      explanationText: "Incorrect. Blood glucose levels are regulated by insulin.",
      isCorrect: false
    },
    {
      answerText: "Controls metabolism",
      explanationText: "Incorrect. Metabolism is primarily regulated by thyroid hormones.",
      isCorrect: false
    }
  ]}]},
    {
      categoryName: "Cardiovascular System",
      questions: [
        {
          category: "Cardiovascular System",
          question: "What are the main functions of the cardiovascular system?",
          options: [
    {
      answerText: "To transport oxygen, nutrients, hormones, and waste products throughout the body, and to help regulate body temperature and pH balance",
      explanationText: "Correct. The cardiovascular system plays a crucial role in maintaining homeostasis by transporting essential substances and regulating various bodily functions.",
      isCorrect: true
    },
    {
      answerText: "To digest food and absorb nutrients",
      explanationText: "Incorrect. This is the function of the digestive system.",
      isCorrect: false
    },
    {
      answerText: "To produce hormones and regulate metabolism",
      explanationText: "Incorrect. This is the function of the endocrine system.",
      isCorrect: false
    },
    {
      answerText: "To protect the body from pathogens",
      explanationText: "Incorrect. This is the function of the immune system.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What are the four chambers of the heart?",
          options: [
    {
      answerText: "Right atrium, right ventricle, left atrium, left ventricle",
      explanationText: "Correct. The heart has four chambers: the right and left atria and the right and left ventricles.",
      isCorrect: true
    },
    {
      answerText: "Aorta, pulmonary artery, right atrium, left atrium",
      explanationText: "Incorrect. The aorta and pulmonary artery are blood vessels, not heart chambers.",
      isCorrect: false
    },
    {
      answerText: "Superior vena cava, inferior vena cava, aorta, pulmonary artery",
      explanationText: "Incorrect. These are major blood vessels, not heart chambers.",
      isCorrect: false
    },
    {
      answerText: "Right ventricle, left ventricle, aorta, pulmonary artery",
      explanationText: "Incorrect. The aorta and pulmonary artery are blood vessels, not heart chambers.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What is the function of the right atrium?",
          options: [
    {
      answerText: "Receives deoxygenated blood from the body via the superior and inferior vena cava",
      explanationText: "Correct. The right atrium receives deoxygenated blood from the body and passes it to the right ventricle.",
      isCorrect: true
    },
    {
      answerText: "Pumps oxygenated blood to the body through the aorta",
      explanationText: "Incorrect. This is the function of the left ventricle.",
      isCorrect: false
    },
    {
      answerText: "Receives oxygenated blood from the lungs",
      explanationText: "Incorrect. This is the function of the left atrium.",
      isCorrect: false
    },
    {
      answerText: "Pumps deoxygenated blood to the lungs",
      explanationText: "Incorrect. This is the function of the right ventricle.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What is the function of the right ventricle?",
          options: [
    {
      answerText: "Pumps deoxygenated blood to the lungs through the pulmonary arteries",
      explanationText: "Correct. The right ventricle pumps deoxygenated blood to the lungs where gas exchange occurs.",
      isCorrect: true
    },
    {
      answerText: "Pumps oxygenated blood to the body through the aorta",
      explanationText: "Incorrect. This is the function of the left ventricle.",
      isCorrect: false
    },
    {
      answerText: "Receives deoxygenated blood from the body",
      explanationText: "Incorrect. This is the function of the right atrium.",
      isCorrect: false
    },
    {
      answerText: "Receives oxygenated blood from the lungs",
      explanationText: "Incorrect. This is the function of the left atrium.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What is the function of the left atrium?",
          options: [
    {
      answerText: "Receives oxygenated blood from the lungs via the pulmonary veins",
      explanationText: "Correct. The left atrium receives oxygenated blood from the lungs and passes it to the left ventricle.",
      isCorrect: true
    },
    {
      answerText: "Pumps oxygenated blood to the body through the aorta",
      explanationText: "Incorrect. This is the function of the left ventricle.",
      isCorrect: false
    },
    {
      answerText: "Receives deoxygenated blood from the body",
      explanationText: "Incorrect. This is the function of the right atrium.",
      isCorrect: false
    },
    {
      answerText: "Pumps deoxygenated blood to the lungs",
      explanationText: "Incorrect. This is the function of the right ventricle.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What is the function of the left ventricle?",
          options: [
    {
      answerText: "Pumps oxygenated blood to the body through the aorta",
      explanationText: "Correct. The left ventricle pumps oxygenated blood to the body through the aorta, the largest artery.",
      isCorrect: true
    },
    {
      answerText: "Receives deoxygenated blood from the body",
      explanationText: "Incorrect. This is the function of the right atrium.",
      isCorrect: false
    },
    {
      answerText: "Pumps deoxygenated blood to the lungs",
      explanationText: "Incorrect. This is the function of the right ventricle.",
      isCorrect: false
    },
    {
      answerText: "Receives oxygenated blood from the lungs",
      explanationText: "Incorrect. This is the function of the left atrium.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What are the atrioventricular (AV) valves?",
          options: [
    {
      answerText: "The Tricuspid Valve (right side) and the Mitral/Bicuspid Valve (left side) between the atria and ventricles",
      explanationText: "Correct. The AV valves prevent backflow of blood into the atria when the ventricles contract.",
      isCorrect: true
    },
    {
      answerText: "The Pulmonary Valve and Aortic Valve",
      explanationText: "Incorrect. These are the semilunar valves.",
      isCorrect: false
    },
    {
      answerText: "The Superior and Inferior Vena Cava",
      explanationText: "Incorrect. These are major veins that return deoxygenated blood to the heart.",
      isCorrect: false
    },
    {
      answerText: "The Coronary Arteries and Veins",
      explanationText: "Incorrect. These are the blood vessels that supply blood to the heart muscle.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What are the semilunar valves?",
          options: [
    {
      answerText: "The Pulmonary Valve (between right ventricle and pulmonary artery) and the Aortic Valve (between left ventricle and aorta)",
      explanationText: "Correct. The semilunar valves prevent backflow of blood into the ventricles after contraction.",
      isCorrect: true
    },
    {
      answerText: "The Tricuspid Valve and Mitral Valve",
      explanationText: "Incorrect. These are the atrioventricular (AV) valves.",
      isCorrect: false
    },
    {
      answerText: "The Superior and Inferior Vena Cava",
      explanationText: "Incorrect. These are major veins that return deoxygenated blood to the heart.",
      isCorrect: false
    },
    {
      answerText: "The Coronary Arteries and Veins",
      explanationText: "Incorrect. These are the blood vessels that supply blood to the heart muscle.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What is the function of the sinoatrial (SA) node?",
          options: [
    {
      answerText: "Acts as the pacemaker of the heart, initiating electrical impulses that cause the heart to beat",
      explanationText: "Correct. The SA node sets the pace for the heartbeat.",
      isCorrect: true
    },
    {
      answerText: "Controls the opening and closing of the heart valves",
      explanationText: "Incorrect. The heart valves are controlled by pressure changes within the heart chambers.",
      isCorrect: false
    },
    {
      answerText: "Coordinates the contraction of the ventricles",
      explanationText: "Incorrect. The SA node initiates the heartbeat, but the AV node coordinates the contraction of the ventricles.",
      isCorrect: false
    },
    {
      answerText: "Regulates blood pressure",
      explanationText: "Incorrect. Blood pressure is regulated by various factors, including the autonomic nervous system and hormones.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What is the pathway of blood through the heart?",
          options: [
    {
      answerText: "Right atrium → right ventricle → pulmonary artery → lungs → pulmonary veins → left atrium → left ventricle → aorta",
      explanationText: "Correct. This pathway describes the flow of blood through the heart, from deoxygenated blood entering the right atrium to oxygenated blood being pumped out of the left ventricle.",
      isCorrect: true
    },
    {
      answerText: "Left atrium → left ventricle → aorta → body → vena cava → right atrium",
      explanationText: "Incorrect. This sequence skips the pulmonary circulation, which is necessary for oxygenating the blood.",
      isCorrect: false
    },
    {
      answerText: "Right ventricle → pulmonary artery → lungs → pulmonary veins → left atrium → left ventricle → aorta",
      explanationText: "Incorrect. This sequence starts in the middle of the pathway, missing the right atrium.",
      isCorrect: false
    },
    {
      answerText: "Left ventricle → aorta → body → right atrium → right ventricle → lungs",
      explanationText: "Incorrect. This sequence incorrectly places the right atrium after the aorta.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What is the cardiac cycle?",
          options: [
    {
      answerText: "The sequence of events that occur when the heart beats, including diastole (relaxation) and systole (contraction)",
      explanationText: "Correct. The cardiac cycle describes the process of the heart filling with blood (diastole) and then pumping it out (systole).",
      isCorrect: true
    },
    {
      answerText: "The regulation of blood pressure",
      explanationText: "Incorrect. While blood pressure is influenced by the cardiac cycle, the cardiac cycle specifically refers to the events within one heartbeat.",
      isCorrect: false
    },
    {
      answerText: "The exchange of gases in the lungs",
      explanationText: "Incorrect. Gas exchange occurs in the lungs, but the cardiac cycle refers to the heartbeat.",
      isCorrect: false
    },
    {
      answerText: "The movement of blood through the veins",
      explanationText: "Incorrect. The cardiac cycle primarily involves the heart, not the veins.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What is the role of the ECG (electrocardiogram)?",
          options: [
    {
      answerText: "Measures the electrical activity of the heart, showing the P wave, QRS complex, and T wave",
      explanationText: "Correct. The ECG records the electrical signals that trigger heartbeats.",
      isCorrect: true
    },
    {
      answerText: "Measures blood pressure",
      explanationText: "Incorrect. Blood pressure is measured using a sphygmomanometer, not an ECG.",
      isCorrect: false
    },
    {
      answerText: "Monitors oxygen levels in the blood",
      explanationText: "Incorrect. Oxygen levels are typically measured with a pulse oximeter.",
      isCorrect: false
    },
    {
      answerText: "Assesses lung function",
      explanationText: "Incorrect. Lung function is assessed with spirometry or similar tests.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What is the function of the arteries?",
          options: [
    {
      answerText: "Carry oxygenated blood away from the heart to the tissues of the body (except the pulmonary arteries)",
      explanationText: "Correct. Arteries transport oxygen-rich blood from the heart to the body's tissues.",
      isCorrect: true
    },
    {
      answerText: "Carry deoxygenated blood to the heart",
      explanationText: "Incorrect. This is the function of veins, except for pulmonary veins.",
      isCorrect: false
    },
    {
      answerText: "Exchange gases, nutrients, and waste with tissues",
      explanationText: "Incorrect. This is the function of capillaries.",
      isCorrect: false
    },
    {
      answerText: "Store blood at low pressure",
      explanationText: "Incorrect. This is not a function of arteries, which operate under high pressure.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What is the function of the veins?",
          options: [
    {
      answerText: "Carry deoxygenated blood back to the heart (except the pulmonary veins)",
      explanationText: "Correct. Veins return deoxygenated blood to the heart, with the exception of pulmonary veins, which carry oxygenated blood.",
      isCorrect: true
    },
    {
      answerText: "Carry oxygenated blood away from the heart",
      explanationText: "Incorrect. This is the function of arteries.",
      isCorrect: false
    },
    {
      answerText: "Exchange gases, nutrients, and waste with tissues",
      explanationText: "Incorrect. This is the function of capillaries.",
      isCorrect: false
    },
    {
      answerText: "Pump blood to the lungs",
      explanationText: "Incorrect. The right ventricle pumps blood to the lungs, not veins.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What is the function of capillaries?",
          options: [
    {
      answerText: "Serve as the site of gas, nutrient, and waste exchange between the blood and tissues",
      explanationText: "Correct. Capillaries allow the exchange of substances between the blood and surrounding tissues.",
      isCorrect: true
    },
    {
      answerText: "Carry oxygenated blood away from the heart",
      explanationText: "Incorrect. This is the function of arteries.",
      isCorrect: false
    },
    {
      answerText: "Carry deoxygenated blood to the heart",
      explanationText: "Incorrect. This is the function of veins.",
      isCorrect: false
    },
    {
      answerText: "Store blood at low pressure",
      explanationText: "Incorrect. Capillaries do not store blood; they facilitate exchange.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What is blood pressure?",
          options: [
    {
      answerText: "The force exerted by circulating blood on the walls of blood vessels, typically measured in systolic/diastolic values",
      explanationText: "Correct. Blood pressure is the pressure of the blood within the arteries.",
      isCorrect: true
    },
    {
      answerText: "The speed of blood flow through the arteries",
      explanationText: "Incorrect. Blood pressure refers to the force exerted, not the speed of flow.",
      isCorrect: false
    },
    {
      answerText: "The amount of blood pumped by the heart per minute",
      explanationText: "Incorrect. This describes cardiac output, not blood pressure.",
      isCorrect: false
    },
    {
      answerText: "The volume of blood in the body",
      explanationText: "Incorrect. Blood pressure is independent of total blood volume.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What regulates blood pressure?",
          options: [
    {
      answerText: "The autonomic nervous system (baroreceptors), hormones (RAAS, ADH, ANP), and the kidneys",
      explanationText: "Correct. These systems and organs play a key role in maintaining blood pressure.",
      isCorrect: true
    },
    {
      answerText: "The liver and pancreas",
      explanationText: "Incorrect. The liver and pancreas do not directly regulate blood pressure.",
      isCorrect: false
    },
    {
      answerText: "The muscular system and bones",
      explanationText: "Incorrect. Muscles and bones do not regulate blood pressure.",
      isCorrect: false
    },
    {
      answerText: "The digestive system and endocrine system",
      explanationText: "Incorrect. While the endocrine system is involved, the digestive system is not a primary regulator of blood pressure.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What is the Renin-Angiotensin-Aldosterone System (RAAS)?",
          options: [
    {
      answerText: "A hormone system that regulates blood pressure and fluid balance, involving renin, angiotensin, and aldosterone",
      explanationText: "Correct. RAAS plays a crucial role in blood pressure regulation and fluid balance.",
      isCorrect: true
    },
    {
      answerText: "A system that regulates digestion and absorption of nutrients",
      explanationText: "Incorrect. This is the function of the digestive system.",
      isCorrect: false
    },
    {
      answerText: "A process that regulates body temperature",
      explanationText: "Incorrect. Body temperature regulation is managed by different systems, including the hypothalamus and skin.",
      isCorrect: false
    },
    {
      answerText: "A mechanism that controls muscle contraction",
      explanationText: "Incorrect. Muscle contraction is regulated by the nervous system and calcium ions.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What is hypertension?",
          options: [
    {
      answerText: "Chronically high blood pressure, which increases the risk of heart disease, stroke, and other complications",
      explanationText: "Correct. Hypertension is a serious condition that can lead to various cardiovascular diseases.",
      isCorrect: true
    },
    {
      answerText: "Low blood pressure that leads to fainting and dizziness",
      explanationText: "Incorrect. This describes hypotension, not hypertension.",
      isCorrect: false
    },
    {
      answerText: "A temporary increase in blood pressure due to stress",
      explanationText: "Incorrect. Hypertension refers to chronically high blood pressure, not a temporary increase.",
      isCorrect: false
    },
    {
      answerText: "A condition where the blood vessels are overly constricted",
      explanationText: "Incorrect. While vessel constriction can contribute to hypertension, it is not the full definition of the condition.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What is atherosclerosis?",
          options: [
    {
      answerText: "The buildup of plaque in the arteries, leading to reduced blood flow and an increased risk of heart attack",
      explanationText: "Correct. Atherosclerosis is a major risk factor for heart attacks and strokes.",
      isCorrect: true
    },
    {
      answerText: "The hardening of the heart muscles",
      explanationText: "Incorrect. This condition is referred to as cardiomyopathy.",
      isCorrect: false
    },
    {
      answerText: "The inflammation of the veins",
      explanationText: "Incorrect. This condition is known as phlebitis.",
      isCorrect: false
    },
    {
      answerText: "The enlargement of the arteries",
      explanationText: "Incorrect. The enlargement of arteries is known as aneurysm, not atherosclerosis.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What is a myocardial infarction?",
          options: [
    {
      answerText: "Commonly known as a heart attack, it occurs when blood flow to a part of the heart is blocked, causing tissue damage",
      explanationText: "Correct. A myocardial infarction is a serious condition that requires immediate medical attention.",
      isCorrect: true
    },
    {
      answerText: "A condition where the heart beats too fast or too slow",
      explanationText: "Incorrect. This condition is known as an arrhythmia, not a myocardial infarction.",
      isCorrect: false
    },
    {
      answerText: "The weakening of the heart muscle",
      explanationText: "Incorrect. This describes cardiomyopathy, not myocardial infarction.",
      isCorrect: false
    },
    {
      answerText: "The inflammation of the heart lining",
      explanationText: "Incorrect. This condition is called endocarditis.",
      isCorrect: false
    }
  ]},
        {
          category: "Cardiovascular System",
          question: "What are arrhythmias?",
          options: [
    {
      answerText: "Abnormal heart rhythms that can disrupt normal cardiac function, ranging from benign to life-threatening",
      explanationText: "Correct. Arrhythmias can cause serious complications if not managed properly.",
      isCorrect: true
    },
    {
      answerText: "The inability of the heart to pump blood effectively",
      explanationText: "Incorrect. This describes heart failure, not arrhythmias.",
      isCorrect: false
    },
    {
      answerText: "A temporary drop in blood pressure",
      explanationText: "Incorrect. This is hypotension, not arrhythmias.",
      isCorrect: false
    },
    {
      answerText: "The buildup of fluid in the lungs",
      explanationText: "Incorrect. This condition is known as pulmonary edema, not arrhythmias.",
      isCorrect: false
    }
  ]}]},
    {
      categoryName: "Lymphatic and Immune System",
      questions: [
        {
          category: "Lymphatic and Immune System",
          question: "What are the main functions of the lymphatic system?",
          options: [
    {
      answerText: "To return excess interstitial fluid to the bloodstream, absorb dietary fats, and provide immune responses",
      explanationText: "Correct. The lymphatic system plays key roles in fluid balance, fat absorption, and immunity.",
      isCorrect: true
    },
    {
      answerText: "To transport oxygen and nutrients throughout the body",
      explanationText: "Incorrect. This is the function of the cardiovascular system.",
      isCorrect: false
    },
    {
      answerText: "To digest and absorb nutrients from food",
      explanationText: "Incorrect. This is the function of the digestive system.",
      isCorrect: false
    },
    {
      answerText: "To produce hormones and regulate metabolism",
      explanationText: "Incorrect. This is the function of the endocrine system.",
      isCorrect: false
    }
  ]},
        {
          category: "Lymphatic and Immune System",
          question: "What is lymph?",
          options: [
    {
      answerText: "A clear fluid similar to plasma that contains immune cells, proteins, and waste products",
      explanationText: "Correct. Lymph is the fluid that circulates in the lymphatic system and plays a crucial role in immune function.",
      isCorrect: true
    },
    {
      answerText: "A type of blood cell that fights infection",
      explanationText: "Incorrect. Lymph is a fluid, not a cell; the cells involved in immunity are lymphocytes.",
      isCorrect: false
    },
    {
      answerText: "A hormone that regulates immune responses",
      explanationText: "Incorrect. Lymph is a fluid, not a hormone.",
      isCorrect: false
    },
    {
      answerText: "A type of fat absorbed by the digestive system",
      explanationText: "Incorrect. Lymph absorbs fats in the form of chyle, but it is not a type of fat itself.",
      isCorrect: false
    }
  ]},
        {
          category: "Lymphatic and Immune System",
          question: "What are the primary lymphoid organs?",
          options: [
    {
      answerText: "Thymus and bone marrow, where lymphocytes (T cells and B cells) mature",
      explanationText: "Correct. The thymus and bone marrow are crucial for the development of immune cells.",
      isCorrect: true
    },
    {
      answerText: "Spleen and lymph nodes",
      explanationText: "Incorrect. While important for immune responses, the spleen and lymph nodes are secondary lymphoid organs.",
      isCorrect: false
    },
    {
      answerText: "Heart and lungs",
      explanationText: "Incorrect. These are part of the cardiovascular and respiratory systems, respectively.",
      isCorrect: false
    },
    {
      answerText: "Kidneys and liver",
      explanationText: "Incorrect. These organs are involved in excretion and metabolism, not immune function.",
      isCorrect: false
    }
  ]},
        {
          category: "Lymphatic and Immune System",
          question: "What is the role of lymph nodes?",
          options: [
    {
      answerText: "Filter lymph, trapping pathogens and foreign particles, and house lymphocytes that initiate immune responses",
      explanationText: "Correct. Lymph nodes are essential in the immune system's ability to detect and fight infections.",
      isCorrect: true
    },
    {
      answerText: "Produce red blood cells",
      explanationText: "Incorrect. Red blood cells are produced in the bone marrow.",
      isCorrect: false
    },
    {
      answerText: "Regulate blood pressure",
      explanationText: "Incorrect. Blood pressure is regulated by the cardiovascular system.",
      isCorrect: false
    },
    {
      answerText: "Store and release hormones",
      explanationText: "Incorrect. Hormone storage and release are functions of the endocrine system.",
      isCorrect: false
    }
  ]},
        {
          category: "Lymphatic and Immune System",
          question: "What is the spleen?",
          options: [
    {
      answerText: "The largest lymphoid organ, which filters blood, recycles old red blood cells, and helps fight infection",
      explanationText: "Correct. The spleen plays a significant role in both filtering blood and mounting immune responses.",
      isCorrect: true
    },
    {
      answerText: "A gland that produces hormones",
      explanationText: "Incorrect. The spleen is not a gland and does not produce hormones.",
      isCorrect: false
    },
    {
      answerText: "An organ that stores fat",
      explanationText: "Incorrect. The spleen does not store fat; this is a function of adipose tissue.",
      isCorrect: false
    },
    {
      answerText: "A muscle that aids in breathing",
      explanationText: "Incorrect. The diaphragm, not the spleen, is the muscle involved in breathing.",
      isCorrect: false
    }
  ]},
        {
          category: "Lymphatic and Immune System",
          question: "What is the function of the thymus?",
          options: [
    {
      answerText: "Site of T cell maturation, crucial for the adaptive immune response",
      explanationText: "Correct. The thymus is essential for the development of T cells, which are critical to the adaptive immune system.",
      isCorrect: true
    },
    {
      answerText: "Produces insulin and glucagon",
      explanationText: "Incorrect. Insulin and glucagon are produced by the pancreas, not the thymus.",
      isCorrect: false
    },
    {
      answerText: "Filters blood and lymph",
      explanationText: "Incorrect. Filtering blood and lymph is the function of the spleen and lymph nodes.",
      isCorrect: false
    },
    {
      answerText: "Stores bile",
      explanationText: "Incorrect. Bile is stored in the gallbladder, not the thymus.",
      isCorrect: false
    }
  ]},
        {
          category: "Lymphatic and Immune System",
          question: "What are B cells?",
          options: [
    {
      answerText: "Lymphocytes that produce antibodies, which neutralize or mark pathogens for destruction",
      explanationText: "Correct. B cells are crucial to the body's humoral immune response.",
      isCorrect: true
    },
    {
      answerText: "Cells that produce insulin",
      explanationText: "Incorrect. Insulin is produced by beta cells in the pancreas, not B cells.",
      isCorrect: false
    },
    {
      answerText: "Cells that directly attack infected cells",
      explanationText: "Incorrect. T cells, specifically cytotoxic T cells, are responsible for directly attacking infected cells.",
      isCorrect: false
    },
    {
      answerText: "Cells that carry oxygen",
      explanationText: "Incorrect. Red blood cells, not B cells, carry oxygen in the blood.",
      isCorrect: false
    }
  ]},
        {
          category: "Lymphatic and Immune System",
          question: "What are T cells?",
          options: [
    {
      answerText: "Lymphocytes that directly attack infected cells or regulate other immune responses",
      explanationText: "Correct. T cells play a central role in the cell-mediated immune response.",
      isCorrect: true
    },
    {
      answerText: "Cells that produce antibodies",
      explanationText: "Incorrect. Antibodies are produced by B cells, not T cells.",
      isCorrect: false
    },
    {
      answerText: "Cells that carry oxygen",
      explanationText: "Incorrect. Red blood cells carry oxygen, not T cells.",
      isCorrect: false
    },
    {
      answerText: "Cells that produce insulin",
      explanationText: "Incorrect. Insulin is produced by beta cells in the pancreas, not T cells.",
      isCorrect: false
    }
  ]},
        {
          category: "Lymphatic and Immune System",
          question:
            "What is the difference between innate and adaptive immunity?",
          options: [
    {
      answerText: "Innate immunity is the body's first line of defense against pathogens (non-specific), while adaptive immunity targets specific invaders and has memory",
      explanationText: "Correct. Innate immunity provides immediate, non-specific defense, while adaptive immunity is specific and has a memory component.",
      isCorrect: true
    },
    {
      answerText: "Innate immunity produces antibodies, while adaptive immunity does not",
      explanationText: "Incorrect. Antibody production is a feature of adaptive immunity, not innate immunity.",
      isCorrect: false
    },
    {
      answerText: "Adaptive immunity is always present, while innate immunity develops after exposure to antigens",
      explanationText: "Incorrect. Innate immunity is always present and immediate, while adaptive immunity develops after exposure to specific antigens.",
      isCorrect: false
    },
    {
      answerText: "Innate immunity is only found in humans, while adaptive immunity is present in all animals",
      explanationText: "Incorrect. Both innate and adaptive immunity are present in many animals, not just humans.",
      isCorrect: false
    }
  ]},
        {
          category: "Lymphatic and Immune System",
          question: "What is inflammation?",
          options: [
    {
      answerText: "A localized immune response to injury or infection, characterized by redness, heat, swelling, and pain",
      explanationText: "Correct. Inflammation is a key part of the immune system's response to damage or pathogens.",
      isCorrect: true
    },
    {
      answerText: "A process of cell division",
      explanationText: "Incorrect. Cell division is a separate process, not related to inflammation.",
      isCorrect: false
    },
    {
      answerText: "The process of oxygen exchange in the lungs",
      explanationText: "Incorrect. Oxygen exchange occurs in the lungs, not through inflammation.",
      isCorrect: false
    },
    {
      answerText: "A type of muscle contraction",
      explanationText: "Incorrect. Muscle contraction is not related to inflammation.",
      isCorrect: false
    }
  ]},
        {
          category: "Lymphatic and Immune System",
          question: "What is the function of antibodies?",
          options: [
    {
      answerText: "Proteins produced by B cells that bind to specific antigens on pathogens, marking them for destruction",
      explanationText: "Correct. Antibodies are crucial in identifying and neutralizing foreign invaders.",
      isCorrect: true
    },
    {
      answerText: "Cells that directly kill infected cells",
      explanationText: "Incorrect. Cytotoxic T cells, not antibodies, directly kill infected cells.",
      isCorrect: false
    },
    {
      answerText: "Molecules that carry oxygen in the blood",
      explanationText: "Incorrect. Hemoglobin in red blood cells carries oxygen, not antibodies.",
      isCorrect: false
    },
    {
      answerText: "Proteins that break down food in the stomach",
      explanationText: "Incorrect. Enzymes like pepsin break down food, not antibodies.",
      isCorrect: false
    }
  ]},
        {
          category: "Lymphatic and Immune System",
          question: "What is the complement system?",
          options: [
    {
      answerText: "A group of proteins that enhance the immune response by promoting inflammation, opsonization, and lysis of pathogens",
      explanationText: "Correct. The complement system amplifies the body's ability to fight infections.",
      isCorrect: true
    },
    {
      answerText: "A system that transports oxygen in the blood",
      explanationText: "Incorrect. Oxygen transport is carried out by red blood cells, not the complement system.",
      isCorrect: false
    },
    {
      answerText: "A group of hormones that regulate metabolism",
      explanationText: "Incorrect. The complement system is involved in immunity, not metabolism.",
      isCorrect: false
    },
    {
      answerText: "A network of neurons that control muscle movement",
      explanationText: "Incorrect. The complement system is part of the immune system, not the nervous system.",
      isCorrect: false
    }
  ]},
        {
          category: "Lymphatic and Immune System",
          question: "What is an autoimmune disease?",
          options: [
    {
      answerText: "A condition where the immune system mistakenly attacks the body's own tissues (e.g., rheumatoid arthritis, lupus)",
      explanationText: "Correct. Autoimmune diseases result from the immune system failing to recognize the body’s own cells and tissues.",
      isCorrect: true
    },
    {
      answerText: "A condition where the body cannot produce enough antibodies",
      explanationText: "Incorrect. This describes an immunodeficiency, not an autoimmune disease.",
      isCorrect: false
    },
    {
      answerText: "A disease caused by external pathogens like bacteria or viruses",
      explanationText: "Incorrect. Autoimmune diseases are caused by an internal immune system malfunction, not by external pathogens.",
      isCorrect: false
    },
    {
      answerText: "A type of cancer that affects the immune system",
      explanationText: "Incorrect. While cancers like lymphoma affect the immune system, they are not classified as autoimmune diseases.",
      isCorrect: false
    }
  ]},
        {
          category: "Lymphatic and Immune System",
          question:
            "What is the difference between active and passive immunity?",
          options: [
    {
      answerText: "Active immunity involves the body's own production of antibodies (e.g., after infection or vaccination), while passive immunity is provided by antibodies from another source (e.g., mother to baby, antibody injections)",
      explanationText: "Correct. Active immunity is long-lasting, whereas passive immunity is temporary.",
      isCorrect: true
    },
    {
      answerText: "Active immunity is only temporary, while passive immunity is long-lasting",
      explanationText: "Incorrect. Passive immunity is temporary because it involves antibodies not produced by the individual.",
      isCorrect: false
    },
    {
      answerText: "Passive immunity is acquired only through vaccination, while active immunity is acquired through natural infection",
      explanationText: "Incorrect. Vaccination typically provides active immunity, not passive.",
      isCorrect: false
    },
    {
      answerText: "Active immunity can only be acquired from the mother during pregnancy",
      explanationText: "Incorrect. Active immunity can be acquired through infection or vaccination, not just through maternal antibodies.",
      isCorrect: false
    }
  ]},
        {
          category: "Lymphatic and Immune System",
          question: "What is lymphedema?",
          options: [
    {
      answerText: "Swelling due to blockage or damage to lymphatic vessels, preventing normal lymph drainage",
      explanationText: "Correct. Lymphedema occurs when lymphatic fluid accumulates in tissues, causing swelling.",
      isCorrect: true
    },
    {
      answerText: "An infection of the lymph nodes",
      explanationText: "Incorrect. An infection of the lymph nodes is called lymphadenitis, not lymphedema.",
      isCorrect: false
    },
    {
      answerText: "A condition where the immune system attacks the lymphatic vessels",
      explanationText: "Incorrect. While autoimmune diseases can affect the lymphatic system, lymphedema is specifically related to fluid accumulation due to blockage or damage.",
      isCorrect: false
    },
    {
      answerText: "A disease that affects the production of lymphocytes",
      explanationText: "Incorrect. Lymphedema affects the lymphatic drainage, not the production of lymphocytes.",
      isCorrect: false
    }
  ]}]},
    {
      categoryName: "Respiratory System",
      questions: [
        {
          category: "Respiratory System",
          question: "What are the primary functions of the respiratory system?",
          options: [
    {
      answerText: "To exchange gases (oxygen and carbon dioxide) between the air and the blood, and to help regulate blood pH",
      explanationText: "Correct. The respiratory system is crucial for gas exchange and maintaining the acid-base balance in the body.",
      isCorrect: true
    },
    {
      answerText: "To digest and absorb nutrients",
      explanationText: "Incorrect. Digestion and absorption are functions of the digestive system.",
      isCorrect: false
    },
    {
      answerText: "To filter blood and produce urine",
      explanationText: "Incorrect. These functions are carried out by the urinary system.",
      isCorrect: false
    },
    {
      answerText: "To transport oxygen and nutrients throughout the body",
      explanationText: "Incorrect. Transporting oxygen and nutrients is the function of the cardiovascular system.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question:
            "What is the pathway of air through the respiratory system?",
          options: [
    {
      answerText: "Nose/mouth → pharynx → larynx → trachea → bronchi → bronchioles → alveoli",
      explanationText: "Correct. This is the correct pathway that air follows through the respiratory system.",
      isCorrect: true
    },
    {
      answerText: "Mouth → esophagus → stomach → intestines",
      explanationText: "Incorrect. This is the pathway of food through the digestive system.",
      isCorrect: false
    },
    {
      answerText: "Nose → esophagus → trachea → bronchi",
      explanationText: "Incorrect. The esophagus is not involved in the respiratory system; it is part of the digestive system.",
      isCorrect: false
    },
    {
      answerText: "Mouth → larynx → esophagus → alveoli",
      explanationText: "Incorrect. The esophagus is part of the digestive system and does not connect to the alveoli.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question: "What is the function of the nasal cavity?",
          options: [
    {
      answerText: "Filters, warms, and moistens air as it enters the respiratory system",
      explanationText: "Correct. The nasal cavity prepares the air before it enters the lower respiratory tract.",
      isCorrect: true
    },
    {
      answerText: "Produces digestive enzymes",
      explanationText: "Incorrect. Digestive enzymes are produced by the digestive system, not the respiratory system.",
      isCorrect: false
    },
    {
      answerText: "Pumps blood throughout the body",
      explanationText: "Incorrect. Pumping blood is the function of the heart in the cardiovascular system.",
      isCorrect: false
    },
    {
      answerText: "Absorbs oxygen directly into the bloodstream",
      explanationText: "Incorrect. Oxygen is absorbed into the bloodstream in the alveoli of the lungs, not the nasal cavity.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question: "What is the role of the larynx?",
          options: [
    {
      answerText: "Contains the vocal cords and routes air and food into the proper channels",
      explanationText: "Correct. The larynx is involved in voice production and directs air to the trachea and food to the esophagus.",
      isCorrect: true
    },
    {
      answerText: "Pumps air into the lungs",
      explanationText: "Incorrect. The diaphragm and respiratory muscles pump air into the lungs.",
      isCorrect: false
    },
    {
      answerText: "Filters dust and particles from the air",
      explanationText: "Incorrect. The nasal cavity and upper respiratory tract primarily filter dust and particles.",
      isCorrect: false
    },
    {
      answerText: "Regulates the pH of the blood",
      explanationText: "Incorrect. Blood pH is regulated by the respiratory system and kidneys, not specifically by the larynx.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question: "What is the function of the trachea?",
          options: [
    {
      answerText: "The windpipe that conducts air from the larynx to the bronchi, reinforced by C-shaped cartilage rings",
      explanationText: "Correct. The trachea is the main airway leading from the larynx to the bronchi.",
      isCorrect: true
    },
    {
      answerText: "A tube that carries food to the stomach",
      explanationText: "Incorrect. The esophagus carries food to the stomach.",
      isCorrect: false
    },
    {
      answerText: "A muscle that assists in breathing",
      explanationText: "Incorrect. The diaphragm is the primary muscle that assists in breathing.",
      isCorrect: false
    },
    {
      answerText: "A passage that allows air to enter the mouth",
      explanationText: "Incorrect. The trachea is not directly involved in air entering the mouth.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question: "What are the bronchi and bronchioles?",
          options: [
    {
      answerText: "The bronchi are large airways that branch from the trachea into each lung, and bronchioles are smaller branches that lead to the alveoli",
      explanationText: "Correct. The bronchi and bronchioles are part of the airway system that conducts air to the alveoli where gas exchange occurs.",
      isCorrect: true
    },
    {
      answerText: "The main sites of gas exchange in the lungs",
      explanationText: "Incorrect. Gas exchange occurs in the alveoli, not the bronchi or bronchioles.",
      isCorrect: false
    },
    {
      answerText: "Muscles that assist in breathing",
      explanationText: "Incorrect. The bronchi and bronchioles are airways, not muscles.",
      isCorrect: false
    },
    {
      answerText: "Valves that regulate airflow into the lungs",
      explanationText: "Incorrect. The bronchi and bronchioles are not valves; they are airways.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question: "What are the alveoli?",
          options: [
    {
      answerText: "Tiny air sacs in the lungs where gas exchange occurs between the air and the blood",
      explanationText: "Correct. The alveoli are the primary site of gas exchange in the lungs.",
      isCorrect: true
    },
    {
      answerText: "Large airways that conduct air to the lungs",
      explanationText: "Incorrect. The bronchi and bronchioles are large airways; alveoli are small air sacs.",
      isCorrect: false
    },
    {
      answerText: "Muscles that move the lungs during breathing",
      explanationText: "Incorrect. Alveoli are air sacs, not muscles.",
      isCorrect: false
    },
    {
      answerText: "Valves that prevent air from escaping the lungs",
      explanationText: "Incorrect. Alveoli are not valves; they are the sites of gas exchange.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question: "What is the process of gas exchange in the alveoli?",
          options: [
    {
      answerText: "Oxygen diffuses from the alveoli into the pulmonary capillaries, while carbon dioxide diffuses from the blood into the alveoli to be exhaled",
      explanationText: "Correct. This is the fundamental process of gas exchange in the lungs.",
      isCorrect: true
    },
    {
      answerText: "Air is pumped from the alveoli into the bloodstream",
      explanationText: "Incorrect. Air is not pumped; gases diffuse based on concentration gradients.",
      isCorrect: false
    },
    {
      answerText: "Nutrients are absorbed from the air into the blood",
      explanationText: "Incorrect. Nutrients are absorbed in the digestive system, not the respiratory system.",
      isCorrect: false
    },
    {
      answerText: "Carbon dioxide is absorbed from the alveoli into the bloodstream",
      explanationText: "Incorrect. Carbon dioxide is removed from the bloodstream and exhaled through the alveoli.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question: "What muscles are involved in inspiration?",
          options: [
    {
      answerText: "The diaphragm and external intercostal muscles contract, expanding the thoracic cavity and drawing air into the lungs",
      explanationText: "Correct. These muscles are responsible for creating the negative pressure needed for inhalation.",
      isCorrect: true
    },
    {
      answerText: "The abdominal muscles contract to force air into the lungs",
      explanationText: "Incorrect. The abdominal muscles are involved in forced exhalation, not inspiration.",
      isCorrect: false
    },
    {
      answerText: "The heart pumps air into the lungs",
      explanationText: "Incorrect. The heart pumps blood, not air.",
      isCorrect: false
    },
    {
      answerText: "The trachea contracts to draw air into the lungs",
      explanationText: "Incorrect. The trachea is a rigid structure that does not contract to draw air.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question: "What is the role of the diaphragm in breathing?",
          options: [
    {
      answerText: "A dome-shaped muscle that contracts to increase the volume of the thoracic cavity during inspiration",
      explanationText: "Correct. The diaphragm is the primary muscle responsible for the inhalation process.",
      isCorrect: true
    },
    {
      answerText: "A muscle that pumps blood to the lungs",
      explanationText: "Incorrect. The heart is responsible for pumping blood, not the diaphragm.",
      isCorrect: false
    },
    {
      answerText: "A structure that filters air entering the lungs",
      explanationText: "Incorrect. The nasal cavity and respiratory tract filter air, not the diaphragm.",
      isCorrect: false
    },
    {
      answerText: "A valve that controls airflow into the lungs",
      explanationText: "Incorrect. The diaphragm is a muscle, not a valve.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question: "How is oxygen transported in the blood?",
          options: [
    {
      answerText: "Primarily bound to hemoglobin in red blood cells as oxyhemoglobin",
      explanationText: "Correct. Most oxygen in the blood is carried by hemoglobin in red blood cells.",
      isCorrect: true
    },
    {
      answerText: "Dissolved directly in the plasma",
      explanationText: "Incorrect. Only a small amount of oxygen is dissolved in plasma.",
      isCorrect: false
    },
    {
      answerText: "Bound to white blood cells",
      explanationText: "Incorrect. Oxygen is carried by red blood cells, not white blood cells.",
      isCorrect: false
    },
    {
      answerText: "Transported as carbon dioxide",
      explanationText: "Incorrect. Oxygen and carbon dioxide are different gases with different transport mechanisms.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question: "How is carbon dioxide transported in the blood?",
          options: [
    {
      answerText: "Dissolved in plasma, bound to hemoglobin as carbaminohemoglobin, or converted to bicarbonate ions in the plasma",
      explanationText: "Correct. These are the three main ways carbon dioxide is transported in the blood.",
      isCorrect: true
    },
    {
      answerText: "Bound to oxygen molecules",
      explanationText: "Incorrect. Oxygen and carbon dioxide are transported separately in the blood.",
      isCorrect: false
    },
    {
      answerText: "Only dissolved in plasma",
      explanationText: "Incorrect. While some CO2 is dissolved in plasma, it is also transported bound to hemoglobin and as bicarbonate ions.",
      isCorrect: false
    },
    {
      answerText: "Primarily carried by red blood cells",
      explanationText: "Incorrect. CO2 is carried both in plasma and by hemoglobin, but not in the same manner as oxygen.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question: "What is the role of the medulla oblongata in respiration?",
          options: [
    {
      answerText: "It controls the basic rhythm of breathing by sending signals to the respiratory muscles",
      explanationText: "Correct. The medulla oblongata is responsible for regulating the rate and rhythm of breathing.",
      isCorrect: true
    },
    {
      answerText: "It filters air before it enters the lungs",
      explanationText: "Incorrect. The nasal cavity and upper respiratory tract are responsible for filtering air.",
      isCorrect: false
    },
    {
      answerText: "It exchanges gases in the alveoli",
      explanationText: "Incorrect. Gas exchange occurs in the alveoli, not the medulla oblongata.",
      isCorrect: false
    },
    {
      answerText: "It increases blood oxygen levels directly",
      explanationText: "Incorrect. The medulla oblongata regulates breathing, which indirectly affects blood oxygen levels.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question:
            "What are chemoreceptors and how do they regulate breathing?",
          options: [
    {
      answerText: "Sensory receptors that detect changes in blood pH, CO2, and O2 levels, and adjust ventilation to maintain homeostasis",
      explanationText: "Correct. Chemoreceptors help regulate breathing by monitoring blood chemistry.",
      isCorrect: true
    },
    {
      answerText: "Cells in the alveoli that filter air",
      explanationText: "Incorrect. Alveoli are involved in gas exchange, not in detecting blood chemistry.",
      isCorrect: false
    },
    {
      answerText: "Nerves that control muscle contraction during breathing",
      explanationText: "Incorrect. Nerves control muscle contraction, but chemoreceptors are specifically involved in detecting chemical changes in the blood.",
      isCorrect: false
    },
    {
      answerText: "Glands that secrete hormones to regulate breathing",
      explanationText: "Incorrect. Chemoreceptors are not glands; they are sensory receptors.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question: "What is asthma?",
          options: [
    {
      answerText: "A chronic inflammatory disease of the airways characterized by episodes of wheezing, breathlessness, and coughing",
      explanationText: "Correct. Asthma is a common respiratory condition affecting the airways.",
      isCorrect: true
    },
    {
      answerText: "A bacterial infection of the lungs",
      explanationText: "Incorrect. Bacterial infections, such as pneumonia, are different from asthma.",
      isCorrect: false
    },
    {
      answerText: "A condition where air sacs in the lungs are destroyed",
      explanationText: "Incorrect. This describes emphysema, not asthma.",
      isCorrect: false
    },
    {
      answerText: "A blockage of a pulmonary artery",
      explanationText: "Incorrect. A pulmonary embolism involves a blockage, not asthma.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question: "What is Chronic Obstructive Pulmonary Disease (COPD)?",
          options: [
    {
      answerText: "A group of lung diseases, including emphysema and chronic bronchitis, that cause airflow obstruction and breathing difficulties",
      explanationText: "Correct. COPD is a term that includes multiple chronic respiratory conditions.",
      isCorrect: true
    },
    {
      answerText: "A sudden blockage in the lungs",
      explanationText: "Incorrect. A sudden blockage is typically a pulmonary embolism, not COPD.",
      isCorrect: false
    },
    {
      answerText: "A condition caused by bacterial infection",
      explanationText: "Incorrect. While infections can exacerbate COPD, the condition itself is chronic and not caused by bacteria.",
      isCorrect: false
    },
    {
      answerText: "An allergic reaction that narrows the airways",
      explanationText: "Incorrect. This describes asthma more than COPD.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question: "What is pneumonia?",
          options: [
    {
      answerText: "An infection of the lungs that inflames the air sacs, leading to fluid accumulation and impaired gas exchange",
      explanationText: "Correct. Pneumonia is a serious lung infection that affects breathing.",
      isCorrect: true
    },
    {
      answerText: "A chronic disease that narrows the airways",
      explanationText: "Incorrect. Chronic diseases like asthma and COPD narrow the airways, but pneumonia is an infection.",
      isCorrect: false
    },
    {
      answerText: "A condition where the lungs lose elasticity",
      explanationText: "Incorrect. Loss of elasticity is more characteristic of emphysema.",
      isCorrect: false
    },
    {
      answerText: "A disorder that affects the diaphragm",
      explanationText: "Incorrect. Pneumonia primarily affects the lungs, not the diaphragm.",
      isCorrect: false
    }
  ]},
        {
          category: "Respiratory System",
          question: "What is a pulmonary embolism?",
          options: [
    {
      answerText: "A blockage in one of the pulmonary arteries in the lungs, usually caused by a blood clot, leading to decreased oxygenation of blood",
      explanationText: "Correct. A pulmonary embolism is a serious condition that affects blood flow in the lungs.",
      isCorrect: true
    },
    {
      answerText: "A chronic inflammation of the bronchi",
      explanationText: "Incorrect. Chronic inflammation of the bronchi is more typical of bronchitis.",
      isCorrect: false
    },
    {
      answerText: "A condition that causes the airways to spasm",
      explanationText: "Incorrect. Airway spasms are associated with asthma.",
      isCorrect: false
    },
    {
      answerText: "A lung infection that causes fluid buildup",
      explanationText: "Incorrect. Fluid buildup in the lungs is more typical of pneumonia, not a pulmonary embolism.",
      isCorrect: false
    }
  ]}]},
    {
      categoryName: "Digestive System",
      questions: [
        {
          category: "Digestive System",
          question: "What is the main function of the digestive system?",
          options: [
    {
      answerText: "To break down food into nutrients that can be absorbed into the bloodstream and eliminate waste",
      explanationText: "Correct. The digestive system processes food into absorbable nutrients and disposes of waste.",
      isCorrect: true
    },
    {
      answerText: "To circulate blood throughout the body",
      explanationText: "Incorrect. Circulation is the function of the cardiovascular system.",
      isCorrect: false
    },
    {
      answerText: "To regulate hormones in the body",
      explanationText: "Incorrect. Hormone regulation is managed by the endocrine system.",
      isCorrect: false
    },
    {
      answerText: "To filter waste from the blood",
      explanationText: "Incorrect. Filtering waste from the blood is the function of the kidneys in the urinary system.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What are the primary processes of digestion?",
          options: [
    {
      answerText: "Ingestion, mechanical digestion, chemical digestion, absorption, and defecation",
      explanationText: "Correct. These are the key processes involved in the digestive system's function.",
      isCorrect: true
    },
    {
      answerText: "Breathing, circulation, excretion, and reproduction",
      explanationText: "Incorrect. These processes are related to different systems such as respiratory, cardiovascular, and reproductive systems.",
      isCorrect: false
    },
    {
      answerText: "Filtration, reabsorption, secretion, and excretion",
      explanationText: "Incorrect. These processes are part of the urinary system.",
      isCorrect: false
    },
    {
      answerText: "Metabolism, detoxification, hormone production, and immune response",
      explanationText: "Incorrect. These processes involve multiple systems including the endocrine and immune systems.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is the role of the mouth in digestion?",
          options: [
    {
      answerText: "Begins mechanical digestion through chewing (mastication) and chemical digestion with saliva containing amylase",
      explanationText: "Correct. The mouth is the starting point for both mechanical and chemical digestion.",
      isCorrect: true
    },
    {
      answerText: "Stores bile for fat digestion",
      explanationText: "Incorrect. The gallbladder stores bile, not the mouth.",
      isCorrect: false
    },
    {
      answerText: "Filters toxins from the blood",
      explanationText: "Incorrect. Filtering toxins is the function of the liver and kidneys.",
      isCorrect: false
    },
    {
      answerText: "Produces insulin for blood sugar regulation",
      explanationText: "Incorrect. Insulin is produced by the pancreas, not the mouth.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is the function of the salivary glands?",
          options: [
    {
      answerText: "Produce saliva, which contains enzymes (amylase) that begin the breakdown of carbohydrates",
      explanationText: "Correct. Salivary glands initiate carbohydrate digestion in the mouth.",
      isCorrect: true
    },
    {
      answerText: "Secrete hormones that regulate metabolism",
      explanationText: "Incorrect. Metabolic regulation is a function of the endocrine system, not the salivary glands.",
      isCorrect: false
    },
    {
      answerText: "Absorb nutrients from digested food",
      explanationText: "Incorrect. Nutrient absorption occurs in the small intestine.",
      isCorrect: false
    },
    {
      answerText: "Store and release bile for fat digestion",
      explanationText: "Incorrect. The gallbladder stores and releases bile, not the salivary glands.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is the esophagus?",
          options: [
    {
      answerText: "A muscular tube that transports food from the pharynx to the stomach via peristalsis",
      explanationText: "Correct. The esophagus uses peristalsis to move food to the stomach.",
      isCorrect: true
    },
    {
      answerText: "The organ where most nutrient absorption occurs",
      explanationText: "Incorrect. Most nutrient absorption takes place in the small intestine, not the esophagus.",
      isCorrect: false
    },
    {
      answerText: "A valve that prevents stomach acid from entering the esophagus",
      explanationText: "Incorrect. The lower esophageal sphincter performs this function, but it is not the esophagus itself.",
      isCorrect: false
    },
    {
      answerText: "The tube through which air passes from the larynx to the bronchi",
      explanationText: "Incorrect. This describes the trachea, not the esophagus.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is peristalsis?",
          options: [
    {
      answerText: "Involuntary, wave-like muscle contractions that move food through the digestive tract",
      explanationText: "Correct. Peristalsis is crucial for moving food along the digestive tract.",
      isCorrect: true
    },
    {
      answerText: "The process of chewing and breaking down food",
      explanationText: "Incorrect. This describes mastication, not peristalsis.",
      isCorrect: false
    },
    {
      answerText: "The absorption of nutrients into the bloodstream",
      explanationText: "Incorrect. Absorption occurs in the intestines, not through peristalsis.",
      isCorrect: false
    },
    {
      answerText: "The release of enzymes to digest food",
      explanationText: "Incorrect. Enzyme release is part of chemical digestion, not peristalsis.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is the role of the stomach in digestion?",
          options: [
    {
      answerText: "Secretes gastric juices, including HCl and pepsin, to chemically break down proteins and churns food to mix it with digestive enzymes",
      explanationText: "Correct. The stomach is key for protein digestion and food processing.",
      isCorrect: true
    },
    {
      answerText: "Absorbs most of the nutrients from digested food",
      explanationText: "Incorrect. Most nutrient absorption occurs in the small intestine.",
      isCorrect: false
    },
    {
      answerText: "Produces bile for fat digestion",
      explanationText: "Incorrect. Bile is produced by the liver, not the stomach.",
      isCorrect: false
    },
    {
      answerText: "Stores and concentrates digestive enzymes",
      explanationText: "Incorrect. Digestive enzymes are produced in various organs, but they are not concentrated in the stomach.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is chyme?",
          options: [
    {
      answerText: "The semi-liquid mixture of partially digested food and gastric juices that forms in the stomach and moves into the small intestine",
      explanationText: "Correct. Chyme is the product of stomach digestion ready for further processing in the intestines.",
      isCorrect: true
    },
    {
      answerText: "The fluid secreted by the salivary glands",
      explanationText: "Incorrect. Saliva, not chyme, is secreted by the salivary glands.",
      isCorrect: false
    },
    {
      answerText: "The solid waste material excreted by the colon",
      explanationText: "Incorrect. Solid waste is referred to as feces, not chyme.",
      isCorrect: false
    },
    {
      answerText: "The bile stored in the gallbladder",
      explanationText: "Incorrect. Bile is a digestive fluid, but it is not chyme.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is the small intestine and its function?",
          options: [
    {
      answerText: "The primary site of nutrient absorption; consists of three sections: duodenum, jejunum, and ileum",
      explanationText: "Correct. The small intestine is critical for absorbing nutrients into the bloodstream.",
      isCorrect: true
    },
    {
      answerText: "The first part of the digestive system where food is ingested",
      explanationText: "Incorrect. The mouth is where ingestion occurs, not the small intestine.",
      isCorrect: false
    },
    {
      answerText: "The organ that stores and concentrates bile",
      explanationText: "Incorrect. The gallbladder stores and concentrates bile, not the small intestine.",
      isCorrect: false
    },
    {
      answerText: "The tube that transports food from the stomach to the rectum",
      explanationText: "Incorrect. The small intestine connects the stomach to the large intestine, not the rectum.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is the role of the duodenum?",
          options: [
    {
      answerText: "The first part of the small intestine where most chemical digestion occurs, receiving bile from the liver and pancreatic enzymes",
      explanationText: "Correct. The duodenum is where chemical digestion intensifies with the help of bile and enzymes.",
      isCorrect: true
    },
    {
      answerText: "The part of the large intestine where water is absorbed",
      explanationText: "Incorrect. Water absorption occurs in the colon, not the duodenum.",
      isCorrect: false
    },
    {
      answerText: "The tube that connects the mouth to the stomach",
      explanationText: "Incorrect. This describes the esophagus, not the duodenum.",
      isCorrect: false
    },
    {
      answerText: "The final part of the digestive system where feces are stored",
      explanationText: "Incorrect. Feces are stored in the rectum, not the duodenum.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question:
            "What is the function of the villi and microvilli in the small intestine?",
          options: [
    {
      answerText: "Increase the surface area for absorption of nutrients into the bloodstream",
      explanationText: "Correct. Villi and microvilli are essential for maximizing nutrient absorption.",
      isCorrect: true
    },
    {
      answerText: "Produce digestive enzymes that break down carbohydrates",
      explanationText: "Incorrect. While they aid absorption, villi and microvilli do not produce enzymes.",
      isCorrect: false
    },
    {
      answerText: "Store bile produced by the liver",
      explanationText: "Incorrect. Bile is stored in the gallbladder, not in the villi or microvilli.",
      isCorrect: false
    },
    {
      answerText: "Filter toxins from the blood",
      explanationText: "Incorrect. The liver and kidneys are responsible for filtering toxins, not the villi and microvilli.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is the role of the liver in digestion?",
          options: [
    {
      answerText: "Produces bile, which emulsifies fats to aid in their digestion",
      explanationText: "Correct. The liver's bile production is crucial for fat digestion.",
      isCorrect: true
    },
    {
      answerText: "Stores glucose as glycogen for energy",
      explanationText: "Incorrect. While the liver does store glycogen, this function is related to metabolism, not digestion.",
      isCorrect: false
    },
    {
      answerText: "Absorbs water and electrolytes from digested food",
      explanationText: "Incorrect. Water and electrolyte absorption primarily occurs in the large intestine.",
      isCorrect: false
    },
    {
      answerText: "Breaks down proteins into amino acids",
      explanationText: "Incorrect. Protein digestion begins in the stomach and continues in the small intestine.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is the function of the gallbladder?",
          options: [
    {
      answerText: "Stores and concentrates bile, releasing it into the duodenum when needed for fat digestion",
      explanationText: "Correct. The gallbladder plays a key role in the digestion of fats by storing and releasing bile.",
      isCorrect: true
    },
    {
      answerText: "Produces digestive enzymes",
      explanationText: "Incorrect. Digestive enzymes are produced by the pancreas and stomach, not the gallbladder.",
      isCorrect: false
    },
    {
      answerText: "Absorbs nutrients from digested food",
      explanationText: "Incorrect. Nutrient absorption occurs in the small intestine, not the gallbladder.",
      isCorrect: false
    },
    {
      answerText: "Filters toxins from the blood",
      explanationText: "Incorrect. The liver is responsible for filtering toxins, not the gallbladder.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What are the exocrine functions of the pancreas?",
          options: [
    {
      answerText: "Produces digestive enzymes (amylase, lipase, proteases) and bicarbonate to neutralize stomach acid in the duodenum",
      explanationText: "Correct. The pancreas is vital for producing enzymes and bicarbonate to aid digestion.",
      isCorrect: true
    },
    {
      answerText: "Produces insulin to regulate blood sugar levels",
      explanationText: "Incorrect. Insulin production is an endocrine function of the pancreas.",
      isCorrect: false
    },
    {
      answerText: "Stores and releases bile",
      explanationText: "Incorrect. The gallbladder, not the pancreas, stores and releases bile.",
      isCorrect: false
    },
    {
      answerText: "Filters waste from the blood",
      explanationText: "Incorrect. Waste filtration is performed by the kidneys, not the pancreas.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is the role of the large intestine?",
          options: [
    {
      answerText: "Absorbs water and electrolytes, forming solid feces, and houses gut bacteria that produce vitamins like vitamin K",
      explanationText: "Correct. The large intestine is key for water absorption, feces formation, and housing beneficial bacteria.",
      isCorrect: true
    },
    {
      answerText: "Breaks down proteins into amino acids",
      explanationText: "Incorrect. Protein digestion occurs in the stomach and small intestine, not the large intestine.",
      isCorrect: false
    },
    {
      answerText: "Stores bile produced by the liver",
      explanationText: "Incorrect. Bile is stored in the gallbladder, not the large intestine.",
      isCorrect: false
    },
    {
      answerText: "Filters toxins from the blood",
      explanationText: "Incorrect. Toxin filtration is performed by the liver and kidneys, not the large intestine.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is the function of the rectum and anus?",
          options: [
    {
      answerText: "Store and expel feces during defecation",
      explanationText: "Correct. The rectum stores feces, and the anus controls their expulsion during defecation.",
      isCorrect: true
    },
    {
      answerText: "Absorb nutrients from digested food",
      explanationText: "Incorrect. Nutrient absorption occurs in the small intestine, not the rectum and anus.",
      isCorrect: false
    },
    {
      answerText: "Filter waste from the blood",
      explanationText: "Incorrect. Waste filtration is performed by the kidneys, not the rectum and anus.",
      isCorrect: false
    },
    {
      answerText: "Produce bile for fat digestion",
      explanationText: "Incorrect. Bile is produced by the liver, not the rectum and anus.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What enzymes are involved in protein digestion?",
          options: [
    {
      answerText: "Pepsin (stomach), trypsin, and chymotrypsin (pancreas)",
      explanationText: "Correct. These enzymes are essential for breaking down proteins into amino acids.",
      isCorrect: true
    },
    {
      answerText: "Amylase (saliva), lipase, and maltase",
      explanationText: "Incorrect. Amylase breaks down carbohydrates, and lipase digests fats, not proteins.",
      isCorrect: false
    },
    {
      answerText: "Lactase, sucrase, and maltase",
      explanationText: "Incorrect. These enzymes break down carbohydrates, not proteins.",
      isCorrect: false
    },
    {
      answerText: "Insulin, glucagon, and somatostatin",
      explanationText: "Incorrect. These are hormones related to blood sugar regulation, not digestive enzymes.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is the role of bile in fat digestion?",
          options: [
    {
      answerText: "Bile emulsifies fats, breaking them into smaller droplets that are more easily digested by enzymes like lipase",
      explanationText: "Correct. Bile is crucial for the digestion and absorption of fats.",
      isCorrect: true
    },
    {
      answerText: "Bile breaks down carbohydrates into simple sugars",
      explanationText: "Incorrect. Bile is involved in fat digestion, not carbohydrate digestion.",
      isCorrect: false
    },
    {
      answerText: "Bile neutralizes stomach acid in the small intestine",
      explanationText: "Incorrect. Bile's primary role is emulsifying fats, while bicarbonate neutralizes stomach acid.",
      isCorrect: false
    },
    {
      answerText: "Bile absorbs water and electrolytes",
      explanationText: "Incorrect. Water and electrolyte absorption occurs in the large intestine, not through bile.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is the role of the enteric nervous system?",
          options: [
    {
      answerText: "The 'gut brain,' a local neural network that regulates gastrointestinal motility and secretion independently of the central nervous system",
      explanationText: "Correct. The enteric nervous system plays a crucial role in controlling digestion.",
      isCorrect: true
    },
    {
      answerText: "Controls the release of hormones from the pituitary gland",
      explanationText: "Incorrect. The pituitary gland is controlled by the hypothalamus, not the enteric nervous system.",
      isCorrect: false
    },
    {
      answerText: "Regulates the body's immune response",
      explanationText: "Incorrect. The immune system, not the enteric nervous system, regulates immune responses.",
      isCorrect: false
    },
    {
      answerText: "Manages the filtration of waste products from the blood",
      explanationText: "Incorrect. Waste filtration is performed by the kidneys, not the enteric nervous system.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What hormones regulate digestive processes?",
          options: [
    {
      answerText: "Gastrin (stimulates gastric juice secretion), secretin (stimulates bicarbonate release), and cholecystokinin (CCK, stimulates bile and pancreatic enzyme release)",
      explanationText: "Correct. These hormones play key roles in regulating digestion.",
      isCorrect: true
    },
    {
      answerText: "Insulin (lowers blood sugar), glucagon (raises blood sugar), and cortisol (stress hormone)",
      explanationText: "Incorrect. These hormones regulate metabolism, not digestion.",
      isCorrect: false
    },
    {
      answerText: "Adrenaline (increases heart rate), thyroid hormone (regulates metabolism), and aldosterone (regulates sodium)",
      explanationText: "Incorrect. These hormones are involved in stress response, metabolism, and blood pressure, not digestion.",
      isCorrect: false
    },
    {
      answerText: "Testosterone (male sex hormone), estrogen (female sex hormone), and progesterone (pregnancy hormone)",
      explanationText: "Incorrect. These hormones are related to reproduction, not digestion.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is GERD (Gastroesophageal Reflux Disease)?",
          options: [
    {
      answerText: "A condition where stomach acid flows back into the esophagus, causing heartburn and potential damage to the esophageal lining",
      explanationText: "Correct. GERD is a common digestive disorder involving acid reflux.",
      isCorrect: true
    },
    {
      answerText: "A disorder where the intestines cannot absorb nutrients",
      explanationText: "Incorrect. This describes malabsorption syndromes, not GERD.",
      isCorrect: false
    },
    {
      answerText: "A condition where bile is not properly released into the digestive system",
      explanationText: "Incorrect. This would relate to biliary disorders, not GERD.",
      isCorrect: false
    },
    {
      answerText: "A condition where the stomach produces too much mucus",
      explanationText: "Incorrect. Excess mucus production is not a defining feature of GERD.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is a peptic ulcer?",
          options: [
    {
      answerText: "An erosion of the stomach or duodenal lining caused by excess acid or infection with Helicobacter pylori",
      explanationText: "Correct. Peptic ulcers are often caused by H. pylori infection and excessive stomach acid.",
      isCorrect: true
    },
    {
      answerText: "A condition where the liver fails to produce bile",
      explanationText: "Incorrect. This describes biliary obstruction, not a peptic ulcer.",
      isCorrect: false
    },
    {
      answerText: "A blockage in the intestines preventing food passage",
      explanationText: "Incorrect. This would be an intestinal obstruction, not a peptic ulcer.",
      isCorrect: false
    },
    {
      answerText: "An overgrowth of bacteria in the small intestine",
      explanationText: "Incorrect. Bacterial overgrowth is a different condition, not related to peptic ulcers.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is Irritable Bowel Syndrome (IBS)?",
          options: [
    {
      answerText: "A functional disorder characterized by abdominal pain, bloating, and altered bowel habits (diarrhea or constipation)",
      explanationText: "Correct. IBS is a common gastrointestinal disorder with a variety of symptoms.",
      isCorrect: true
    },
    {
      answerText: "A condition where the intestines become inflamed and ulcerated",
      explanationText: "Incorrect. This describes Inflammatory Bowel Disease (IBD), not IBS.",
      isCorrect: false
    },
    {
      answerText: "A condition where stomach acid erodes the esophagus",
      explanationText: "Incorrect. This describes GERD, not IBS.",
      isCorrect: false
    },
    {
      answerText: "A condition where the liver fails to detoxify the blood",
      explanationText: "Incorrect. This would describe liver failure, not IBS.",
      isCorrect: false
    }
  ]},
        {
          category: "Digestive System",
          question: "What is Inflammatory Bowel Disease (IBD)?",
          options: [
    {
      answerText: "Chronic inflammation of the digestive tract, including conditions like Crohn's disease and ulcerative colitis",
      explanationText: "Correct. IBD is a term used for chronic inflammatory conditions of the GI tract.",
      isCorrect: true
    },
    {
      answerText: "A condition where the intestines lose their ability to absorb nutrients",
      explanationText: "Incorrect. While malabsorption can occur with IBD, the definition focuses on chronic inflammation.",
      isCorrect: false
    },
    {
      answerText: "A condition where the stomach fails to produce enough acid",
      explanationText: "Incorrect. This describes hypochlorhydria, not IBD.",
      isCorrect: false
    },
    {
      answerText: "A functional disorder characterized by abdominal pain, bloating, and altered bowel habits",
      explanationText: "Incorrect. This describes IBS, not IBD.",
      isCorrect: false
    }
  ]}]},
    {
      categoryName: "Urinary System",
      questions: [
        {
          category: "Urinary System",
          question: "What are the primary functions of the urinary system?",
          options: [
    {
      answerText: "To remove waste products from the blood, regulate blood volume and pressure, balance electrolytes and pH, and detoxify the body",
      explanationText: "Correct. The urinary system is responsible for these essential functions.",
      isCorrect: true
    },
    {
      answerText: "To produce hormones and regulate metabolism",
      explanationText: "Incorrect. Hormone production and metabolism regulation are functions of the endocrine system.",
      isCorrect: false
    },
    {
      answerText: "To break down food and absorb nutrients",
      explanationText: "Incorrect. These are functions of the digestive system.",
      isCorrect: false
    },
    {
      answerText: "To transport oxygen and nutrients throughout the body",
      explanationText: "Incorrect. This is the function of the cardiovascular system.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What are the main organs of the urinary system?",
          options: [
    {
      answerText: "Kidneys, ureters, bladder, and urethra",
      explanationText: "Correct. These are the main organs involved in the production, storage, and excretion of urine.",
      isCorrect: true
    },
    {
      answerText: "Heart, arteries, veins, and capillaries",
      explanationText: "Incorrect. These organs are part of the cardiovascular system.",
      isCorrect: false
    },
    {
      answerText: "Stomach, intestines, liver, and pancreas",
      explanationText: "Incorrect. These organs are part of the digestive system.",
      isCorrect: false
    },
    {
      answerText: "Lungs, bronchi, trachea, and alveoli",
      explanationText: "Incorrect. These organs are part of the respiratory system.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is the structure and function of the kidneys?",
          options: [
    {
      answerText: "Bean-shaped organs that filter blood, remove waste, and regulate electrolyte balance; contain nephrons, the functional units",
      explanationText: "Correct. The kidneys play a crucial role in maintaining homeostasis by filtering blood and forming urine.",
      isCorrect: true
    },
    {
      answerText: "Organs that produce digestive enzymes and absorb nutrients",
      explanationText: "Incorrect. This describes the function of the pancreas and intestines.",
      isCorrect: false
    },
    {
      answerText: "Muscles that aid in breathing and oxygen exchange",
      explanationText: "Incorrect. This describes the function of the diaphragm and lungs.",
      isCorrect: false
    },
    {
      answerText: "Glands that secrete hormones into the bloodstream",
      explanationText: "Incorrect. This describes the function of endocrine glands, not the kidneys.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is the nephron and its role?",
          options: [
    {
      answerText: "The functional unit of the kidney that filters blood, reabsorbs needed substances, and secretes waste into the urine",
      explanationText: "Correct. Nephrons are the microscopic structures within the kidneys that perform essential functions in urine formation.",
      isCorrect: true
    },
    {
      answerText: "A type of blood vessel that carries oxygenated blood",
      explanationText: "Incorrect. Nephrons are not blood vessels; they are the filtering units of the kidney.",
      isCorrect: false
    },
    {
      answerText: "A gland that produces hormones to regulate metabolism",
      explanationText: "Incorrect. This describes an endocrine gland, not a nephron.",
      isCorrect: false
    },
    {
      answerText: "A structure in the heart that regulates blood flow",
      explanationText: "Incorrect. This describes valves in the heart, not the nephron.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is the glomerulus?",
          options: [
    {
      answerText: "A network of capillaries in the nephron where blood filtration occurs",
      explanationText: "Correct. The glomerulus is where the initial process of filtering blood to form urine begins.",
      isCorrect: true
    },
    {
      answerText: "A structure in the liver that detoxifies blood",
      explanationText: "Incorrect. The glomerulus is in the kidney, not the liver.",
      isCorrect: false
    },
    {
      answerText: "A muscle that pumps blood throughout the body",
      explanationText: "Incorrect. This describes the heart, not the glomerulus.",
      isCorrect: false
    },
    {
      answerText: "A gland that secretes digestive enzymes",
      explanationText: "Incorrect. Digestive enzyme secretion is performed by the pancreas, not the glomerulus.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is the role of the proximal convoluted tubule (PCT)?",
          options: [
    {
      answerText: "Reabsorbs nutrients, ions, and water from the filtrate back into the bloodstream",
      explanationText: "Correct. The PCT plays a vital role in reclaiming valuable substances from the filtrate.",
      isCorrect: true
    },
    {
      answerText: "Secretes hormones into the blood",
      explanationText: "Incorrect. Hormone secretion is not the function of the PCT.",
      isCorrect: false
    },
    {
      answerText: "Filters blood to form urine",
      explanationText: "Incorrect. Blood filtration occurs in the glomerulus, not the PCT.",
      isCorrect: false
    },
    {
      answerText: "Stores and concentrates bile",
      explanationText: "Incorrect. Bile is stored in the gallbladder, not in the PCT.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is the loop of Henle and its function?",
          options: [
    {
      answerText: "Creates a concentration gradient in the medulla to concentrate urine by reabsorbing water and salts",
      explanationText: "Correct. The loop of Henle is essential for the kidney's ability to produce concentrated urine.",
      isCorrect: true
    },
    {
      answerText: "Filters blood to remove waste products",
      explanationText: "Incorrect. Blood filtration occurs in the glomerulus, not in the loop of Henle.",
      isCorrect: false
    },
    {
      answerText: "Secretes digestive enzymes into the small intestine",
      explanationText: "Incorrect. The loop of Henle is part of the urinary system, not the digestive system.",
      isCorrect: false
    },
    {
      answerText: "Pumps blood through the circulatory system",
      explanationText: "Incorrect. Pumping blood is the function of the heart, not the loop of Henle.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is the role of the distal convoluted tubule (DCT)?",
          options: [
    {
      answerText: "Further reabsorbs ions and water, regulated by hormones like aldosterone",
      explanationText: "Correct. The DCT is involved in fine-tuning the composition of urine through hormone-regulated processes.",
      isCorrect: true
    },
    {
      answerText: "Filters blood to form urine",
      explanationText: "Incorrect. Blood filtration occurs in the glomerulus, not the DCT.",
      isCorrect: false
    },
    {
      answerText: "Secretes hormones into the bloodstream",
      explanationText: "Incorrect. Hormone secretion is not the function of the DCT.",
      isCorrect: false
    },
    {
      answerText: "Stores and releases bile",
      explanationText: "Incorrect. Bile is stored in the gallbladder, not in the DCT.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is the function of the collecting duct?",
          options: [
    {
      answerText: "Final adjustments to urine composition; reabsorbs water under the influence of ADH",
      explanationText: "Correct. The collecting duct is crucial for regulating water balance in the body.",
      isCorrect: true
    },
    {
      answerText: "Filters blood to remove waste",
      explanationText: "Incorrect. Blood filtration occurs in the glomerulus, not the collecting duct.",
      isCorrect: false
    },
    {
      answerText: "Secretes digestive enzymes",
      explanationText: "Incorrect. Digestive enzyme secretion is not the function of the collecting duct.",
      isCorrect: false
    },
    {
      answerText: "Pumps blood through the body",
      explanationText: "Incorrect. Pumping blood is the function of the heart, not the collecting duct.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is glomerular filtration?",
          options: [
    {
      answerText: "The process by which blood pressure forces water, ions, and small molecules from the blood into Bowman's capsule, forming the filtrate",
      explanationText: "Correct. Glomerular filtration is the first step in urine formation.",
      isCorrect: true
    },
    {
      answerText: "The absorption of nutrients from food",
      explanationText: "Incorrect. Nutrient absorption occurs in the digestive system, not through glomerular filtration.",
      isCorrect: false
    },
    {
      answerText: "The process of reabsorbing water from the urine",
      explanationText: "Incorrect. Water reabsorption occurs later in the nephron, not during glomerular filtration.",
      isCorrect: false
    },
    {
      answerText: "The secretion of hormones into the blood",
      explanationText: "Incorrect. Hormone secretion is not related to glomerular filtration.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is tubular reabsorption?",
          options: [
    {
      answerText: "The process by which the nephron reclaims valuable substances from the filtrate back into the bloodstream",
      explanationText: "Correct. Tubular reabsorption is essential for conserving useful materials like glucose and ions.",
      isCorrect: true
    },
    {
      answerText: "The release of waste products into the urine",
      explanationText: "Incorrect. This describes tubular secretion, not reabsorption.",
      isCorrect: false
    },
    {
      answerText: "The filtration of blood to form urine",
      explanationText: "Incorrect. Blood filtration occurs in the glomerulus, not during tubular reabsorption.",
      isCorrect: false
    },
    {
      answerText: "The storage of urine in the bladder",
      explanationText: "Incorrect. Urine storage occurs in the bladder, not during tubular reabsorption.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is tubular secretion?",
          options: [
    {
      answerText: "The active transport of waste products and excess ions from the blood into the filtrate, primarily in the DCT and collecting duct",
      explanationText: "Correct. Tubular secretion helps rid the body of excess substances and toxins.",
      isCorrect: true
    },
    {
      answerText: "The process of filtering blood to remove waste",
      explanationText: "Incorrect. Blood filtration occurs in the glomerulus, not during tubular secretion.",
      isCorrect: false
    },
    {
      answerText: "The reabsorption of nutrients from the filtrate",
      explanationText: "Incorrect. Nutrient reabsorption occurs earlier in the nephron, not during tubular secretion.",
      isCorrect: false
    },
    {
      answerText: "The storage of urine in the bladder",
      explanationText: "Incorrect. Urine storage occurs in the bladder, not during tubular secretion.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is the role of ADH in the kidneys?",
          options: [
    {
      answerText: "Increases water reabsorption in the collecting ducts, reducing urine volume and increasing blood volume",
      explanationText: "Correct. ADH plays a key role in maintaining the body's water balance.",
      isCorrect: true
    },
    {
      answerText: "Stimulates the release of bile",
      explanationText: "Incorrect. Bile release is controlled by cholecystokinin, not ADH.",
      isCorrect: false
    },
    {
      answerText: "Promotes the breakdown of glycogen into glucose",
      explanationText: "Incorrect. This is the function of glucagon, not ADH.",
      isCorrect: false
    },
    {
      answerText: "Increases heart rate and blood pressure",
      explanationText: "Incorrect. ADH regulates water balance, not heart rate and blood pressure.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What triggers the release of renin?",
          options: [
    {
      answerText: "Low blood pressure or low sodium levels in the blood stimulate renin release from the kidneys",
      explanationText: "Correct. Renin is released in response to signals indicating low blood pressure or sodium levels.",
      isCorrect: true
    },
    {
      answerText: "High blood glucose levels",
      explanationText: "Incorrect. High blood glucose triggers insulin release, not renin.",
      isCorrect: false
    },
    {
      answerText: "Increased heart rate",
      explanationText: "Incorrect. Heart rate increases are not directly related to renin release.",
      isCorrect: false
    },
    {
      answerText: "Elevated blood oxygen levels",
      explanationText: "Incorrect. Blood oxygen levels do not trigger renin release.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is the function of aldosterone?",
          options: [
    {
      answerText: "Promotes sodium reabsorption and potassium excretion, leading to water retention and increased blood pressure",
      explanationText: "Correct. Aldosterone helps regulate blood pressure by adjusting sodium and potassium levels.",
      isCorrect: true
    },
    {
      answerText: "Regulates blood glucose levels",
      explanationText: "Incorrect. Insulin and glucagon regulate blood glucose levels, not aldosterone.",
      isCorrect: false
    },
    {
      answerText: "Increases heart rate",
      explanationText: "Incorrect. Aldosterone regulates electrolyte balance, not heart rate.",
      isCorrect: false
    },
    {
      answerText: "Stimulates red blood cell production",
      explanationText: "Incorrect. Erythropoietin stimulates red blood cell production, not aldosterone.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is the role of the ureters?",
          options: [
    {
      answerText: "Transport urine from the kidneys to the bladder via peristalsis",
      explanationText: "Correct. The ureters are tubes that carry urine from the kidneys to the bladder.",
      isCorrect: true
    },
    {
      answerText: "Store and expel urine during urination",
      explanationText: "Incorrect. The bladder stores urine, not the ureters.",
      isCorrect: false
    },
    {
      answerText: "Filter blood to remove waste",
      explanationText: "Incorrect. Blood filtration occurs in the kidneys, not the ureters.",
      isCorrect: false
    },
    {
      answerText: "Reabsorb water and electrolytes",
      explanationText: "Incorrect. Water and electrolyte reabsorption occur in the nephron, not the ureters.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is the function of the bladder?",
          options: [
    {
      answerText: "Stores urine until it is excreted",
      explanationText: "Correct. The bladder holds urine until it is ready to be expelled from the body.",
      isCorrect: true
    },
    {
      answerText: "Filters blood to remove waste",
      explanationText: "Incorrect. Blood filtration occurs in the kidneys, not the bladder.",
      isCorrect: false
    },
    {
      answerText: "Reabsorbs nutrients and water",
      explanationText: "Incorrect. Nutrient and water reabsorption occur in the nephron, not the bladder.",
      isCorrect: false
    },
    {
      answerText: "Produces urine by filtering blood",
      explanationText: "Incorrect. Urine production occurs in the kidneys, not the bladder.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is the function of the urethra?",
          options: [
    {
      answerText: "Carries urine from the bladder to the outside of the body during urination",
      explanationText: "Correct. The urethra is the final pathway for urine to leave the body.",
      isCorrect: true
    },
    {
      answerText: "Transports urine from the kidneys to the bladder",
      explanationText: "Incorrect. This function is performed by the ureters, not the urethra.",
      isCorrect: false
    },
    {
      answerText: "Stores urine until it is excreted",
      explanationText: "Incorrect. Urine storage occurs in the bladder, not the urethra.",
      isCorrect: false
    },
    {
      answerText: "Filters blood to remove waste",
      explanationText: "Incorrect. Blood filtration occurs in the kidneys, not the urethra.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is micturition?",
          options: [
    {
      answerText: "The process of urination, involving the coordinated relaxation of the urethral sphincters and contraction of the bladder muscles",
      explanationText: "Correct. Micturition is the process of expelling urine from the body.",
      isCorrect: true
    },
    {
      answerText: "The process of blood filtration in the kidneys",
      explanationText: "Incorrect. Blood filtration is part of urine formation, not micturition.",
      isCorrect: false
    },
    {
      answerText: "The secretion of digestive enzymes",
      explanationText: "Incorrect. Digestive enzyme secretion is not related to micturition.",
      isCorrect: false
    },
    {
      answerText: "The absorption of nutrients from food",
      explanationText: "Incorrect. Nutrient absorption occurs in the digestive system, not through micturition.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is acid-base balance and how is it regulated?",
          options: [
    {
      answerText: "The maintenance of the body's pH within a narrow range; regulated by buffer systems, respiratory compensation, and renal compensation",
      explanationText: "Correct. The body maintains acid-base balance through multiple mechanisms involving the respiratory and urinary systems.",
      isCorrect: true
    },
    {
      answerText: "The regulation of blood pressure through hormone secretion",
      explanationText: "Incorrect. Blood pressure regulation involves different mechanisms, not directly related to acid-base balance.",
      isCorrect: false
    },
    {
      answerText: "The process of filtering blood to remove waste",
      explanationText: "Incorrect. Blood filtration is related to urine formation, not acid-base balance.",
      isCorrect: false
    },
    {
      answerText: "The absorption of nutrients from the digestive tract",
      explanationText: "Incorrect. Nutrient absorption occurs in the digestive system, not through acid-base balance.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is chronic kidney disease (CKD)?",
          options: [
    {
      answerText: "Progressive loss of kidney function over time, potentially leading to end-stage renal disease (ESRD) requiring dialysis or transplantation",
      explanationText: "Correct. CKD is a serious condition that can result in severe kidney damage over time.",
      isCorrect: true
    },
    {
      answerText: "A sudden loss of kidney function that is often reversible",
      explanationText: "Incorrect. This describes acute kidney injury (AKI), not CKD.",
      isCorrect: false
    },
    {
      answerText: "The presence of kidney stones that block urine flow",
      explanationText: "Incorrect. Kidney stones are a separate condition, not the same as CKD.",
      isCorrect: false
    },
    {
      answerText: "An infection of the kidneys caused by bacteria",
      explanationText: "Incorrect. This describes pyelonephritis, not CKD.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is acute kidney injury (AKI)?",
          options: [
    {
      answerText: "Sudden loss of kidney function, often reversible with prompt treatment",
      explanationText: "Correct. AKI is a rapid decline in kidney function, typically treatable if addressed quickly.",
      isCorrect: true
    },
    {
      answerText: "A chronic condition where kidney function gradually declines",
      explanationText: "Incorrect. This describes chronic kidney disease (CKD), not AKI.",
      isCorrect: false
    },
    {
      answerText: "The formation of kidney stones",
      explanationText: "Incorrect. Kidney stones are a separate condition from AKI.",
      isCorrect: false
    },
    {
      answerText: "A long-term infection of the kidneys",
      explanationText: "Incorrect. Long-term kidney infections are not the same as AKI.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What are kidney stones (renal calculi)?",
          options: [
    {
      answerText: "Crystallized minerals in the kidney that can obstruct urine flow, causing pain and potential damage to the kidney",
      explanationText: "Correct. Kidney stones are solid masses that can cause significant pain and complications if not treated.",
      isCorrect: true
    },
    {
      answerText: "Inflammation of the kidneys",
      explanationText: "Incorrect. Inflammation of the kidneys is called nephritis, not kidney stones.",
      isCorrect: false
    },
    {
      answerText: "A sudden decline in kidney function",
      explanationText: "Incorrect. A sudden decline in kidney function is referred to as acute kidney injury (AKI), not kidney stones.",
      isCorrect: false
    },
    {
      answerText: "The loss of protein in the urine",
      explanationText: "Incorrect. Protein loss in the urine is a condition called proteinuria, not kidney stones.",
      isCorrect: false
    }
  ]},
        {
          category: "Urinary System",
          question: "What is urinalysis?",
          options: [
    {
      answerText: "A test that examines the content of urine to detect and diagnose various conditions, including infections, kidney disease, and diabetes",
      explanationText: "Correct. Urinalysis is a common diagnostic tool used to assess kidney function and detect various disorders.",
      isCorrect: true
    },
    {
      answerText: "A surgical procedure to remove kidney stones",
      explanationText: "Incorrect. Urinalysis is a diagnostic test, not a surgical procedure.",
      isCorrect: false
    },
    {
      answerText: "A method of measuring blood pressure",
      explanationText: "Incorrect. Blood pressure measurement is not related to urinalysis.",
      isCorrect: false
    },
    {
      answerText: "A technique to filter waste from the blood",
      explanationText: "Incorrect. Filtration of blood waste occurs in the kidneys, not through urinalysis.",
      isCorrect: false
    }
  ]}]},
    {
      categoryName: "Reproductive System",
      questions: [
        {
          category: "Reproductive System",
          question:
            "What are the primary functions of the reproductive system?",
          options: [
    {
      answerText: "To produce, store, and transport gametes (sperm and eggs) and facilitate fertilization and the development of offspring",
      explanationText: "Correct. The reproductive system is responsible for producing and supporting the development of offspring.",
      isCorrect: true
    },
    {
      answerText: "To filter blood and remove waste products from the body",
      explanationText: "Incorrect. This is the function of the urinary system.",
      isCorrect: false
    },
    {
      answerText: "To regulate metabolism and maintain homeostasis",
      explanationText: "Incorrect. This is the role of the endocrine system.",
      isCorrect: false
    },
    {
      answerText: "To control the body's response to stress",
      explanationText: "Incorrect. Stress responses are regulated by the endocrine and nervous systems, not the reproductive system.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is the structure and function of the testes?",
          options: [
    {
      answerText: "Male reproductive organs that produce sperm (spermatogenesis) and secrete testosterone",
      explanationText: "Correct. The testes are the primary male reproductive organs responsible for producing sperm and hormones.",
      isCorrect: true
    },
    {
      answerText: "Glands that produce digestive enzymes",
      explanationText: "Incorrect. The testes do not produce digestive enzymes; this is the function of the pancreas.",
      isCorrect: false
    },
    {
      answerText: "Organs that filter waste from the blood",
      explanationText: "Incorrect. The kidneys filter waste from the blood, not the testes.",
      isCorrect: false
    },
    {
      answerText: "Muscles that contract during ejaculation",
      explanationText: "Incorrect. The muscles involved in ejaculation are not the testes; they are part of the reproductive tract.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is spermatogenesis?",
          options: [
    {
      answerText: "The production of sperm through meiosis in the seminiferous tubules of the testes",
      explanationText: "Correct. Spermatogenesis is the process of sperm production in males.",
      isCorrect: true
    },
    {
      answerText: "The fertilization of an egg by sperm",
      explanationText: "Incorrect. Fertilization is the union of sperm and egg, not the production of sperm.",
      isCorrect: false
    },
    {
      answerText: "The production of eggs in females",
      explanationText: "Incorrect. The production of eggs is called oogenesis, not spermatogenesis.",
      isCorrect: false
    },
    {
      answerText: "The secretion of testosterone by the testes",
      explanationText: "Incorrect. Spermatogenesis refers specifically to sperm production, not hormone secretion.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What are the components of sperm?",
          options: [
    {
      answerText: "Head (contains DNA), midpiece (packed with mitochondria for energy), and tail (flagellum for movement)",
      explanationText: "Correct. These components enable sperm to move and fertilize an egg.",
      isCorrect: true
    },
    {
      answerText: "Nucleus, cytoplasm, and cell membrane",
      explanationText: "Incorrect. These are general cellular components, not specific to sperm.",
      isCorrect: false
    },
    {
      answerText: "Ovary, fallopian tube, and uterus",
      explanationText: "Incorrect. These are parts of the female reproductive system, not components of sperm.",
      isCorrect: false
    },
    {
      answerText: "Egg, zygote, and blastocyst",
      explanationText: "Incorrect. These are stages in the development of a fertilized egg, not components of sperm.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is the role of the epididymis?",
          options: [
    {
      answerText: "Coiled tube where sperm mature and are stored until ejaculation",
      explanationText: "Correct. The epididymis is crucial for the maturation and storage of sperm.",
      isCorrect: true
    },
    {
      answerText: "Structure where eggs are produced",
      explanationText: "Incorrect. Eggs are produced in the ovaries, not the epididymis.",
      isCorrect: false
    },
    {
      answerText: "Gland that secretes seminal fluid",
      explanationText: "Incorrect. The seminal vesicles secrete seminal fluid, not the epididymis.",
      isCorrect: false
    },
    {
      answerText: "Muscle that contracts during ejaculation",
      explanationText: "Incorrect. The epididymis stores sperm, but it is not a muscle involved in ejaculation.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is the function of the vas deferens?",
          options: [
    {
      answerText: "Transports sperm from the epididymis to the urethra during ejaculation",
      explanationText: "Correct. The vas deferens is a key duct in the male reproductive system.",
      isCorrect: true
    },
    {
      answerText: "Filters waste products from the blood",
      explanationText: "Incorrect. The kidneys filter waste, not the vas deferens.",
      isCorrect: false
    },
    {
      answerText: "Stores urine until it is excreted",
      explanationText: "Incorrect. Urine is stored in the bladder, not the vas deferens.",
      isCorrect: false
    },
    {
      answerText: "Produces testosterone",
      explanationText: "Incorrect. Testosterone is produced by the testes, not the vas deferens.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is the role of the seminal vesicles?",
          options: [
    {
      answerText: "Produce seminal fluid that contains fructose, providing energy for sperm",
      explanationText: "Correct. Seminal vesicles contribute to the seminal fluid, which nourishes and supports sperm.",
      isCorrect: true
    },
    {
      answerText: "Store and mature sperm",
      explanationText: "Incorrect. Sperm are stored and mature in the epididymis, not the seminal vesicles.",
      isCorrect: false
    },
    {
      answerText: "Produce eggs",
      explanationText: "Incorrect. Eggs are produced by the ovaries in females, not by seminal vesicles.",
      isCorrect: false
    },
    {
      answerText: "Filter blood to remove waste",
      explanationText: "Incorrect. Blood filtration occurs in the kidneys, not the seminal vesicles.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is the function of the prostate gland?",
          options: [
    {
      answerText: "Produces a slightly alkaline fluid that makes up part of the semen and neutralizes acidity in the female reproductive tract",
      explanationText: "Correct. The prostate gland's secretions are important for sperm viability.",
      isCorrect: true
    },
    {
      answerText: "Stores and releases bile",
      explanationText: "Incorrect. Bile is stored in the gallbladder, not the prostate gland.",
      isCorrect: false
    },
    {
      answerText: "Filters waste products from the blood",
      explanationText: "Incorrect. Blood filtration is a function of the kidneys, not the prostate gland.",
      isCorrect: false
    },
    {
      answerText: "Produces hormones that regulate metabolism",
      explanationText: "Incorrect. Hormone production for metabolism is mainly a function of the thyroid gland, not the prostate.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is the function of the bulbourethral glands?",
          options: [
    {
      answerText: "Secrete mucus that lubricates the urethra during ejaculation",
      explanationText: "Correct. The bulbourethral glands produce a mucus-like fluid that helps in lubrication during ejaculation.",
      isCorrect: true
    },
    {
      answerText: "Produce sperm",
      explanationText: "Incorrect. Sperm is produced in the testes, not the bulbourethral glands.",
      isCorrect: false
    },
    {
      answerText: "Store urine until it is excreted",
      explanationText: "Incorrect. Urine is stored in the bladder, not in the bulbourethral glands.",
      isCorrect: false
    },
    {
      answerText: "Regulate blood pressure",
      explanationText: "Incorrect. Blood pressure regulation is not a function of the bulbourethral glands.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is the structure and function of the ovaries?",
          options: [
    {
      answerText: "Female reproductive organs that produce eggs (oogenesis) and secrete estrogen and progesterone",
      explanationText: "Correct. The ovaries are central to female reproductive function.",
      isCorrect: true
    },
    {
      answerText: "Organs that filter blood and remove waste products",
      explanationText: "Incorrect. Blood filtration occurs in the kidneys, not the ovaries.",
      isCorrect: false
    },
    {
      answerText: "Glands that produce digestive enzymes",
      explanationText: "Incorrect. The pancreas produces digestive enzymes, not the ovaries.",
      isCorrect: false
    },
    {
      answerText: "Muscles that contract during childbirth",
      explanationText: "Incorrect. The uterus contracts during childbirth, not the ovaries.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is oogenesis?",
          options: [
    {
      answerText: "The production of eggs through meiosis, beginning before birth and resuming during puberty",
      explanationText: "Correct. Oogenesis is the process of egg development in females.",
      isCorrect: true
    },
    {
      answerText: "The production of sperm in males",
      explanationText: "Incorrect. The production of sperm is called spermatogenesis, not oogenesis.",
      isCorrect: false
    },
    {
      answerText: "The process of fertilizing an egg",
      explanationText: "Incorrect. Fertilization is the union of egg and sperm, not the production of eggs.",
      isCorrect: false
    },
    {
      answerText: "The secretion of estrogen by the ovaries",
      explanationText: "Incorrect. Estrogen secretion is a function of the ovaries, but it is not the same as oogenesis.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What occurs during ovulation?",
          options: [
    {
      answerText: "The release of a mature egg (secondary oocyte) from the ovary, typically around day 14 of the menstrual cycle",
      explanationText: "Correct. Ovulation is a key event in the menstrual cycle.",
      isCorrect: true
    },
    {
      answerText: "The fertilization of an egg by sperm",
      explanationText: "Incorrect. Fertilization occurs after ovulation if sperm are present.",
      isCorrect: false
    },
    {
      answerText: "The thickening of the uterine lining",
      explanationText: "Incorrect. The thickening of the uterine lining occurs during the proliferative phase, not ovulation.",
      isCorrect: false
    },
    {
      answerText: "The onset of menstruation",
      explanationText: "Incorrect. Menstruation occurs if the egg is not fertilized, usually after ovulation.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is the function of the endometrium?",
          options: [
    {
      answerText: "The inner lining of the uterus that thickens in preparation for pregnancy and is shed during menstruation if fertilization does not occur",
      explanationText: "Correct. The endometrium is essential for supporting a potential pregnancy.",
      isCorrect: true
    },
    {
      answerText: "The outer layer of the uterus that protects the organ",
      explanationText: "Incorrect. The outer layer of the uterus is the perimetrium, not the endometrium.",
      isCorrect: false
    },
    {
      answerText: "A muscle that contracts during childbirth",
      explanationText: "Incorrect. The myometrium, not the endometrium, is the muscular layer responsible for contractions during childbirth.",
      isCorrect: false
    },
    {
      answerText: "The tissue that produces eggs",
      explanationText: "Incorrect. Eggs are produced in the ovaries, not in the endometrium.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is the role of the cervix?",
          options: [
    {
      answerText: "The narrow lower portion of the uterus that opens into the vagina and dilates during childbirth",
      explanationText: "Correct. The cervix plays a crucial role in both protecting the uterus and allowing passage during childbirth.",
      isCorrect: true
    },
    {
      answerText: "The site where fertilization occurs",
      explanationText: "Incorrect. Fertilization typically occurs in the fallopian tubes, not in the cervix.",
      isCorrect: false
    },
    {
      answerText: "The organ that produces hormones for the menstrual cycle",
      explanationText: "Incorrect. Hormones for the menstrual cycle are primarily produced by the ovaries.",
      isCorrect: false
    },
    {
      answerText: "The structure that stores and releases eggs",
      explanationText: "Incorrect. Eggs are stored and released by the ovaries, not the cervix.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is the menstrual cycle?",
          options: [
    {
      answerText: "The monthly cycle of changes in the female reproductive system, including the development and release of an egg and preparation of the uterus for pregnancy",
      explanationText: "Correct. The menstrual cycle involves several phases that prepare the body for pregnancy.",
      isCorrect: true
    },
    {
      answerText: "The process of egg fertilization",
      explanationText: "Incorrect. Fertilization is a separate process that can occur during the menstrual cycle but is not the cycle itself.",
      isCorrect: false
    },
    {
      answerText: "The period of pregnancy",
      explanationText: "Incorrect. Pregnancy occurs after a successful menstrual cycle but is not part of the menstrual cycle itself.",
      isCorrect: false
    },
    {
      answerText: "The time during which a female is fertile",
      explanationText: "Incorrect. Fertility is related to the menstrual cycle, but the menstrual cycle encompasses more than just the fertile window.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What are the phases of the menstrual cycle?",
          options: [
    {
      answerText: "Follicular phase, ovulation, luteal phase, and menstruation",
      explanationText: "Correct. These are the four main phases of the menstrual cycle.",
      isCorrect: true
    },
    {
      answerText: "Proliferative phase, secretory phase, luteal phase, and ovulation",
      explanationText: "Incorrect. While the proliferative and secretory phases are part of the cycle, the correct sequence includes menstruation, not these phases.",
      isCorrect: false
    },
    {
      answerText: "Maturation phase, fertilization phase, implantation phase, and menstruation",
      explanationText: "Incorrect. Fertilization and implantation are separate events that may or may not occur during the cycle.",
      isCorrect: false
    },
    {
      answerText: "Hormonal phase, egg release phase, pregnancy phase, and menstruation",
      explanationText: "Incorrect. The menstrual cycle is divided into follicular, ovulation, luteal phases, and menstruation.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is the function of estrogen in the menstrual cycle?",
          options: [
    {
      answerText: "Promotes the growth of the endometrium and regulates the menstrual cycle",
      explanationText: "Correct. Estrogen is crucial for the preparation of the uterus and regulation of the cycle.",
      isCorrect: true
    },
    {
      answerText: "Triggers ovulation",
      explanationText: "Incorrect. While estrogen plays a role, the luteinizing hormone (LH) is the primary trigger for ovulation.",
      isCorrect: false
    },
    {
      answerText: "Causes the shedding of the uterine lining",
      explanationText: "Incorrect. Progesterone withdrawal causes the shedding of the uterine lining, not estrogen.",
      isCorrect: false
    },
    {
      answerText: "Prepares the breasts for lactation",
      explanationText: "Incorrect. While estrogen plays a role in breast development, lactation preparation is primarily driven by prolactin.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is the role of progesterone?",
          options: [
    {
      answerText: "Maintains the endometrium for potential pregnancy and inhibits uterine contractions",
      explanationText: "Correct. Progesterone is essential for sustaining the endometrium and preventing premature contractions.",
      isCorrect: true
    },
    {
      answerText: "Triggers ovulation",
      explanationText: "Incorrect. Ovulation is triggered by luteinizing hormone (LH), not progesterone.",
      isCorrect: false
    },
    {
      answerText: "Stimulates milk production",
      explanationText: "Incorrect. Milk production is stimulated by prolactin, not progesterone.",
      isCorrect: false
    },
    {
      answerText: "Increases the production of sperm",
      explanationText: "Incorrect. Progesterone is a female hormone and does not affect sperm production.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is fertilization?",
          options: [
    {
      answerText: "The union of a sperm cell and an egg cell, typically occurring in the fallopian tube",
      explanationText: "Correct. Fertilization marks the beginning of a new organism and typically occurs in the fallopian tube.",
      isCorrect: true
    },
    {
      answerText: "The release of an egg from the ovary",
      explanationText: "Incorrect. The release of an egg is called ovulation, not fertilization.",
      isCorrect: false
    },
    {
      answerText: "The implantation of a fertilized egg into the uterus",
      explanationText: "Incorrect. Implantation occurs after fertilization.",
      isCorrect: false
    },
    {
      answerText: "The process by which the uterus sheds its lining",
      explanationText: "Incorrect. Shedding of the uterine lining is menstruation, not fertilization.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is the role of the placenta during pregnancy?",
          options: [
    {
      answerText: "An organ that provides oxygen and nutrients to the developing fetus and removes waste products",
      explanationText: "Correct. The placenta is critical for the exchange of nutrients and waste between mother and fetus.",
      isCorrect: true
    },
    {
      answerText: "A muscle that contracts during childbirth",
      explanationText: "Incorrect. The placenta is not a muscle; the uterus contracts during childbirth.",
      isCorrect: false
    },
    {
      answerText: "The site of egg production",
      explanationText: "Incorrect. Eggs are produced in the ovaries, not in the placenta.",
      isCorrect: false
    },
    {
      answerText: "The structure that stores and releases hormones",
      explanationText: "Incorrect. While the placenta produces hormones, its primary function is nutrient exchange, not hormone storage.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What are the trimesters of pregnancy?",
          options: [
    {
      answerText: "First trimester (organogenesis), second trimester (growth and development), third trimester (final maturation and preparation for birth)",
      explanationText: "Correct. These are the three trimesters of pregnancy, each with distinct developmental milestones.",
      isCorrect: true
    },
    {
      answerText: "First trimester (implantation), second trimester (rapid brain development), third trimester (birth)",
      explanationText: "Incorrect. While implantation and brain development occur, they are not the defining features of the trimesters.",
      isCorrect: false
    },
    {
      answerText: "First trimester (ovulation), second trimester (fertilization), third trimester (labor and delivery)",
      explanationText: "Incorrect. Ovulation and fertilization occur before pregnancy, not within the trimesters.",
      isCorrect: false
    },
    {
      answerText: "First trimester (fertilization), second trimester (organ formation), third trimester (growth and maturation)",
      explanationText: "Incorrect. While close, the correct terms are organogenesis, growth and development, and final maturation.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is Polycystic Ovary Syndrome (PCOS)?",
          options: [
    {
      answerText: "A hormonal disorder causing enlarged ovaries with small cysts, leading to irregular menstrual cycles and infertility",
      explanationText: "Correct. PCOS is a common endocrine disorder affecting women of reproductive age.",
      isCorrect: true
    },
    {
      answerText: "An infection of the fallopian tubes",
      explanationText: "Incorrect. Infections of the fallopian tubes are called salpingitis, not PCOS.",
      isCorrect: false
    },
    {
      answerText: "A condition where endometrial tissue grows outside the uterus",
      explanationText: "Incorrect. This describes endometriosis, not PCOS.",
      isCorrect: false
    },
    {
      answerText: "A type of cancer affecting the ovaries",
      explanationText: "Incorrect. Ovarian cancer is different from PCOS, which is a hormonal disorder.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is endometriosis?",
          options: [
    {
      answerText: "A condition where endometrial tissue grows outside the uterus, causing pain and potential fertility issues",
      explanationText: "Correct. Endometriosis can cause significant pain and complications, including infertility.",
      isCorrect: true
    },
    {
      answerText: "An infection of the uterus",
      explanationText: "Incorrect. Endometriosis is not an infection; it's a condition involving misplaced tissue.",
      isCorrect: false
    },
    {
      answerText: "A form of ovarian cancer",
      explanationText: "Incorrect. Endometriosis is not cancerous, though it can be severe.",
      isCorrect: false
    },
    {
      answerText: "A condition characterized by the absence of menstrual periods",
      explanationText: "Incorrect. The absence of menstrual periods is called amenorrhea, not endometriosis.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is erectile dysfunction (ED)?",
          options: [
    {
      answerText: "The inability to achieve or maintain an erection sufficient for sexual intercourse",
      explanationText: "Correct. Erectile dysfunction can be caused by physical, psychological, or hormonal factors.",
      isCorrect: true
    },
    {
      answerText: "The inability to ejaculate",
      explanationText: "Incorrect. Inability to ejaculate is a different condition, not necessarily related to erectile dysfunction.",
      isCorrect: false
    },
    {
      answerText: "A condition where sperm production is low",
      explanationText: "Incorrect. Low sperm production is a different issue, known as oligospermia, not ED.",
      isCorrect: false
    },
    {
      answerText: "The inability to conceive a child",
      explanationText: "Incorrect. The inability to conceive is referred to as infertility, not erectile dysfunction.",
      isCorrect: false
    }
  ]},
        {
          category: "Reproductive System",
          question: "What is infertility?",
          options: [
    {
      answerText: "The inability to conceive after one year of unprotected intercourse, which can be due to various factors affecting either the male or female reproductive systems",
      explanationText: "Correct. Infertility can be due to issues in either partner and may require medical intervention.",
      isCorrect: true
    },
    {
      answerText: "The absence of menstruation in women",
      explanationText: "Incorrect. The absence of menstruation is called amenorrhea, not infertility.",
      isCorrect: false
    },
    {
      answerText: "A condition characterized by painful menstruation",
      explanationText: "Incorrect. Painful menstruation is known as dysmenorrhea, not infertility.",
      isCorrect: false
    },
    {
      answerText: "The presence of cysts in the ovaries",
      explanationText: "Incorrect. Cysts in the ovaries are associated with PCOS, which can contribute to infertility but is not synonymous with it.",
      isCorrect: false
    }
  ]}]},
    {
      categoryName: "Nervous System",
      questions: [
        {
          category: "Nervous System",
          question: "What is the central nervous system (CNS)?",
          options: [
    {
      answerText: "The brain and spinal cord, responsible for processing and transmitting information throughout the body",
      explanationText: "Correct. The CNS is the control center of the body, processing and sending out signals.",
      isCorrect: true
    },
    {
      answerText: "A network of nerves that connect the brain to the rest of the body",
      explanationText: "Incorrect. This describes the peripheral nervous system (PNS), not the CNS.",
      isCorrect: false
    },
    {
      answerText: "A group of glands that secrete hormones into the bloodstream",
      explanationText: "Incorrect. This describes the endocrine system.",
      isCorrect: false
    },
    {
      answerText: "The digestive tract, responsible for breaking down food and absorbing nutrients",
      explanationText: "Incorrect. This describes the digestive system, not the nervous system.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question: "What is the peripheral nervous system (PNS)?",
          options: [
    {
      answerText: "The part of the nervous system outside the CNS, consisting of the somatic nervous system (voluntary control) and autonomic nervous system (involuntary control)",
      explanationText: "Correct. The PNS connects the CNS to the rest of the body and controls both voluntary and involuntary actions.",
      isCorrect: true
    },
    {
      answerText: "The control center of the body, processing and sending out signals",
      explanationText: "Incorrect. This describes the central nervous system (CNS).",
      isCorrect: false
    },
    {
      answerText: "A system that regulates hormone secretion",
      explanationText: "Incorrect. Hormone secretion is regulated by the endocrine system, not the PNS.",
      isCorrect: false
    },
    {
      answerText: "A network of muscles responsible for movement",
      explanationText: "Incorrect. While the PNS does control muscles, it is not the muscles themselves.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question: "What is the role of neurons in the nervous system?",
          options: [
    {
      answerText: "Neurons are the basic building blocks of the nervous system, responsible for transmitting information throughout the body",
      explanationText: "Correct. Neurons are specialized cells that communicate through electrical and chemical signals.",
      isCorrect: true
    },
    {
      answerText: "Neurons secrete hormones into the bloodstream",
      explanationText: "Incorrect. Hormones are secreted by endocrine glands, not neurons.",
      isCorrect: false
    },
    {
      answerText: "Neurons transport oxygen and nutrients to cells",
      explanationText: "Incorrect. This function is carried out by the blood in the cardiovascular system.",
      isCorrect: false
    },
    {
      answerText: "Neurons filter waste products from the blood",
      explanationText: "Incorrect. This is the function of the kidneys in the urinary system.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question: "What are the main parts of a neuron?",
          options: [
    {
      answerText: "Dendrites (receive signals), cell body (soma), axon (transmits signals), and synapse (gap between neurons where communication occurs)",
      explanationText: "Correct. These are the key components of a neuron, each playing a vital role in neural communication.",
      isCorrect: true
    },
    {
      answerText: "Heart, lungs, and brain",
      explanationText: "Incorrect. These are major organs, but not parts of a neuron.",
      isCorrect: false
    },
    {
      answerText: "Arteries, veins, and capillaries",
      explanationText: "Incorrect. These are components of the circulatory system, not parts of a neuron.",
      isCorrect: false
    },
    {
      answerText: "Bones, muscles, and joints",
      explanationText: "Incorrect. These are components of the skeletal and muscular systems, not parts of a neuron.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question: "What is the function of neurotransmitters?",
          options: [
    {
      answerText: "Chemicals that transmit signals across the synapse from one neuron to another",
      explanationText: "Correct. Neurotransmitters are crucial for communication between neurons in the nervous system.",
      isCorrect: true
    },
    {
      answerText: "Hormones that regulate metabolism",
      explanationText: "Incorrect. Hormones regulate various body functions, but neurotransmitters specifically transmit signals between neurons.",
      isCorrect: false
    },
    {
      answerText: "Proteins that carry oxygen in the blood",
      explanationText: "Incorrect. Hemoglobin in red blood cells carries oxygen, not neurotransmitters.",
      isCorrect: false
    },
    {
      answerText: "Cells that produce antibodies",
      explanationText: "Incorrect. Antibodies are produced by B cells in the immune system, not neurotransmitters.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question: "What is the autonomic nervous system (ANS)?",
          options: [
    {
      answerText: "The part of the PNS that controls involuntary functions such as heart rate, digestion, and respiration",
      explanationText: "Correct. The ANS regulates essential involuntary functions that keep the body running smoothly.",
      isCorrect: true
    },
    {
      answerText: "The part of the CNS that processes voluntary movements",
      explanationText: "Incorrect. Voluntary movements are controlled by the somatic nervous system, not the ANS.",
      isCorrect: false
    },
    {
      answerText: "A group of glands that produce hormones",
      explanationText: "Incorrect. Glands produce hormones as part of the endocrine system, not the nervous system.",
      isCorrect: false
    },
    {
      answerText: "The system responsible for reflex actions",
      explanationText: "Incorrect. Reflex actions involve both the CNS and PNS, but the ANS specifically controls involuntary functions.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question:
            "What is the difference between the sympathetic and parasympathetic nervous systems?",
          options: [
    {
      answerText: "The sympathetic nervous system prepares the body for fight-or-flight responses, while the parasympathetic nervous system promotes rest-and-digest functions",
      explanationText: "Correct. These two divisions of the ANS work in opposition to maintain balance in the body.",
      isCorrect: true
    },
    {
      answerText: "The sympathetic nervous system controls voluntary actions, while the parasympathetic nervous system controls involuntary actions",
      explanationText: "Incorrect. Both systems control involuntary actions, but they have different roles.",
      isCorrect: false
    },
    {
      answerText: "The sympathetic nervous system secretes hormones, while the parasympathetic nervous system secretes neurotransmitters",
      explanationText: "Incorrect. Both systems use neurotransmitters for communication, not hormones.",
      isCorrect: false
    },
    {
      answerText: "The sympathetic nervous system is part of the CNS, while the parasympathetic nervous system is part of the PNS",
      explanationText: "Incorrect. Both systems are part of the autonomic nervous system, which is a division of the PNS.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question: "What is the role of the brainstem?",
          options: [
    {
      answerText: "Controls basic life functions such as breathing, heartbeat, and blood pressure",
      explanationText: "Correct. The brainstem is critical for maintaining essential life functions.",
      isCorrect: true
    },
    {
      answerText: "Processes sensory information from the environment",
      explanationText: "Incorrect. The brainstem does play a role in processing sensory information, but this is primarily managed by the cerebral cortex.",
      isCorrect: false
    },
    {
      answerText: "Regulates voluntary muscle movements",
      explanationText: "Incorrect. Voluntary muscle movements are controlled by the motor cortex in the brain, not the brainstem.",
      isCorrect: false
    },
    {
      answerText: "Stores memories and emotions",
      explanationText: "Incorrect. Memories and emotions are primarily stored and processed in the hippocampus and limbic system.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question: "What is the function of the cerebellum?",
          options: [
    {
      answerText: "Coordinates voluntary movements, balance, and posture",
      explanationText: "Correct. The cerebellum plays a key role in fine-tuning motor activities and maintaining balance.",
      isCorrect: true
    },
    {
      answerText: "Controls hormone secretion",
      explanationText: "Incorrect. Hormone secretion is controlled by the endocrine system, not the cerebellum.",
      isCorrect: false
    },
    {
      answerText: "Processes visual information",
      explanationText: "Incorrect. Visual information is processed primarily by the occipital lobe of the brain, not the cerebellum.",
      isCorrect: false
    },
    {
      answerText: "Regulates blood pressure and heart rate",
      explanationText: "Incorrect. These functions are primarily managed by the brainstem and autonomic nervous system.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question: "What is the role of the hypothalamus?",
          options: [
    {
      answerText: "Regulates basic bodily functions like hunger, thirst, temperature, and the release of hormones from the pituitary gland",
      explanationText: "Correct. The hypothalamus is crucial for maintaining homeostasis in the body.",
      isCorrect: true
    },
    {
      answerText: "Processes sensory information and relays it to the cerebral cortex",
      explanationText: "Incorrect. This is the function of the thalamus, not the hypothalamus.",
      isCorrect: false
    },
    {
      answerText: "Controls muscle movements",
      explanationText: "Incorrect. Muscle movements are controlled by the motor cortex, not the hypothalamus.",
      isCorrect: false
    },
    {
      answerText: "Filters blood and produces urine",
      explanationText: "Incorrect. This is the function of the kidneys, not the hypothalamus.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question: "What is the function of the thalamus?",
          options: [
    {
      answerText: "Acts as the brain's relay station, directing sensory information to the appropriate areas of the cerebral cortex",
      explanationText: "Correct. The thalamus is essential for processing and relaying sensory input to the correct regions of the brain.",
      isCorrect: true
    },
    {
      answerText: "Regulates emotions and memory",
      explanationText: "Incorrect. Emotions and memory are primarily regulated by the limbic system, including the amygdala and hippocampus.",
      isCorrect: false
    },
    {
      answerText: "Controls muscle coordination and balance",
      explanationText: "Incorrect. Muscle coordination and balance are controlled by the cerebellum, not the thalamus.",
      isCorrect: false
    },
    {
      answerText: "Produces and secretes hormones",
      explanationText: "Incorrect. Hormone production and secretion are functions of the hypothalamus and endocrine glands, not the thalamus.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question: "What is the role of the cerebral cortex?",
          options: [
    {
      answerText: "Responsible for higher-level functions like thinking, planning, and problem-solving",
      explanationText: "Correct. The cerebral cortex is involved in complex cognitive processes.",
      isCorrect: true
    },
    {
      answerText: "Regulates heart rate and breathing",
      explanationText: "Incorrect. Heart rate and breathing are regulated by the brainstem and autonomic nervous system.",
      isCorrect: false
    },
    {
      answerText: "Controls reflex actions",
      explanationText: "Incorrect. Reflex actions are typically controlled by the spinal cord.",
      isCorrect: false
    },
    {
      answerText: "Processes emotions and drives",
      explanationText: "Incorrect. Emotions and drives are processed by the limbic system, not the cerebral cortex.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question: "What is the limbic system?",
          options: [
    {
      answerText: "A group of interconnected structures in the brain that are involved in emotion, memory, and motivation",
      explanationText: "Correct. The limbic system includes structures such as the amygdala, hippocampus, and hypothalamus.",
      isCorrect: true
    },
    {
      answerText: "The outer layer of the brain involved in complex cognitive functions",
      explanationText: "Incorrect. This describes the cerebral cortex, not the limbic system.",
      isCorrect: false
    },
    {
      answerText: "A network of nerves that controls voluntary muscle movements",
      explanationText: "Incorrect. Voluntary muscle movements are controlled by the motor cortex and somatic nervous system, not the limbic system.",
      isCorrect: false
    },
    {
      answerText: "A series of glands that produce hormones",
      explanationText: "Incorrect. Glands that produce hormones are part of the endocrine system, not the limbic system.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question: "What is the function of the hippocampus?",
          options: [
    {
      answerText: "Involved in the formation and retrieval of long-term memories",
      explanationText: "Correct. The hippocampus is crucial for converting short-term memories into long-term memories.",
      isCorrect: true
    },
    {
      answerText: "Regulates breathing and heart rate",
      explanationText: "Incorrect. Breathing and heart rate are regulated by the brainstem, not the hippocampus.",
      isCorrect: false
    },
    {
      answerText: "Controls voluntary muscle movements",
      explanationText: "Incorrect. Voluntary muscle movements are controlled by the motor cortex, not the hippocampus.",
      isCorrect: false
    },
    {
      answerText: "Processes visual information",
      explanationText: "Incorrect. Visual information is processed primarily by the occipital lobe of the cerebral cortex.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question: "What is the amygdala responsible for?",
          options: [
    {
      answerText: "Processing emotions, especially fear and aggression",
      explanationText: "Correct. The amygdala plays a key role in emotional processing, particularly in responses related to fear and aggression.",
      isCorrect: true
    },
    {
      answerText: "Controlling voluntary muscle movements",
      explanationText: "Incorrect. Voluntary muscle movements are controlled by the motor cortex, not the amygdala.",
      isCorrect: false
    },
    {
      answerText: "Regulating blood pressure and heart rate",
      explanationText: "Incorrect. These functions are managed by the brainstem and autonomic nervous system.",
      isCorrect: false
    },
    {
      answerText: "Storing long-term memories",
      explanationText: "Incorrect. Long-term memory storage is primarily managed by the hippocampus, not the amygdala.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question: "What is the corpus callosum?",
          options: [
    {
      answerText: "A thick band of nerve fibers that connects the left and right hemispheres of the brain, allowing communication between them",
      explanationText: "Correct. The corpus callosum is essential for interhemispheric communication.",
      isCorrect: true
    },
    {
      answerText: "A structure that controls balance and coordination",
      explanationText: "Incorrect. Balance and coordination are primarily controlled by the cerebellum, not the corpus callosum.",
      isCorrect: false
    },
    {
      answerText: "A region of the brain involved in processing visual information",
      explanationText: "Incorrect. Visual processing occurs in the occipital lobe, not the corpus callosum.",
      isCorrect: false
    },
    {
      answerText: "A gland that secretes hormones",
      explanationText: "Incorrect. The corpus callosum is a bundle of nerve fibers, not a gland.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question:
            "What is the difference between white matter and gray matter in the brain?",
          options: [
    {
      answerText: "White matter consists of myelinated axons, while gray matter consists of neuron cell bodies, dendrites, and unmyelinated axons",
      explanationText: "Correct. White matter is involved in communication between different brain regions, and gray matter processes information.",
      isCorrect: true
    },
    {
      answerText: "White matter is found in the brainstem, while gray matter is found in the cerebellum",
      explanationText: "Incorrect. Both white and gray matter are found throughout the brain, not limited to specific areas.",
      isCorrect: false
    },
    {
      answerText: "White matter is involved in processing emotions, while gray matter controls muscle movements",
      explanationText: "Incorrect. Processing emotions involves the limbic system, and muscle control involves the motor cortex. Both white and gray matter are involved in various brain functions.",
      isCorrect: false
    },
    {
      answerText: "White matter is responsible for sensory perception, while gray matter is responsible for memory storage",
      explanationText: "Incorrect. Sensory perception and memory storage involve both white and gray matter in different capacities.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question: "What is neuroplasticity?",
          options: [
    {
      answerText: "The brain's ability to reorganize and adapt by forming new neural connections throughout life",
      explanationText: "Correct. Neuroplasticity allows the brain to recover from injury, adapt to new experiences, and learn new information.",
      isCorrect: true
    },
    {
      answerText: "The process by which neurons die and are replaced by new ones",
      explanationText: "Incorrect. Neuron death and replacement are not related to neuroplasticity; instead, neuroplasticity involves changing existing connections.",
      isCorrect: false
    },
    {
      answerText: "A condition where the brain hardens and loses flexibility",
      explanationText: "Incorrect. Neuroplasticity actually refers to the brain's flexibility and adaptability, not hardening.",
      isCorrect: false
    },
    {
      answerText: "The tendency of neurons to only fire in response to specific stimuli",
      explanationText: "Incorrect. While neurons do respond to specific stimuli, neuroplasticity refers to the brain's ability to change and adapt.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question:
            "What is the role of the autonomic nervous system in controlling heart rate?",
          options: [
    {
      answerText: "The autonomic nervous system regulates heart rate by balancing the actions of the sympathetic and parasympathetic nervous systems",
      explanationText: "Correct. The sympathetic nervous system increases heart rate, while the parasympathetic nervous system decreases it.",
      isCorrect: true
    },
    {
      answerText: "The autonomic nervous system directly pumps blood through the heart",
      explanationText: "Incorrect. The heart pumps blood through its muscular contractions, not through the actions of the autonomic nervous system.",
      isCorrect: false
    },
    {
      answerText: "The autonomic nervous system only decreases heart rate during sleep",
      explanationText: "Incorrect. The autonomic nervous system can adjust heart rate in various situations, not just during sleep.",
      isCorrect: false
    },
    {
      answerText: "The autonomic nervous system controls voluntary muscle movements in the heart",
      explanationText: "Incorrect. The heart muscle operates involuntarily, controlled by the autonomic nervous system, not voluntary muscle control.",
      isCorrect: false
    }
  ]},
        {
          category: "Nervous System",
          question: "What is the role of the somatic nervous system?",
          options: [
    {
      answerText: "The somatic nervous system controls voluntary movements of skeletal muscles",
      explanationText: "Correct. The somatic nervous system is responsible for voluntary control of body movements through skeletal muscles.",
      isCorrect: true
    },
    {
      answerText: "The somatic nervous system regulates involuntary functions like heart rate and digestion",
      explanationText: "Incorrect. Involuntary functions are regulated by the autonomic nervous system, not the somatic nervous system.",
      isCorrect: false
    },
    {
      answerText: "The somatic nervous system produces hormones that control body functions",
      explanationText: "Incorrect. Hormone production is the role of the endocrine system, not the somatic nervous system.",
      isCorrect: false
    },
    {
      answerText: "The somatic nervous system controls the production of red blood cells",
      explanationText: "Incorrect. Red blood cell production occurs in the bone marrow, not under the control of the somatic nervous system.",
      isCorrect: false
    }
  ]}]}]};

export default anatomyAndPhysiologyII;
